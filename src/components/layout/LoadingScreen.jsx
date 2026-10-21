import React from 'react';
import { Truck } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-surface-light">
      <div className="relative flex items-center justify-center">
        {/* Glowing pulse ring */}
        <div className="w-20 h-20 rounded-full bg-secondary/15 animate-ping absolute" />
        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shadow-soft relative z-10">
          <Truck className="w-10 h-10 text-secondary animate-bounce" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h4 className="font-heading font-bold text-lg text-primary tracking-wide">
          Subhan Carriers
        </h4>
        <p className="text-xs text-body font-medium mt-1">
          Loading freight network data...
        </p>
      </div>

      {/* Progress track */}
      <div className="w-48 h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary animate-shimmer" 
             style={{ width: '200%', transform: 'translateX(-50%)' }} />
      </div>
    </div>
  );
}
