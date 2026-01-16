'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface FloatingImage {
  src: string;
  alt: string;
  x: number; // porcentaje de posición inicial
  y: number;
  delay: number;
  size: 'small' | 'medium' | 'large';
}

const floatingImages: FloatingImage[] = [
  {
    src: '/imagenes/verana_tour_23-750x460.jpg.webp',
    alt: 'Verana tour experience',
    x: 10,
    y: 20,
    delay: 0,
    size: 'medium',
  },
  {
    src: '/imagenes/verana_tour_33-750x460.jpg.webp',
    alt: 'Verana tour experience',
    x: 80,
    y: 15,
    delay: 0.3,
    size: 'small',
  },
  {
    src: '/imagenes/17_1201_163-1275x851.jpg.webp',
    alt: 'Verana experience',
    x: 15,
    y: 60,
    delay: 0.6,
    size: 'large',
  },
  {
    src: '/imagenes/17_1201_189-1275x851.jpg.webp',
    alt: 'Verana experience',
    x: 75,
    y: 55,
    delay: 0.9,
    size: 'medium',
  },
  {
    src: '/imagenes/verana_tour_40.jpg.webp',
    alt: 'Verana tour',
    x: 50,
    y: 35,
    delay: 1.2,
    size: 'small',
  },
];

const sizeClasses = {
  small: 'w-32 h-48 md:w-40 md:h-60',
  medium: 'w-40 h-56 md:w-56 md:h-80',
  large: 'w-48 h-64 md:w-72 md:h-96',
};

export function FloatingImageGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience Verana
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover the magic of our handmade hotel through the eyes of our guests
          </motion.p>
        </motion.div>

        {/* Floating images container */}
        <div className="relative h-[600px] md:h-[800px] lg:h-[900px]">
          {floatingImages.map((image, index) => {
            const yTransform = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index % 2 === 0 ? -150 : 150]
            );
            const xTransform = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index % 2 === 0 ? 50 : -50]
            );
            const rotateTransform = useTransform(
              scrollYProgress,
              [0, 1],
              [0, index % 2 === 0 ? 20 : -20]
            );
            const scaleTransform = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [1, 1.1, 1]
            );

            return (
              <motion.div
                key={index}
                className={`absolute ${sizeClasses[image.size]} rounded-2xl overflow-hidden shadow-2xl cursor-pointer`}
                style={{
                  left: `${image.x}%`,
                  top: `${image.y}%`,
                  y: isInView ? yTransform : 0,
                  x: isInView ? xTransform : 0,
                  rotate: isInView ? rotateTransform : 0,
                  scale: isInView ? scaleTransform : 1,
                }}
                initial={{ opacity: 0, scale: 0.5, y: 100, rotate: -45 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        rotate: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  delay: image.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  zIndex: 50,
                  y: -20,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: image.delay,
                  }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%', skewX: -20 }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </motion.div>
                {/* Floating particles around image */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400/50 rounded-full blur-sm"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 25}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
