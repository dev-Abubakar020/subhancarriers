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
        title="Household Shifting & Warehousing Services - Subhan Carriers Pakistan"
        description="Subhan Carriers provides safe house shifting, furniture dismantling & reassembly, and secure warehousing in Faisalabad, Lahore, Karachi, and Islamabad."
        canonical="/services/warehousing"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/contact" variant="accent" size="md" icon={ArrowRight}>
          Book House Shifting
        </Button>
        {/* <Button to="/contact" variant="outlineWhite" size="md">
          Contact Shifting Desk
        </Button> */}
      </PageHeader>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-400 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Safe Home Shifting & Storage
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-white leading-tight">
                Hassle-Free Home Relocation & Secure Goods Warehousing in Pakistan
              </h2>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                A person may need to transfer his house due to several reasons—for education, business purposes, or personal reasons. Subhan Carriers carries out every stage of shifting with perfection. We heartily understand and value the emotions of our customers and use premium grade packing material.
              </p>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                Subhan Carriers is a well-founded name in packing and moving. We are an excellent choice for Home Shifting with secure staging warehouses in Faisalabad, Lahore, Karachi, and Islamabad. Our moving vehicles are always safe and well-maintained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-slate-100 dark:border-slate-800">
                <img
                  src={service.heroImage}
                  alt="Modern Warehouse Facility"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="mt-6 bg-surface-light dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-4 transition-colors">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Picking Accuracy</div>
                  <div className="text-lg font-bold text-secondary dark:text-secondary-400 font-heading">{service.sla}</div>
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
              subtitle="Optimally positioned along major national motorway freight corridors to ensure rapid cross-docking and safe staging."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.contact.hubs.map((hub, hIdx) => (
                <Card key={hIdx} className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-heading dark:text-white mb-1">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-secondary dark:text-secondary-400 font-semibold mb-3">
                      {hub.type}
                    </p>
                    <p className="text-xs text-body dark:text-slate-300 leading-relaxed mb-4">
                      {hub.address}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
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

          {/* FAQs */}
          <div>
            <SectionHeading
              badge="FAQ"
              title="Warehousing Questions & Answers"
              subtitle="Everything you need to know about our cross-docking, storage terms, and inventory integration."
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
        title="Secure Strategic Warehouse Space for Your Inventory"
        subtitle="Contact our distribution team today to discuss flexible short-term buffer storage or dedicated multi-year fulfillment contracts."
      />
    </>
  );
}
