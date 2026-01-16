'use client';

import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface PressItem {
  publication: string;
  imageUrl: string;
  imageAlt: string;
  quote?: string;
  badge?: string;
  featured?: boolean;
}

interface Testimonial {
  publication: string;
  quote: string;
}

const pressItems: PressItem[] = [
  {
    publication: 'Conde Nast Traveler',
    imageUrl: '/revista/cntraveler.jpg.webp',
    imageAlt: 'Conde Nast Traveler feature',
    quote: 'Featured in Conde Nast Traveler\'s hot list of must-visit destinations.',
    badge: 'HOT LIST',
    featured: true,
  },
  {
    publication: 'Conde Nast Traveler',
    imageUrl: '/revista/verana-traveler-1.jpg.webp',
    imageAlt: 'Verana in Conde Nast Traveler',
    featured: true,
  },
  {
    publication: 'Conde Nast Traveler',
    imageUrl: '/revista/verana-traveler-2.jpg.webp',
    imageAlt: 'Verana in Conde Nast Traveler',
    featured: true,
  },
  {
    publication: 'Conde Nast Traveler Gold List',
    imageUrl: '/revista/verana_gold_list_2021.jpg.webp',
    imageAlt: 'Verana Gold List 2021',
    badge: 'GOLD LIST 2021',
    featured: true,
  },
  {
    publication: 'Departures',
    imageUrl: '/revista/departures.jpg.webp',
    imageAlt: 'Departures magazine feature',
    featured: true,
  },
  {
    publication: 'Elle Travel',
    imageUrl: '/revista/verana-elle-travel-plus.jpg.webp',
    imageAlt: 'Elle Travel feature',
    featured: true,
  },
  {
    publication: 'Taschen\'s Favourite Hotels',
    imageUrl: '/revista/verana-taschens-favourite-hotels.jpg.webp',
    imageAlt: 'Taschen Favourite Hotels',
    featured: true,
  },
  {
    publication: 'Taschen\'s Favourite Spas',
    imageUrl: '/revista/verana-taschens-favourite-spas.jpg.webp',
    imageAlt: 'Taschen Favourite Spas',
    featured: true,
  },
  {
    publication: 'Tangerine',
    imageUrl: '/revista/tangerine.jpg.webp',
    imageAlt: 'Tangerine magazine feature',
  },
  {
    publication: 'Opumo',
    imageUrl: '/revista/opumo.jpg.webp',
    imageAlt: 'Opumo feature',
  },
  {
    publication: 'OA',
    imageUrl: '/revista/oa.jpg.webp',
    imageAlt: 'OA magazine feature',
  },
  {
    publication: 'Luxury Escape',
    imageUrl: '/revista/luxuryescape.jpg.webp',
    imageAlt: 'Luxury Escape feature',
  },
  {
    publication: 'iEscape',
    imageUrl: '/revista/iescape.jpg.webp',
    imageAlt: 'iEscape feature',
  },
  {
    publication: 'A Hotel Life',
    imageUrl: '/revista/ahotellife.jpg.webp',
    imageAlt: 'A Hotel Life feature',
  },
  {
    publication: 'CNMN',
    imageUrl: '/revista/cnmn.jpg.webp',
    imageAlt: 'CNMN feature',
  },
  {
    publication: 'Vivir Bien',
    imageUrl: '/revista/verana-vivir-bien.jpg.webp',
    imageAlt: 'Vivir Bien feature',
  },
  {
    publication: 'Spa Feature',
    imageUrl: '/revista/verana-spa-feature.jpg.webp',
    imageAlt: 'Spa feature',
  },
  {
    publication: 'Sunset Magazine',
    imageUrl: '/revista/verana-sunset.jpg.webp',
    imageAlt: 'Sunset magazine feature',
  },
];

const testimonials: Testimonial[] = [
  {
    publication: 'Elle Decoration',
    quote: 'The details are an ELLE Decoration-reader\'s dream',
  },
  {
    publication: 'Shape',
    quote: 'More like the set of a romantic movie than reality',
  },
  {
    publication: 'Spa',
    quote: 'The jaw-dropping bay view and jungle backdrop are dramatized by an aesthetic that is as original as it is chic and handmade',
  },
  {
    publication: 'San Francisco',
    quote: 'With so much space and so few people, it\'s almost like staying in a private compound with friends',
  },
  {
    publication: 'Conde Nast Traveler',
    quote: 'Isolation doesn\'t get anymore splendid than at Mexico\'s Verana',
  },
  {
    publication: 'Wallpaper',
    quote: 'Verana\'s eclectic bungalows promise to be the ultimate in intimate getaways',
  },
];

// Componente de acordeón mejorado para la sección de prensa
function CollapsiblePressSection({
  title,
  count,
  children,
  defaultExpanded = false,
}: {
  title: string;
  count: number;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 bg-gradient-to-r from-white to-amber-50/30 text-left flex items-center justify-between hover:from-amber-50/50 hover:to-amber-50/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-t-2xl"
        aria-expanded={isExpanded}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          <motion.h3
            className="text-2xl md:text-3xl font-serif text-gray-800"
            animate={{ color: isExpanded ? '#d97706' : '#1f2937' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.span
            className="px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full"
            animate={{ scale: isExpanded ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {count} publications
          </motion.span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex items-center gap-2"
        >
          <span className="text-sm text-gray-600 font-medium hidden sm:inline">
            {isExpanded ? 'Hide' : 'Show'}
          </span>
          <motion.svg
            className="w-6 h-6 text-amber-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: isExpanded ? 0 : [0, -3, 0] }}
            transition={{
              y: { duration: 1.5, repeat: Infinity, repeatDelay: 0.5 },
            }}
          >
            <path d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="px-6 py-8 bg-gradient-to-b from-gray-50 to-white"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PressSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredPress = pressItems.filter((item) => item.featured);
  const otherPress = pressItems.filter((item) => !item.featured);

  // Función para verificar si se puede hacer scroll
  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Función para desplazar con flechas
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      const targetScroll = direction === 'left' 
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
      
      // Verificar después de un delay para la animación
      setTimeout(checkScrollability, 300);
    }
  };

  // Verificar scrollability al montar y cuando cambia el tamaño
  useEffect(() => {
    checkScrollability();
    const handleResize = () => {
      setTimeout(checkScrollability, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 pb-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
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
        {/* Header */}
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
            Press & Coverage
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Recognized by the world's most prestigious travel and lifestyle publications
          </motion.p>
        </motion.div>

        {/* Featured Press - Horizontal Carousel/Reel */}
        <div ref={ref} className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif mb-8 text-gray-800 flex items-center gap-3"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="text-amber-600"
            >
              ⚡
            </motion.span>
            Featured Coverage
          </motion.h3>
          
          {/* Horizontal scrolling reel */}
          <div className="relative group">
            {/* Flecha izquierda - Solo visible en desktop */}
            <motion.button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:scale-110"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: canScrollLeft ? 1 : 0.3, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Flecha derecha - Solo visible en desktop */}
            <motion.button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:scale-110"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: canScrollRight ? 1 : 0.3, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <div
              ref={containerRef}
              onScroll={checkScrollability}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 md:overflow-hidden"
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
              }}
            >
              {[...featuredPress, ...featuredPress].map((press, index) => (
                <motion.div
                  key={`${press.publication}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: (index % featuredPress.length) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -20,
                    rotateY: 5,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className="group relative flex-shrink-0 w-64 md:w-80 lg:w-96 h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={press.imageUrl}
                        alt={press.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
                      />
                    </motion.div>
                    
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        <h4 className="text-xl md:text-2xl font-serif mb-2">{press.publication}</h4>
                        {press.badge && (
                          <motion.span
                            className="inline-block px-3 py-1 text-xs font-bold text-amber-400 bg-white/20 rounded-full backdrop-blur-sm mb-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            {press.badge}
                          </motion.span>
                        )}
                        {press.quote && (
                          <p className="text-sm text-white/90 mt-2 line-clamp-2">{press.quote}</p>
                        )}
                      </motion.div>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%', skewX: -20 }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400/50 rounded-full blur-sm"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${15 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.3, 0.8, 0.3],
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
              ))}
            </div>
            
            {/* Scroll indicator - Solo en móvil */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden flex items-center gap-2 text-amber-600"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Scroll</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* All Press - Collapsible Masonry Grid */}
        <div className="mb-20">
          <CollapsiblePressSection
            title="All Coverage"
            count={otherPress.length}
            defaultExpanded={false}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherPress.map((press, index) => (
                <motion.div
                  key={`${press.publication}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { type: 'spring', stiffness: 400, damping: 20 },
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={press.imageUrl}
                        alt={press.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    </motion.div>
                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Publication name */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-semibold text-center">{press.publication}</p>
                    </div>
                    {/* Corner badge */}
                    <motion.div
                      className="absolute top-2 right-2 w-3 h-3 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CollapsiblePressSection>
        </div>

        {/* Testimonials - Modern Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif mb-8 text-gray-800 flex items-center gap-3"
          >
            <motion.span
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="text-amber-600"
            >
              ✨
            </motion.span>
            What They Say
          </motion.h3>
          
          {/* Horizontal scrolling testimonials */}
          <div className="relative">
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.publication}
                  initial={{ opacity: 0, x: 100, rotateY: -90 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className="group relative flex-shrink-0 w-80 md:w-96 bg-gradient-to-br from-white to-amber-50/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100 cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{
                      backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-amber-200 text-7xl font-serif leading-none opacity-30 group-hover:opacity-50 transition-opacity"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    "
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.p
                      className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 font-light italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    
                    <div className="flex items-center justify-between">
                      <motion.span
                        className="text-amber-600 font-bold text-sm uppercase tracking-wider"
                        whileHover={{ x: 5 }}
                      >
                        {testimonial.publication}
                      </motion.span>
                      <motion.div
                        className="text-amber-400 text-2xl"
                        animate={{ x: [0, 8, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-400/20 to-transparent rounded-tl-3xl"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Inquiries - Modern CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />
            
            <div className="relative z-10 text-center">
              <motion.h3
                className="text-3xl md:text-4xl font-serif text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Press Inquiries
              </motion.h3>
              <motion.p
                className="text-amber-50 text-lg mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Please contact us for media requests, information and for our media kit & high resolution photography
              </motion.p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-block px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl shadow-2xl hover:shadow-amber-900/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
