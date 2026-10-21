import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Building2, 
  PhoneCall,
  Headphones,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid corporate email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your inquiry';

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
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'General Inquiries',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  const breadcrumbs = [{ name: 'Contact Us', path: '/contact' }];

  return (
    <>
      <SEO
        title="Contact Us - 24/7 National Dispatch & Regional Freight Terminals"
        description="Connect with Subhan Carriers' national dispatch desk, request rate quotes, or visit our regional freight terminals in Chicago, Dallas, Atlanta, and Los Angeles."
        canonical="/contact"
      />

      <PageHeader
        badge="24/7 Dispatch & Support"
        title="Connect with Our Logistics Team"
        subtitle="Whether you need emergency highway dispatch, warehouse storage capacity, or dedicated contract lane consultations, our coordinators are ready to assist."
        breadcrumbs={breadcrumbs}
      />

      {/* Quick Direct Contacts Bar */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Toll-Free National Line
                </span>
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mt-0.5">
                  <a href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-secondary transition-colors">
                    {siteConfig.contact.phonePrimary}
                  </a>
                </h3>
                <p className="text-xs text-body dark:text-slate-400 mt-1">Direct to central customer support desk</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Headphones className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  24/7 Emergency Dispatch
                </span>
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mt-0.5">
                  <a href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-accent transition-colors">
                    {siteConfig.contact.emergencyDispatch}
                  </a>
                </h3>
                <p className="text-xs text-body dark:text-slate-400 mt-1">Available 365 days a year non-stop</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight shrink-0">
                <Mail className="w-6 h-6 text-highlight" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Correspondence
                </span>
                <h3 className="font-heading font-bold text-base text-heading dark:text-white mt-0.5">
                  <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-secondary transition-colors">
                    {siteConfig.contact.emailGeneral}
                  </a>
                </h3>
                <p className="text-xs text-body dark:text-slate-400 mt-1">Quotes: {siteConfig.contact.emailQuotes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form and Map / Depot Locator */}
      <section className="py-20 md:py-28 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-soft">
              <h2 className="text-2xl font-bold font-heading text-heading dark:text-white mb-2">
                Send a Direct Message
              </h2>
              <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-8">
                Fill in the details below and an assigned freight coordinator will respond within 30 minutes during standard business hours.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h3 className="font-heading font-bold text-lg text-heading dark:text-white">Message Successfully Received!</h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting Subhan Carriers. A dispatch specialist has been notified and will be in touch shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-2 dark:border-slate-700 dark:text-slate-200"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                          errors.name ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
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
                        placeholder="sarah@logistics.com"
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
                        placeholder="+1 (555) 234-5678"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                          errors.phone ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Inquiry Department
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 text-heading dark:text-white"
                      >
                        <option value="General Inquiries">General Freight Inquiry</option>
                        <option value="Rate Quote & Contracting">Rate Quotes & Contract Lanes</option>
                        <option value="Dispatch & Tracking">Live Dispatch & Telematics</option>
                        <option value="Warehousing Operations">Warehousing & Cross-Docking</option>
                        <option value="Billing & Accounting">Billing & Invoicing Support</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Inbound freight rate for Chicago to Dallas lane..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                          errors.subject ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Message & Freight Particulars *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details about your cargo, lane frequency, weight, or questions..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${
                          errors.message ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    isLoading={isSubmitting}
                    icon={Send}
                  >
                    Send Message to Dispatch
                  </Button>
                </form>
              )}
            </div>

            {/* Right Column: Terminal Hubs & Operating Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* HQ Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-secondary tracking-wider">
                      Corporate Headquarters
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading dark:text-white">
                      Chicago Command Hub
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-4">
                  {siteConfig.contact.headquarters.street}, {siteConfig.contact.headquarters.city}, {siteConfig.contact.headquarters.state} {siteConfig.contact.headquarters.zip}
                </p>

                {/* Operating Hours */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Central Dispatch:</span>
                    <span className="font-bold text-accent">{siteConfig.contact.operatingHours.dispatch}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Business Office:</span>
                    <span>{siteConfig.contact.operatingHours.office}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Saturday:</span>
                    <span>{siteConfig.contact.operatingHours.saturday}</span>
                  </div>
                </div>
              </div>

              {/* Regional Depots List */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Regional Depots & Cross-Dock Hubs</span>
                </h3>

                <div className="space-y-4">
                  {siteConfig.contact.hubs.slice(1).map((hub, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                      <div className="font-bold text-sm text-heading dark:text-white">{hub.city}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{hub.address}</div>
                      <div className="text-xs font-semibold text-secondary mt-1">Tel: {hub.phone}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Map Visual Placeholder */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-6 border border-white/10 shadow-soft relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Nationwide Coverage Map
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">48 States + Cross-Border</span>
                </div>
                <div className="h-40 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-accent animate-bounce mb-2" />
                  <span className="text-sm font-bold text-white">4 National Terminal Hubs & 250+ Corridors</span>
                  <span className="text-xs text-slate-400 mt-1">Chicago &bull; Dallas &bull; Atlanta &bull; Los Angeles</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Request an Instant Freight Quote?"
        subtitle="Skip the phone wait and calculate instant rates using our online freight specification engine."
      />
    </>
  );
}
