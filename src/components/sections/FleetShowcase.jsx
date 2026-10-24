import React, { useState } from 'react';
import {
  Truck,
  Gauge,
  ShieldCheck,
  Layers,
  ArrowRight,
  Check,
  Flame
} from 'lucide-react';
import { fleetVehicles } from '../../data/fleet';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function FleetShowcase({
  limit,
  showHeader = true,
  showFilters = true
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Highway Tractors', 'Temperature Controlled', 'Dry Freight', 'Heavy & Oversized', 'Expedited & Hot-Shot'];

  const filteredVehicles = fleetVehicles.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayVehicles = limit ? filteredVehicles.slice(0, limit) : filteredVehicles;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeading
            badge="Modern Rolling Stock"
            title="Our High-Performance Commercial Fleet"
            subtitle="Equipped with satellite telematics, automated emergency braking, and eco-efficient SmartWay powertrains averaging under 2 years of age."
          />
        )}

        {/* Category Filter Tabs */}
        {showFilters && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${selectedCategory === cat
                  ? 'bg-primary dark:bg-secondary text-white shadow-soft'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="flex flex-col h-full group">
              {/* Vehicle Photo with category badge */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge variant="dark" className="text-[10px]">
                    {vehicle.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-slate-200">{vehicle.model}</span>
                  <span className="bg-accent/90 text-white font-mono px-2 py-0.5 rounded text-[11px] font-bold">
                    {vehicle.countInFleet}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-heading text-heading dark:text-white mb-2 group-hover:text-secondary transition-colors">
                  {vehicle.name}
                </h3>

                <p className="text-xs sm:text-sm text-body dark:text-slate-400 leading-relaxed mb-4">
                  {vehicle.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 mb-4 grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(vehicle.specs).slice(0, 4).map(([key, value], idx) => (
                    <div key={idx} className="border-b border-slate-200/60 dark:border-slate-700/60 pb-1">
                      <span className="block text-[10px] text-slate-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Features Bullet points */}
                <div className="space-y-1.5 pt-2 mb-6 flex-grow">
                  {vehicle.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Check className="w-3.5 h-3.5 text-highlight shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                {/* ?equipment=${encodeURIComponent(vehicle.name)} */}
                <Button
                  to={`/contact`}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-white dark:border-slate-700 dark:text-slate-200"
                  icon={ArrowRight}
                >
                  Book This Equipment
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Extra fleet CTA */}
        {limit && (
          <div className="mt-12 text-center">
            <Button to="/fleet" variant="secondary" size="lg" icon={ArrowRight}>
              View Full 350+ Fleet Inventory & Specs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
