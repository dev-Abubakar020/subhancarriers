import React from 'react';
import {
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Thermometer,
  ArrowRight,
  FileCheck2,
  Phone
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';

export default function RoadFreight() {
  const service = services.find(s => s.id === 'road-freight');

  const breadcrumbs = [
    { name: 'Services', path: '/services' },
    { name: 'Road Freight', path: '/services/road-freight' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://subhancarriers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://subhancarriers.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Road Freight", "item": "https://subhancarriers.com/services/road-freight" }
    ]
  };

  return (
    <>
      <SEO
        title="Goods Transport & Road Freight - Subhan Carriers Pakistan"
        description="Subhan Carriers delivers dependable goods transport across Lahore, Karachi, Islamabad, Faisalabad, and all over Pakistan with CPEC registered trucks and zero hidden fees."
        canonical="/services/road-freight"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/contact" variant="accent" size="md" icon={ArrowRight}>
          Book Goods Transport
        </Button>
        {/* <Button to="/tracking" variant="outlineWhite" size="md">
          Track Active Truck
        </Button> */}
      </PageHeader>

      {/* Main Content & Specs Grid */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-400 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Inter-City Highway Goods Transport
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-white leading-tight">
                Pakistan's Best Transportation Services & Goods Moving Partner
              </h2>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                Subhan Carriers is the leading goods Transport Company with the best and most reliable transportation systems and shipping services in Pakistan. Our company is registered in all Central Asia Transportation License and also from CPEC (China-Pakistan Economic Corridor). Subhan Carriers Goods Transport Company is growing its customers' trust upon us, and we do not charge any hidden fee for your moving.
              </p>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                Subhan Carriers has all the solutions with a wide range of vehicles fully equipped for well-maintained transportation. Our drivers are fully experienced and motivated in customer's belongings safety and maintain our fleet's excellent standard. Our goods transport vehicles are regularly serviced by professionals and strictly supported for the protection of clients' items.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image & Floating Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-slate-100 dark:border-slate-800">
                <img
                  src={service.heroImage}
                  alt="Road Freight Truck on Highway"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Mini Highlights Card */}
              <div className="mt-6 bg-surface-light dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-4 transition-colors">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Reliability SLA</div>
                  <div className="text-lg font-bold text-secondary dark:text-secondary-400 font-heading">{service.sla}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Max Payload</div>
                  <div className="text-lg font-bold text-accent font-heading">{service.capacity}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Specifications Table / Grid */}
          <div className="mb-20">
            <SectionHeading
              badge="Fleet Standards"
              title="Equipment Specifications & Operational Parameters"
              subtitle="Every truck adheres to strict fitness, motorway safety, and cargo protection standards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.specifications.map((spec, sIdx) => (
                <Card key={sIdx} className="p-6 bg-surface-light/50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="text-xs font-semibold uppercase text-slate-400 mb-1">
                    {spec.label}
                  </div>
                  <div className="text-base font-bold font-heading text-heading dark:text-white">
                    {spec.value}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Suitable Cargo Sectors */}
          <div className="bg-primary-950 text-white rounded-3xl p-8 sm:p-12 mb-20">
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white">
              Industries & Cargo Profiles We Regularly Service
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl mb-8 leading-relaxed">
              Our road freight operations accommodate diverse industrial cargo, packaged retail, food grade dry goods, and regulated materials across Pakistan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.suitableFor.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs for Road Freight */}
          <div>
            <SectionHeading
              badge="FAQ"
              title="Road Freight Questions & Answers"
              subtitle="Common inquiries regarding our full truckload and shifting operations across Pakistan."
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-6 rounded-2xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 transition-colors">
                  <h4 className="font-heading font-bold text-base text-heading dark:text-white mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-body dark:text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Lock In Competitive Road Freight Rates Today"
        subtitle="Submit your origin, destination, and pallet count to receive a firm rate confirmation within 15 minutes."
      />
    </>
  );
}
