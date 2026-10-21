import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  Users, 
  MapPin, 
  Target, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatsCounter from '../components/ui/StatsCounter';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    description: "Every tractor, trailer, and driver operates under strict FMCSA standards, continuous telematics, and regular safety retraining."
  },
  {
    icon: Compass,
    title: "Absolute Transparency",
    description: "No hidden accessorial fees or ambiguous tracking. From instant digital rate confirmations to minute-by-minute GPS telematics, we believe in radical clarity."
  },
  {
    icon: TrendingUp,
    title: "Operational Precision",
    description: "Supply chains depend on predictable timetables. We optimize lanes to deliver a consistent 99.4% on-time milestone performance."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Client Partnership",
    description: "We act as an integrated extension of your logistics department, providing assigned dispatch specialists who know your lanes and requirements."
  }
];

const leadershipTeam = [
  {
    name: "Tariq Subhan",
    role: "Founder & Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "With over 25 years in commercial freight and fleet management, Tariq founded Subhan Carriers with a single tractor and an unyielding commitment to shipper trust."
  },
  {
    name: "Elena Rostova",
    role: "VP of Supply Chain & Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specializing in network lane optimization and automated WMS integration, Elena oversees our nationwide terminal hubs and dispatch operations."
  },
  {
    name: "Marcus Vance",
    role: "Director of Fleet & Safety Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "A certified Master Logistics Engineer, Marcus directs our 350+ tractor fleet telematics, SmartWay eco-efficiency, and heavy haul permitting division."
  }
];

export default function About() {
  const breadcrumbs = [{ name: 'About Us', path: '/about' }];

  return (
    <>
      <SEO
        title="About Us - Our Story, Leadership & Freight Standards"
        description="Learn about Subhan Carriers' 18+ year history of dependable road freight, modern fleet standards, corporate values, and dedicated logistics leadership."
        canonical="/about"
      />

      <PageHeader
        badge="Who We Are"
        title="18+ Years of Powering North American Supply Chains"
        subtitle="Founded on principles of unwavering integrity, driver safety, and cutting-edge telematics, Subhan Carriers has evolved from a regional trucking provider into a nationwide logistics powerhouse."
        breadcrumbs={breadcrumbs}
      />

      {/* Narrative & Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Our Heritage & Mission
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading leading-tight">
                Built from the Highway Up to Deliver Trust on Every Single Mile
              </h2>

              <p className="text-base text-body leading-relaxed">
                In 2008, Subhan Carriers began operations with a single sleeper tractor and a resolute mission: eliminate the uncertainty, communication breakdowns, and delayed shipments that historically plagued the commercial freight industry.
              </p>

              <p className="text-base text-body leading-relaxed">
                Over the past eighteen years, we have methodically expanded into a nationwide carrier operating over 350 modern tractors, 53ft composite dry vans, temperature-controlled reefers, and engineered heavy-haul trailers. We've established strategic regional terminals in key industrial logistics gateways including Chicago, Dallas, Atlanta, and Los Angeles.
              </p>

              <p className="text-base text-body leading-relaxed">
                Despite our rapid institutional growth, our philosophy remains personal. When you tender a load with Subhan Carriers, you are assigned a dedicated logistics coordinator who knows your cargo, monitors your transit milestones, and remains on-call 24 hours a day, 7 days a week.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <Target className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-heading">Our Mission</h4>
                    <p className="text-xs text-body mt-1">To provide frictionless, safe, and cost-efficient transportation that fuels our clients' competitive edge.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <Award className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-heading">Our Vision</h4>
                    <p className="text-xs text-body mt-1">To stand as North America's most technologically advanced and trusted medium-to-enterprise logistics carrier.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80"
                  alt="Subhan Carriers Fleet on Highway"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                
                {/* Floating Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black font-heading text-primary">18+ Years</div>
                    <div className="text-xs text-slate-600 font-medium">Continuous Excellence</div>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div>
                    <div className="text-2xl font-black font-heading text-secondary">99.4%</div>
                    <div className="text-xs text-slate-600 font-medium">On-Time SLA Delivery</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-surface-light border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Foundation"
            title="The Core Values Guiding Every Dispatch"
            subtitle="Our operational culture is defined by four core tenets that shape every client interaction and highway journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Card key={idx} className="p-6 bg-white flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-heading mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Executive Leadership"
            title="Experienced Leaders Steer Our Vision"
            subtitle="Meet the logistics veterans guiding Subhan Carriers toward sustainable, technological leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <Card key={idx} className="bg-white border border-slate-100 overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold font-heading">{member.name}</h3>
                    <p className="text-xs text-accent font-semibold">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Compliance Banner */}
      <section className="py-16 bg-primary-900 text-white border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-6">
            Certified to the Highest Industry Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteConfig.certifications.slice(0, 4).map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
                <span className="font-semibold text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Partner with a Proven Carrier Today"
        subtitle="Discover how Subhan Carriers can optimize your freight expenditure and deliver seamless peace of mind across all your trade lanes."
      />
    </>
  );
}
