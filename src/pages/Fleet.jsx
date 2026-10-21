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
      icon: Clock,
      title: "Average Fleet Age < 1.8 Years",
      desc: "Frequent vehicle turnover guarantees high fuel efficiency, minimal highway breakdown risk, and state-of-the-art driver comfort."
    },
    {
      icon: Wifi,
      title: "60-Second Satellite Telematics",
      desc: "Every tractor and trailer transmits continuous GPS location, speed, harsh braking events, and ambient reefer temperatures."
    },
    {
      icon: Leaf,
      title: "EPA SmartWay Certified",
      desc: "Aerodynamic cab skirts, predictive cruise control, and auxiliary power units (APUs) cut fleet emissions by up to 14%."
    },
    {
      icon: ShieldCheck,
      title: "Detroit Assurance 5.0 Safety",
      desc: "Active lane keep assist, forward radar collision mitigation, and automatic emergency braking active on all highway tractors."
    }
  ];

  return (
    <>
      <SEO
        title="Our Fleet - 350+ Modern Freight Tractors, Reefers & Specialized Trailers"
        description="Discover Subhan Carriers' commercial fleet: SmartWay long-haul tractors, 53ft refrigerated units, dry vans, and multi-axle heavy haul trailers averaging under 1.8 years of age."
        canonical="/fleet"
      />

      <PageHeader
        badge="Modern Rolling Stock"
        title="North America's Most Advanced Commercial Transport Fleet"
        subtitle="Over 350 company-owned late-model tractors, composite dry vans, and temperature-controlled trailers engineered for safety, speed, and fuel efficiency."
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote" variant="accent" size="md" icon={ArrowRight}>
          Book Fleet Equipment
        </Button>
      </PageHeader>

      {/* Fleet Engineering Advantages */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-surface-light border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-heading mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
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
                We do not wait for roadside breakdowns. Subhan Carriers operates certified maintenance and diagnostic bays at each of our primary terminal hubs. Every tractor undergoes multi-point DOT inspections upon completing each interstate turn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Automated tire pressure monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>J1939 engine diagnostic telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>FSMA food safety trailer sanitization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                  <span>Brake pad and air line pressure certification</span>
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
