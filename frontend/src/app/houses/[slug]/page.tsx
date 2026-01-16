import { Navigation } from '@/components/Navigation';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { HouseDetail } from '@/components/HouseDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// En producción, esto vendría de la API
async function getHouse(slug: string) {
  // Simulación - en producción sería: const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/houses/${slug}`);
  const houses = [
    {
      id: '1',
      slug: 'villa-verana',
      name: 'Villa Verana',
      description: 'Our most spacious accommodation with stunning jungle and ocean views. The ultimate luxury retreat at Verana.',
      fullDescription: `Villa Verana is Verana's premier accommodation, offering the most space and luxury. Perched on the hillside with breathtaking panoramic views of both the jungle canopy and the Pacific Ocean, this villa embodies the essence of off-grid luxury.

The architecture seamlessly blends with the natural environment, featuring open-air spaces that invite the outside in. Large windows and terraces provide uninterrupted views, while the interior design reflects a minimalist aesthetic that complements the surrounding beauty.

Perfect for couples seeking the ultimate romantic retreat, Villa Verana offers complete privacy and tranquility. The villa features spacious living areas, a well-appointed bedroom, and a luxurious bathroom.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Large private terrace with panoramic views',
        'Open-air living space',
        'King-size bed with oversized mosquito net',
        'Luxurious en-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
        'Access to spa and restaurant',
      ],
      accessibility: 'This house requires climbing steps from the main path. Please contact us for specific accessibility information.',
      images: [
        { url: '/images/houses/villa-verana-1.jpg', alt: 'Villa Verana exterior' },
        { url: '/images/houses/villa-verana-2.jpg', alt: 'Villa Verana bedroom' },
        { url: '/images/houses/villa-verana-3.jpg', alt: 'Villa Verana terrace' },
        { url: '/images/houses/villa-verana-4.jpg', alt: 'Villa Verana bathroom' },
      ],
      featured: true,
    },
    {
      id: '2',
      slug: 'pool-house',
      name: 'Pool House',
      description: 'Unique accommodation with direct access to the pool area. Perfect for relaxation and privacy.',
      fullDescription: `Pool House offers a unique experience with direct access to Verana's swimming pool. This accommodation combines convenience with privacy, making it ideal for guests who want to enjoy the pool at any time.

The house features a spacious layout with stunning views of the jungle and ocean. The design emphasizes connection with nature while providing all the comforts of a luxury retreat.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Direct pool access',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/pool-house-1.jpg', alt: 'Pool House exterior' },
        { url: '/images/houses/pool-house-2.jpg', alt: 'Pool House interior' },
        { url: '/images/houses/pool-house-3.jpg', alt: 'Pool House pool access' },
      ],
      featured: true,
    },
    {
      id: '3',
      slug: 'tea-house',
      name: 'Tea House',
      description: 'A serene retreat inspired by Japanese design, offering tranquility and connection with nature.',
      fullDescription: `Tea House is a serene accommodation inspired by Japanese design principles. This unique house offers a peaceful retreat where you can connect with nature and find tranquility.

The minimalist design creates a sense of calm and harmony, while the large windows and open spaces bring the jungle inside. Perfect for meditation, reading, or simply enjoying the natural surroundings.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      amenities: [
        'Japanese-inspired design',
        'Private meditation space',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/tea-house-1.jpg', alt: 'Tea House exterior' },
        { url: '/images/houses/tea-house-2.jpg', alt: 'Tea House interior' },
        { url: '/images/houses/tea-house-3.jpg', alt: 'Tea House meditation space' },
      ],
      featured: true,
    },
    {
      id: '4',
      slug: 'casa-grande',
      name: 'Casa Grande',
      description: 'A spacious house with magnificent views, perfect for those seeking comfort and luxury.',
      fullDescription: `Casa Grande lives up to its name with generous spaces and magnificent views. This house offers a perfect balance of comfort and luxury in a natural setting.

The design emphasizes openness and connection with the surrounding jungle, while providing all modern amenities for a comfortable stay.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Spacious living area',
        'Large private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/casa-grande-1.jpg', alt: 'Casa Grande exterior' },
        { url: '/images/houses/casa-grande-2.jpg', alt: 'Casa Grande interior' },
      ],
      featured: false,
    },
    {
      id: '5',
      slug: 'v-house',
      name: 'V House',
      description: 'A distinctive house with unique architecture and stunning views of the jungle and ocean.',
      fullDescription: `V House is one of Verana's most distinctive accommodations, featuring unique architecture that blends seamlessly with the natural environment. The house offers stunning views and complete privacy.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Unique architecture',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/v-house-1.jpg', alt: 'V House exterior' },
        { url: '/images/houses/v-house-2.jpg', alt: 'V House interior' },
      ],
      featured: false,
    },
    {
      id: '6',
      slug: 'palapa',
      name: 'Palapa',
      description: 'A traditional palapa-style house offering authentic Mexican architecture with modern comforts.',
      fullDescription: `Palapa combines traditional Mexican architecture with modern luxury. The thatched roof and open design create a unique atmosphere that celebrates local building traditions while providing all the comforts of a luxury retreat.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Traditional palapa design',
        'Open-air living',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/palapa-1.jpg', alt: 'Palapa exterior' },
        { url: '/images/houses/palapa-2.jpg', alt: 'Palapa interior' },
      ],
      featured: false,
    },
    {
      id: '7',
      slug: 'casa-piedra',
      name: 'Casa Piedra',
      description: 'A beautiful stone house built into the hillside, offering privacy and stunning views.',
      fullDescription: `Casa Piedra, or Stone House, is built into the hillside using natural stone, creating a unique and beautiful accommodation. The house offers privacy and stunning views of the jungle and ocean.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle & Ocean',
      amenities: [
        'Natural stone construction',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/casa-piedra-1.jpg', alt: 'Casa Piedra exterior' },
        { url: '/images/houses/casa-piedra-2.jpg', alt: 'Casa Piedra interior' },
      ],
      featured: false,
    },
    {
      id: '8',
      slug: 'colibri',
      name: 'Colibrí',
      description: 'A charming house named after the hummingbird, offering intimate spaces and beautiful views.',
      fullDescription: `Colibrí, named after the hummingbird, is a charming and intimate accommodation. This house offers beautiful views and a cozy atmosphere perfect for couples seeking a romantic retreat.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      amenities: [
        'Intimate setting',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/colibri-1.jpg', alt: 'Colibrí exterior' },
        { url: '/images/houses/colibri-2.jpg', alt: 'Colibrí interior' },
      ],
      featured: false,
    },
    {
      id: '9',
      slug: 'bungalow',
      name: 'Bungalow',
      description: 'A cozy bungalow offering comfort and simplicity in a beautiful natural setting.',
      fullDescription: `Bungalow offers a cozy and comfortable retreat with all the essential amenities. This accommodation is perfect for guests who appreciate simplicity and connection with nature.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      amenities: [
        'Cozy atmosphere',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/bungalow-1.jpg', alt: 'Bungalow exterior' },
        { url: '/images/houses/bungalow-2.jpg', alt: 'Bungalow interior' },
      ],
      featured: false,
    },
    {
      id: '10',
      slug: 'studio',
      name: 'Studio',
      description: 'A compact and efficient studio accommodation, perfect for solo travelers or couples.',
      fullDescription: `Studio is a compact and efficient accommodation that maximizes space and comfort. Perfect for solo travelers or couples who want a cozy retreat without compromising on luxury.`,
      capacity: 2,
      bedrooms: 1,
      bathrooms: 1,
      view: 'Jungle',
      amenities: [
        'Efficient design',
        'Private terrace',
        'King-size bed',
        'En-suite bathroom',
        'Complimentary WiFi',
        'Daily housekeeping',
        'Filtered drinking water',
      ],
      accessibility: 'This house requires climbing steps from the main path.',
      images: [
        { url: '/images/houses/studio-1.jpg', alt: 'Studio exterior' },
        { url: '/images/houses/studio-2.jpg', alt: 'Studio interior' },
      ],
      featured: false,
    },
  ];

  return houses.find((h) => h.slug === slug) || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const house = await getHouse(params.slug);
  
  if (!house) {
    return {
      title: 'House Not Found | Verana',
    };
  }

  return {
    title: `${house.name} | Luxury Villa at Verana`,
    description: house.description,
    openGraph: {
      title: `${house.name} | Verana`,
      description: house.description,
      images: house.images.map((img) => img.url),
    },
  };
}

export default async function HouseDetailPage({ params }: { params: { slug: string } }) {
  const house = await getHouse(params.slug);

  if (!house) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24 pb-20 md:pb-0">
        <HouseDetail house={house} />
      </main>
      <MobileBottomBar />
    </>
  );
}
