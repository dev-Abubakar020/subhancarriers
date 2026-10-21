import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Copy, 
  Check, 
  Tag, 
  BookOpen,
  User,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/ui/BlogCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import CTABanner from '../components/sections/CTABanner';
import { blogs } from '../data/blogs';
import { siteConfig } from '../data/siteConfig';

export default function BlogPost() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  const breadcrumbs = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.coverImage],
    "datePublished": "2026-10-12T08:00:00+08:00",
    "dateModified": "2026-10-12T09:20:00+08:00",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://subhancarriers.com/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://subhancarriers.com/blog/${post.slug}`
    }
  };

  // Basic markdown parser for headings, links, paragraphs, and lists
  const renderFormattedContent = (rawText) => {
    const lines = rawText.trim().split('\n');
    const elements = [];
    let currentParagraph = [];

    const flushParagraph = (key) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ');
        elements.push(
          <p key={key} className="text-base sm:text-lg text-slate-700 leading-relaxed my-5">
            {parseInline(text)}
          </p>
        );
        currentParagraph = [];
      }
    };

    const parseInline = (text) => {
      // Handles [label](url) and **bold**
      const parts = [];
      const regex = /\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(text.substring(lastIndex, match.index));
        }
        if (match[1] && match[2]) {
          // Link
          parts.push(
            <Link key={match.index} to={match[2]} className="text-secondary font-bold hover:underline hover:text-secondary-700">
              {match[1]}
            </Link>
          );
        } else if (match[3]) {
          // Bold
          parts.push(<strong key={match.index} className="font-bold text-heading">{match[3]}</strong>);
        }
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
      }
      return parts;
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushParagraph(`p-${idx}`);
        elements.push(
          <h2 key={`h2-${idx}`} className="text-2xl sm:text-3xl font-bold font-heading text-heading mt-12 mb-4 pt-4 border-t border-slate-100">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushParagraph(`p-${idx}`);
        elements.push(
          <h3 key={`h3-${idx}`} className="text-xl sm:text-2xl font-bold font-heading text-heading mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('---')) {
        flushParagraph(`p-${idx}`);
        elements.push(<hr key={`hr-${idx}`} className="my-8 border-slate-200" />);
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        flushParagraph(`p-${idx}`);
        elements.push(
          <li key={`li-${idx}`} className="ml-6 list-disc text-base sm:text-lg text-slate-700 my-2 leading-relaxed">
            {parseInline(trimmed.substring(2))}
          </li>
        );
      } else if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ')) {
        flushParagraph(`p-${idx}`);
        elements.push(
          <div key={`num-${idx}`} className="ml-2 font-medium text-base sm:text-lg text-slate-700 my-2 leading-relaxed">
            {parseInline(trimmed)}
          </div>
        );
      } else if (trimmed === '') {
        flushParagraph(`p-${idx}`);
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph('final-p');
    return elements;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.coverImage}
        schemaJson={articleSchema}
      />

      <PageHeader
        badge={post.category}
        title={post.title}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200 pt-2">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover border border-white/20"
            />
            <span className="font-semibold text-white">{post.author.name}</span>
            <span className="text-slate-400">({post.author.role})</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{post.publishedAt}</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-highlight" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </PageHeader>

      {/* Main Post Article Body */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cover Image banner */}
          <div className="rounded-3xl overflow-hidden shadow-soft-lg mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-80 sm:h-[460px] object-cover"
            />
          </div>

          {/* Social Share Bar & Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-8 border-y border-slate-100">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-400 uppercase">Tags:</span>
              {post.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase mr-1">Share:</span>
              <button
                onClick={handleCopyLink}
                aria-label="Copy link to clipboard"
                className="p-2 rounded-lg bg-surface-light hover:bg-slate-200 text-slate-600 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on LinkedIn"
                className="p-2 rounded-lg bg-surface-light hover:bg-secondary hover:text-white text-slate-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Twitter"
                className="p-2 rounded-lg bg-surface-light hover:bg-secondary hover:text-white text-slate-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Facebook"
                className="p-2 rounded-lg bg-surface-light hover:bg-secondary hover:text-white text-slate-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Rendered Post Content */}
          <div className="prose prose-slate max-w-none text-body">
            {renderFormattedContent(post.content)}
          </div>

          {/* End-Of-Article Call to Action Card */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary via-primary-800 to-secondary text-white shadow-soft-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-accent px-2.5 py-1 rounded-full bg-accent/20 border border-accent/30 inline-block mb-2">
                Need Help Implementing This?
              </span>
              <h3 className="text-xl font-bold font-heading text-white mb-1">
                Partner with Subhan Carriers
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Our logistics coordinators are available 24/7 to structure dedicated contract lanes and freight solutions designed around your operations.
              </p>
            </div>
            <Button
              to="/quote"
              variant="accent"
              size="md"
              icon={ArrowRight}
              className="shrink-0"
            >
              Get Instant Freight Quote
            </Button>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 rounded-2xl bg-surface-light border border-slate-200/60 flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-secondary shrink-0"
            />
            <div>
              <h4 className="font-heading font-bold text-base text-heading">
                About the Author: {post.author.name}
              </h4>
              <p className="text-xs text-secondary font-semibold mb-1">
                {post.author.role} at Subhan Carriers
              </p>
              <p className="text-xs text-body leading-relaxed">
                Specializing in North American interstate freight movement, continuous GPS telematics, and enterprise logistics efficiency.
              </p>
            </div>
          </div>

          {/* Back to Blog link */}
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>

        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 md:py-24 bg-surface-light border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Recommended Reading"
            title="Related Supply Chain Guides"
            subtitle="Explore additional industry insights and operational tactics from our logistics desk."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>
      </section>

      {/* CTABanner */}
      <CTABanner />
    </>
  );
}
