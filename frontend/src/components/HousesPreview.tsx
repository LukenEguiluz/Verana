'use client';

import { ImageWithFallback } from './ImageWithFallback';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface House {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  capacity: number;
  view: string;
  excerpt: string;
}

// Esto vendría de la API en producción
// Nombres correctos basados en el contenido del sitio - usando imágenes reales
const featuredHouses: House[] = [
  {
    id: '1',
    name: 'V House',
    slug: 'v-house',
    imageUrl: '/imagenes/v_house_main-1275x781.jpg.webp',
    imageAlt: 'V House at Verana',
    capacity: 2,
    view: 'Jungle & Ocean',
    excerpt: 'A distinctive house with unique architecture and stunning views of the jungle and ocean.',
  },
  {
    id: '2',
    name: 'Bungalow',
    slug: 'bungalow',
    imageUrl: '/imagenes/verana_bungalow_6-1275x781.jpg.webp',
    imageAlt: 'Bungalow at Verana',
    capacity: 2,
    view: 'Jungle',
    excerpt: 'A cozy bungalow offering comfort and simplicity in a beautiful natural setting.',
  },
  {
    id: '3',
    name: 'Tea House',
    slug: 'tea-house',
    imageUrl: '/imagenes/verana_tea_1-1275x781.jpg.webp',
    imageAlt: 'Tea House at Verana',
    capacity: 2,
    view: 'Jungle',
    excerpt: 'A serene retreat inspired by Japanese design, offering tranquility and connection with nature.',
  },
  {
    id: '4',
    name: 'Palapa',
    slug: 'palapa',
    imageUrl: '/imagenes/verana_palapa_9-1275x781.jpg.webp',
    imageAlt: 'Palapa at Verana',
    capacity: 2,
    view: 'Jungle & Ocean',
    excerpt: 'A traditional palapa-style house offering authentic Mexican architecture with modern comforts.',
  },
];

export function HousesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 pb-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Houses
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Each house is a unique sanctuary, thoughtfully designed to blend with nature
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((house, index) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <Link href={`/houses/${house.slug}`}>
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full"
                  >
                    <ImageWithFallback
                      src={house.imageUrl}
                      alt={house.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Floating badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: 20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    {house.capacity} guests
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-serif mb-2 text-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {house.name}
                  </motion.h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1"
                    >
                      👥 {house.capacity} guests
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1"
                    >
                      🌄 {house.view}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 mb-4">{house.excerpt}</p>
                  <motion.span
                    className="text-amber-600 font-medium inline-flex items-center gap-2"
                    whileHover={{ gap: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    View Details
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href="/houses"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg shadow-lg shadow-amber-600/50 hover:shadow-xl hover:shadow-amber-600/60 transition-all duration-300 relative overflow-hidden group"
              data-ga-event="click_view_all_houses"
            >
              <motion.span
                className="relative z-10"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.9 }}
              >
                View All Houses
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
