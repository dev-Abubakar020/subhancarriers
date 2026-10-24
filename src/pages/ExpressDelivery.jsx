import React from 'react';
import {
  Zap,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Truck,
  Flame,
  AlertTriangle
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

export default function ExpressDelivery() {
  const service = services.find(s => s.id === 'express-delivery');

  const breadcrumbs = [
    { name: 'Services', path: '/services' },
    { name: 'Express Delivery', path: '/services/express-delivery' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://subhancarriers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://subhancarriers.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Express Delivery", "item": "https://subhancarriers.com/services/express-delivery" }
    ]
  };

  return (
    <>
      <SEO
        title="Express Same-Day Delivery - Subhan Carriers Pakistan"
        description="Subhan Carriers provides fast same-day delivery and express goods transport for adjoining cities across Pakistan with dedicated Shehzore and Mazda trucks."
        canonical="/services/express-delivery"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/contact" variant="accent" size="md" icon={ArrowRight}>
          Book Express Dispatch
        </Button>
        <a
          href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
        >
          <PhoneCall className="w-4 h-4 text-accent" />
          <span>Call 24/7 Priority Helpline</span>
        </a>
      </PageHeader>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Emergency Alert Banner */}
          <div className="mb-16 bg-gradient-to-r from-accent-50 via-white to-amber-50 dark:from-slate-850 dark:via-slate-800 dark:to-slate-850 border border-accent/30 dark:border-accent/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0 shadow-glow-accent">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-heading dark:text-white">
                  Urgent Goods Transport or Same-Day Moving Needed?
                </h3>
                <p className="text-xs sm:text-sm text-body dark:text-slate-300 mt-0.5">
                  Our fast-dispatch team can mobilize a dedicated Shehzore or Mazda truck within 45 minutes for urgent point-to-point transit.
                </p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
              className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-700 font-semibold text-sm whitespace-nowrap transition-colors"
            >
              Priority Helpline: {siteConfig.contact.phonePrimary}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-400 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Same-Day Pick-up & Transit
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-white leading-tight">
                Fast Delivery Service Provider with Same-Day Pick-up in Pakistan
              </h2>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                Subhan Carriers offers all types of goods transport services with same-day delivery for adjoining cities. We also provide same-day pick-up so that you receive the highest level of convenience.
              </p>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                There are many transportation companies, but they often seem to not care about the client's precious items, and their drivers have no experience. The results cause a loss of valuable items. At Subhan Carriers, our experienced drivers ensure 100% safe, well-maintained, and punctual delivery.
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
                  alt="Expedited Delivery Truck"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="mt-6 bg-surface-light dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-4 transition-colors">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Expedited SLA</div>
                  <div className="text-lg font-bold text-secondary dark:text-secondary-400 font-heading">{service.sla}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Dispatch Speed</div>
                  <div className="text-lg font-bold text-accent font-heading">&lt; 45 Minutes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Suitable Critical Scenarios */}
          <div className="bg-primary-950 text-white rounded-3xl p-8 sm:p-12 mb-20">
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white">
              Critical Industries That Rely on Our Express Service
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl mb-8 leading-relaxed">
              When production downtime or delivery delays threaten business commitments, organizations trust Subhan Carriers' expedited non-stop dispatch across Pakistan.
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

          {/* Technical Specifications */}
          <div className="mb-20">
            <SectionHeading
              badge="Expedited Protocol"
              title="Operational Specifications"
              subtitle="Engineered for speed, continuous monitoring, and guaranteed delivery arrival windows."
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
              title="Express Delivery Questions & Answers"
              subtitle="Learn about driver logistics, speed guarantees, and dispatch requirements."
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
        title="Need Cargo Moved Without Delay?"
        subtitle="Speak immediately with an expedited freight controller to book a guaranteed non-stop transport team."
      />
    </>
  );
}
