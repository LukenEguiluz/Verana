'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function GradientBackground({ className = '', variant = 'primary' }: GradientBackgroundProps) {
  const gradients = {
    primary: 'from-amber-600 via-amber-500 to-amber-700',
    secondary: 'from-gray-900 via-gray-800 to-gray-900',
    accent: 'from-amber-50 via-white to-amber-50',
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[variant]}`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
