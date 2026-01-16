import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import { SchemaMarkup } from '@/components/SEO/SchemaMarkup';
import { generateHomeSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://verana.com'),
  title: {
    default: 'Luxury Boutique Hotel in Yelapa | Verana - Where Nature Meets Comfort',
    template: '%s | Verana',
  },
  description: 'Verana is one of the coolest boutique hotels Mexico has to offer. A handmade hotel in Yelapa where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler\'s hot list. Book your stay.',
  keywords: [
    'boutique hotel yelapa',
    'luxury hotel yelapa',
    'boutique hotel mexico',
    'yelapa hotel',
    'luxury hotel puerto vallarta',
    'verana yelapa',
    'jungle spa',
    'simple luxury',
    'off-grid luxury',
    'eco lodge mexico',
    'destination wedding yelapa',
    'honeymoon mexico',
  ],
  authors: [{ name: 'Verana' }],
  creator: 'Verana',
  publisher: 'Verana',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Verana',
    title: 'Luxury Boutique Hotel in Yelapa | Verana',
    description: 'A handmade hotel where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler\'s hot list.',
    url: 'https://verana.com',
    images: [
      {
        url: 'https://verana.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Verana - Luxury Boutique Hotel in Yelapa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Boutique Hotel in Yelapa | Verana',
    description: 'A handmade hotel where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler.',
    images: ['https://verana.com/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://verana.com',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homeSchema = generateHomeSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://verana.com" />
        <SchemaMarkup schema={homeSchema} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
