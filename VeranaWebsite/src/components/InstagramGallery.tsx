'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface InstagramPost {
  id: string;
  imageUrl: string;
  imageAlt: string;
  author: string;
  authorHandle: string;
}

interface InstagramGalleryProps {
  posts?: InstagramPost[];
}

// Datos por defecto usando imágenes reales proporcionadas
const DEFAULT_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl: '/imagenes/Verana_LauraAustin_0113-1275x850.jpg.webp',
    imageAlt: 'Guest photo by Laura Austin',
    author: 'Laura Austin',
    authorHandle: 'laura_austin',
  },
  {
    id: '2',
    imageUrl: '/imagenes/Verana_LauraAustin_0337-750x500.jpg.webp',
    imageAlt: 'Guest photo by Laura Austin',
    author: 'Laura Austin',
    authorHandle: 'laura_austin',
  },
  {
    id: '3',
    imageUrl: '/imagenes/317803_0011-750x1024.jpg.webp',
    imageAlt: 'Guest experience at Verana',
    author: 'Guest',
    authorHandle: 'verana_guest',
  },
  {
    id: '4',
    imageUrl: '/imagenes/Screen-Shot-2020-04-21-at-1.09.13-PM-750x924.png.webp',
    imageAlt: 'Guest moment at Verana',
    author: 'Guest',
    authorHandle: 'verana_guest',
  },
  {
    id: '5',
    imageUrl: '/imagenes/Screen-Shot-2020-04-21-at-1.11.28-PM-750x919.png.webp',
    imageAlt: 'Guest moment at Verana',
    author: 'Guest',
    authorHandle: 'verana_guest',
  },
  {
    id: '6',
    imageUrl: '/imagenes/Screen-Shot-2020-04-21-at-1.13.20-PM-750x909.png.webp',
    imageAlt: 'Guest moment at Verana',
    author: 'Guest',
    authorHandle: 'verana_guest',
  },
];

export function InstagramGallery({ posts = DEFAULT_POSTS }: InstagramGalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Asegurar que posts siempre sea un array
  const safePosts = posts || DEFAULT_POSTS;

  return (
    <section className="py-16 pb-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Guest Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you, adventurers who have made this journey over the years. Many of the pictures you see on the site were taken by our guests, and we love sharing them.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {safePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5]">
                <ImageWithFallback
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">
                    By <span className="font-semibold">@{post.authorHandle}</span>
                  </p>
                </div>
              </div>
              {/* Instagram badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
