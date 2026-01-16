import { Navigation } from '@/components/Navigation';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { SchemaMarkup } from '@/components/SEO/SchemaMarkup';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get to Verana Yelapa | Complete Transportation Guide',
  description: 'Complete guide to reaching Verana in Yelapa. From Puerto Vallarta airport to Boca de Tomatlan, then 30-minute boat ride. Includes flight times, costs, transportation options, and FAQs.',
  keywords: [
    'how to get to verana',
    'how to get to yelapa',
    'yelapa transportation',
    'puerto vallarta to yelapa',
    'yelapa boat ride',
    'how to reach verana',
    'yelapa travel guide',
  ],
  openGraph: {
    title: 'How to Get to Verana Yelapa | Complete Transportation Guide',
    description: 'Finding Verana is part of the adventure. Complete guide from Puerto Vallarta to Yelapa including boat schedules, costs, and travel tips.',
    url: 'https://verana.com/how-to-get-here',
    images: [
      {
        url: 'https://verana.com/images/how-to-get-here-og.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Get to Verana - Transportation Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://verana.com/how-to-get-here',
  },
};

export default function HowToGetHerePage() {
  const faqs = [
    {
      question: 'How do I get from the airport to Boca de Tomatlan?',
      answer: 'Simply take a taxi from Puerto Vallarta airport. The trip takes about 45 minutes and all taxis are registered.',
    },
    {
      question: 'What time should my flight arrive to catch the last boat?',
      answer: 'Your flight must arrive in Puerto Vallarta no later than 3 pm to catch our last boat of the day to Yelapa.',
    },
    {
      question: 'How long is the boat ride to Verana?',
      answer: 'The boat ride from Boca de Tomatlan to Yelapa takes approximately 30 minutes along the beautiful coast.',
    },
    {
      question: 'Can Verana pick us up at the airport?',
      answer: 'While we do not provide a pick up service directly, we work with a private car service which can await you at the airport, or from any Puerto Vallarta location. Contact us for scheduling and rates.',
    },
    {
      question: 'How do we know which boat is Verana\'s?',
      answer: 'Look out for the boat which says V E R A N A on the side, with an orange canvas top! Have your driver drop you as close to the pier of Boca de Tomatlan as possible.',
    },
    {
      question: 'What happens if our flight is delayed?',
      answer: 'Don\'t panic, just contact us by phone or email as soon as a delay is reported. Chances are you will still have no problem arriving to Verana that same day. If your flight is extremely delayed, we can arrange a boat for the next day at 1 pm.',
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://verana.com/' },
    { name: 'How to Get Here', url: 'https://verana.com/how-to-get-here' },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative h-64 md:h-96 flex items-center justify-center bg-gray-900">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="/images/how-to-get-here-hero.jpg"
              alt="Boat to Yelapa"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
              How to Get to Verana
            </h1>
            <p className="text-xl md:text-2xl text-amber-100">
              Finding me is part of the adventure
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 pb-20 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Take a taxi from Puerto Vallarta to Boca de Tomatlan. Catch a boat to Yelapa. 
                The boat curves down through the Bay of Banderas. Suddenly the driver cuts the engine 
                to drift towards the coast. The mules are standing on the rocks. Your luggage is strapped 
                to their backs, and you hike up the hill into the jungle.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-serif italic">
                I will be waiting for you.
              </p>
            </div>

            {/* Transportation Options */}
            <div className="space-y-12 mb-16">
              <div className="border-l-4 border-amber-600 pl-6">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">
                  Option 1: Taxi + Water Taxi (Recommended)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Step 1: Puerto Vallarta to Boca de Tomatlan</h3>
                    <p>Take a taxi from Puerto Vallarta airport or downtown to Boca de Tomatlan (approximately 30-45 minutes).</p>
                    <p className="text-sm text-gray-600 mt-1">Cost: ~$25-35 USD | Duration: 30-45 min</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Step 2: Water Taxi to Yelapa</h3>
                    <p>From Boca de Tomatlan, catch a water taxi (panga) to Yelapa. Boats run regularly throughout the day.</p>
                    <p className="text-sm text-gray-600 mt-1">Cost: ~$10-15 USD per person | Duration: 30-40 min</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Step 3: Arrival at Yelapa</h3>
                    <p>Upon arrival, our team will meet you at the dock. Your luggage will be loaded onto mules, and you'll enjoy a scenic 15-20 minute hike up to Verana.</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-amber-600 pl-6">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">
                  Option 2: Hiking Trail (For Adventurers)
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    For those seeking a more adventurous route, you can hike from Boca de Tomatlan to Yelapa 
                    along a coastal trail. This option requires good physical condition and appropriate footwear.
                  </p>
                  <p className="text-sm text-gray-600">Duration: 2-3 hours | Difficulty: Moderate to challenging</p>
                  <p className="text-amber-600 font-medium">
                    ⚠️ Not recommended for first-time visitors or those with heavy luggage.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Location Map</h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1234567890!2d-105.456789!3d20.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiAxMDXCsDI3JzI0LjQiVw!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Verana Location Map"
                />
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    What time do boats run from Boca de Tomatlan?
                  </h3>
                  <p className="text-gray-700">
                    Water taxis run regularly from early morning until late afternoon. We recommend arriving 
                    before 4 PM to ensure a smooth transfer. For specific schedules, please contact us.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Can I bring large luggage?
                  </h3>
                  <p className="text-gray-700">
                    Yes, but please pack light when possible. Mules can carry standard-sized luggage. 
                    Very large or heavy items may require special arrangements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Is the hike difficult?
                  </h3>
                  <p className="text-gray-700">
                    The hike from the dock to Verana is moderate, taking 15-20 minutes on a well-maintained trail. 
                    It's suitable for most fitness levels, but please wear appropriate footwear.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    What should I bring?
                  </h3>
                  <p className="text-gray-700">
                    Comfortable walking shoes, light clothing, sunscreen, insect repellent, and a sense of adventure. 
                    We provide most amenities, so pack light!
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
              <h2 className="text-2xl font-serif mb-4 text-gray-900">Travel Checklist</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Book transportation in advance (especially during high season)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Pack light - comfortable clothing and footwear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Bring cash (pesos) for water taxi and tips</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Have our contact information handy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Arrive during daylight hours for best experience</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                Need help planning your journey? We're here to assist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/521XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                  data-ga-event="click_whatsapp_how_to_get_here"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contact via WhatsApp
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileBottomBar />
    </>
  );
}
