import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  HardHat, 
  FileText,
  MapPin
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

export default function HeavyHaulage() {
  const service = services.find(s => s.id === 'heavy-haulage');

  const breadcrumbs = [
    { name: 'Services', path: '/services' },
    { name: 'Heavy Haulage', path: '/services/heavy-haulage' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://subhancarriers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://subhancarriers.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Heavy Haulage", "item": "https://subhancarriers.com/services/heavy-haulage" }
    ]
  };

  return (
    <>
      <SEO
        title="Heavy Haulage & Oversized Freight - Multi-Axle RGN Lowboys up to 120 Tons"
        description="Subhan Carriers delivers specialized heavy haul transport, multi-axle modular lowboys, full DOT state permitting, route engineering surveys, and pilot car escorts."
        canonical="/services/heavy-haulage"
        schemaJson={breadcrumbSchema}
      />

      <PageHeader
        badge={service.badge}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={breadcrumbs}
      >
        <Button to="/quote?service=heavy-haulage" variant="accent" size="md" icon={ArrowRight}>
          Request Heavy Haul Study
        </Button>
        <Button to="/contact" variant="outlineWhite" size="md">
          Consult Project Engineers
        </Button>
      </PageHeader>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Engineered Transport Logistics
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading leading-tight">
                Moving Industrial Superloads Exceeding 120 Tons with Flawless Execution
              </h2>

              <p className="text-base text-body leading-relaxed">
                Transporting oversized industrial turbines, wind energy blades, mining excavators, and civil infrastructure girders demands specialized engineering expertise far beyond conventional trucking.
              </p>

              <p className="text-base text-body leading-relaxed">
                Subhan Carriers' dedicated Heavy Haul Division manages every phase of the project: from in-house route height and turn-radius surveys, municipal and state DOT permit acquisitions, to coordinating civilian pilot car escorts and utility line-lifting crews.
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
                  alt="Heavy Haul Multi-Axle Lowboy"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="mt-6 bg-surface-light rounded-2xl p-6 border border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Safety Record</div>
                  <div className="text-lg font-bold text-secondary font-heading">{service.sla}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Max Payload</div>
                  <div className="text-lg font-bold text-accent font-heading">{service.capacity}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Project Management Protocol */}
          <div className="bg-primary-950 text-white rounded-3xl p-8 sm:p-12 mb-20">
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white">
              End-to-End Heavy Haul Engineering Protocol
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl mb-8 leading-relaxed">
              Every oversized consignment moves through our rigorous four-step engineering lifecycle before the wheels turn.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-accent font-black text-2xl font-heading mb-2">01</div>
                <h4 className="font-bold text-base text-white mb-1">Route Physical Survey</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Laser height measurement of highway overpasses, bridge weight tolerance studies, and tight turning clearances.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-accent font-black text-2xl font-heading mb-2">02</div>
                <h4 className="font-bold text-base text-white mb-1">Full DOT Permitting</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Managing multi-state, county, and municipal overweight/over-dimensional transport authorizations and curfew schedules.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-accent font-black text-2xl font-heading mb-2">03</div>
                <h4 className="font-bold text-base text-white mb-1">Pilot Escorts & Utility</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Deployment of certified front and rear pilot cars with height poles, police escorts, and overhead utility lifting coordination.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-accent font-black text-2xl font-heading mb-2">04</div>
                <h4 className="font-bold text-base text-white mb-1">Rigging & Tie-Down</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Master riggers oversee heavy hydraulic jacking, crane offloading, and engineered multi-point grade-100 transport chaining.</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-20">
            <SectionHeading
              badge="Engineering Specs"
              title="Specialized Multi-Axle Capabilities"
              subtitle="Modular lowboys, Removable Goosenecks (RGN), and hydraulic steerable platforms."
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
              title="Heavy Haul Questions & Answers"
              subtitle="Key information regarding oversize permits, lead times, and crane offloading."
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
        title="Planning an Oversized or Superload Move?"
        subtitle="Contact our heavy transport engineering specialists today for route feasibility studies and permitting estimates."
      />
    </>
  );
}
