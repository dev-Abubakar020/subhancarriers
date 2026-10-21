import React from 'react';

export default function Badge({
  children,
  variant = 'primary',
  className = '',
  icon: Icon
}) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent-600 border-accent/20",
    highlight: "bg-highlight/10 text-highlight-600 border-highlight/20",
    dark: "bg-white/10 text-white border-white/20 backdrop-blur-sm",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase ${variants[variant] || variants.primary} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
