import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Warehouse, 
  Zap, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { services } from '../../data/services';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const iconMap = {
  Truck: Truck,
  Warehouse: Warehouse,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
};

export default function ServicesGrid({ 
  limit, 
  showHeader = true,
  title = "Comprehensive Freight & Supply Chain Services",
  subtitle = "Engineered for maximum reliability, speed, and cost efficiency across North American commercial transit corridors."
}) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-28 bg-surface-light dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeading
            badge="What We Do"
            title={title}
            subtitle={subtitle}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayServices.map((service) => {
            const Icon = iconMap[service.iconName] || Truck;

            return (
              <Card 
                key={service.id} 
                className="flex flex-col h-full group transition-all duration-300"
              >
                {/* Service Card Top Image / Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="dark" className="text-[10px] py-0.5 px-2.5">
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Service Icon floating badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-soft flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-heading dark:text-white group-hover:text-secondary transition-colors">
                    {service.shortTitle}
                  </h3>

                  <p className="mt-2 text-sm text-body dark:text-slate-400 leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 flex-grow">
                    {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-highlight shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* SLA pill */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{service.sla}</span>
                  </div>

                  {/* Action links */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 group/link"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <Link
                      to={`/quote?service=${service.slug}`}
                      className="text-xs font-semibold text-accent hover:underline"
                    >
                      Quick Quote
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <p className="text-sm text-body dark:text-slate-400 mb-4">
            Need a custom freight or logistics configuration tailored to your supply chain?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/quote" variant="accent" size="md" icon={ArrowRight}>
              Request Customized Quote
            </Button>
            <Button to="/contact" variant="outline" size="md" className="dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
              Speak with a Freight Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
