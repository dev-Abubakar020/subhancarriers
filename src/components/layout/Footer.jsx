import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Youtube,
  Send
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-slate-300 relative overflow-hidden border-t border-primary-700/40">
      {/* Decorative top highway glow line */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-accent to-highlight opacity-80" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand Info & Mission (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-primary-700 flex items-center justify-center text-white shadow-glow-secondary">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight leading-none">
                  Subhan<span className="text-secondary-500">Carriers</span>
                </span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-slate-400 mt-1">
                  Logistics & Transport Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing dependable freight transportation, temperature-controlled transit, modern warehousing, and heavy haul engineering across nationwide corridors with real-time GPS tracking.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-highlight shrink-0" />
                <span>DOT Certified & Bonded Carrier #489210</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>24/7 National Dispatch & Emergency Routing</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={siteConfig.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/road-freight" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Road Freight (FTL & LTL)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/warehousing" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Warehousing & Storage</span>
                </Link>
              </li>
              <li>
                <Link to="/services/express-delivery" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Express & Expedited Delivery</span>
                </Link>
              </li>
              <li>
                <Link to="/services/heavy-haulage" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Heavy Haulage & Oversized</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-500 hover:text-secondary-400 font-semibold transition-colors flex items-center gap-1 mt-1">
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-slate-400 hover:text-white transition-colors">
                  Our Fleet & Specs
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-slate-400 hover:text-white transition-colors">
                  Live Cargo Tracking
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-slate-400 hover:text-white transition-colors">
                  Instant Freight Quote
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Industry Insights & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Depots
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.contact.headquarters.street}, {siteConfig.contact.headquarters.city}, {siteConfig.contact.headquarters.state} {siteConfig.contact.headquarters.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary-500 shrink-0" />
                <a href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors font-medium text-slate-200">
                  {siteConfig.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-highlight shrink-0" />
                <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.emailGeneral}
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Freight Intelligence Newsletter
              </div>
              {subscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 p-2.5 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed! Industry digest will be sent bi-weekly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    required
                    aria-label="Business Email for Newsletter"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent pr-10"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-1.5 rounded-lg bg-accent text-white hover:bg-accent-600 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Certifications row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {siteConfig.certifications.slice(0, 4).map((cert, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{cert}</span>
              </span>
            ))}
          </div>

          <div className="text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
