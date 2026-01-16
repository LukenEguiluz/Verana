'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  'data-ga-event'?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  onClick,
  'data-ga-event': gaEvent,
  external = false,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-500',
    secondary: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white focus:ring-white',
    outline: 'bg-transparent hover:bg-white/10 text-white border-2 border-white focus:ring-white',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const handleClick = () => {
    // Tracking GA4
    if (gaEvent && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', gaEvent, {
        event_category: 'engagement',
        event_label: href,
      });
    }
    onClick?.();
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
