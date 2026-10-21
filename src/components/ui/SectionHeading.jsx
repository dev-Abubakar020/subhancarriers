import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} mb-12 md:mb-16 ${className}`}>
      {badge && (
        <Badge
          variant={dark ? 'dark' : 'primary'}
          icon={badgeIcon}
          className="mb-3.5"
        >
          {badge}
        </Badge>
      )}
      
      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight font-heading leading-tight ${
            dark ? 'text-white' : 'text-heading dark:text-white'
          } ${titleClassName}`}
        >
          {title}
        </h2>
      )}
      
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed font-normal ${
            dark ? 'text-slate-300' : 'text-body dark:text-slate-300'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
