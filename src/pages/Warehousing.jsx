import React from 'react';
import { 
  Warehouse, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Package, 
  Layers, 
  ArrowRight,
  Database,
  ThermometerSnowflake
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

export default function Warehousing() {
  const service = services.find(s => s.id === 'warehousing');

  const breadcrumbs = [
    { name: 'Services', path: '/services' },
    { name: 'Warehousing & Storage', path: '/services/warehousing' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://subhancarriers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://subhancarriers.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Warehousing & Storage", "item": "https://subhancarriers.com/services/warehousing" }
    ]
  };

  return (
    <>
      <SEO
        title="Warehousing & Storage Services - Secure Distribution & Cross-Docking"
        description="Subhan Carriers operates 1.2M+ sq. ft. of Class-A climate-controlled warehousing in Chicago, Dallas, Atlanta, and Los Angeles with real-time WMS inventory tracking."
        canonical="/services/warehousing"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote?service=warehousing" variant="accent" size="md" icon={ArrowRight}>
          Request Storage Space
        </Button>
        <Button to="/contact" variant="outlineWhite" size="md">
          Schedule Facility Tour
        </Button>
      </PageHeader>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Strategic National Distribution
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading leading-tight">
                Over 1.2 Million Square Feet of Class-A Modern Logistics Infrastructure
              </h2>

              <p className="text-base text-body leading-relaxed">
                Position your commercial inventory closer to your end consumers. Subhan Carriers operates high-cube, state-of-the-art warehousing and transloading facilities strategically located in North America's primary logistics hubs.
              </p>

              <p className="text-base text-body leading-relaxed">
                Equipped with intelligent Tier-1 Warehouse Management Systems (WMS), clients gain 24/7 visibility into real-time SKU levels, batch records, and automated fulfillment statuses via secure web portal and direct ERP REST APIs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-slate-100">
                <img
                  src={service.heroImage}
                  alt="Modern Warehouse Facility"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="mt-6 bg-surface-light rounded-2xl p-6 border border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Picking Accuracy</div>
                  <div className="text-lg font-bold text-secondary font-heading">{service.sla}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Total Capacity</div>
                  <div className="text-lg font-bold text-accent font-heading">{service.capacity}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Regional Warehouse Hubs Grid */}
          <div className="mb-20">
            <SectionHeading
              badge="Strategic Nodes"
              title="Our Nationwide Terminal & Storage Network"
              subtitle="Optimally positioned along major interstate freight arteries to ensure rapid cross-docking and reduced ground transit times."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.contact.hubs.map((hub, hIdx) => (
                <Card key={hIdx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-heading mb-1">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-secondary font-semibold mb-3">
                      {hub.type}
                    </p>
                    <p className="text-xs text-body leading-relaxed mb-4">
                      {hub.address}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
                    Phone: {hub.phone}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-20">
            <SectionHeading
              badge="Facility Specs"
              title="Class-A Engineering Standards"
              subtitle="Built to safeguard pharmaceutical, food-grade, high-value electronics, and industrial pallet goods."
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

          {/* FAQs */}
          <div>
            <SectionHeading
              badge="FAQ"
              title="Warehousing Questions & Answers"
              subtitle="Everything you need to know about our cross-docking, storage terms, and inventory integration."
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
        title="Secure Strategic Warehouse Space for Your Inventory"
        subtitle="Contact our distribution team today to discuss flexible short-term buffer storage or dedicated multi-year fulfillment contracts."
      />
    </>
  );
}
