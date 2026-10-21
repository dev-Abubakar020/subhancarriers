import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Badge from './Badge';

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [],
  children,
}) {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-700 to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Grid & Decorative Lighting */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      {/* Animated subtle road line on bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent animate-shimmer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-slate-300 mb-6">
          <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.path || idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {isLast ? (
                  <span className="text-accent font-medium truncate max-w-xs sm:max-w-md">
                    {crumb.name}
                  </span>
                ) : (
                  <Link to={crumb.path} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Content Area */}
        <div className="max-w-3xl">
          {badge && (
            <Badge variant="dark" className="mb-4">
              {badge}
            </Badge>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </div>
  );
}
