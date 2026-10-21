import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import SEO from '../components/ui/SEO';
import HeroSection from '../components/sections/HeroSection';
import StatsCounter from '../components/ui/StatsCounter';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import FleetShowcase from '../components/sections/FleetShowcase';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import CTABanner from '../components/sections/CTABanner';
import BlogCard from '../components/ui/BlogCard';
import Button from '../components/ui/Button';
import { siteConfig } from '../data/siteConfig';
import { blogs } from '../data/blogs';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": siteConfig.legalName,
    "alternateName": siteConfig.name,
    "url": "https://subhancarriers.com",
    "logo": "https://subhancarriers.com/favicon.svg",
    "telephone": siteConfig.contact.phonePrimary,
    "email": siteConfig.contact.emailGeneral,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.headquarters.street,
      "addressLocality": siteConfig.contact.headquarters.city,
      "addressRegion": siteConfig.contact.headquarters.state,
      "postalCode": siteConfig.contact.headquarters.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.contact.headquarters.coordinates.lat,
      "longitude": siteConfig.contact.headquarters.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.facebook
    ]
  };

  return (
    <>
      <SEO
        title="Trusted Road Freight, Warehousing & Logistics Solutions"
        description="Subhan Carriers delivers dependable nationwide FTL & LTL road freight, climate-controlled warehousing, expedited shipping, and heavy haul engineering with live GPS tracking."
        canonical="/"
        schemaJson={organizationSchema}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Counter Bar */}
      <section className="bg-primary-950 py-10 border-y border-white/10 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={siteConfig.stats} />
        </div>
      </section>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Fleet Showcase (Compact 3 vehicles) */}
      <FleetShowcase limit={3} showFilters={false} />

      {/* Testimonials Slider */}
      <TestimonialsSection />

      {/* Recent Blog Insights */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-3">
                Freight Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading">
                Latest Supply Chain & Logistics Insights
              </h2>
            </div>
            <Button to="/blog" variant="outline" size="sm" icon={ArrowRight}>
              View All Articles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* High-Converting CTA Banner */}
      <CTABanner />
    </>
  );
}
