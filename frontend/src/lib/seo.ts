// SEO utilities and schema generators

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
}

export function generateHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://verana.com/#organization',
        name: 'Verana',
        url: 'https://verana.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://verana.com/images/logo.png',
          width: 1945,
          height: 211,
        },
        sameAs: [
          'https://www.facebook.com/VeranaYelapa',
          'https://instagram.com/veranayelapa/',
        ],
      },
      {
        '@type': 'LodgingBusiness',
        '@id': 'https://verana.com/#lodging',
        name: 'Verana',
        image: 'https://verana.com/images/verana-exterior.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Yelapa',
          addressRegion: 'Jalisco',
          addressCountry: 'MX',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '20.4167',
          longitude: '-105.4333',
        },
        priceRange: '$$$',
        starRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Restaurant',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Swimming Pool',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Spa',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'WiFi',
            value: true,
          },
        ],
        telephone: '+52-1-322-227-5420',
        email: 'reservations@verana.com',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://verana.com/#website',
        url: 'https://verana.com',
        name: 'Verana',
        publisher: {
          '@id': 'https://verana.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://verana.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateHouseSchema(house: {
  name: string;
  description: string;
  images: string[];
  slug: string;
  lowPrice: number;
  highPrice: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: house.name,
    description: house.description,
    image: house.images,
    brand: {
      '@type': 'Brand',
      name: 'Verana',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: house.lowPrice.toString(),
      highPrice: house.highPrice.toString(),
      availability: 'https://schema.org/InStock',
      url: `https://verana.com/houses/${house.slug}/`,
    },
  };
}

export function generateExperienceSchema(experience: {
  name: string;
  description: string;
  price: number;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: experience.name,
    description: experience.description,
    provider: {
      '@type': 'LodgingBusiness',
      name: 'Verana',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
    offers: {
      '@type': 'Offer',
      price: experience.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://verana.com/experience/${experience.slug}/`,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
