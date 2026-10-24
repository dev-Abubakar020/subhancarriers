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
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';
import { sendEmail } from '../utils/sendEmail';

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
  const [sendError, setSendError] = useState(null);

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
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your inquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSendError(null);

    const result = await sendEmail('contact', formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'General Inquiries',
        subject: '',
        message: ''
      });
    } else {
      setSendError('There was an issue sending your message. Please call us directly at (+92) 300-6539785.');
    }
  };

  const breadcrumbs = [{ name: 'Contact Us', path: '/contact' }];

  return (
    <>
      <SEO
        title="Contact Us - Subhan Carriers Goods Transport Pakistan"
        description="Contact Subhan Carriers Goods Transport in Jaranwala, Faisalabad, Lahore, Karachi, and Islamabad. Call or WhatsApp (+92) 300-6539785 for instant rates."
        canonical="/contact"
      />

      <PageHeader
        badge="24/7 Helpline & Dispatch"
        title="Connect with Subhan Carriers"
        subtitle="For any query, moving estimate, or vehicle booking, call our 24/7 helpline or message our online WhatsApp channel directly."
        breadcrumbs={breadcrumbs}
      />

      {/* Quick Direct Contacts Bar */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Call */}
            <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  24/7 Direct Call Helpline
                </span>
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mt-0.5">
                  <a href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-secondary transition-colors">
                    {siteConfig.contact.phonePrimary}
                  </a>
                </h3>
                <p className="text-xs text-body dark:text-slate-400 mt-1">Direct to central customer support & booking desk</p>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Official WhatsApp Channel
                </span>
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mt-0.5">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+92 300 6539785</span>
                    <span className="text-xs bg-emerald-600 text-white font-semibold px-2 py-0.5 rounded-full">Chat Now</span>
                  </a>
                </h3>
                <p className="text-xs text-body dark:text-slate-400 mt-1">Instant photo sharing for quotes & live location updates</p>
              </div>
            </div>

            {/* Email */}
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
                <p className="text-xs text-body dark:text-slate-400 mt-1">All commercial and house shifting inquiries</p>
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
                Send Us a Message
              </h2>
              <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-8">
                Fill in the details below and our team will get in touch immediately with rate quotes and vehicle arrangements.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h3 className="font-heading font-bold text-lg text-heading dark:text-white">Message Successfully Received!</h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting Subhan Carriers. Our freight coordinator will contact you via phone or WhatsApp shortly.
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
                  {/* API Error Banner */}
                  {sendError && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm flex items-start gap-3">
                      <span className="text-lg shrink-0">⚠️</span>
                      <span>{sendError}</span>
                    </div>
                  )}
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
                        placeholder="Muhammad Ali"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${errors.name ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ali@gmail.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${errors.email ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0300-1234567"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${errors.phone ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                          }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Service Required
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="House Shifting">Full House Shifting & Packing</option>
                        <option value="Commercial Moving">Commercial Office Relocation</option>
                        <option value="Goods Transport">Inter-City Goods Freight (Lahore/Karachi/Islamabad)</option>
                        <option value="Truck Booking">Truck Booking (Shehzore, Mazda, Container)</option>
                        <option value="CPEC Logistics">CPEC & Central Asia Cargo</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. 15ft Mazda required for Lahore to Faisalabad goods moving"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${errors.subject ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                    />
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Message & Goods Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify pickup location, drop-off city, approximate quantity of items or goods, and desired shifting date..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-white dark:bg-slate-800 dark:border-slate-700 text-heading dark:text-white ${errors.message ? 'border-red-400 bg-red-50/50 dark:bg-red-950/20' : 'border-slate-200'
                        }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    icon={Send}
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Right Column: Terminal Hubs, Map & Operating Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">

              {/* HQ Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-secondary tracking-wider">
                      Central Headquarters & Goods Terminal
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading dark:text-white">
                      Subhan Carriers Goods
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-4">
                  Near Ibrahim Marriage Hall, Canal Road, Jaranwala (37250), Faisalabad District, Punjab, Pakistan
                </p>

                {/* Operating Hours */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Helpline & Dispatch:</span>
                    <span className="font-bold text-accent">{siteConfig.contact.operatingHours.dispatch}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Terminal Office:</span>
                    <span>{siteConfig.contact.operatingHours.office}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Helpline:</span>
                    <span className="font-semibold text-secondary">{siteConfig.contact.phonePrimary}</span>
                  </div>
                </div>
              </div>


              {/* Regional Stations Across Pakistan */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Goods Terminals Across Pakistan</span>
                </h3>

                <div className="space-y-4">
                  {siteConfig.contact.hubs.slice(1).map((hub, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                      <div className="font-bold text-sm text-heading dark:text-white">{hub.city}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{hub.address}</div>
                      <div className="text-xs font-semibold text-secondary mt-1">Booking: {hub.phone}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
          {/* Google Maps Embed directly from subhancarriers.surge.sh */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl mt-5 p-4 border border-slate-100 dark:border-slate-800 shadow-soft overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                Google Maps Location
              </span>
              <a
                href="https://goo.gl/maps"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-accent hover:underline"
              >
                Open in Maps &rarr;
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <iframe
                title="Subhan Carriers Goods Transport Location"
                style={{ border: 0, width: '100%', height: '280px' }}
                src={siteConfig.contact.headquarters.mapEmbedUrl}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <CTABanner
        title="Ready to Book Your Moving or Goods Transport?"
        subtitle="Call our 24/7 hotline at (+92) 300-6539785 or message on WhatsApp for immediate dispatch across Pakistan."
      />
    </>
  );
}
