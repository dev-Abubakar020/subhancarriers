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
  DollarSign,
  PhoneCall
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';

export default function Quote() {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    service: 'road-freight',
    origin: '',
    destination: '',
    cargoType: 'General Dry Freight',
    weightLbs: '18000',
    pallets: '14',
    pickupDate: '',
    temperatureNeeded: 'No',
    hazardous: 'No',
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

  // Read URL params if user arrived via "Book Road Freight" or equipment buttons
  useEffect(() => {
    const sParam = searchParams.get('service');
    const eqParam = searchParams.get('equipment');
    if (sParam) {
      setFormData(prev => ({ ...prev, service: sParam }));
    }
    if (eqParam) {
      setFormData(prev => ({ ...prev, cargoType: `Specialized: ${eqParam}` }));
    }
    // Set default pickup date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, pickupDate: dateStr }));
  }, [searchParams]);

  // Live Estimate Calculator
  useEffect(() => {
    const weight = parseFloat(formData.weightLbs) || 10000;
    const pallets = parseInt(formData.pallets) || 10;
    let baseRate = 1200;

    if (formData.service === 'road-freight') {
      baseRate = 1450 + (pallets * 45) + (weight * 0.045);
    } else if (formData.service === 'express-delivery') {
      baseRate = 2200 + (weight * 0.08);
    } else if (formData.service === 'heavy-haulage') {
      baseRate = 4500 + (weight * 0.12);
    } else if (formData.service === 'warehousing') {
      baseRate = 650 + (pallets * 22);
    }

    if (formData.temperatureNeeded === 'Yes') {
      baseRate += 350;
    }

    const minEstimate = Math.round(baseRate * 0.92);
    const maxEstimate = Math.round(baseRate * 1.15);
    setEstimatedPrice({ min: minEstimate, max: maxEstimate });
  }, [formData.service, formData.weightLbs, formData.pallets, formData.temperatureNeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.origin.trim()) newErrors.origin = 'Origin city/state or zip is required';
    if (formData.service !== 'warehousing' && !formData.destination.trim()) {
      newErrors.destination = 'Destination city/state or zip is required';
    }
    if (!formData.fullName.trim()) newErrors.fullName = 'Contact name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid corporate email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.pickupDate) newErrors.pickupDate = 'Target date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'QT-' + Math.floor(100000 + Math.random() * 900000);
      setQuoteReference(randomRef);
    }, 1200);
  };

  const breadcrumbs = [{ name: 'Get a Quote', path: '/quote' }];

  return (
    <>
      <SEO
        title="Get an Instant Freight Quote - Fast Rate Confirmations"
        description="Request a fast, transparent freight rate quote from Subhan Carriers for nationwide road freight, warehousing, express delivery, or heavy haulage."
        canonical="/quote"
      />

      <PageHeader
        badge="Instant Freight Calculation"
        title="Request a Competitive Freight Rate Quote"
        subtitle="Complete our quick freight specification form to calculate instant lane pricing and receive guaranteed rate confirmation within 15 minutes."
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
                Quote Request Tendered
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-heading dark:text-white mb-2">
                Thank You, {formData.fullName}!
              </h2>

              <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-6">
                Your freight inquiry has been assigned to our central dispatch desk. A dedicated logistics coordinator is reviewing lane capacity and will dispatch your official rate confirmation with binding fuel surcharge breakdown shortly.
              </p>

              <div className="bg-surface-light dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8 inline-block text-left w-full">
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Reference Number</span>
                    <span className="font-mono font-bold text-secondary text-base">{quoteReference}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Estimated Range</span>
                    <span className="font-bold text-accent text-base">${estimatedPrice?.min.toLocaleString()} - ${estimatedPrice?.max.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Lane</span>
                    <span className="font-semibold text-heading dark:text-white truncate block">{formData.origin} &rarr; {formData.destination || 'Storage Hub'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Target Pickup</span>
                    <span className="font-semibold text-heading dark:text-white block">{formData.pickupDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => { setIsSubmitted(false); }}
                  variant="primary"
                  size="md"
                >
                  Submit Another Quote
                </Button>
                <Button
                  to="/tracking"
                  variant="outline"
                  size="md"
                  className="dark:border-slate-700 dark:text-slate-200"
                >
                  Track Existing Shipment
                </Button>
              </div>
            </div>
          ) : (
            /* Main Interactive Quote Form & Live Estimator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Form (8 Cols) */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-soft">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Service Selection */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-secondary" />
                      <span>1. Select Required Logistics Service</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'road-freight', name: 'Road Freight (FTL / LTL)', desc: 'Standard 53ft highway van & reefer transport' },
                        { id: 'warehousing', name: 'Warehousing & Storage', desc: 'Secure pallet storage & fulfillment centers' },
                        { id: 'express-delivery', name: 'Express / Expedited', desc: 'Guaranteed non-stop team highway transit' },
                        { id: 'heavy-haulage', name: 'Heavy Haulage', desc: 'Multi-axle RGN lowboys & oversized permits' }
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
                      <span>2. Route Origin & Destination</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Origin (City, State or Zip) *
                        </label>
                        <input
                          type="text"
                          name="origin"
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="e.g. Chicago, IL or 60607"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.origin ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.origin && <p className="text-xs text-red-500 mt-1">{errors.origin}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Destination (City, State or Zip) {formData.service === 'warehousing' ? '(Optional)' : '*'}
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Atlanta, GA or 30303"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.destination ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.destination && <p className="text-xs text-red-500 mt-1">{errors.destination}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Target Pickup Date *
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
                          Temperature Control Needed?
                        </label>
                        <select
                          name="temperatureNeeded"
                          value={formData.temperatureNeeded}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 text-heading dark:text-white"
                        >
                          <option value="No">No - Standard Ambient Van</option>
                          <option value="Yes">Yes - Refrigerated Reefer (-20°F to 70°F)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Cargo Details */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-secondary" />
                      <span>3. Cargo Weight & Pallet Metrics</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Total Weight (lbs)
                        </label>
                        <input
                          type="number"
                          name="weightLbs"
                          value={formData.weightLbs}
                          onChange={handleChange}
                          placeholder="e.g. 18000"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Pallet Count (Standard 48x40)
                        </label>
                        <input
                          type="number"
                          name="pallets"
                          value={formData.pallets}
                          onChange={handleChange}
                          placeholder="e.g. 14"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Commodity / Cargo Type
                        </label>
                        <input
                          type="text"
                          name="cargoType"
                          value={formData.cargoType}
                          onChange={handleChange}
                          placeholder="e.g. Automotive parts"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      <span>4. Shipper Contact Information</span>
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
                          placeholder="John Doe"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.fullName ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Supply Corp."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.email ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                            errors.phone ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                          Special Handling Instructions or Dock Hours
                        </label>
                        <textarea
                          rows={3}
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="e.g. Liftgate required at delivery dock, strict delivery appointment window between 08:00 AM - 11:00 AM..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-highlight" />
                      <span>$5,000,000 cargo insurance coverage included</span>
                    </span>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={ArrowRight}
                    >
                      Tender Quote Request
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
                        Estimated Lane Rate
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Based on current diesel & spot indices
                      </p>
                    </div>
                  </div>

                  {/* Price Estimate */}
                  <div className="p-4 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-6 text-center">
                    <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                      Estimated Freight Bracket
                    </span>
                    <div className="text-3xl font-extrabold font-heading text-primary dark:text-white">
                      ${estimatedPrice?.min.toLocaleString()} - ${estimatedPrice?.max.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Includes baseline fuel surcharge & standard transit
                    </span>
                  </div>

                  {/* Summary Checklist */}
                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Service:</span>
                      <span className="font-bold text-heading dark:text-white capitalize">{formData.service.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Capacity:</span>
                      <span className="font-bold text-heading dark:text-white">{formData.pallets} Pallets ({formData.weightLbs} lbs)</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span>Temperature:</span>
                      <span className="font-bold text-heading dark:text-white">{formData.temperatureNeeded === 'Yes' ? 'Active Reefer' : 'Dry Van'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>e-POD Ready:</span>
                      <span className="font-bold text-emerald-500">Yes (15-min delivery)</span>
                    </div>
                  </div>

                  {/* Emergency Dispatch Assistance */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                    <p className="text-xs text-body dark:text-slate-400 mb-3">
                      Need a hot-shot tractor dispatched within the hour?
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-white hover:bg-primary-700 text-xs font-semibold transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-accent" />
                      <span>Call Central Dispatch: {siteConfig.contact.phonePrimary}</span>
                    </a>
                  </div>
                </div>

                {/* Trust guarantee card */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white p-6 rounded-3xl border border-white/10 shadow-soft">
                  <h4 className="font-heading font-bold text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-highlight" />
                    <span>The Subhan Rate Guarantee</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Once our logistics desk verifies your pickup and drop windows, your quoted lane rate is 100% locked. We never bill surprise detention or unverified accessorials.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Looking for Dedicated Contract Lane Pricing?"
        subtitle="For shippers tendering recurring weekly volume, speak with our enterprise account directors for guaranteed quarterly rate locks."
      />
    </>
  );
}
