/**
 * Subhan Carriers - Central Site Configuration
 * Pakistan's Best Transportation Services | Goods Transport & Moving Company
 */
export const siteConfig = {
  name: "Subhan Carriers",
  legalName: "Subhan Carriers Goods Transport Company",
  tagline: "Pakistan's Best Transportation Services & Goods Moving Partner",
  shortDesc: "Subhan Carriers is the best rated goods transport and moving company in Pakistan. We provide safe, reliable freight and shifting services in Lahore, Karachi, Islamabad, Faisalabad, Multan, Sahiwal, Quetta, Gujranwala, Sialkot, Okara, Rawalpindi, and to cities all over Pakistan.",

  contact: {
    phonePrimary: "(+92) 300-6539785",
    phoneSecondary: "+92 300 6539785",
    whatsapp: "+923006539785",
    whatsappUrl: "https://wa.me/923006539785",
    emergencyDispatch: "(+92) 300-6539785 (24/7 Helpline)",
    emailGeneral: "subhancarriers@gmail.com",
    emailQuotes: "subhancarriers@gmail.com",
    emailSupport: "subhancarriers@gmail.com",
    headquarters: {
      name: "Subhan Carriers Goods Transport Company",
      street: "Near Ibrahim Marriage Hall, Canal Road",
      city: "Jaranwala",
      district: "Faisalabad",
      state: "Punjab",
      zip: "37250",
      country: "Pakistan",
      coordinates: { lat: 31.329107, lng: 73.403046 },
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.0820641085998!2d73.40304551447765!3d31.329106663697495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39227fa792273227%3A0xd6b317bc6e8cbda4!2sSubhan%20Carrier%20goods%20Transport%20Company%20%2C%20Jaranwala%2C%20Faisalabad.!5e0!3m2!1sen!2s!4v1680485352097!5m2!1sen!2s"
    },
    hubs: [
      {
        city: "Jaranwala / Faisalabad (Central HQ)",
        address: "Near Ibrahim Marriage Hall, Canal Road, Jaranwala (37250), Faisalabad District, Punjab",
        phone: "(+92) 300-6539785",
        type: "Central Goods Terminal & Operations Command"
      },
      {
        city: "Lahore Terminal",
        address: "Bund Road Goods Transport Hub, near Thokar Niaz Baig, Lahore, Punjab",
        phone: "(+92) 300-6539785",
        type: "Punjab Regional Distribution & Inter-City Transit Hub"
      },
      {
        city: "Whole Country",
        address: "All Over Pakistan",
        phone: "(+92) 300-6539785",
        type: "Nationwide Terminal & Freight Network"
      },
    ],
    operatingHours: {
      dispatch: "24/7 / 365 Days a Year (Online & Phone)",
      office: "Monday - Saturday: 08:00 AM - 09:00 PM PKT",
      saturday: "08:00 AM - 09:00 PM PKT",
      sunday: "24/7 Emergency Dispatch & Booking Available"
    }
  },

  leadership: {
    ceo: {
      name: "Subtain Haider",
      title: "Chief Executive Officer (CEO)",
      qualification: "BMS (Bachelor of Management Sciences)",
      experience: "15+ Years in Goods Transport & Logistics",
      languages: "Urdu, English, Punjabi",
      message: "At Subhan Carriers, our mission is to eliminate moving stress and deliver safe, dependable transportation for families and businesses all across Pakistan."
    },
    founder: {
      name: "Dilbar Ali",
      title: "Co-Founder & Operations Director",
      experience: "15+ Years in Heavy Trucking & Inter-City Fleet Dispatch"
    },
    coordinator: {
      name: "Ali Akbar",
      title: "Head of Freight & Customer Coordination"
    }
  },

  socials: {
    whatsapp: "https://wa.me/923006539785",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com"
  },

  stats: [
    { label: "Years of Service", value: 15, suffix: "+", description: "Trusted moving & freight experience" },
    { label: "Successful Projects", value: 521, suffix: "+", description: "Safe moves and cargo deliveries completed" },
    { label: "Satisfied Clients", value: 232, suffix: "+", description: "Commercial & residential clients" },
    { label: "Support Hours", value: 1453, suffix: "+", description: "Dedicated customer service logged" },
    { label: "Dedicated Workers", value: 32, suffix: "+", description: "Trained drivers, loaders & packers" },
    { label: "Cities Across Pakistan", value: 45, suffix: "+", description: "Nationwide goods network coverage" }
  ],

  certifications: [
    "CPEC (China-Pakistan Economic Corridor) Transport Registered",
    "Central Asia Transportation License Registered Carrier",
    "All Pakistan Goods Transport Association (APGTA) Compliant",
    "Comprehensive Safe Cargo Transit Guarantee",
    "Transparent Pricing — Online & Cash on Delivery Accepted"
  ],

  navigation: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "All Services", path: "/services" },
        { name: "Goods Transport & Road Freight", path: "/services/road-freight" },
        { name: "Warehousing & House Shifting", path: "/services/warehousing" },
        { name: "Express & Same-Day Delivery", path: "/services/express-delivery" },
        { name: "Commercial & Heavy Haulage", path: "/services/heavy-haulage" },
      ]
    },
    { name: "Fleet & Vehicles", path: "/fleet" },
    { name: "Track Shipment", path: "/tracking" },
    { name: "Get a Quote", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ]
};
