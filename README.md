# Subhan Carriers — Enterprise Transport & Logistics Platform

A production-ready, multi-page commercial transport and logistics web application built with **React 18**, **Vite**, **Tailwind CSS**, **React Router v6**, **Framer Motion**, and **react-helmet-async**.

---

## 🌟 Key Features

- **Full Dark Mode & Theme Switcher**:
  - One-click toggle between **Light Mode** and **Sleek Deep Midnight Dark Mode** (`#071426` / `#0B1F3A`).
  - **Pretty Colors Selection**: 5 curated brand themes dynamically switchable on the fly:
    1. 🔶 **Amber Flame** (Default Subhan Brand — Electric Amber `#FF8A00` & Royal Blue `#1D4ED8`)
    2. 🌲 **Emerald Fleet** (Eco Logistics — Lush Emerald `#10B981` & Deep Teal `#0F766E`)
    3. ⚡ **Cyber Cyan** (High-Tech Telematics — Cyan `#06B6D4` & Electric Blue `#2563EB`)
    4. 🌅 **Sunset Ruby** (Expedited Hot-Shot — Crimson Ruby `#F43F5E` & Amber `#F59E0B`)
    5. 🔮 **Royal Violet** (Premium Heavy Haul — Royal Purple `#8B5CF6` & Vivid Indigo `#4F46E5`)
  - User preference persisted in `localStorage` and respects OS system preferences (`prefers-color-scheme`).

- **14 Dedicated Routes with Lazy Loading**:
  - Code-split routes via `React.lazy` and `Suspense` with a branded vehicle loader (`LoadingScreen.jsx`).
  - Sticky glassmorphism Navbar with desktop dropdowns, top dispatch bar, and mobile slide-in menu.

- **Interactive Shipment Tracking (`/tracking`)**:
  - Demo tracking portal with real-time telematics: highway speed, ambient reefer temperature (`-4.2°F`), tractor ID, driver team, and milestone progress.
  - Test demo tracking numbers: `SC-89241` (Reefer Active) or `SC-77103` (Delivered Express), or enter any custom tracking number.
  - Supports URL search parameters (e.g., `/tracking?number=SC-89241`).

- **Dynamic Freight Rate Calculator & Quote Form (`/quote`)**:
  - Live freight bracket calculation based on service type, pallet count, cargo weight (lbs), and temperature control.
  - Validated multi-section form with instant confirmation reference generation (`QT-XXXXXX`).

- **5 SEO-Focused Blog Articles (`/blog` & `/blog/:slug`)**:
  - 5 comprehensive articles (~600–800 words each, no lorem ipsum):
    1. *"How to Choose the Right Freight Carrier for Your Business"*
    2. *"10 Tips to Reduce Shipping Costs Without Compromising Quality"*
    3. *"Road Freight vs. Rail vs. Air: Which Is Best for Your Cargo?"*
    4. *"How to Pack and Prepare Goods for Safe Long-Distance Transport"*
    5. *"The Future of Logistics: GPS Tracking and Smart Fleet Management"*
  - Includes Article schema JSON-LD, tags, author bio, social share buttons, and related articles.

- **SEO & Performance Engineered**:
  - Per-page unique `<title>`, meta description, OpenGraph, and Twitter cards via `react-helmet-async`.
  - Structured JSON-LD schemas: `Organization` on Home, `Article` on Blog, and `BreadcrumbList` on inner pages.
  - `sitemap.xml` and `robots.txt` in `/public`.

---

## 🚀 Setup & Run Instructions

### 1. Prerequisites
- **Node.js** v18+ or v20+
- **npm** (or `npm.cmd` on Windows)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal).

### 4. Build for Production
```bash
npm run build
```
Generates optimized, code-split assets inside the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # Subhan Carriers brand SVG icon
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # XML sitemap with all 14 routes
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout, ScrollToTop, LoadingScreen
│   │   ├── sections/        # HeroSection, ServicesGrid, WhyChooseUs, ProcessTimeline, FleetShowcase, TestimonialsSection, FAQAccordion, CTABanner
│   │   └── ui/              # Button, Card, Badge, SectionHeading, PageHeader, StatsCounter, BlogCard, SEO, ThemeCustomizer
│   ├── context/
│   │   └── ThemeContext.jsx # Light/Dark mode state and 5 color palettes with CSS variable bindings
│   ├── data/
│   │   ├── siteConfig.js    # Central configuration (phones, emails, addresses, operating hours, hubs)
│   │   ├── services.js      # 4 core service specifications, SLAs, FAQs
│   │   ├── blogs.js         # 5 fully written SEO articles
│   │   ├── fleet.js         # Fleet vehicle profiles, capacities, horsepower
│   │   ├── faqs.js          # Categorized FAQs
│   │   └── testimonials.js  # Client testimonials & ratings
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # Company history, values & leadership
│   │   ├── Services.jsx     # Services overview & comparison matrix
│   │   ├── RoadFreight.jsx  # Road freight detailed page
│   │   ├── Warehousing.jsx  # Warehousing & storage detailed page
│   │   ├── ExpressDelivery.jsx # Expedited delivery detailed page
│   │   ├── HeavyHaulage.jsx # Heavy haulage & oversized detailed page
│   │   ├── Fleet.jsx        # Fleet inventory & equipment specs
│   │   ├── Tracking.jsx     # Shipment tracking portal
│   │   ├── Quote.jsx        # Get a Quote & rate calculator
│   │   ├── Blog.jsx         # Blog listing & search
│   │   ├── BlogPost.jsx     # Individual blog article
│   │   ├── Contact.jsx      # Contact form & regional depot contacts
│   │   └── NotFound.jsx     # Custom animated 404 page
│   ├── App.jsx              # Root component with ThemeProvider & HelmetProvider
│   ├── index.css            # Tailwind directives, CSS variables, dark scrollbars, glassmorphism
│   ├── main.jsx             # React DOM entry point
│   └── routes.jsx           # React Router v6 createBrowserRouter configuration
├── index.html               # HTML5 template with Google Fonts (Poppins & Inter)
├── package.json             # Dependencies & build scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS theme tokens & dark mode configuration
└── vite.config.js           # Vite build & chunking configuration
```

---

## 🎨 How to Customize Content & Colors

### 1. Update Contact Details, Addresses, & Hours
Edit [`src/data/siteConfig.js`](file:///d:/Project%20Test/admin/src/data/siteConfig.js):
- `contact.phonePrimary` / `contact.emergencyDispatch`
- `contact.emailGeneral` / `contact.emailQuotes`
- `contact.headquarters` and `contact.hubs` (Chicago, Dallas, Atlanta, LA)
- `contact.operatingHours`

### 2. Customize or Add Brand Color Palettes
Edit [`src/context/ThemeContext.jsx`](file:///d:/Project%20Test/admin/src/context/ThemeContext.jsx):
Add or adjust colors in the `colorPalettes` array. All buttons, badges, glows, and accents update automatically across the entire site.

### 3. Replace Service Images or Fleet Data
- Services: [`src/data/services.js`](file:///d:/Project%20Test/admin/src/data/services.js)
- Fleet: [`src/data/fleet.js`](file:///d:/Project%20Test/admin/src/data/fleet.js)
- Blogs: [`src/data/blogs.js`](file:///d:/Project%20Test/admin/src/data/blogs.js)
