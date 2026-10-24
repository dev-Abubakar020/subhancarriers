import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Award, 
  Zap, 
  FileCheck2,
  DollarSign,
  Headphones
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const differentiators = [
  {
    icon: Clock,
    title: "Punctual & Fast Delivery",
    description: "Our dedicated team works hard to make sure your move or cargo is completed by the deadline you set, with same-day delivery options for adjoining cities.",
    badge: "Reliability"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Cargo Handling",
    description: "All of your goods are guaranteed to be safely delivered to your new doorstep with premium grade packing materials, careful unloading, and furniture reassembly.",
    badge: "Security"
  },
  {
    icon: Zap,
    title: "CPEC & Central Asia Registered",
    description: "Registered with Central Asia Transportation License and CPEC transit routes, bringing you peace of mind with vetted drivers and proven vehicles.",
    badge: "Compliance"
  },
  {
    icon: MapPin,
    title: "All Over Pakistan Coverage",
    description: "Comprehensive daily service across Lahore, Karachi, Islamabad, Faisalabad, Multan, Sahiwal, Quetta, Gujranwala, Sialkot, and beyond.",
    badge: "Coverage"
  },
  {
    icon: DollarSign,
    title: "Affordable with No Hidden Fees",
    description: "Competitive market rates with zero hidden charges. We accept online bank transfers, JazzCash, EasyPaisa, and cash upon doorstep delivery.",
    badge: "Pricing"
  },
  {
    icon: Headphones,
    title: "24/7 Live Call & WhatsApp Support",
    description: "Direct live assistance from our logistics coordinators and CEO desk via phone (+92 300-6539785) or WhatsApp for any questions and instant bookings.",
    badge: "Support"
  }
];

export default function WhyChooseUs({ dark = false }) {
  return (
    <section className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
      dark ? 'bg-primary-900 text-white' : 'bg-white dark:bg-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Subhan Advantage"
          title="Why Leading Shippers Entrust Their Cargo to Us"
          subtitle="Combining institutional freight scale with personalized dispatch agility to elevate commercial supply chains nationwide."
          dark={dark}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className={`p-6 sm:p-8 flex flex-col justify-between transition-colors ${
                  dark 
                    ? 'bg-white/5 border border-white/10 hover:border-secondary/50 text-white' 
                    : 'bg-surface-light/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-secondary/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-heading mb-2 ${dark ? 'text-white' : 'text-heading dark:text-white'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-body dark:text-slate-300'}`}>
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/10 dark:border-slate-700/40 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Subhan Standard Guaranteed</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
