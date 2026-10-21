import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Warehouse, 
  Zap, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  FileCheck2,
  Layers
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../data/services';

const iconMap = {
  Truck: Truck,
  Warehouse: Warehouse,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
};

export default function Services() {
  const breadcrumbs = [{ name: 'Services', path: '/services' }];

  return (
    <>
      <SEO
        title="Freight & Logistics Services - Road Freight, Warehousing, Express & Heavy Haul"
        description="Explore Subhan Carriers' comprehensive commercial transportation services including FTL/LTL road freight, climate-controlled warehousing, expedited delivery, and oversized heavy haulage."
        canonical="/services"
      />

      <PageHeader
        badge="End-to-End Capabilities"
        title="Modern Freight Logistics Engineered for Your Supply Chain"
        subtitle="From single high-priority crates to multi-axle 120-ton industrial superloads and 1.2M sq. ft. distribution hubs, we provide seamless transport and storage solutions across North America."
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote" variant="accent" size="md" icon={ArrowRight}>
          Get Service Rate Quote
        </Button>
      </PageHeader>

      {/* Services Detailed List */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Truck;
            const isEven = idx % 2 === 1;

            return (
              <div 
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Photo Section */}
                  <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full ${isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <Badge variant="dark">{service.badge}</Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                        Coverage
                      </div>
                      <div className="text-sm font-bold text-accent">
                        {service.transitCoverage}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                          {service.sla}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-heading mb-2">
                        {service.title}
                      </h2>

                      <p className="text-sm font-semibold text-accent mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      {/* Key Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {service.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Capacity:</span> {service.capacity}
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="text-xs font-bold text-secondary hover:text-secondary-700 flex items-center gap-1 group"
                        >
                          <span>Full Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Button
                          to={`/quote?service=${service.slug}`}
                          variant="accent"
                          size="sm"
                        >
                          Quote This Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Capability Matrix Comparison Table */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Lane Matrix"
            title="Service Capability Comparison"
            subtitle="Review key operating benchmarks and equipment profiles across our four core divisions."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-soft">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 font-heading font-semibold">Service Line</th>
                  <th className="p-4 font-heading font-semibold">Primary Equipment</th>
                  <th className="p-4 font-heading font-semibold">Max Payload</th>
                  <th className="p-4 font-heading font-semibold">Target Lead Time</th>
                  <th className="p-4 font-heading font-semibold">Tracking Frequency</th>
                  <th className="p-4 font-heading font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-heading">Road Freight</td>
                  <td className="p-4 text-slate-600">53ft Dry Vans & Reefers</td>
                  <td className="p-4 text-slate-600">45,000 lbs</td>
                  <td className="p-4 text-slate-600">Same-Day / Scheduled</td>
                  <td className="p-4 text-secondary font-semibold">60-sec GPS + Reefer Temp</td>
                  <td className="p-4 text-right">
                    <Link to="/services/road-freight" className="text-xs font-bold text-accent hover:underline">
                      View Specs &rarr;
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-heading">Warehousing & Storage</td>
                  <td className="p-4 text-slate-600">1.2M Sq. Ft. Tier-1 WMS</td>
                  <td className="p-4 text-slate-600">65,000 Pallets</td>
                  <td className="p-4 text-slate-600">Immediate Staging</td>
                  <td className="p-4 text-secondary font-semibold">24/7 Portal API Inventory</td>
                  <td className="p-4 text-right">
                    <Link to="/services/warehousing" className="text-xs font-bold text-accent hover:underline">
                      View Specs &rarr;
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-heading">Express Delivery</td>
                  <td className="p-4 text-slate-600">Dedicated Sprinters & Team Tractors</td>
                  <td className="p-4 text-slate-600">Up to 44,000 lbs</td>
                  <td className="p-4 text-slate-600">Under 45-Min Dispatch</td>
                  <td className="p-4 text-secondary font-semibold">Continuous Non-Stop GPS</td>
                  <td className="p-4 text-right">
                    <Link to="/services/express-delivery" className="text-xs font-bold text-accent hover:underline">
                      View Specs &rarr;
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-heading">Heavy Haulage</td>
                  <td className="p-4 text-slate-600">Multi-Axle RGN Lowboys</td>
                  <td className="p-4 text-slate-600">240,000 lbs (120 Tons)</td>
                  <td className="p-4 text-slate-600">DOT Permitted Routing</td>
                  <td className="p-4 text-secondary font-semibold">Route Survey & Telematics</td>
                  <td className="p-4 text-right">
                    <Link to="/services/heavy-haulage" className="text-xs font-bold text-accent hover:underline">
                      View Specs &rarr;
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Help Determining the Right Freight Strategy?"
        subtitle="Our logistics engineers analyze your cargo weight, dimensions, and schedule to recommend the most cost-effective transportation mode."
      />
    </>
  );
}
