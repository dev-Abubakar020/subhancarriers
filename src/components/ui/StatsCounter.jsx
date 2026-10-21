import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CounterItem({ value, suffix = '', label, description }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center">
        <span>{count.toLocaleString()}</span>
        <span className="text-accent ml-0.5">{suffix}</span>
      </div>
      <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
        {label}
      </div>
      {description && (
        <div className="mt-1 text-xs text-slate-400">
          {description}
        </div>
      )}
    </div>
  );
}

export default function StatsCounter({ stats, className = '' }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {stats.map((stat, idx) => (
        <CounterItem
          key={idx}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          description={stat.description}
        />
      ))}
    </div>
  );
}
