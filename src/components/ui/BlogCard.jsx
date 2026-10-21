import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export default function BlogCard({ post }) {
  return (
    <Card className="flex flex-col h-full group">
      {/* Blog Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="dark" className="text-[10px] py-0.5 px-2.5">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Blog Details */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date and Read Time */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{post.publishedAt}</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold font-heading text-heading dark:text-white mb-2.5 group-hover:text-secondary transition-colors line-clamp-2">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-body dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer: Author & Link */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {post.author.avatar ? (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <User className="w-4 h-4" />
              </div>
            )}
            <div>
              <div className="text-xs font-semibold text-heading dark:text-slate-200 truncate max-w-[120px]">
                {post.author.name}
              </div>
              <div className="text-[10px] text-slate-400 truncate max-w-[120px]">
                {post.author.role}
              </div>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 group/btn"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
