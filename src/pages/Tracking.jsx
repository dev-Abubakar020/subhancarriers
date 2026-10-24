import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  FileText, 
  Share2, 
  Printer, 
  AlertCircle,
  Thermometer,
  Gauge,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { siteConfig } from '../data/siteConfig';

// Mock Tracking Database
const mockShipments = {
  "SC-89241": {
    trackingNumber: "SC-89241",
    bolNumber: "BOL-PK-9812",
    status: "In Transit",
    statusBadge: "On Schedule",
    service: "Inter-City Goods Transport - 15ft Mazda Truck",
    origin: {
      facility: "Subhan Carriers Central Goods Terminal",
      city: "Jaranwala / Faisalabad",
      date: "Oct 23, 2026 - 07:00 AM",
      completed: true
    },
    destination: {
      facility: "Karachi Port Qasim Freight Terminal",
      city: "Karachi, Sindh",
      eta: "Oct 24, 2026 - 06:30 PM",
      completed: false
    },
    currentLocation: "M-5 Motorway Southbound (Passing Rohri / Sukkur Bypass)",
    speed: "78 KM/H",
    temperature: "Ambient Weather Sealed",
    driverTeam: "Subhan Crew (M. Riaz & Tariq Mehmood)",
    equipment: "Mazda Titan 15ft #FD-412 with Power Tailgate",
    cargoDescription: "Industrial Textile & General Commercial Freight (3,800 kg)",
    steps: [
      { title: "Goods Loaded & Tailgate Sealed at Terminal", time: "Oct 23, 2026 - 07:00 AM", location: "Jaranwala / Faisalabad", done: true },
      { title: "Departed Faisalabad Central Hub via M-4", time: "Oct 23, 2026 - 08:15 AM", location: "Faisalabad, Punjab", done: true },
      { title: "Crossed Multan Regional Transit Station", time: "Oct 23, 2026 - 01:45 PM", location: "Multan, South Punjab", done: true },
      { title: "Highway In-Transit - Passing Sukkur Bypass", time: "Oct 24, 2026 - 06:15 AM", location: "Sukkur, Sindh", done: true, current: true },
      { title: "Arrival at Hyderabad Toll Staging", time: "Oct 24, 2026 - 02:00 PM (Est.)", location: "Hyderabad, Sindh", done: false },
      { title: "Doorstep Delivery & Consignee POD Signature", time: "Oct 24, 2026 - 06:30 PM (Est.)", location: "Karachi, Sindh", done: false },
    ]
  },
  "SC-77103": {
    trackingNumber: "SC-77103",
    bolNumber: "BOL-PK-6450",
    status: "Delivered",
    statusBadge: "Safely Delivered to Doorstep",
    service: "Full House Shifting & Furniture Packing Plan",
    origin: {
      facility: "Residential Pickup (DHA Phase 5)",
      city: "Lahore, Punjab",
      date: "Oct 22, 2026 - 08:00 AM",
      completed: true
    },
    destination: {
      facility: "Delivered to Residence (Sector F-7)",
      city: "Islamabad, ICT",
      eta: "Delivered on Oct 22, 2026 - 05:45 PM",
      completed: true
    },
    currentLocation: "Delivered at Destination Residence (Islamabad)",
    speed: "0 KM/H (Completed)",
    temperature: "Protected Multi-Layer Packing",
    driverTeam: "Packing Crew #04 (Lead: Dilbar Ali)",
    equipment: "Shehzore Covered 10ft Truck #LH-8902",
    cargoDescription: "Complete Household Furniture, Electronics, Beds (Dismantled & Reassembled)",
    steps: [
      { title: "Furniture Packed & Loaded with Bubble Wrap", time: "Oct 22, 2026 - 08:00 AM", location: "Lahore, Punjab", done: true },
      { title: "Departed Lahore via M-2 Motorway", time: "Oct 22, 2026 - 09:30 AM", location: "Lahore, Punjab", done: true },
      { title: "Passed Salt Range Kallar Kahar Crossing", time: "Oct 22, 2026 - 01:15 PM", location: "Kallar Kahar, Punjab", done: true },
      { title: "Delivered, Unloaded & Reassembled at Doorstep", time: "Oct 22, 2026 - 05:45 PM", location: "Islamabad, ICT", done: true, current: true },
    ]
  }
};

export default function Tracking() {
  const [searchParams] = useSearchParams();
  const [searchNumber, setSearchNumber] = useState('');
  const [activeShipment, setActiveShipment] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize search from query parameter if present
  useEffect(() => {
    const numberFromQuery = searchParams.get('number');
    if (numberFromQuery) {
      setSearchNumber(numberFromQuery);
      performSearch(numberFromQuery);
    } else {
      // Default to the first demo shipment
      performSearch("SC-89241");
    }
  }, [searchParams]);

  const performSearch = (query) => {
    const trimmed = query.trim().toUpperCase();
    setHasSearched(true);
    if (mockShipments[trimmed]) {
      setActiveShipment(mockShipments[trimmed]);
    } else {
      // Generates a realistic mock shipment for any tracking query entered by user
      setActiveShipment({
        trackingNumber: trimmed,
        bolNumber: `BOL-${trimmed}`,
        status: "In Transit",
        statusBadge: "Active Highway Dispatch",
        service: "Goods Transport - 15ft Mazda Truck",
        origin: {
          facility: "Subhan Carriers Central Goods Terminal",
          city: "Faisalabad, Punjab",
          date: "Yesterday - 08:00 AM",
          completed: true
        },
        destination: {
          facility: "Commercial Receiving Goods Terminal",
          city: "Rawalpindi / Islamabad",
          eta: "Today - 04:00 PM",
          completed: false
        },
        currentLocation: "M-2 Motorway Corridor (Active Telemetry)",
        speed: "75 KM/H",
        temperature: "Covered Cargo Protection",
        driverTeam: "Subhan Certified Driver",
        equipment: "15ft Mazda Goods Transport Truck",
        cargoDescription: "Commercial Goods Consignment - Handled with Care",
        steps: [
          { title: "Goods Loaded & Verified at Terminal", time: "Yesterday - 08:00 AM", location: "Faisalabad, Punjab", done: true },
          { title: "Departed Origin Regional Terminal", time: "Yesterday - 09:30 AM", location: "Faisalabad, Punjab", done: true },
          { title: "Motorway In-Transit Checkpoint Verified", time: "Today - 11:45 AM", location: "M-2 Motorway", done: true, current: true },
          { title: "Destination Terminal Arrival & Doorstep Delivery", time: "Today - 04:00 PM (Projected)", location: "Islamabad / Rawalpindi", done: false },
        ]
      });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchNumber.trim()) return;
    performSearch(searchNumber);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const breadcrumbs = [{ name: 'Shipment Tracking', path: '/tracking' }];

  return (
    <>
      <SEO
        title="Live Shipment Tracking - Real-Time Highway GPS & Reefer Telematics"
        description="Track your commercial freight in real time with Subhan Carriers' live GPS portal. Enter your BOL or tracking number for speed, temperature, and milestone updates."
        canonical="/tracking"
      />

      <PageHeader
        badge="Live Telematics Portal"
        title="Real-Time Cargo & Fleet Tracking"
        subtitle="Monitor exact highway coordinates, ambient temperature logs, driver milestones, and estimated delivery windows updated every 60 seconds."
        breadcrumbs={breadcrumbs}
      />

      {/* Search Input Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearchSubmit} className="bg-surface-light dark:bg-slate-800 p-2 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-soft flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-3 px-4 py-3 w-full">
              <Search className="w-5 h-5 text-secondary shrink-0" />
              <input
                type="text"
                value={searchNumber}
                onChange={(e) => setSearchNumber(e.target.value)}
                placeholder="Enter Bill of Lading (BOL) or Tracking Number (e.g. SC-89241)"
                aria-label="Tracking or BOL Number"
                className="w-full bg-transparent text-heading dark:text-white font-medium text-sm focus:outline-none placeholder-slate-400"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-600 text-white font-semibold text-sm transition-all shadow-glow-accent whitespace-nowrap btn-shimmer flex items-center justify-center gap-2"
            >
              <span>Track Shipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Links */}
          <div className="mt-3 flex items-center flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 justify-center">
            <span>Quick Demo Numbers:</span>
            <button
              onClick={() => { setSearchNumber('SC-89241'); performSearch('SC-89241'); }}
              className="font-mono text-secondary hover:text-accent font-semibold underline px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800"
            >
              SC-89241 (Reefer Active)
            </button>
            <button
              onClick={() => { setSearchNumber('SC-77103'); performSearch('SC-77103'); }}
              className="font-mono text-secondary hover:text-accent font-semibold underline px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800"
            >
              SC-77103 (Delivered Express)
            </button>
          </div>
        </div>
      </section>

      {/* Shipment Results Section */}
      {activeShipment && (
        <section className="py-16 md:py-20 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header Result Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-2xl font-black text-primary dark:text-white">
                      {activeShipment.trackingNumber}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {activeShipment.statusBadge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    BOL: <span className="font-mono font-medium text-slate-600 dark:text-slate-300">{activeShipment.bolNumber}</span> &bull; Service: <span className="font-semibold text-slate-700 dark:text-slate-200">{activeShipment.service}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-secondary hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Share2 className="w-4 h-4 text-secondary" />
                    <span>{copied ? 'Link Copied!' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-secondary hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Printer className="w-4 h-4 text-secondary" />
                    <span>Print Manifest</span>
                  </button>
                </div>
              </div>

              {/* Origin to Destination Progress Bar */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Origin */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Origin Facility
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading dark:text-white">
                      {activeShipment.origin.city}
                    </h3>
                    <p className="text-xs text-body dark:text-slate-400">
                      {activeShipment.origin.facility}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Departed: {activeShipment.origin.date}
                    </p>
                  </div>
                </div>

                {/* Destination */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Destination Terminal
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading dark:text-white">
                      {activeShipment.destination.city}
                    </h3>
                    <p className="text-xs text-body dark:text-slate-400">
                      {activeShipment.destination.facility}
                    </p>
                    <p className="text-xs text-emerald-500 font-semibold mt-1">
                      {activeShipment.destination.eta}
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Telemetry Dash */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-surface-light dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">GPS Highway Location</span>
                  <span className="text-xs font-bold text-heading dark:text-white truncate block mt-0.5">{activeShipment.currentLocation}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Vehicle Speed</span>
                  <span className="text-xs font-bold text-heading dark:text-white block mt-0.5">{activeShipment.speed}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Reefer Temperature</span>
                  <span className="text-xs font-bold text-secondary block mt-0.5">{activeShipment.temperature}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Assigned Tractor</span>
                  <span className="text-xs font-bold text-heading dark:text-white block mt-0.5">{activeShipment.equipment}</span>
                </div>
              </div>
            </div>

            {/* Tracking Milestone Timeline */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-heading dark:text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Consignment Milestone History</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {activeShipment.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    {/* Circle Node */}
                    <div className={`absolute left-1.5 top-1 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-900 ${
                      step.current ? 'border-accent bg-accent animate-pulse' :
                      step.done ? 'border-secondary bg-secondary' : 'border-slate-300 dark:border-slate-700'
                    }`} />

                    <div>
                      <h4 className={`text-sm font-bold font-heading ${step.current ? 'text-accent' : step.done ? 'text-heading dark:text-white' : 'text-slate-400'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-body dark:text-slate-400">
                        Location: {step.location}
                      </p>
                    </div>

                    <div className="text-xs text-slate-400 font-medium sm:text-right shrink-0">
                      {step.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cargo Manifest Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-heading dark:text-white mb-4">
                Cargo & Insurance Specifications
              </h3>
              <p className="text-sm text-body dark:text-slate-300 leading-relaxed mb-4">
                {activeShipment.cargoDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-highlight" />
                  <span>CPEC Registered Cargo Transit Guarantee — Full Consignment Protected</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-secondary" />
                  <span>Electronic Proof of Delivery (e-POD) Ready upon Arrival</span>
                </span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Book Your Next High-Priority Load?"
        subtitle="Enjoy instant rate locks, continuous telematics, and automated POD delivery with Subhan Carriers."
      />
    </>
  );
}
