import React from 'react';

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  bordered = true,
  ...props
}) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-900/90 rounded-2xl transition-all duration-300 relative overflow-hidden
        ${bordered ? 'border border-slate-100 dark:border-slate-800 shadow-soft dark:shadow-none' : ''}
        ${hover ? 'hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-secondary/30 dark:hover:border-secondary/50 dark:hover:shadow-glow-secondary' : ''}
        ${glow ? 'hover:shadow-glow-secondary' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
