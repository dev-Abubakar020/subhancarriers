import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  MapPin, 
  ArrowLeft, 
  Home, 
  Search, 
  PhoneCall, 
  PackageCheck, 
  FileText 
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Subhan Carriers"
        description="The requested page could not be located on the Subhan Carriers highway network. Navigate back to our home or service portals."
      />

      <div className="min-h-[85vh] bg-surface-light flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-14 border border-slate-100 shadow-soft-lg text-center relative z-10">
          {/* Animated 404 Route Illustration */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="text-8xl sm:text-9xl font-black font-heading tracking-tighter text-slate-100 select-none">
              404
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center shadow-soft relative animate-bounce">
                <Truck className="w-10 h-10 text-accent" />
              </div>
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-3">
            Route Detour Required
          </span>

          <h1 className="text-2xl sm:text-4xl font-bold font-heading text-heading mb-3">
            Off-Route Destination
          </h1>

          <p className="text-sm sm:text-base text-body leading-relaxed mb-8 max-w-lg mx-auto">
            The page you are looking for has been moved, re-routed, or temporarily dispatched elsewhere on our highway network.
          </p>

          {/* Quick Route Links */}
          <div className="bg-surface-light p-4 rounded-2xl border border-slate-200/80 mb-8 text-left">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3 px-1">
              Popular Network Destinations
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <Link to="/services" className="p-2.5 rounded-xl bg-white hover:bg-secondary hover:text-white transition-colors text-slate-700 font-semibold text-center border border-slate-100">
                Services
              </Link>
              <Link to="/tracking" className="p-2.5 rounded-xl bg-white hover:bg-secondary hover:text-white transition-colors text-slate-700 font-semibold text-center border border-slate-100">
                Tracking
              </Link>
              <Link to="/quote" className="p-2.5 rounded-xl bg-white hover:bg-secondary hover:text-white transition-colors text-slate-700 font-semibold text-center border border-slate-100">
                Get a Quote
              </Link>
              <Link to="/blog" className="p-2.5 rounded-xl bg-white hover:bg-secondary hover:text-white transition-colors text-slate-700 font-semibold text-center border border-slate-100">
                Industry Blog
              </Link>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/"
              variant="accent"
              size="md"
              icon={Home}
            >
              Return to Homepage
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="md"
            >
              Contact Support Desk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
