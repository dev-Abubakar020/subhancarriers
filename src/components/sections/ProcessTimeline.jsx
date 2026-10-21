import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Truck, 
  Navigation, 
  PackageCheck, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const steps = [
  {
    step: "01",
    title: "Book & Confirm",
    icon: ClipboardCheck,
    tagline: "Instant Rates & Digital BOL",
    description: "Submit freight specifications online or via API. Receive guaranteed lane rate confirmation, electronic Bill of Lading (BOL), and assigned tractor details within 15 minutes.",
    details: [
      "Instant lane rate generation",
      "Automated dock appointment booking",
      "Dedicated dispatcher assignment"
    ]
  },
  {
    step: "02",
    title: "Prompt Bay Pickup",
    icon: Truck,
    tagline: "Pre-Inspected Rolling Stock",
    description: "Our certified driver arrives within the agreed loading window. Rigorous cargo count verification, high-tension strapping, and seal logging prior to yard exit.",
    details: [
      "Pre-trip DOT safety check",
      "Cargo weight distribution audit",
      "Digital tamper-evident seal scan"
    ]
  },
  {
    step: "03",
    title: "Monitored Transit",
    icon: Navigation,
    tagline: "Live Telematics & Geofencing",
    description: "Your cargo travels along optimized highway corridors. 60-second GPS pings, continuous reefer temperature telemetry, and proactive traffic detour coordination.",
    details: [
      "Real-time portal tracking link",
      "15-minute exception alerts",
      "Dual-driver non-stop highway teams"
    ]
  },
  {
    step: "04",
    title: "Safe Delivery & e-POD",
    icon: PackageCheck,
    tagline: "Contactless Receipt & Verification",
    description: "Arrival notification triggered by automated geofence. Smooth dock offload and immediate contactless electronic Proof of Delivery (e-POD) sent to your inbox.",
    details: [
      "15-minute e-POD PDF generation",
      "Receiver signature & condition photos",
      "Automated invoice reconciliation"
    ]
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-surface-light dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="From Booking to Final Mile in 4 Precision Steps"
          subtitle="Our streamlined four-stage freight delivery protocol guarantees end-to-end cargo security and zero logistical guesswork."
        />

        {/* Desktop Process Timeline Grid */}
        <div className="relative">
          {/* Connecting highway track line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-12 z-0">
            <div 
              className="h-full bg-gradient-to-r from-secondary via-accent to-highlight transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeStep;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`
                    p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 cursor-pointer flex flex-col justify-between
                    ${isActive 
                      ? 'border-secondary shadow-soft-lg ring-2 ring-secondary/20 -translate-y-2' 
                      : 'border-slate-100 dark:border-slate-800 shadow-soft hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700'}
                  `}
                >
                  <div>
                    {/* Top step header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl font-black font-heading ${isActive ? 'text-accent' : 'text-slate-300 dark:text-slate-700'}`}>
                        {item.step}
                      </span>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-secondary text-white shadow-glow-secondary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-heading dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-secondary mb-3">
                      {item.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-body dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Action Bar */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="font-heading font-bold text-base sm:text-lg text-heading dark:text-white">
                Ready to dispatch your freight today?
              </div>
              <p className="text-xs sm:text-sm text-body dark:text-slate-400">
                Same-day regional pickups confirmed within 45 minutes of booking approval.
              </p>
            </div>
          </div>

          <Button to="/quote" variant="accent" size="md" icon={ArrowRight}>
            Schedule a Pickup
          </Button>
        </div>
      </div>
    </section>
  );
}
