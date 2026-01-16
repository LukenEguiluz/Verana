'use client';

import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from './CTAButton';

interface HouseDetailProps {
  house: {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    capacity: number;
    bedrooms: number;
    bathrooms: number;
    view: string;
    amenities: string[];
    accessibility: string;
    images: Array<{ url: string; alt: string }>;
  };
}

export function HouseDetail({ house }: HouseDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px]">
        <ImageWithFallback
          src={house.images[selectedImageIndex].url}
          alt={house.images[selectedImageIndex].alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {house.name}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">{house.description}</p>
        </div>
      </section>

      {/* Sticky CTA Bar (Mobile) */}
      <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3">
          <CTAButton
            href="/book"
            variant="primary"
            size="medium"
            className="w-full"
            data-ga-event="click_check_availability"
          >
            Check Availability
          </CTAButton>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div>
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={house.images[selectedImageIndex].url}
                      alt={house.images[selectedImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {house.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-20 md:h-24 rounded overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-amber-600'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 16vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif mb-4 text-gray-900">About {house.name}</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed">{house.fullDescription}</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {house.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility */}
            {house.accessibility && (
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Accessibility Information</h3>
                <p className="text-gray-700">{house.accessibility}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-serif mb-6 text-gray-900">Booking Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{house.capacity} guests</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{house.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{house.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{house.view} view</span>
                </div>
              </div>

              <CTAButton
                href="/book"
                variant="primary"
                size="large"
                className="w-full mb-4"
                data-ga-event="click_check_availability_sidebar"
              >
                Check Availability
              </CTAButton>

              <a
                href="https://wa.me/521XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-green-600 text-white text-center font-medium rounded hover:bg-green-700 transition-colors"
                data-ga-event="click_whatsapp_house_detail"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
