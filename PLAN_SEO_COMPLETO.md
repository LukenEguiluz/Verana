# 🎯 PLAN SEO COMPLETO - Verana Hotel Boutique

## 📊 RESUMEN EJECUTIVO

Este documento detalla la estrategia SEO técnica y de contenido para Verana, basada en el análisis del sitio actual y mejores prácticas para hoteles boutique de lujo. El objetivo es posicionar Verana como el **hotel boutique líder en Yelapa** y aumentar el tráfico orgánico cualificado en **50-70% en 12 meses**.

---

## 1. SEO TÉCNICO

### 1.1 Estructura de URLs

#### URLs Principales (Canónicas)
```
/                                    → Home
/houses/                             → Listado de casas
/houses/[slug]/                      → Detalle de casa (ej: /houses/villa-verana/)
/experience/                         → Listado de experiencias
/experience/[slug]/                  → Detalle experiencia (ej: /experience/honeymoon-luxe/)
/activities/                         → Listado de actividades
/activities/[slug]/                  → Detalle actividad (ej: /activities/whale-watching/)
/spa/                                → Listado tratamientos spa
/spa/[slug]/                         → Detalle tratamiento (ej: /spa/jungle-spa-balance/)
/weddings/                           → Información bodas
/how-to-get-here/                    → Guía de acceso (CRÍTICA para conversión)
/info/                               → Información general
/info/facilities/                    → Facilidades
/info/reservations/                  → Políticas de reserva
/info/rates/                         → Tarifas
/info/transport/                     → Transporte
/info/faq/                           → FAQs
/contact/                            → Contacto
/press/                              → Prensa
/story/                              → Historia de Verana
/blog/                               → Blog principal
/blog/[slug]/                        → Post individual
/galleries/instagram/                → Galería Instagram
```

#### URLs SEO (Landings por Intención)
```
/boutique-hotel-yelapa/              → Cluster principal
/luxury-hotel-near-puerto-vallarta/  → Cluster ubicación
/how-to-get-to-yelapa-from-puerto-vallarta/ → Cluster transporte
/yelapa-wedding-venue/               → Cluster bodas
/honeymoon-off-grid-mexico/          → Cluster honeymoon
/things-to-do-yelapa/                → Cluster actividades
/boutique-hotel-mexico/              → Cluster país
/luxury-eco-lodge-mexico/            → Cluster sostenibilidad
/off-grid-luxury-hotel/              → Cluster experiencia única
```

### 1.2 Meta Tags por Página

#### Home (/)
```html
<title>Luxury Boutique Hotel in Yelapa | Verana - Where Nature Meets Comfort</title>
<meta name="description" content="Verana is one of the coolest boutique hotels Mexico has to offer. A handmade hotel in Yelapa where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler's hot list. Book your stay.">
<meta property="og:title" content="Luxury Boutique Hotel in Yelapa | Verana">
<meta property="og:description" content="A handmade hotel where nature meets comfort. Featured in Architectural Digest and Conde Nast Traveler.">
<meta property="og:image" content="https://verana.com/images/og-home.jpg">
<meta property="og:url" content="https://verana.com/">
<meta name="twitter:card" content="summary_large_image">
```

#### Houses - Listado (/houses/)
```html
<title>Luxury Villas & Houses in Yelapa | Verana Boutique Hotel</title>
<meta name="description" content="Discover Verana's 10 unique houses and villas in Yelapa. From intimate studios to spacious villas, each with stunning jungle and ocean views. Check availability.">
```

#### Houses - Detalle (/houses/villa-verana/)
```html
<title>Villa Verana - Luxury Villa in Yelapa | Verana Boutique Hotel</title>
<meta name="description" content="Villa Verana: Our most spacious accommodation in Yelapa. Features [capacity], [amenities]. Starting at $600/night. Check availability for your dates.">
```

#### Experience - Honeymoon Luxe (/experience/honeymoon-luxe/)
```html
<title>Luxury Honeymoon Package in Yelapa | Verana - $270</title>
<meta name="description" content="Romantic honeymoon package at Verana includes private candlelit dinner, paradise picnic, jungle bath, and champagne. Perfect for couples seeking privacy and luxury in Yelapa.">
```

#### Activities - Whale Watching (/activities/whale-watching/)
```html
<title>Whale Watching in Yelapa | Verana Activities</title>
<meta name="description" content="Experience whale watching in Yelapa Bay. Spot humpback whales, dolphins, turtles, and manta rays on our maritime safari. Book your adventure at Verana.">
```

#### How to Get Here (/how-to-get-here/)
```html
<title>How to Get to Verana Yelapa | Complete Transportation Guide</title>
<meta name="description" content="Complete guide to reaching Verana in Yelapa. From Puerto Vallarta airport to Boca de Tomatlan, then 30-minute boat ride. Includes flight times, costs, and FAQs.">
```

#### Landing: Boutique Hotel Yelapa (/boutique-hotel-yelapa/)
```html
<title>Boutique Hotel Yelapa | Verana - Luxury Jungle Escape</title>
<meta name="description" content="Verana is Yelapa's premier boutique hotel. Handmade architecture, stunning jungle views, and simple luxury. Featured in Architectural Digest. Book your stay.">
```

#### Landing: Luxury Hotel Near Puerto Vallarta (/luxury-hotel-near-puerto-vallarta/)
```html
<title>Luxury Hotel Near Puerto Vallarta | Verana Yelapa - 30 Min by Boat</title>
<meta name="description" content="Escape to Verana, a luxury boutique hotel just 30 minutes by boat from Puerto Vallarta. Off-grid luxury in Yelapa with stunning ocean and jungle views.">
```

### 1.3 Schema JSON-LD

#### Home Page - Organization + Hotel Schema
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://verana.com/#organization",
      "name": "Verana",
      "url": "https://verana.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://verana.com/images/logo.png",
        "width": 1945,
        "height": 211
      },
      "sameAs": [
        "https://www.facebook.com/VeranaYelapa",
        "https://instagram.com/veranayelapa/"
      ]
    },
    {
      "@type": "LodgingBusiness",
      "@id": "https://verana.com/#lodging",
      "name": "Verana",
      "image": "https://verana.com/images/verana-exterior.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yelapa",
        "addressRegion": "Jalisco",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.4167",
        "longitude": "-105.4333"
      },
      "priceRange": "$$$",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Swimming Pool",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Spa",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "WiFi",
          "value": true
        }
      ],
      "telephone": "+52-1-322-227-5420",
      "email": "reservations@verana.com"
    },
    {
      "@type": "WebSite",
      "@id": "https://verana.com/#website",
      "url": "https://verana.com",
      "name": "Verana",
      "publisher": {
        "@id": "https://verana.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://verana.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

#### House Detail Page - Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Villa Verana",
  "description": "Our most spacious accommodation in Yelapa with stunning jungle and ocean views.",
  "image": [
    "https://verana.com/images/houses/villa-verana-1.jpg",
    "https://verana.com/images/houses/villa-verana-2.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Verana"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "440",
    "highPrice": "825",
    "availability": "https://schema.org/InStock",
    "url": "https://verana.com/houses/villa-verana/"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "127"
  }
}
```

#### Experience Page - Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Honeymoon Luxe Package",
  "description": "Romantic honeymoon package including private candlelit dinner, paradise picnic, jungle bath, and champagne.",
  "provider": {
    "@type": "LodgingBusiness",
    "name": "Verana"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Mexico"
  },
  "offers": {
    "@type": "Offer",
    "price": "270",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

#### How to Get Here - FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get from the airport to Boca de Tomatlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply take a taxi from Puerto Vallarta airport. The trip takes about 45 minutes and all taxis are registered."
      }
    },
    {
      "@type": "Question",
      "name": "What time should my flight arrive to catch the last boat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your flight must arrive in Puerto Vallarta no later than 3 pm to catch our last boat of the day to Yelapa."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the boat ride to Verana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The boat ride from Boca de Tomatlan to Yelapa takes approximately 30 minutes along the beautiful coast."
      }
    }
  ]
}
```

#### BreadcrumbList Schema (Todas las páginas)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://verana.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Houses",
      "item": "https://verana.com/houses/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Villa Verana",
      "item": "https://verana.com/houses/villa-verana/"
    }
  ]
}
```

### 1.4 Sitemap.xml Estructura

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Home -->
  <url>
    <loc>https://verana.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Houses -->
  <url>
    <loc>https://verana.com/houses/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Individual Houses -->
  <url>
    <loc>https://verana.com/houses/villa-verana/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://verana.com/images/houses/villa-verana-hero.jpg</image:loc>
      <image:title>Villa Verana - Luxury Villa in Yelapa</image:title>
    </image:image>
  </url>
  
  <!-- Experiences -->
  <url>
    <loc>https://verana.com/experience/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Activities -->
  <url>
    <loc>https://verana.com/activities/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- How to Get Here (CRÍTICA) -->
  <url>
    <loc>https://verana.com/how-to-get-here/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- SEO Landings -->
  <url>
    <loc>https://verana.com/boutique-hotel-yelapa/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog Posts -->
  <url>
    <loc>https://verana.com/blog/how-to-get-to-yelapa-from-puerto-vallarta/</loc>
    <lastmod>2024-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
</urlset>
```

### 1.5 Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /wp-admin/
Disallow: /wp-content/uploads/
Disallow: /*?*

# Sitemaps
Sitemap: https://verana.com/sitemap.xml
Sitemap: https://verana.com/sitemap-images.xml
```

---

## 2. ARQUITECTURA DE CONTENIDO (TOPIC CLUSTERS)

### 2.1 Cluster Principal: Boutique Hotel Yelapa

**Hub Page:** `/boutique-hotel-yelapa/`

**Keywords Target:**
- boutique hotel yelapa
- luxury hotel yelapa
- yelapa boutique hotel
- best hotel yelapa
- yelapa mexico hotel

**Contenido:**
- Introducción a Verana como hotel boutique líder en Yelapa
- Qué hace único a Verana (handmade, off-grid, diseño arquitectónico)
- Enlaces internos a:
  - Houses (todas las opciones)
  - Experiences
  - How to Get Here
  - Story

**Pillar Content:** 2,000-2,500 palabras

### 2.2 Cluster: Ubicación y Acceso

**Hub Pages:**
- `/luxury-hotel-near-puerto-vallarta/`
- `/how-to-get-to-yelapa-from-puerto-vallarta/`

**Keywords Target:**
- hotel near puerto vallarta
- yelapa from puerto vallarta
- how to get to yelapa
- yelapa transportation
- puerto vallarta to yelapa
- yelapa boat ride

**Contenido:**
- Proximidad a Puerto Vallarta (30 min en bote)
- Guía completa de transporte
- Opciones de llegada
- Horarios de vuelos
- Costos aproximados
- FAQs de transporte

**Pillar Content:** 1,500-2,000 palabras cada una

### 2.3 Cluster: Bodas y Eventos

**Hub Page:** `/yelapa-wedding-venue/`

**Keywords Target:**
- yelapa wedding venue
- destination wedding mexico
- yelapa wedding
- mexico wedding venue
- boutique hotel wedding

**Contenido:**
- Verana como destino de bodas
- Espacios disponibles
- Capacidad (28 huéspedes, 50 para ceremonia)
- Paquetes de boda
- Testimonios de bodas
- Galería de eventos pasados

**Pillar Content:** 1,500-2,000 palabras

### 2.4 Cluster: Honeymoon y Romance

**Hub Page:** `/honeymoon-off-grid-mexico/`

**Keywords Target:**
- honeymoon mexico
- romantic getaway yelapa
- off-grid honeymoon
- mexico honeymoon resort
- secluded honeymoon mexico

**Contenido:**
- Privacidad y exclusividad
- Paquetes honeymoon (Luxe, Classic)
- Experiencias románticas
- Spa para parejas
- Testimonios de parejas

**Pillar Content:** 1,500-2,000 palabras

### 2.5 Cluster: Actividades y Experiencias

**Hub Page:** `/things-to-do-yelapa/`

**Keywords Target:**
- things to do yelapa
- yelapa activities
- adventure yelapa
- yelapa excursions
- what to do in yelapa

**Contenido:**
- Actividades por categoría (By Land, By Sea, By Hook, By Us, By Yourself)
- Experiencias únicas de Verana
- Excursiones disponibles
- Guía de actividades locales

**Pillar Content:** 2,000-2,500 palabras

### 2.6 Cluster: Sostenibilidad y Diseño

**Hub Page:** `/luxury-eco-lodge-mexico/`

**Keywords Target:**
- eco lodge mexico
- sustainable luxury hotel
- off-grid luxury
- eco-friendly hotel mexico
- sustainable architecture mexico

**Contenido:**
- Filosofía de sostenibilidad
- Arquitectura handmade
- Prácticas eco-friendly
- Conservación de agua
- Impacto en comunidad local

**Pillar Content:** 1,500-2,000 palabras

---

## 3. ESTRATEGIA DE CONTENIDO (BLOG)

### 3.1 Posts Prioritarios (12 Posts)

#### Post 1: "How to Get to Verana from Puerto Vallarta: Complete Guide 2024"
- **Keywords:** how to get to verana, puerto vallarta to yelapa, yelapa transportation
- **Intención:** Transaccional/Informativa
- **H2s:**
  - Option 1: Taxi + Water Taxi (Step-by-Step)
  - Option 2: Private Car Service
  - Flight Timing: When to Arrive and Depart
  - Transportation Costs Breakdown
  - What to Expect: The Boat Ride to Yelapa
  - FAQs: Common Transportation Questions
- **CTA:** "Book Your Stay" / "Contact Us"
- **Word Count:** 2,000-2,500

#### Post 2: "Top 10 Things To Do in Yelapa for Adventure Lovers"
- **Keywords:** things to do yelapa, yelapa activities, adventure yelapa
- **Intención:** Informativa
- **H2s:**
  - Waterfall Hike to Hidden Cascades
  - Whale Watching and Marine Safari
  - Snorkeling in Yelapa Bay
  - Fishing Adventures
  - Kayaking and Paddleboarding
  - Exploring Local Markets
  - Sunset Viewpoints
  - Cooking Classes
  - Tequila and Mezcal Tastings
  - Secluded Beach Picnics
- **CTA:** "Book Your Adventure" / Link to Activities
- **Word Count:** 2,500-3,000

#### Post 3: "Planning a Destination Wedding at Verana: Everything You Need to Know"
- **Keywords:** yelapa wedding venue, destination wedding mexico, verana wedding
- **Intención:** Transaccional
- **H2s:**
  - Why Verana is Perfect for Your Wedding
  - Venue Spaces & Capacity
  - Wedding Packages: I Do vs Full Wedding
  - Planning Timeline: When to Book
  - Real Wedding Stories
  - Off-Season Advantages
  - What's Included in Wedding Packages
- **CTA:** "Request a Wedding Quote"
- **Word Count:** 2,000-2,500

#### Post 4: "Romantic Off-Grid Honeymoon at Verana: A Complete Guide"
- **Keywords:** honeymoon mexico, romantic getaway yelapa, off-grid honeymoon
- **Intención:** Inspiracional
- **H2s:**
  - Why Choose Verana for Your Honeymoon
  - Private Moments & Privacy
  - Honeymoon Packages: Luxe vs Classic
  - Spa Experiences for Couples
  - Dining Under the Stars
  - Excursions for Two
  - What Makes It Special
- **CTA:** "Check Availability for Honeymoon"
- **Word Count:** 2,000-2,500

#### Post 5: "Sustainable Luxury: How Verana Balances Comfort and Eco-Consciousness"
- **Keywords:** sustainable luxury hotel, eco lodge mexico, eco-friendly hotel
- **Intención:** Informativa/Branding
- **H2s:**
  - Architecture & Design Philosophy
  - Handmade Construction
  - Local Community Impact
  - Waste Management Practices
  - Energy & Water Conservation
  - Guest Education
- **CTA:** "Experience Sustainable Luxury"
- **Word Count:** 2,000-2,500

#### Post 6: "Yelapa vs. Puerto Vallarta: Which Destination is Right for You?"
- **Keywords:** yelapa vs puerto vallarta, yelapa or puerto vallarta
- **Intención:** Informativa
- **H2s:**
  - Atmosphere Comparison
  - Activities & Nightlife
  - Accommodation Styles
  - Budget Considerations
  - Best For: Adventure Seekers
  - Best For: Relaxation Seekers
  - Best For: Couples
- **CTA:** "Explore Verana Houses"
- **Word Count:** 2,000-2,500

#### Post 7: "The Ultimate Yelapa Packing List: What to Bring for Your Stay"
- **Keywords:** yelapa packing list, what to bring yelapa
- **Intención:** Informativa
- **H2s:**
  - Clothing Essentials
  - Tech & Gear
  - Toiletries & Personal Care
  - Documents & Important Items
  - What NOT to Bring
  - Seasonal Considerations
- **CTA:** "Book Your Stay"
- **Word Count:** 1,500-2,000

#### Post 8: "Best Time to Visit Yelapa: Weather, Seasons, and What to Expect"
- **Keywords:** best time to visit yelapa, yelapa weather, yelapa seasons
- **Intención:** Informativa
- **H2s:**
  - Dry Season (Nov-Apr): Peak Season
  - Rainy Season (May-Oct): Low Season
  - Whale Watching Season
  - Temperature Guide by Month
  - Crowd Levels Throughout the Year
  - When to Book for Best Rates
- **CTA:** "Check Availability"
- **Word Count:** 2,000-2,500

#### Post 9: "Verana Houses: A Guide to Choosing Your Perfect Villa"
- **Keywords:** verana houses, yelapa villas, verana accommodations
- **Intención:** Transaccional
- **H2s:**
  - House Overviews: From Studio to Villa
  - Views & Locations
  - Capacity & Amenities
  - Accessibility Considerations
  - Booking Tips
  - Seasonal Pricing Guide
- **CTA:** "View All Houses" / "Check Availability"
- **Word Count:** 2,500-3,000

#### Post 10: "Local Cuisine at Verana: Farm-to-Table Dining in Yelapa"
- **Keywords:** verana restaurant, yelapa dining, mexico cuisine
- **Intención:** Inspiracional
- **H2s:**
  - Menu Highlights
  - Sourcing Local Ingredients
  - Dining Experiences
  - Dietary Accommodations
  - Chef's Recommendations
  - Open Kitchen Experience
- **CTA:** "Book a Culinary Experience"
- **Word Count:** 1,500-2,000

#### Post 11: "Wellness & Spa at Verana: Reconnect with Nature and Yourself"
- **Keywords:** verana spa, wellness retreat mexico, jungle spa
- **Intención:** Inspiracional
- **H2s:**
  - Spa Treatment Menu
  - Jungle Spa Packages
  - Yoga & Meditation
  - Natural Surroundings
  - Wellness Packages
  - Guest Testimonials
- **CTA:** "Explore Spa Experiences"
- **Word Count:** 2,000-2,500

#### Post 12: "Photography Guide: Capturing Yelapa's Natural Beauty"
- **Keywords:** yelapa photography, yelapa photo spots
- **Intención:** Inspiracional
- **H2s:**
  - Best Photo Spots at Verana
  - Golden Hour Tips
  - Wildlife Photography
  - Drone Regulations
  - Sharing Your Experience
- **CTA:** "Book Your Photography Adventure"
- **Word Count:** 1,500-2,000

### 3.2 Calendario Editorial

**Mes 1-2:**
- Post 1: How to Get to Verana
- Post 2: Top 10 Things to Do
- Post 3: Destination Wedding Guide

**Mes 3-4:**
- Post 4: Honeymoon Guide
- Post 5: Sustainable Luxury
- Post 6: Yelapa vs Puerto Vallarta

**Mes 5-6:**
- Post 7: Packing List
- Post 8: Best Time to Visit
- Post 9: Houses Guide

**Mes 7-8:**
- Post 10: Local Cuisine
- Post 11: Wellness & Spa
- Post 12: Photography Guide

---

## 4. ESTRATEGIA DE BACKLINKS

### 4.1 Recuperación de Menciones de Prensa

**Menciones Identificadas:**
- Architectural Digest
- Conde Nast Traveler (Hot List)
- Vogue
- House Beautiful

**Acción:**
1. Contactar a editores de cada publicación
2. Solicitar actualización de artículo con enlace a Verana
3. Ofrecer contenido adicional (fotos, quotes, información actualizada)

### 4.2 Colaboraciones Estratégicas

**Targets:**
- Wedding planners especializados en México
- Luxury travel bloggers
- Design and architecture blogs
- Eco-tourism publications

**Estrategia:**
- Sesiones de prensa para bloggers
- Contenido colaborativo
- Intercambio de enlaces
- Testimonios y casos de estudio

### 4.3 Directorios y Listings

**Prioritarios:**
- TripAdvisor (optimizar perfil)
- Booking.com (si aplica)
- Google Business Profile (optimizar)
- Luxury hotel directories
- Boutique hotel associations

---

## 5. TRACKING Y MEDICIÓN

### 5.1 Google Search Console

**Métricas Clave:**
- Impresiones por keyword
- CTR promedio
- Posición promedio
- Cobertura de indexación
- Errores de rastreo

**Acciones:**
- Monitoreo semanal
- Identificación de oportunidades
- Corrección de errores
- Optimización de CTR

### 5.2 Google Analytics 4

**Eventos Personalizados:**
- `view_house_detail`
- `view_experience_detail`
- `click_book_now`
- `click_whatsapp`
- `submit_contact_form`
- `view_how_to_get_here`
- `download_guide`

**Conversiones:**
- Reservas completadas
- Formularios enviados
- Clicks en WhatsApp
- Solicitudes de cotización

### 5.3 KPIs Mensuales

**Tráfico Orgánico:**
- Sesiones orgánicas
- Nuevos usuarios
- Tasa de rebote
- Páginas por sesión
- Tiempo en sitio

**Conversiones:**
- Tasa de conversión orgánica
- Leads generados
- Reservas desde orgánico

**SEO Técnico:**
- Core Web Vitals
- Tasa de indexación
- Errores 404
- Velocidad de carga

---

## 6. CRONOGRAMA DE IMPLEMENTACIÓN

### Fase 1: SEO Técnico (Semanas 1-2)
- [ ] Configurar meta tags en todas las páginas
- [ ] Implementar Schema JSON-LD
- [ ] Crear sitemap.xml dinámico
- [ ] Configurar robots.txt
- [ ] Optimizar URLs
- [ ] Implementar breadcrumbs

### Fase 2: Contenido Inicial (Semanas 3-4)
- [ ] Crear landing pages SEO
- [ ] Escribir primeros 3 posts de blog
- [ ] Optimizar contenido existente
- [ ] Agregar alt text a todas las imágenes

### Fase 3: Link Building (Semanas 5-8)
- [ ] Contactar prensa para enlaces
- [ ] Colaboraciones con bloggers
- [ ] Optimizar perfiles en directorios
- [ ] Crear contenido compartible

### Fase 4: Monitoreo y Optimización (Ongoing)
- [ ] Revisión mensual de métricas
- [ ] Ajustes basados en datos
- [ ] Nuevo contenido mensual
- [ ] Actualización de contenido existente

---

## 7. CHECKLIST DE IMPLEMENTACIÓN

### SEO Técnico
- [ ] Meta titles únicos en todas las páginas
- [ ] Meta descriptions optimizadas (150-160 caracteres)
- [ ] H1 único y optimizado por página
- [ ] Estructura H2-H6 jerárquica
- [ ] URLs limpias y descriptivas
- [ ] Canonical tags correctos
- [ ] Schema JSON-LD implementado
- [ ] Sitemap.xml generado
- [ ] Robots.txt configurado
- [ ] 404 page personalizada
- [ ] Redirecciones 301 configuradas

### Contenido
- [ ] Landing pages SEO creadas
- [ ] Blog posts optimizados
- [ ] Alt text en todas las imágenes
- [ ] Internal linking estratégico
- [ ] CTAs en todas las páginas
- [ ] FAQs con Schema

### Performance
- [ ] Imágenes optimizadas (WebP/AVIF)
- [ ] Lazy loading implementado
- [ ] Core Web Vitals optimizados
- [ ] Mobile-first design
- [ ] Page speed < 3s

### Tracking
- [ ] Google Analytics 4 configurado
- [ ] Google Search Console conectado
- [ ] Eventos personalizados implementados
- [ ] Conversiones configuradas
- [ ] UTM parameters en uso

---

**Este plan SEO está diseñado para ser implementado de forma incremental, priorizando las mejoras de mayor impacto primero.**
