import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Verana | Luxury Boutique Hotel in Yelapa, Mexico',
    template: '%s | Verana',
  },
  description: 'Verana is a luxury boutique hotel in Yelapa, Mexico. A handmade hotel where nature meets comfort. Experience off-grid luxury in the heart of the jungle.',
  keywords: ['boutique hotel', 'yelapa', 'luxury hotel', 'mexico', 'verana'],
  authors: [{ name: 'Verana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Verana',
    title: 'Verana | Luxury Boutique Hotel in Yelapa',
    description: 'A handmade hotel where nature meets comfort',
  },
};
