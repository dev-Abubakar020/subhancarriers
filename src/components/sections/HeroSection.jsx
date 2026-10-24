import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Search,
  CheckCircle,
  Truck
} from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { siteConfig } from '../../data/siteConfig';

export default function HeroSection() {
  const [quickTrackNumber, setQuickTrackNumber] = useState('');
  const navigate = useNavigate();

  const handleQuickTrack = (e) => {
    e.preventDefault();
    if (!quickTrackNumber.trim()) return;
    navigate(`/tracking?number=${encodeURIComponent(quickTrackNumber.trim())}`);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient text-white overflow-hidden flex items-center">
      {/* Dynamic Background Noise / Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="dark" icon={ShieldCheck} className="border-secondary/40 bg-secondary/20 text-white">
                Pakistan's Best Transportation Services
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold font-heading tracking-tight leading-[1.12] text-white">
              Your Lightning Fast <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-300 to-amber-400">
                Delivery Partner.
              </span> Safely Moving, Every Mile.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              <strong className="text-white font-semibold">SUBHAN CARRIERS</strong> is Pakistan's best rated moving company and goods transport provider. We provide safe, reliable freight and house shifting services in Lahore, Karachi, Islamabad, Faisalabad, Multan, Sahiwal, Quetta, Gujranwala, Sialkot, Okara, Rawalpindi, and to cities all over Pakistan.
            </p>

            {/* Quick Track Input Bar */}
            {/* <div className="pt-2 max-w-xl">
              <form 
                onSubmit={handleQuickTrack}
                className="bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-2 shadow-soft-lg"
              >
                <div className="flex items-center gap-2.5 px-3 py-2 w-full text-slate-200">
                  <Search className="w-5 h-5 text-accent shrink-0" />
                  <input
                    type="text"
                    value={quickTrackNumber}
                    onChange={(e) => setQuickTrackNumber(e.target.value)}
                    placeholder="Enter Tracking # or BOL (e.g. SC-89241)"
                    aria-label="Shipment Tracking Number"
                    className="bg-transparent border-none text-white text-sm placeholder-slate-400 focus:outline-none w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent hover:bg-accent-600 text-white font-semibold text-sm transition-all shadow-glow-accent whitespace-nowrap btn-shimmer flex items-center justify-center gap-2"
                >
                  <span>Track Cargo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-300 pl-2">
                <span className="text-slate-400">Try demo tracking:</span>
                <button
                  type="button"
                  onClick={() => setQuickTrackNumber('SC-89241')}
                  className="text-accent underline hover:text-white transition-colors"
                >
                  SC-89241
                </button>
                <span>or</span>
                <button
                  type="button"
                  onClick={() => setQuickTrackNumber('SC-77103')}
                  className="text-accent underline hover:text-white transition-colors"
                >
                  SC-77103
                </button>
              </div>
            </div> */}

            {/* Dual CTAs & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/quote"
                variant="accent"
                size="lg"
                icon={ArrowRight}
              >
                Get Instant Quote
              </Button>

              <Button
                to="/services"
                variant="outlineWhite"
                size="lg"
              >
                Explore Services
              </Button>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-highlight shrink-0" />
                <span>Safely Moving to Doorstep</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>24/7 Helpline & Dispatch</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-highlight shrink-0" />
                <span>CPEC & Central Asia Registered</span>
              </div>
            </div>
          </div>

          {/* Right Hero Illustration: Floating Modern Freight Vector Graphic (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">

              {/* Animated Floating Graphic Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">

                {/* Header status bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                      Live Telematics Network
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded-md text-accent">
                    ACTIVE ROUTE #SC-89241
                  </span>
                </div>

                {/* SVG Route Visualization */}
                <div className="relative py-4">
                  <svg className="w-full h-44" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Highway Path */}
                    <path
                      d="M 30 120 C 100 120, 100 40, 180 40 C 260 40, 260 110, 330 70"
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Animated Moving Highway Dash */}
                    <path
                      d="M 30 120 C 100 120, 100 40, 180 40 C 260 40, 260 110, 330 70"
                      stroke="#FF8A00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="animate-road-line"
                    />

                    {/* Origin Waypoint (Faisalabad HQ / Jaranwala) */}
                    <circle cx="30" cy="120" r="7" fill="#14B8A6" />
                    <circle cx="30" cy="120" r="14" stroke="#14B8A6" strokeWidth="2" opacity="0.4" className="animate-pulse" />
                    <text x="18" y="148" fill="#FFFFFF" fontSize="10" fontWeight="bold">Faisalabad HQ</text>

                    {/* Intermediate Waypoint (Multan Transit Depot) */}
                    <circle cx="180" cy="40" r="6" fill="#1D4ED8" />
                    <text x="145" y="22" fill="#E2E8F0" fontSize="10">Multan Transit Depot</text>

                    {/* Current Vehicle Position (Truck Indicator) */}
                    <g transform="translate(245, 60)">
                      <rect x="-18" y="-14" width="36" height="28" rx="8" fill="#FF8A00" filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.3))" />
                      <path d="M-10 -3 H2 V7 H-10 Z" fill="#FFFFFF" />
                      <path d="M4 1 H9 L12 4 V7 H4 Z" fill="#FFFFFF" />
                      <circle cx="-5" cy="8" r="2.5" fill="#0B1F3A" />
                      <circle cx="8" cy="8" r="2.5" fill="#0B1F3A" />
                    </g>

                    {/* Destination Waypoint (Karachi Port Terminal) */}
                    <circle cx="330" cy="70" r="7" fill="#FF8A00" />
                    <circle cx="330" cy="70" r="14" stroke="#FF8A00" strokeWidth="2" opacity="0.4" className="animate-pulse" />
                    <text x="290" y="100" fill="#FFFFFF" fontSize="10" fontWeight="bold">Karachi Port</text>
                  </svg>
                </div>

                {/* Telematics Metrics Card */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                  <div className="bg-white/5 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 uppercase">Speed</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white">78 KM/H</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 uppercase">Cargo Status</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-highlight">Secured</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 uppercase">Est. Arrival</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-accent">Today 6 PM</span>
                  </div>
                </div>

                {/* Floating Notification Badge */}
                <div className="mt-4 bg-gradient-to-r from-secondary/80 to-primary/80 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>In Transit: M-4 Motorway Southbound (Pass Sukkur)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    On Schedule
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
