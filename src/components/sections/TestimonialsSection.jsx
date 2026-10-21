import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-surface-light dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Client Trust"
          title="What Supply Chain Leaders Say About Us"
          subtitle="From Fortune 500 automotive manufacturers to regional cold-chain distributors, discover why shippers make Subhan Carriers their primary carrier."
        />

        {/* Featured Testimonial Slider / Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-soft-lg transition-colors">
            {/* Background Decorative Quote Mark */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-slate-100 dark:text-slate-800/60 -scale-x-100 pointer-events-none" />

            {/* Current Testimonial Item */}
            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                  5.0 / 5.0 Verified Logistics Partner
                </span>
              </div>

              {/* Text Quote */}
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-800 dark:text-slate-100 leading-relaxed italic mb-8 font-heading">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="font-bold font-heading text-lg text-heading dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-body dark:text-slate-400">
                      {testimonials[currentIndex].role} &bull; <span className="font-semibold text-secondary">{testimonials[currentIndex].company}</span>
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      Service Lane: {testimonials[currentIndex].serviceUsed} ({testimonials[currentIndex].location})
                    </p>
                  </div>
                </div>

                {/* Slider Navigation Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 hover:border-secondary hover:bg-secondary hover:text-white flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
