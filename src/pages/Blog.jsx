import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  User,
  BookOpen
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/ui/BlogCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { blogs } from '../data/blogs';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Carrier Selection',
    'Cost Optimization',
    'Mode Comparison',
    'Packaging & Safety',
    'Technology & Fleet'
  ];

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs[0];
  const gridPosts = searchQuery || selectedCategory !== 'All' ? filteredBlogs : filteredBlogs.slice(1);

  const breadcrumbs = [{ name: 'Blog & Industry Insights', path: '/blog' }];

  return (
    <>
      <SEO
        title="Freight & Supply Chain Insights - Subhan Carriers Blog"
        description="Read in-depth logistics guides, freight cost-reduction tactics, multi-modal transport comparisons, and IoT fleet telematics updates from Subhan Carriers."
        canonical="/blog"
      />

      <PageHeader
        badge="Freight Intelligence"
        title="Supply Chain & Logistics Insights"
        subtitle="Authoritative articles, operational frameworks, and actionable strategies written by our freight coordinators and logistics engineers."
        breadcrumbs={breadcrumbs}
      />

      {/* Filter and Search Bar Section */}
      <section className="py-10 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-surface-light dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search freight articles..."
                aria-label="Search freight articles"
                className="w-full pl-10 pr-4 py-2.5 bg-surface-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Blog Content Area */}
      <section className="py-16 md:py-24 bg-surface-light dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Article (When viewing All and no search) */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <div className="mb-16">
              <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-soft group hover:shadow-soft-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="accent">Featured Article</Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="font-semibold text-secondary uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <span>&bull;</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-heading dark:text-white mb-4 group-hover:text-secondary transition-colors leading-tight">
                        <Link to={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-sm text-body dark:text-slate-400 leading-relaxed mb-6 line-clamp-4">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                        />
                        <div>
                          <div className="text-xs font-bold text-heading dark:text-white">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {featuredPost.author.role}
                          </div>
                        </div>
                      </div>

                      <Button
                        to={`/blog/${featuredPost.slug}`}
                        variant="secondary"
                        size="sm"
                        icon={ArrowRight}
                      >
                        Read Full Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-heading text-heading dark:text-white mb-1">
                No matching articles found
              </h3>
              <p className="text-xs text-body dark:text-slate-400 mb-4">
                We couldn't find any articles matching "{searchQuery}". Try a different search term or category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs font-bold text-secondary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Put These Logistics Tactics into Practice?"
        subtitle="Speak with Subhan Carriers today to benchmark your current freight expenditure and explore dedicated lane optimization."
      />
    </>
  );
}
