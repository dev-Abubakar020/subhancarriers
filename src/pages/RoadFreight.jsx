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
        title="Road Freight Transport - Nationwide FTL & LTL Truckload Logistics"
        description="Subhan Carriers delivers dependable FTL & LTL road freight across all 48 states with modern 53ft dry vans, IoT refrigerated trailers, and real-time GPS tracking."
        canonical="/services/road-freight"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote?service=road-freight" variant="accent" size="md" icon={ArrowRight}>
          Book Road Freight
        </Button>
        <Button to="/tracking" variant="outlineWhite" size="md">
          Track Active Truck
        </Button>
      </PageHeader>

      {/* Main Content & Specs Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Precision Highway Haulage
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading leading-tight">
                Traversing 48 States with 99.4% On-Time Precision
              </h2>

              <p className="text-base text-body leading-relaxed">
                Whether you are transporting full truckloads (FTL) between regional distribution hubs or seeking flexible less-than-truckload (LTL) consolidation, Subhan Carriers provides reliable, scheduled transportation backed by over 350 company-owned late-model tractors and trailers.
              </p>

              <p className="text-base text-body leading-relaxed">
                Our fleet is outfitted with active collision avoidance systems, aerodynamic SmartWay trailers, and continuous 60-second telematics. We offer both standard dry freight and multi-zone temperature-controlled reefer units capable of maintaining exact thermal ranges from -20°F to 70°F.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image & Floating Highlights */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-slate-100">
                <img
                  src={service.heroImage}
                  alt="Road Freight Truck on Highway"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Mini Highlights Card */}
              <div className="mt-6 bg-surface-light rounded-2xl p-6 border border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Reliability SLA</div>
                  <div className="text-lg font-bold text-secondary font-heading">{service.sla}</div>
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
              subtitle="Every trailer adheres to strict DOT, FSMA, and insurance standards to protect your commercial cargo."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.specifications.map((spec, sIdx) => (
                <Card key={sIdx} className="p-6 bg-surface-light/50 border border-slate-100">
                  <div className="text-xs font-semibold uppercase text-slate-400 mb-1">
                    {spec.label}
                  </div>
                  <div className="text-base font-bold font-heading text-heading">
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
              Our road freight operations accommodate diverse industrial cargo, packaged retail, food grade dry goods, and regulated materials.
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
              subtitle="Common inquiries regarding our full truckload and consolidation operations."
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-6 rounded-2xl bg-surface-light border border-slate-100">
                  <h4 className="font-heading font-bold text-base text-heading mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-body leading-relaxed">
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
