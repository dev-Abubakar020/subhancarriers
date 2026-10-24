import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calculator, 
  Truck, 
  MapPin, 
  Calendar, 
  Package, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight,
  PhoneCall,
  MessageCircle
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';
import PlacesAutocomplete from '../components/ui/PlacesAutocomplete';
import { sendEmail } from '../utils/sendEmail';

export default function Quote() {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    service: 'road-freight',
    origin: '',
    destination: '',
    cargoType: 'Household Shifting / General Goods',
    vehicleNeeded: '15ft Mazda Truck with Tailgate',
    weightKg: '2500',
    itemCount: '30 Cartons & Furniture',
    pickupDate: '',
    packingNeeded: 'Yes',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [sendError, setSendError] = useState(null);

  // Read URL params if user arrived via "Book Road Freight" or equipment buttons
  useEffect(() => {
    const sParam = searchParams.get('service');
    const eqParam = searchParams.get('equipment');
    if (sParam) {
      setFormData(prev => ({ ...prev, service: sParam }));
    }
    if (eqParam) {
      setFormData(prev => ({ ...prev, vehicleNeeded: eqParam }));
    }
    // Set default pickup date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, pickupDate: dateStr }));
  }, [searchParams]);

  // Live PKR Estimate Calculator
  useEffect(() => {
    const weight = parseFloat(formData.weightKg) || 1500;
    let baseRate = 18000;

    if (formData.service === 'road-freight') {
      baseRate = 22000 + (weight * 2.8);
    } else if (formData.service === 'express-delivery') {
      baseRate = 28000 + (weight * 3.5);
    } else if (formData.service === 'heavy-haulage') {
      baseRate = 55000 + (weight * 4.2);
    } else if (formData.service === 'warehousing') {
      baseRate = 15000 + (weight * 1.5);
    }

    if (formData.packingNeeded === 'Yes') {
      baseRate += 6500;
    }

    const minEstimate = Math.round(baseRate * 0.9);
    const maxEstimate = Math.round(baseRate * 1.15);
    setEstimatedPrice({ min: minEstimate, max: maxEstimate });
  }, [formData.service, formData.weightKg, formData.packingNeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Handler for PlacesAutocomplete (receives name + value directly)
  const handlePlaceChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.origin.trim()) newErrors.origin = 'Origin city (e.g. Lahore, Faisalabad) is required';
    if (formData.service !== 'warehousing' && !formData.destination.trim()) {
      newErrors.destination = 'Destination city (e.g. Karachi, Islamabad) is required';
    }
    if (!formData.fullName.trim()) newErrors.fullName = 'Full contact name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Active phone or WhatsApp number is required';
    if (!formData.pickupDate) newErrors.pickupDate = 'Target moving date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSendError(null);

    const ref = 'SC-QT-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteReference(ref);

    const result = await sendEmail('quote', {
      ...formData,
      quoteReference: ref,
      estimatedMin: estimatedPrice?.min ?? 0,
      estimatedMax: estimatedPrice?.max ?? 0,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setSendError('Could not send your quote request. Please WhatsApp or call us at (+92) 300-6539785.');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Subhan Carriers, I want a rate quote.\nReference: ${quoteReference || 'New Request'}\nService: ${formData.service}\nFrom: ${formData.origin}\nTo: ${formData.destination}\nVehicle: ${formData.vehicleNeeded}\nDate: ${formData.pickupDate}\nName: ${formData.fullName}\nPhone: ${formData.phone}`
  );

  const breadcrumbs = [{ name: 'Get a Quote', path: '/quote' }];

  return (
    <>
      <SEO
        title="Get a Moving & Freight Rate Quote - Subhan Carriers Pakistan"
        description="Calculate instant moving and goods transport rates in Pakistan for Lahore, Karachi, Islamabad, Faisalabad, and nationwide routes. Zero hidden fees."
        canonical="/quote"
      />

      <PageHeader
        badge="Instant Freight & Shifting Estimate"
        title="Get a Competitive Moving & Transport Quote"
        subtitle="Complete our quick details form to calculate estimated lane rates in PKR and receive confirmed vehicle availability within minutes."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 md:py-28 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-soft-lg text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 inline-block mb-3">
                Quote Request Registered
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-heading dark:text-white mb-2">
                Thank You, {formData.fullName}!
              </h2>

              <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-6">
                Your moving & transport inquiry has been routed to our central dispatch desk in Jaranwala/Faisalabad. A coordinator will call or message you on WhatsApp to confirm truck arrangement and final pricing.
              </p>

              <div className="bg-surface-light dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8 inline-block text-left w-full">
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Quote Reference</span>
                    <span className="font-mono font-bold text-secondary text-base">{quoteReference}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Estimated PKR Range</span>
                    <span className="font-bold text-accent text-base">Rs. {estimatedPrice?.min.toLocaleString()} - {estimatedPrice?.max.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Route</span>
                    <span className="font-semibold text-heading dark:text-white truncate block">{formData.origin} &rarr; {formData.destination || 'Storage'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Moving Date</span>
                    <span className="font-semibold text-heading dark:text-white block">{formData.pickupDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/923006539785?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-glow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp Instantly</span>
                </a>

                <Button
                  onClick={() => { setIsSubmitted(false); }}
                  variant="outline"
                  size="md"
                  className="dark:border-slate-700 dark:text-slate-200"
                >
                  Submit Another Quote
                </Button>
              </div>
            </div>
          ) : (
            /* Main Interactive Quote Form & Live Estimator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Form (8 Cols) */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-soft">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* API Error Banner */}
                  {sendError && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-start gap-3">
                      <span className="text-lg shrink-0">⚠️</span>
                      <span>{sendError}</span>
                    </div>
                  )}

                  {/* Step 1: Service Selection */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-secondary" />
                      <span>1. Select Required Transport or Moving Service</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'road-freight', name: 'Goods Transport & Freight', desc: 'Mazda 15ft, Shehzore & Inter-city container trucking' },
                        { id: 'warehousing', name: 'Household Shifting & Packing', desc: 'Complete house moving with expert packing & assembly' },
                        { id: 'express-delivery', name: 'Express Same-Day Delivery', desc: 'Direct fast transit between adjoining Pakistani cities' },
                        { id: 'heavy-haulage', name: 'Commercial & Heavy Cargo', desc: 'Office relocation, mill machinery & CPEC route transport' }
                      ].map((svc) => (
                        <label
                          key={svc.id}
                          className={`
                            p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between
                            ${formData.service === svc.id 
                              ? 'border-secondary bg-secondary/5 dark:bg-secondary/15 ring-2 ring-secondary/20' 
                              : 'border-slate-200 dark:border-slate-800 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'}
                          `}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-sm text-heading dark:text-white">{svc.name}</span>
                            <input
                              type="radio"
                              name="service"
                              value={svc.id}
                              checked={formData.service === svc.id}
                              onChange={handleChange}
                              className="text-secondary focus:ring-secondary h-4 w-4"
                            />
                          </div>
                          <span className="text-xs text-body dark:text-slate-400 leading-relaxed">{svc.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Route & Schedule */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span>2. Route Origin & Destination Across Pakistan</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="origin" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Pickup City & Area *
                        </label>
                        <PlacesAutocomplete
                          id="origin"
                          name="origin"
                          value={formData.origin}
                          onChange={handlePlaceChange}
                          placeholder="e.g. Lahore, Faisalabad, Multan..."
                          error={!!errors.origin}
                        />
                        {errors.origin && <p className="text-xs text-red-500 mt-1">{errors.origin}</p>}
                      </div>

                      <div>
                        <label htmlFor="destination" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Destination City & Area {formData.service === 'warehousing' ? '(Optional)' : '*'}
                        </label>
                        <PlacesAutocomplete
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handlePlaceChange}
                          placeholder="e.g. Karachi, Islamabad, Rawalpindi..."
                          error={!!errors.destination}
                        />
                        {errors.destination && <p className="text-xs text-red-500 mt-1">{errors.destination}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Target Moving / Dispatch Date *
                        </label>
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.pickupDate ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.pickupDate && <p className="text-xs text-red-500 mt-1">{errors.pickupDate}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Vehicle Preferred
                        </label>
                        <select
                          name="vehicleNeeded"
                          value={formData.vehicleNeeded}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 text-heading dark:text-white"
                        >
                          <option value="15ft Mazda Truck with Tailgate">15ft Mazda Truck with Hydraulic Tailgate</option>
                          <option value="10ft Covered with Tailgate">10ft Covered Shehzore with Tailgate</option>
                          <option value="10ft Open Truck">10ft Open Truck</option>
                          <option value="15ft Truck without Tailgate">15ft Heavy Truck without Tailgate</option>
                          <option value="24ft Container Truck">24ft Long Chassis Truck with Tailgate</option>
                          <option value="40ft Container Trailer">40ft Multi-Axle CPEC Trailer</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Goods & Packing Details */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-secondary" />
                      <span>3. Goods & Packing Requirements</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Approx. Weight (kg)
                        </label>
                        <input
                          type="number"
                          name="weightKg"
                          value={formData.weightKg}
                          onChange={handleChange}
                          placeholder="e.g. 2500"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Full Packing Service Needed?
                        </label>
                        <select
                          name="packingNeeded"
                          value={formData.packingNeeded}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 text-heading dark:text-white"
                        >
                          <option value="Yes">Yes - Full Packing (Bubble wrap, cartons & assembly)</option>
                          <option value="No">No - Transport Only (Self-Packed)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Item Description
                        </label>
                        <input
                          type="text"
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleChange}
                          placeholder="e.g. 3-Bed House Furniture or Textile rolls"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      <span>4. Your Contact Information</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Muhammad Usman"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.fullName ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0300-6539785"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.phone ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="usman@gmail.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Company Name (If Commercial Cargo)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Textile / Trading Co."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Special Instructions or Floor Details
                        </label>
                        <textarea
                          rows={3}
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="e.g. Ground floor to 2nd floor, large double door fridge, delicate crockery boxes requiring bubble wrap..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-highlight" />
                      <span>Safe Delivery Guarantee &bull; Online & Cash on Delivery</span>
                    </span>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={ArrowRight}
                    >
                      Calculate & Request Quote
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Freight Rate Estimation Card (4 Cols) */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft-lg transition-colors">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Calculator className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-heading dark:text-white">
                        Estimated Moving Rate
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Transparent rates in Pakistani Rupees (PKR)
                      </p>
                    </div>
                  </div>

                  {/* Price Estimate */}
                  <div className="p-4 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-6 text-center">
                    <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      Estimated Freight Bracket
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-primary dark:text-white">
                      Rs. {estimatedPrice?.min.toLocaleString()} - {estimatedPrice?.max.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Includes loading assistance, vehicle & fuel (No hidden fees)
                    </span>
                  </div>

                  {/* Summary Checklist */}
                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Vehicle:</span>
                      <span className="font-bold text-heading dark:text-white truncate max-w-[170px] text-right">{formData.vehicleNeeded}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Packing:</span>
                      <span className="font-bold text-heading dark:text-white">{formData.packingNeeded === 'Yes' ? 'Full Packaging Plan' : 'Transport Only'}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Payment:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">Hand Cash / Online Transfer</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Assistance:</span>
                      <span className="font-bold text-secondary">Skilled Movers & Tailgate</span>
                    </div>
                  </div>

                  {/* WhatsApp Direct Booking Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center space-y-2">
                    <a
                      href="https://wa.me/923006539785"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-soft"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp: +92 300 6539785</span>
                    </a>

                    <a
                      href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-white hover:bg-primary-700 text-xs font-semibold transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-accent" />
                      <span>Call Helpline: {siteConfig.contact.phonePrimary}</span>
                    </a>
                  </div>
                </div>

                {/* Trust guarantee card */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white p-6 rounded-3xl border border-white/10 shadow-soft">
                  <h4 className="font-heading font-bold text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-highlight" />
                    <span>The Subhan Carriers Promise</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We heartily understand and value the emotions of our customers. All of your goods are guaranteed to be safely delivered to your new doorstep without damage or hidden expenses.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need an Immediate Dispatch Today?"
        subtitle="Call our 24/7 hotline directly or chat with coordinator Ali Akbar on WhatsApp at +923006539785."
      />
    </>
  );
}
