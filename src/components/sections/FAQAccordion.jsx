import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { faqs } from '../../data/faqs';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function FAQAccordion({ showHeader = true, defaultCategory = "All" }) {
  const [openItems, setOpenItems] = useState({ "0-0": true });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState(defaultCategory);

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = ["All", ...faqs.map(f => f.category)];

  // Filter items by category & search query
  const filteredFaqs = faqs.map(group => {
    if (selectedCat !== "All" && group.category !== selectedCat) {
      return null;
    }
    const filteredItems = group.items.filter(item => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    });
    return { ...group, items: filteredItems };
  }).filter(Boolean);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeading
            badge="Freight Answers"
            title="Frequently Asked Questions"
            subtitle="Get clear, direct answers about our shipping capabilities, billing, insurance, and telematics systems."
          />
        )}

        {/* Search Bar & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search freight questions (e.g. tracking, insurance, reefer, FTL)..."
              aria-label="Search freight questions"
              className="w-full pl-11 pr-4 py-3 bg-surface-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-heading dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCat === cat
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {filteredFaqs.map((group, groupIdx) => {
            if (group.items.length === 0) return null;

            return (
              <div key={groupIdx} className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-secondary px-1">
                  {group.category}
                </h3>

                <div className="space-y-3">
                  {group.items.map((item, itemIdx) => {
                    const key = `${groupIdx}-${itemIdx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <div
                        key={itemIdx}
                        className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                          isOpen 
                            ? 'border-secondary/40 dark:border-secondary/50 bg-surface-light/40 dark:bg-slate-800/80 shadow-sm' 
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          aria-expanded={isOpen}
                          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-secondary rounded-2xl"
                        >
                          <span className="font-heading font-semibold text-sm sm:text-base text-heading dark:text-white">
                            {item.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 bg-secondary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                          }`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-body dark:text-slate-300 leading-relaxed border-t border-slate-100/60 dark:border-slate-700/60">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg">
                Have a unique shipping requirement?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Our freight coordinators are on standby 24/7 to provide instant lane advice.
              </p>
            </div>
          </div>
          <Button to="/contact" variant="accent" size="sm">
            Contact Freight Desk
          </Button>
        </div>
      </div>
    </section>
  );
}
