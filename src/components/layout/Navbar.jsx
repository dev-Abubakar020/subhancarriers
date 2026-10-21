import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Truck, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../ui/Button';
import ThemeCustomizer from '../ui/ThemeCustomizer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll detection for dynamic glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      children: [
        { name: 'Services Overview', path: '/services', desc: 'Complete freight & supply chain logistics' },
        { name: 'Road Freight', path: '/services/road-freight', desc: 'Nationwide FTL & LTL highway haulage' },
        { name: 'Warehousing & Storage', path: '/services/warehousing', desc: 'Secure, climate-controlled distribution' },
        { name: 'Express Delivery', path: '/services/express-delivery', desc: 'Dedicated same-day & next-day expedited' },
        { name: 'Heavy Haulage', path: '/services/heavy-haulage', desc: 'Overweight, oversized, multi-axle cargo' },
      ]
    },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Track Shipment', path: '/tracking' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Hidden on Mobile) */}
      <div className={`bg-primary text-slate-300 text-xs border-b border-primary-700/50 transition-all duration-300 hidden md:block ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-highlight" />
              <span>DOT Certified & Bonded Carrier #489210</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>24/7 National Dispatch & Support</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span className="font-semibold text-white">{siteConfig.contact.phonePrimary}</span>
            </a>
            <a 
              href={`mailto:${siteConfig.contact.emailGeneral}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{siteConfig.contact.emailGeneral}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav 
        aria-label="Main Navigation"
        className={`transition-all duration-300 border-b border-slate-100 dark:border-slate-800/80 ${
          isScrolled 
            ? 'glass-panel shadow-soft py-3' 
            : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary via-primary-700 to-secondary flex items-center justify-center text-white shadow-soft group-hover:shadow-glow-secondary transition-all">
              <Truck className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-primary dark:text-white tracking-tight leading-none">
                Subhan<span className="text-secondary">Carriers</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-slate-500 dark:text-slate-400 mt-1">
                Logistics & Freight
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all duration-200
                        ${isServicesActive 
                          ? 'text-secondary bg-secondary/10 dark:bg-secondary/20 font-bold' 
                          : 'text-slate-700 dark:text-slate-200 hover:text-secondary dark:hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'}
                      `}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-soft-lg border border-slate-100 dark:border-slate-800 p-2.5 animate-fadeIn">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className={`
                                block p-3 rounded-xl transition-all duration-200
                                ${location.pathname === sub.path 
                                  ? 'bg-secondary/10 text-secondary dark:bg-secondary/20' 
                                  : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-secondary'}
                              `}
                            >
                              <div className="font-semibold text-sm flex items-center justify-between">
                                <span>{sub.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                    ${isActive 
                      ? 'text-secondary bg-secondary/10 dark:bg-secondary/20 font-bold' 
                      : 'text-slate-700 dark:text-slate-200 hover:text-secondary dark:hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'}
                  `}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Right CTA Buttons & Theme Customizer */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/tracking"
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-secondary flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <PackageCheck className="w-4 h-4 text-secondary" />
              <span>Quick Track</span>
            </Link>

            {/* Dark Mode & Pretty Colors Customizer */}
            <ThemeCustomizer />

            <Button
              to="/quote"
              variant="accent"
              size="md"
              icon={ArrowRight}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Hamburger & Customizer */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeCustomizer />
            
            <Button
              to="/quote"
              variant="accent"
              size="sm"
              className="text-xs px-2.5 py-1.5"
            >
              Quote
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-In / Expand Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="py-1">
                      <div className="font-semibold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
                        {item.name}
                      </div>
                      <div className="space-y-1 pl-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`
                              block px-3 py-2 rounded-xl text-sm font-medium transition-colors
                              ${location.pathname === sub.path 
                                ? 'bg-secondary/10 dark:bg-secondary/20 text-secondary font-bold' 
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}
                            `}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `
                      block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors
                      ${isActive 
                        ? 'bg-secondary/10 dark:bg-secondary/20 text-secondary font-bold' 
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}
                    `}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <a 
                href={`tel:${siteConfig.contact.phonePrimary.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Dispatch: {siteConfig.contact.phonePrimary}</span>
              </a>

              <Button
                to="/quote"
                variant="accent"
                size="lg"
                className="w-full justify-center"
                icon={ArrowRight}
              >
                Request Freight Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

