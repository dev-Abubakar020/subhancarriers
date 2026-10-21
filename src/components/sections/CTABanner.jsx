import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap } from 'lucide-react';
import Button from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export default function CTABanner({
  title = "Ready to Upgrade Your Freight Operations?",
  subtitle = "Experience guaranteed capacity, transparent rates, and real-time shipment transparency. Request an instant lane quote or connect directly with dispatch.",
  showEmergencyCall = true
}) {
  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-r from-primary via-primary-700 to-secondary text-white overflow-hidden">
      {/* Decorative Light Elements */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-highlight/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative highway path line */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-semibold mb-4 border border-white/15">
              <Zap className="w-3.5 h-3.5" />
              <span>Fast Track Onboarding & Contract Lane Rates</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight leading-tight text-white">
              {title}
            </h2>

            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-highlight" />
                <span>$5M Cargo Protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Instant e-PODs</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Button
              to="/quote"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto justify-center"
              icon={ArrowRight}
            >
              Get Instant Freight Quote
            </Button>

            {showEmergencyCall && (
              <a
                href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {siteConfig.contact.phonePrimary}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
