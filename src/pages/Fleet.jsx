import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  Gauge, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Leaf,
  Wifi
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import FleetShowcase from '../components/sections/FleetShowcase';
import CTABanner from '../components/sections/CTABanner';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Fleet() {
  const breadcrumbs = [{ name: 'Our Fleet', path: '/fleet' }];

  const fleetAdvantages = [
    {
      icon: ShieldCheck,
      title: "Hydraulic Power Tailgates",
      desc: "Our 15ft and 24ft trucks are equipped with hydraulic liftgates, ensuring safe ground-level loading of delicate furniture, refrigerators, and heavy machines."
    },
    {
      icon: Clock,
      title: "Regularly Serviced Fleet",
      desc: "Our goods transport vehicles are checked and serviced by professionals before each trip to ensure zero highway breakdowns across national motorways."
    },
    {
      icon: Truck,
      title: "Weatherproof Covered Bodies",
      desc: "All moving trucks feature waterproof tarpaulins and secure enclosed cargo containers to safeguard your household and commercial items from dust, sun, and rain."
    },
    {
      icon: Leaf,
      title: "CPEC & Central Asia Certified",
      desc: "Registered under official CPEC and Central Asia Transportation licenses for seamless inter-provincial goods transit across Pakistan."
    }
  ];

  return (
    <>
      <SEO
        title="Our Fleet - Shehzore, Mazda 15ft & Container Trucks | Subhan Carriers"
        description="Explore Subhan Carriers' diverse fleet in Pakistan: 10ft covered Shehzore, 15ft Mazda with tailgate, 24ft container trucks, and 40ft CPEC trailers."
        canonical="/fleet"
      />

      <PageHeader
        badge="Modern Goods Fleet"
        title="Pakistan's Most Reliable Goods Transport & Moving Fleet"
        subtitle="A versatile fleet of well-maintained trucks equipped with hydraulic tailgates, weatherproof bodies, and experienced drivers for safe doorstep delivery across Pakistan."
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote" variant="accent" size="md" icon={ArrowRight}>
          Book a Truck Now
        </Button>
      </PageHeader>

      {/* Fleet Engineering Advantages */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex flex-col justify-between transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-heading dark:text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body dark:text-slate-300 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Fleet Showcase with Category Filters */}
      <FleetShowcase showHeader={true} showFilters={true} />

      {/* Maintenance & Safety Commitment */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20 inline-block">
                Rigorous Maintenance Protocol
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
                In-Hub Preventative Service Bays Keeping Reliability at 99.4%
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We do not wait for roadside breakdowns. Subhan Carriers operates certified maintenance and diagnostic bays at each of our primary terminal hubs in Lahore, Karachi, and Islamabad. Every truck undergoes comprehensive safety and fitness inspections upon completing each inter-city trip.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Automated tire pressure & tread monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Engine diagnostic telemetry & GPS tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Food authority certified hygienic sanitization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Brake pad and hydraulic tailgate certification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm text-center">
                <div className="text-5xl font-black font-heading text-accent mb-2">
                  350+
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  Active Commercial Units
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Ready for scheduled contract freight and spot dispatch nationwide.
                </p>

                <Button to="/quote" variant="accent" size="md" className="w-full justify-center">
                  Request Equipment Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Dedicated Fleet Capacity for Your Business?"
        subtitle="Speak with our fleet leasing and contract logistics coordinators to secure dedicated tractors and trailers for your primary lanes."
      />
    </>
  );
}
