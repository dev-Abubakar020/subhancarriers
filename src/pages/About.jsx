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
  HeartHandshake,
  Clock,
  PhoneCall
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
    title: "Safely Moving to Doorstep",
    description: "Every shipment, household item, and piece of machinery is treated with the utmost care, packed with multi-layer materials and safely transported."
  },
  {
    icon: Compass,
    title: "Honesty & No Hidden Fees",
    description: "We do not charge any hidden fees for your moving or freight. What we quote is what you pay, with complete transparency in every booking."
  },
  {
    icon: TrendingUp,
    title: "Punctual Delivery Guarantee",
    description: "Our dedicated team works hard to make sure your move or goods transport is completed by the deadline you set, without unnecessary highway delays."
  },
  {
    icon: HeartHandshake,
    title: "Manageable & Professional Team",
    description: "From our polite drivers to our skilled packers and dispatch coordinators, our staff is trained to demolish, arrange, and set up your items with finesse."
  }
];

const leadershipTeam = [
  {
    name: "Subtain Haider",
    role: "Chief Executive Officer (CEO)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Holding a BMS (Bachelor of Management Sciences) degree with 15+ years of leadership in goods transportation, Subtain founded Subhan Carriers with an unwavering commitment to customer trust, punctuality, and stress-free moving across Pakistan."
  },
  {
    name: "Dilbar Ali",
    role: "Co-Founder & Operations Director",
    image: "https://subhancarriers.surge.sh/assets/img/testimonials/iii.jpeg",
    bio: "With 15+ years in inter-provincial fleet management and logistics dispatch, Dilbar directs our nationwide goods transport fleet, driver safety protocols, and motorway operations connecting Sindh, Punjab, and KPK."
  },
  {
    name: "Ali Akbar",
    role: "Head of Freight & Customer Coordination",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Ali manages our 24/7 central dispatch desk and WhatsApp coordination, ensuring instantaneous client responses, route tracking, and custom packaging support for both commercial and residential clients."
  }
];

export default function About() {
  const breadcrumbs = [{ name: 'About Us', path: '/about' }];

  return (
    <>
      <SEO
        title="About Us - Pakistan's Best Transportation Services | Subhan Carriers"
        description="Learn about Subhan Carriers' 15+ year history of dependable goods transport, house shifting, professional packing, CPEC registered fleet, and dedicated leadership in Pakistan."
        canonical="/about"
      />

      <PageHeader
        badge="Who We Are"
        title="15+ Years of Pakistan's Best Transportation Services"
        subtitle="SUBHAN CARRIERS is a packing and moving company that provides time and cost efficient goods transport services throughout Pakistan with a team of expert packers and movers."
        breadcrumbs={breadcrumbs}
      />

      {/* Narrative & Story Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-400 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block">
                Our Heritage & Mission
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-heading dark:text-white leading-tight">
                Your Lightning Fast Delivery Partner Built on Genuine Customer Trust
              </h2>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                <strong className="text-primary dark:text-secondary-400 font-semibold">SUBHAN CARRIERS</strong> is the best-rated moving and goods transport company in Pakistan. We provide domestic transport and shifting services in Lahore, Islamabad, Faisalabad, Multan, Sahiwal, Karachi, Quetta, Gujranwala, Sialkot, Okara, Rawalpindi, and to cities all over Pakistan safely and securely.
              </p>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                We aim to make our packing and moving services accessible to everyone in the country. Our company guarantees quality and variety when it comes to our array of services—from 10ft covered Shehzore trucks and 15ft Mazda trucks with hydraulic tailgates, to 24ft long-chassis container trucks and 40ft multi-axle freight carriers.
              </p>

              <p className="text-base text-body dark:text-slate-300 leading-relaxed">
                Our company is registered in the Central Asia Transportation License and also from CPEC (China-Pakistan Economic Corridor). Subhan Carriers Goods Transport Company is growing its customers' trust upon us because we heartily understand and value the emotions of our customers, use premium-grade packing material, and do not charge any hidden fees for your moving.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start gap-3 transition-colors">
                  <Target className="w-6 h-6 text-secondary dark:text-secondary-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-heading dark:text-white">Our Mission</h4>
                    <p className="text-xs text-body dark:text-slate-300 mt-1">Equipped with the latest equipment and a skilled team of professionals, our mission is to provide clients with a customizable, safe, affordable, and punctual moving experience.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-start gap-3 transition-colors">
                  <Award className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-heading dark:text-white">Global Standard Services</h4>
                    <p className="text-xs text-body dark:text-slate-300 mt-1">Subhan Carriers provides services that are of a global standard, available all over Pakistan, including CPEC routes and customs clearance support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-slate-100 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80"
                  alt="Subhan Carriers Goods Transport Pakistan"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />

                {/* Floating Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-slate-700/60 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black font-heading text-primary dark:text-white">15+ Years</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Of Trusted Service</div>
                  </div>
                  <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <div className="text-2xl font-black font-heading text-secondary dark:text-secondary-400">521+</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Projects Done</div>
                  </div>
                  <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <div className="text-2xl font-black font-heading text-accent">232+</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-surface-light dark:bg-slate-950/70 border-y border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Foundation"
            title="The Values Guiding Every Move & Shifting"
            subtitle="Our operational commitment is to bring you complete peace of mind with safe delivery and transparent service."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Card key={idx} className="p-6 bg-white dark:bg-slate-900 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body dark:text-slate-300 leading-relaxed">
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
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Executive Leadership"
            title="Experienced Leadership Dedicated to Your Trust"
            subtitle="Meet the founders and coordinators leading Subhan Carriers across Pakistan."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden group">
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
                  <p className="text-xs sm:text-sm text-body dark:text-slate-300 leading-relaxed">
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
            Registered Under Official Logistics Authorities
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
        title="Ready to Move Safely with Pakistan's Best Carrier?"
        subtitle="Call us directly at (+92) 300-6539785 or reach out via WhatsApp for an instant moving rate quote."
      />
    </>
  );
}
