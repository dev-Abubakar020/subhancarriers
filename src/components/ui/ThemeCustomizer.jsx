import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeCustomizer({ compact = false }) {
  const { theme, toggleTheme, isDark, accentId, setAccentColor, colorPalettes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center gap-1.5" ref={dropdownRef}>
      {/* Light / Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary relative group"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 animate-spin-slow transition-transform group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600 transition-transform group-hover:-rotate-12" />
        )}
      </button>

      {/* Color Palette Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize Brand Color Theme"
        title="Customize Brand Colors"
        className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary relative group"
      >
        <Palette className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
        {/* Active color dot */}
        <span 
          className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      </button>

      {/* Palette Selection Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-lg z-50 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-heading dark:text-white">
                Brand Color Palette
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              5 Themes
            </span>
          </div>

          <div className="space-y-2">
            {colorPalettes.map((palette) => {
              const isSelected = accentId === palette.id;
              return (
                <button
                  key={palette.id}
                  onClick={() => {
                    setAccentColor(palette.id);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all
                    ${isSelected 
                      ? 'bg-slate-100 dark:bg-slate-800 ring-2 ring-secondary/50 font-bold' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Color Swatch Circle */}
                    <div 
                      className="w-6 h-6 rounded-full shadow-sm flex items-center justify-center shrink-0 border border-black/10"
                      style={{ backgroundColor: palette.accent }}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>

                    <div>
                      <div className="text-xs font-heading font-semibold text-heading dark:text-white leading-none">
                        {palette.name}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 leading-none">
                        {palette.badge}
                      </div>
                    </div>
                  </div>

                  {/* Dual color dot preview */}
                  <div className="flex items-center gap-1">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: palette.accent }} 
                    />
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: palette.secondary }} 
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>Mode: {isDark ? 'Dark Mode' : 'Light Mode'}</span>
            <button
              onClick={toggleTheme}
              className="text-accent font-semibold hover:underline"
            >
              Toggle Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
