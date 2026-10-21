export const fleetVehicles = [
  {
    id: "freight-tractors",
    name: "Aerodynamic Long-Haul Tractors",
    model: "Freightliner Cascadia & Kenworth T680",
    category: "Highway Tractors",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    description: "EPA SmartWay-certified sleeper cab tractors equipped with Detroit DD15 505HP engines, active lane assist, forward collision mitigation, and in-cab satellite telematics.",
    specs: {
      horsepower: "505 HP @ 1,625 RPM",
      fuelEfficiency: "7.8 - 8.4 MPG (SmartWay)",
      payloadTowing: "80,000 lbs Gross Vehicle Weight (GVW)",
      telematics: "60-sec GPS + J1939 Engine Diagnostics",
      safety: "Detroit Assurance 5.0 with Active Brake Assist"
    },
    countInFleet: "185 Units",
    averageAge: "1.8 Years",
    features: [
      "Dual Sleepers for Non-Stop Expedited Teams",
      "Auxiliary Power Units (APU) for Zero-Idle Cab Climate",
      "Predictive Powertrain Cruise Control",
      "Blind Spot Radar & Digital Surround Cameras"
    ]
  },
  {
    id: "reefer-trailers",
    name: "53-Foot Multi-Zone Reefer Trailers",
    model: "Great Dane Everest with Thermo King Precedent S-600",
    category: "Temperature Controlled",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    description: "Multi-temperature refrigerated trailers engineered for pharmaceuticals, dairy, fresh agricultural produce, and frozen goods with remote temperature control.",
    specs: {
      temperatureRange: "-20°F to +70°F (-29°C to +21°C)",
      internalVolume: "3,850 Cubic Feet",
      palletCapacity: "26 Standard 48x40-inch Pallets",
      doorSensors: "Automated Door-Open Telemetry",
      certification: "FDA Food Safety Modernization Act (FSMA) Compliant"
    },
    countInFleet: "95 Units",
    averageAge: "1.4 Years",
    features: [
      "Continuous Cellular Temperature Telematics",
      "Micro-Channel High-Efficiency Evaporator Coils",
      "E-Track Cargo Tie-Down System with Shoring Beams",
      "Remote Set-Point Override by Dispatch"
    ]
  },
  {
    id: "dry-van-trailers",
    name: "53-Foot High-Cube Dry Van Trailers",
    model: "Wabash National DuraPlate & Great Dane Champion",
    category: "Dry Freight",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    description: "Composite plate dry vans providing maximum interior cubic capacity and moisture-sealed protection for general freight, retail distribution, and industrial parts.",
    specs: {
      interiorHeight: "110 Inches Clear Height",
      interiorWidth: "101.5 Inches",
      payloadCapacity: "45,000 lbs (20,400 kg)",
      floorRating: "20,000 lbs Forklift Axle Floor Rating",
      doorStyle: "Swing Barn Doors with Anti-Theft Lock Rods"
    },
    countInFleet: "240 Units",
    averageAge: "2.1 Years",
    features: [
      "DuraPlate Composite Walls for Zero Snagging",
      "Full Logistic E-Tracks Every 16 Inches",
      "Translucent Roof Panels with Interior LED Strips",
      "Tire Inflation & Auto-Pressure Maintenance Systems"
    ]
  },
  {
    id: "heavy-haul-lowboys",
    name: "Multi-Axle Heavy Haul & RGN Trailers",
    model: "Trail King & Fontaine Magnitude Lowboy / Step-Deck",
    category: "Heavy & Oversized",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    description: "Hydraulic Removable Gooseneck (RGN) and multi-axle modular trailers capable of loading oversized excavators, generators, wind turbine components, and bridge beams.",
    specs: {
      payloadCapacity: "Up to 240,000 lbs (120 Tons)",
      axleConfigurations: "3-Axle to 9-Axle Steerable Modular Combos",
      deckHeight: "18 - 24 Inches Ground Clearance",
      wellLength: "26 to 48 Feet Extendable Deck",
      ramps: "Hydraulic Front Flip Ramps for Drive-On Equipment"
    },
    countInFleet: "42 Units",
    averageAge: "2.5 Years",
    features: [
      "Detachable Hydraulic Neck for Fast Drive-On Loading",
      "Independent Air Ride Suspension with Manual Override",
      "Outriggers for Extra-Wide Over-Dimensional Loads",
      "Equipped with Amber Strobe Packages & Escort Radios"
    ]
  },
  {
    id: "expedited-hotshot",
    name: "Expedited Straight Trucks & Sprinters",
    model: "Freightliner M2 106 & Mercedes-Benz Sprinter 3500XD",
    category: "Expedited & Hot-Shot",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    description: "Fast-dispatch commercial vehicles equipped with hydraulic liftgates for urgent, time-sensitive freight deliveries without requiring traditional loading docks.",
    specs: {
      straightTruckPayload: "Up to 12,000 lbs (Box Truck 26ft)",
      sprinterPayload: "Up to 4,500 lbs (Cargo Van)",
      liftgateCapacity: "3,500 lbs Tuck-Under Hydraulic Lift",
      speedProfile: "Rapid Point-to-Point Direct Transit",
      access: "Residential, Jobsite & Commercial Ground-Level"
    },
    countInFleet: "60 Units",
    averageAge: "1.2 Years",
    features: [
      "Direct Priority Dispatch within 45 Minutes",
      "Dedicated Non-Stop Driver Routing",
      "Heavy-Duty Hydraulic Power Liftgate",
      "Side Door Access for Small Crate Unloading"
    ]
  }
];
