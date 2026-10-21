import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-soft",
    xl: "text-lg px-8 py-4 gap-3 shadow-soft-lg",
  };

  const variants = {
    accent: "bg-accent hover:bg-accent-600 text-white shadow-glow-accent btn-shimmer focus:ring-accent",
    primary: "bg-primary text-white hover:bg-primary-700 shadow-glow-primary focus:ring-primary",
    secondary: "bg-secondary hover:bg-secondary-700 text-white shadow-glow-secondary focus:ring-secondary",
    highlight: "bg-highlight hover:bg-highlight-600 text-white focus:ring-highlight",
    outline: "border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 focus:ring-primary",
    outlineWhite: "border-2 border-white/40 text-white hover:border-white hover:bg-white/10 focus:ring-white",
    ghost: "text-primary hover:bg-primary/5 focus:ring-primary",
    ghostWhite: "text-white/90 hover:text-white hover:bg-white/10 focus:ring-white",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {Icon && iconPosition === 'left' && !isLoading && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !isLoading && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedStyles}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedStyles}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={`group ${combinedStyles}`} {...props}>
      {content}
    </button>
  );
}
