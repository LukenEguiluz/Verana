import { Navigation } from '@/components/Navigation';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { HouseCard } from '@/components/HouseCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Villas & Houses in Yelapa | Verana Boutique Hotel',
  description: 'Discover Verana\'s 10 unique houses and villas in Yelapa. From intimate studios to spacious villas, each with stunning jungle and ocean views. Check availability.',
  keywords: [
    'verana houses',
    'luxury villas yelapa',
    'boutique hotel rooms yelapa',
    'verana accommodations',
    'yelapa villas',
  ],
  openGraph: {
    title: 'Luxury Villas & Houses in Yelapa | Verana',
    description: 'Discover Verana\'s unique houses and villas. Each thoughtfully designed to blend with nature.',
    url: 'https://verana.com/houses',
    images: [
      {
        url: 'https://verana.com/images/houses/og-houses.jpg',
        width: 1200,
        height: 630,
        alt: 'Verana Houses - Luxury Accommodations',
      },
    ],
  },
  alternates: {
    canonical: 'https://verana.com/houses',
  },
};

// En producción, esto vendría de la API
async function getAllHouses() {
  // Simulación - en producción sería: const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/houses`);
  return [
    {
      id: '1',
      slug: 'villa-verana',
      name: 'Villa Verana',
      imageUrl: '/images/houses/villa-verana.jpg',
      imageAlt: 'Villa Verana at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'Our most spacious accommodation with stunning jungle and ocean views. The ultimate luxury retreat.',
      featured: true,
    },
    {
      id: '2',
      slug: 'pool-house',
      name: 'Pool House',
      imageUrl: '/images/houses/pool-house.jpg',
      imageAlt: 'Pool House at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'Unique accommodation with direct access to the pool area. Perfect for relaxation and privacy.',
      featured: true,
    },
    {
      id: '3',
      slug: 'tea-house',
      name: 'Tea House',
      imageUrl: '/images/houses/tea-house.jpg',
      imageAlt: 'Tea House at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      excerpt: 'A serene retreat inspired by Japanese design, offering tranquility and connection with nature.',
      featured: true,
    },
    {
      id: '4',
      slug: 'casa-grande',
      name: 'Casa Grande',
      imageUrl: '/images/houses/casa-grande.jpg',
      imageAlt: 'Casa Grande at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'A spacious house with magnificent views, perfect for those seeking comfort and luxury.',
      featured: false,
    },
    {
      id: '5',
      slug: 'v-house',
      name: 'V House',
      imageUrl: '/images/houses/v-house.jpg',
      imageAlt: 'V House at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'A distinctive house with unique architecture and stunning views of the jungle and ocean.',
      featured: false,
    },
    {
      id: '6',
      slug: 'palapa',
      name: 'Palapa',
      imageUrl: '/images/houses/palapa.jpg',
      imageAlt: 'Palapa at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'A traditional palapa-style house offering authentic Mexican architecture with modern comforts.',
      featured: false,
    },
    {
      id: '7',
      slug: 'casa-piedra',
      name: 'Casa Piedra',
      imageUrl: '/images/houses/casa-piedra.jpg',
      imageAlt: 'Casa Piedra at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      excerpt: 'A beautiful stone house built into the hillside, offering privacy and stunning views.',
      featured: false,
    },
    {
      id: '8',
      slug: 'colibri',
      name: 'Colibrí',
      imageUrl: '/images/houses/colibri.jpg',
      imageAlt: 'Colibrí at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      excerpt: 'A charming house named after the hummingbird, offering intimate spaces and beautiful views.',
      featured: false,
    },
    {
      id: '9',
      slug: 'bungalow',
      name: 'Bungalow',
      imageUrl: '/images/houses/bungalow.jpg',
      imageAlt: 'Bungalow at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      excerpt: 'A cozy bungalow offering comfort and simplicity in a beautiful natural setting.',
      featured: false,
    },
    {
      id: '10',
      slug: 'studio',
      name: 'Studio',
      imageUrl: '/images/houses/studio.jpg',
      imageAlt: 'Studio at Verana',
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      excerpt: 'A compact and efficient studio accommodation, perfect for solo travelers or couples.',
      featured: false,
    },
  ];
}

export default async function HousesPage() {
  const houses = await getAllHouses();

  return (
    <>
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative py-16 pb-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
              Our Houses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each house is a unique sanctuary, thoughtfully designed to blend with nature. 
              From intimate studios to spacious villas, discover your perfect retreat in Yelapa.
            </p>
          </div>
        </section>

        {/* Houses Grid */}
        <section className="py-16 pb-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {houses.map((house, index) => (
                <HouseCard key={house.id} house={house} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 pb-24 md:py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Contact us to check availability and reserve your perfect house at Verana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-amber-600 font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                data-ga-event="click_book_now_houses"
              >
                Check Availability
              </a>
              <a
                href="https://wa.link/72rx7o"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                data-ga-event="click_whatsapp_houses"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <MobileBottomBar />
    </>
  );
}
