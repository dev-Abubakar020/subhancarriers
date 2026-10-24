import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Loader2, X } from 'lucide-react';

/**
 * PlacesAutocomplete - Google Places Autocomplete restricted to Pakistan
 * Requires Google Maps JS API with "places" library loaded in index.html
 */
export default function PlacesAutocomplete({
  name,
  value,
  onChange,       // (name, cityString) => void
  placeholder = 'e.g. Lahore, Karachi, Islamabad',
  error = false,
  className = '',
  id,
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  // Wait for Google Maps to be available (it loads async)
  useEffect(() => {
    if (window.google?.maps?.places) {
      setReady(true);
    } else {
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          setReady(true);
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  // Init autocomplete once the API is ready and input is mounted
  useEffect(() => {
    if (!ready || !inputRef.current) return;
    if (autocompleteRef.current) return; // already initialized

    setLoading(true);

    try {
      const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: 'pk' },   // Pakistan only
        types: ['(cities)'],                          // cities & sub-regions
        fields: ['address_components', 'formatted_address', 'name'],
      });

      ac.addListener('place_changed', () => {
        const place = ac.getPlace();
        if (!place || !place.name) return;

        // Build a clean "City, Province" string
        const comps = place.address_components || [];
        const locality =
          comps.find(c => c.types.includes('locality'))?.long_name ||
          comps.find(c => c.types.includes('sublocality_level_1'))?.long_name ||
          place.name;
        const province =
          comps.find(c => c.types.includes('administrative_area_level_1'))?.long_name || '';

        const cityString = province ? `${locality}, ${province}` : locality;
        onChange(name, cityString);
      });

      autocompleteRef.current = ac;
    } catch (e) {
      console.warn('PlacesAutocomplete init error:', e);
    }

    setLoading(false);
  }, [ready, name, onChange]);

  // Keep input value in sync with parent form state (for controlled behaviour)
  const handleInputChange = (e) => {
    onChange(name, e.target.value);
  };

  const handleClear = () => {
    onChange(name, '');
    inputRef.current?.focus();
  };

  const baseClass = `
    w-full pl-9 pr-8 py-2.5 rounded-xl border text-sm 
    focus:outline-none focus:ring-2 focus:ring-secondary 
    bg-white dark:bg-slate-800 dark:border-slate-700 
    text-heading dark:text-white placeholder-slate-400
    transition-colors duration-150
  `;

  const borderClass = error
    ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20'
    : 'border-slate-200';

  return (
    <div className={`relative ${className}`}>
      {/* Pin icon */}
      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
        {loading ? (
          <Loader2 className="w-4 h-4 text-secondary animate-spin" />
        ) : (
          <MapPin className="w-4 h-4 text-secondary" />
        )}
      </span>

      <input
        ref={inputRef}
        id={id || name}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`${baseClass} ${borderClass}`}
      />

      {/* Clear button */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Clear"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
