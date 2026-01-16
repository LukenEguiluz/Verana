'use client';

import { VideoBackground } from './VideoBackground';
import { CTAButton } from './CTAButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  bookNowUrl: string;
  howToGetHereUrl: string;
}

export function Hero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  bookNowUrl,
  howToGetHereUrl,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video de fondo optimizado con parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale: 1.1 }}
      >
        <VideoBackground
          videoUrl="https://verana.com/wp-content/uploads/verana-fond-2.mp4"
          videoUrlMobile="https://verana.com/wp-content/uploads/verana-fond-2_resized-2.mp4"
          fallbackImage={imageUrl}
          fallbackAlt={imageAlt}
          overlay={true}
        />
        {/* Partículas de luz animadas */}
        <div className="absolute inset-0 z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Contenido con fade out al hacer scroll */}
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {'Verana'.split('').map((letter, i) => {
              const colors = [
                'text-amber-500', // V
                'text-amber-400', // e
                'text-amber-600', // r
                'text-amber-500', // a
                'text-amber-400', // n
                'text-amber-600', // a
              ];
              return (
                <motion.span
                  key={i}
                  className={`inline-block ${colors[i] || 'text-white'}`}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light"
        >
          {subtitle}
        </motion.p>

        {/* CTAs con efecto hover mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <CTAButton
              href={bookNowUrl}
              variant="primary"
              size="large"
              className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-amber-600/50"
              data-ga-event="click_book_now"
            >
              Book Now
            </CTAButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <CTAButton
              href={howToGetHereUrl}
              variant="secondary"
              size="large"
              className="w-full sm:w-auto min-w-[200px] backdrop-blur-md"
              data-ga-event="click_how_to_get_here"
            >
              How to Get Here
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10"
          whileHover={{ scale: 1.2, borderColor: 'white' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
