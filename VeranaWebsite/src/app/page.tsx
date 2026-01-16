import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { WhyVerana } from '@/components/WhyVerana';
import { HousesPreview } from '@/components/HousesPreview';
import { VideoSection } from '@/components/VideoSection';
import { InstagramGallery } from '@/components/InstagramGallery';
import { FloatingImageGallery } from '@/components/FloatingImageGallery';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { CollapsibleSection } from '@/components/CollapsibleSection';
import { PressSection } from '@/components/PressSection';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Boutique Hotel in Yelapa | Verana - Where Nature Meets Comfort',
  description: 'Verana is one of the coolest boutique hotels Mexico has to offer. A handmade hotel in Yelapa where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler\'s hot list. Book your stay.',
  openGraph: {
    title: 'Luxury Boutique Hotel in Yelapa | Verana',
    description: 'A handmade hotel where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler.',
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
  alternates: {
    canonical: 'https://verana.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-0 overflow-x-hidden pb-20 md:pb-0">
        {/* Hero Section */}
        <Hero
          title="Luxury Boutique Hotel in Yelapa"
          subtitle="A handmade hotel where nature meets comfort. I am Verana, a place imagined and then found."
          imageUrl="/imagenes/Boutique_hotel_Mexico_Verana_Intro_1.jpg.webp"
          imageAlt="Verana luxury boutique hotel in Yelapa jungle"
          bookNowUrl="/book"
          howToGetHereUrl="/how-to-get-here"
        />

        {/* Why Verana Section */}
        <WhyVerana />

        {/* Houses Preview */}
        <HousesPreview />

        {/* Floating Image Gallery */}
        <FloatingImageGallery />

        {/* Video Section */}
        <div className="py-16 pb-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <VideoSection
            videoUrl="https://verana.com/wp-content/uploads/verana-fond-2.mp4"
            posterUrl="/images/video-poster.jpg"
            title="Explore Verana"
            description="Immerse yourself in the magic of our handmade hotel, nestled in the heart of the jungle."
          />
        </div>

        {/* Story Section (Collapsible) */}
        <section className="py-16 pb-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse-slow" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <CollapsibleSection
              title="The Story of Verana"
              defaultExpanded={false}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  I am Verana, the handmade hotel, one of the coolest boutique hotels Mexico has to offer.
                  How did I come to be on this hillside surrounded by jungle? It began with machetes.
                  Land was cleared. I was meant to be just one house. But other structures followed.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My growth was unplanned – a direction rather than an endpoint. I came from images and ideas.
                  Like a dream recalled – the pieces became a whole. Light, time, space, color, weather, and
                  the jungle all merged to help create me.
                </p>
                <p className="text-gray-700 leading-relaxed font-serif italic text-xl">
                  I am a place imagined and then found.
                </p>
              </div>
            </CollapsibleSection>
          </div>
        </section>

        {/* Press Section */}
        <PressSection />

        {/* Instagram Gallery */}
        <InstagramGallery />

        {/* CTA Section */}
        <CTASection />
      </main>

      <MobileBottomBar />
      <FloatingActionButton />
    </>
  );
}
