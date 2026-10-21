/**
 * Subhan Carriers - Central Site Configuration
 * Update branding, phone numbers, addresses, emails, and operating hours here.
 */
export const siteConfig = {
  name: "Subhan Carriers",
  legalName: "Subhan Carriers Logistics Pvt. Ltd.",
  tagline: "Nationwide Freight, Warehousing & Modern Logistics Excellence",
  shortDesc: "Delivering trust, speed, and safety on every mile with 18+ years of freight excellence, modern GPS-enabled fleet, and comprehensive supply chain solutions.",
  
  contact: {
    phonePrimary: "+1 (800) 555-7824",
    phoneSecondary: "+1 (555) 349-8800",
    emergencyDispatch: "+1 (800) 555-HELP (24/7 Dispatch)",
    emailGeneral: "info@subhancarriers.com",
    emailQuotes: "quotes@subhancarriers.com",
    emailSupport: "support@subhancarriers.com",
    headquarters: {
      street: "742 Logistics Parkway, Terminal Hub 4",
      city: "Chicago",
      state: "IL",
      zip: "60607",
      country: "United States",
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    hubs: [
      {
        city: "Chicago Hub (HQ)",
        address: "742 Logistics Parkway, Terminal Hub 4, Chicago, IL 60607",
        phone: "+1 (800) 555-7824",
        type: "National Command & Mega Distribution"
      },
      {
        city: "Dallas Freight Terminal",
        address: "1280 Commerce Way, Bay 12, Dallas, TX 75201",
        phone: "+1 (214) 555-4421",
        type: "Cross-Docking & Cold Storage Facility"
      },
      {
        city: "Atlanta Logistics Depot",
        address: "310 Interstate Blvd, Suite 200, Atlanta, GA 30303",
        phone: "+1 (404) 555-9082",
        type: "East Coast Regional Transit Hub"
      },
      {
        city: "Los Angeles Gateway",
        address: "950 Harbor Boulevard, Dock 18, Long Beach, CA 90802",
        phone: "+1 (310) 555-6673",
        type: "Intermodal & Port Drayage Terminal"
      }
    ],
    operatingHours: {
      dispatch: "24/7 / 365 Days a Year",
      office: "Monday - Friday: 07:00 AM - 07:00 PM EST",
      saturday: "08:00 AM - 04:00 PM EST",
      sunday: "Emergency Dispatch Only"
    }
  },

  socials: {
    linkedin: "https://linkedin.com/company/subhan-carriers",
    facebook: "https://facebook.com/subhancarriers",
    twitter: "https://twitter.com/subhancarriers",
    youtube: "https://youtube.com/@subhancarriers"
  },

  stats: [
    { label: "Years of Excellence", value: 18, suffix: "+", description: "Continuous freight operations" },
    { label: "Successful Deliveries", value: 125, suffix: "K+", description: "On-time cargo completed" },
    { label: "Enterprise Clients", value: 3500, suffix: "+", description: "B2B & industrial partners" },
    { label: "Cities Connected", value: 250, suffix: "+", description: "Nationwide coverage routes" }
  ],

  certifications: [
    "DOT Certified & Bonded Carrier #489210",
    "ISO 9001:2015 Quality Management",
    "C-TPAT Certified Logistics Partner",
    "SmartWay Transport Environmental Partner",
    "$5,000,000 Comprehensive Cargo Insurance"
  ],

  navigation: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
        { name: "All Services", path: "/services" },
        { name: "Road Freight", path: "/services/road-freight" },
        { name: "Warehousing & Storage", path: "/services/warehousing" },
        { name: "Express Delivery", path: "/services/express-delivery" },
        { name: "Heavy Haulage", path: "/services/heavy-haulage" },
      ]
    },
    { name: "Fleet", path: "/fleet" },
    { name: "Track Cargo", path: "/tracking" },
    { name: "Get Quote", path: "/quote" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ]
};
