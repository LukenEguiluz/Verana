# PROPUESTA PROFESIONAL: REDISEÑO Y OPTIMIZACIÓN DIGITAL
## Verana - Hotel Boutique de Lujo

---

## 1. RESUMEN EJECUTIVO

Verana enfrenta actualmente fricciones en su proceso de reserva, navegación móvil poco optimizada, contenido insuficiente para SEO y tiempos de carga elevados que impactan la experiencia del usuario. Existe una gran oportunidad para reposicionar la marca digital con un rediseño mobile-first, mejorar métricas de Core Web Vitals, optimizar SEO para captar tráfico orgánico cualificado y aumentar conversiones (reservas + leads). Se espera un impacto de incremento de reservas directo de un **20-40% anual** combinando mejoras UI/UX, SEO y performance, así como visibilidad orgánica relevante en mercados clave como EE.UU., Canadá y México.

---

## 2. OBJETIVOS MEDIBLES (KPIs)

| Métrica | Estado actual (hipótesis) | Meta propuesta | Plazo |
|---|---|---|---|
| **Tasa de conversión reservas** (Book Now clicks → reserva completada) | 1-2% | 4-5% | 6-9 meses |
| **LCP** (Largest Contentful Paint) móvil | > 3.5s | ≤ 2.5s | Inmediato post-lanzamiento |
| **INP** (Interaction to Next Paint) | > 300ms | ≤ 200ms | Inmediato post-lanzamiento |
| **CLS** (Cumulative Layout Shift) | > 0.25 | ≤ 0.10 | Inmediato post-lanzamiento |
| **Tráfico orgánico mensual** | Base actual a validar | +50-70% | 12 meses |
| **Leads por WhatsApp / formularios** | Base actual a validar | +30-50% | 6 meses |
| **Tiempo medio de sesión** | Baja interacción | +25-40% | 6 meses |
| **Páginas vistas por sesión** | < 2 páginas | > 3.5 páginas | 6 meses |
| **Tasa de rebote** | > 60% | < 45% | 6 meses |

**Nota:** Las métricas actuales son hipótesis basadas en patrones típicos de sitios hoteleros. Se validarán durante la Fase 0 (Discovery) con datos reales de analítica.

---

## 3. AUDITORÍA INICIAL

### Hallazgos típicos para sitios hoteleros tipo editorial

#### UX/UI y Conversión
- **Alta fricción en reserva:** botones poco visibles, pasos largos, falta de confirmación clara, ausencia de indicadores de progreso
- **CTAs dispersos:** "Book Now" no siempre presente o visible en scroll móvil, falta de sticky CTA en mobile
- **Navegación móvil compleja:** menús anidados, sin menú inferior fijo de acceso rápido, hamburguesa que oculta opciones importantes
- **Sección "How to arrive" ausente o poco detallada:** causa incertidumbre y abandono en usuarios interesados
- **Contenido de Houses insuficiente:** amenities incompletas, capacidades poco claras, información de accesibilidad (escaleras, dificultad) ausente, fotos limitadas o de baja calidad
- **Experiencias/Spa/Weddings poco explorables:** falta información sobre duración, inclusiones, para quién es adecuado, precios aproximados

#### Performance
- **Imágenes pesadas no optimizadas:** formatos legacy (JPG sin compresión), múltiples recursos cargados innecesariamente en móvil
- **JavaScript excesivo:** librerías pesadas cargadas en todas las páginas, falta de code splitting
- **Falta de lazy-load:** imágenes y recursos cargados antes de ser necesarios
- **CDN no configurado o subóptimo:** assets servidos desde servidor único

#### SEO Técnico
- **Metas duplicadas o genéricas:** títulos y descripciones no optimizados por página
- **Falta de schema markup:** no hay estructura JSON-LD para Hotel/LodgingBusiness
- **Enlaces rotos o redirecciones incorrectas:** 404s no gestionados, URLs antiguas sin redirección
- **Arquitectura de contenido poco estructurada:** falta de topic clusters, landings por intención de búsqueda
- **Sitemap desactualizado o inexistente**
- **robots.txt mal configurado o ausente**

### Hipótesis a validar

- Que el motor de reservas existente permite integración de eventos y dirección de funnel (API disponible o iframe configurable)
- Que el contenido disponible (texto, fotos, reviews) es suficiente para generar clusters temáticos y landings SEO
- Que el CMS actual o infraestructura permite migrar/rediseñar sin reconstrucción total del backend
- ✅ **Inventario fotográfico disponible:** Se ha proporcionado carpeta `imagenes/` con 22 imágenes WebP optimizadas. Incluye imágenes de 5 casas (Bungalow, Palapa, Tea House, V House, Casa Nuova), tours/experiencias, fotos de huéspedes, y logo. **Nota:** Faltan imágenes para Studio, Casa Piedra, Colibrí, Pool House y Villa Verana.
- Que hay brand guidelines definidas o estilo visual consistente a seguir

### Datos requeridos del cliente

- **Analítica actual:** Google Analytics (GA4 o Universal), Google Search Console, datos de rendimiento móvil/desktop
- **Mapa de flujo de reservas actual:** pasos del funnel, puntos de abandono conocidos, integración con motor externo
- **Inventario de contenido:** textos existentes, imágenes disponibles (formato, resolución, derechos), FAQs, descripciones de experiencias
- **Acceso técnico:** hosting, CMS o repositorio de código, sistema de reservas, credenciales necesarias
- **Brand guidelines:** estilo gráfico, tipografía, paleta de colores, imágenes de marca, tono de voz
- **Información de negocio:** precios aproximados (rangos), temporadas, políticas de cancelación, datos de contacto (WhatsApp, email)

---

## 4. PLAN UX/UI MOBILE-FIRST

### 4.1 Home Page

#### Hero Section
- **H1 claro y optimizado:** "Luxury Boutique Hotel in Yelapa | Verana – Where Nature Meets Comfort" (o variante aprobada)
- **CTAs visibles y contrastados:** 
  - Botón primario: "Book Now" (destacado, color de marca)
  - Botón secundario: "How to Get Here" (outline, mismo nivel visual)
- **Imagen hero optimizada:** formato WebP/AVIF, lazy-load, responsive srcset
- **Subtítulo breve:** propuesta de valor en 1-2 líneas

#### Menú de navegación
- **Simplificado:** máximo 5-6 items principales (Home, Houses, Experiences, Spa, Weddings, Contact/How to Get Here)
- **Menú hamburguesa en móvil:** con animación suave, overlay oscuro, fácil cierre
- **Mega-menú opcional en desktop:** si hay muchas subcategorías (ej. Houses con preview de imágenes)

#### Sección "Why Verana"
- **Propuesta de valor clara:** 3-4 puntos destacados (diseño arquitectónico único, naturaleza pristina, privacidad, lujo sostenible)
- **Iconografía minimalista:** iconos simples que refuercen cada punto
- **Layout responsive:** grid que se adapta a móvil (1 columna) y desktop (2-3 columnas)

#### Módulos colapsables
- **Para texto largo:** Historia, filosofía, sostenibilidad
- **En móvil:** botón "Leer más" que expande contenido sin recargar página
- **Mejora scroll:** reduce fricción visual, mantiene engagement

#### Barra fija inferior (mobile)
- **Siempre visible:** Book / WhatsApp / Map (iconos + texto)
- **Sticky position:** no interfiere con contenido, fácil acceso
- **Animación sutil:** aparece después de scroll inicial para no distraer

### 4.2 Houses (Plantilla de detalle)

#### Galería principal
- **Carrusel de alta resolución:** lazy-load, navegación táctil, zoom en desktop
- **Filtros opcionales:** por vista (jungle, océano, montaña), tipo de espacio
- **Thumbnails:** preview rápido de todas las imágenes

#### Información estructurada
- **Capacidad:** número de huéspedes, camas, habitaciones
- **Amenities:** lista clara con iconos (WiFi, terraza, vista, etc.)
- **Accesibilidad:** información destacada sobre escaleras, dificultad de acceso, si es apto para movilidad reducida
- **Vista:** descripción clara (jungle, océano, mixta)

#### CTA "Check Availability"
- **Destacado:** botón grande, color de acción, visible sin scroll profundo
- **Sticky opcional:** en móvil, se mantiene visible durante scroll
- **Integración:** conecta con motor de reservas o calendario

### 4.3 Experiences / Spa / Weddings

#### Tarjetas de servicio
- **Layout tipo card:** imagen destacada, título, información clave
- **Duración:** visible de inmediato (ej. "2 horas", "Full day")
- **Inclusiones:** lista breve de lo que incluye
- **Para quién es:** audiencia objetivo (parejas, grupos, individual)
- **CTA:** "Add to Booking" (si se puede reservar directamente) o "Request Quote" (si requiere consulta)

#### Página de detalle
- **Información completa:** descripción extendida, galería, testimonios si aplica
- **Formulario de consulta:** si no es reservable directamente, formulario simple con campos esenciales

### 4.4 Página dedicada: /how-to-get-to-verana/

#### Contenido esencial
- **Mapa interactivo:** integración con Google Maps o similar, marcadores de puntos clave
- **Pasos detallados:** 
  - Opción 1: Taxi + Barco (tiempos, costos aproximados)
  - Opción 2: Sendero (dificultad, duración, recomendaciones)
  - Opción 3: Transporte privado (si aplica)
- **FAQs:** preguntas comunes sobre transporte, qué llevar, horarios
- **Checklist de viaje:** items esenciales, recomendaciones de ropa, documentos

#### CTAs
- **"View on Google Maps"** (abre mapa externo)
- **"Download PDF Guide"** (si se genera guía descargable)
- **"Contact Us for Help"** (WhatsApp o formulario)

### 4.5 Accesibilidad (WCAG 2.1 AA mínimo)

#### Contraste y legibilidad
- **Contraste de colores:** mínimo 4.5:1 para texto normal, 3:1 para texto grande
- **Tamaños táctiles:** mínimo 44×44 px para botones y áreas interactivas
- **Tipografía legible:** tamaño mínimo 16px en móvil, line-height adecuado (1.5+)

#### Navegación
- **Foco visible:** outline claro en elementos enfocados (teclado)
- **Orden lógico:** tab order coherente, skip links si es necesario
- **Alt text descriptivo:** todas las imágenes con descripción relevante (no genérica)

#### Estructura semántica
- **HTML semántico:** uso correcto de headings (H1-H6), landmarks (nav, main, footer)
- **ARIA labels:** cuando sea necesario para elementos interactivos complejos

### 4.6 Entregables de diseño

- **Wireframes:** mobile y desktop para páginas clave (Home, Houses detalle, Experiences, How to Get Here, Blog)
- **UI Kit / Design System:** 
  - Botones (primario, secundario, terciario, estados)
  - Paleta de colores (primarios, secundarios, neutros, estados)
  - Tipografía (fuentes, tamaños, pesos, line-heights)
  - Iconografía (set consistente, tamaños)
  - Componentes reutilizables (cards, forms, modals)
- **Prototipo interactivo en Figma:** 
  - Flujos de reserva completos
  - Navegación móvil y desktop
  - Interacciones y transiciones
- **Especificación responsive:** 
  - Breakpoints definidos (mobile: 320-768px, tablet: 769-1024px, desktop: 1025px+)
  - Comportamientos adaptativos documentados
  - Grid system y espaciado

---

## 5. PLAN SEO COMPLEJO

### 5.1 SEO Técnico

#### Metas y titles
- **Titles únicos por plantilla:**
  - Home: "Verana | Luxury Boutique Hotel in Yelapa, Mexico"
  - Houses: "[House Name] | Luxury Villa in Yelapa | Verana"
  - Experiences: "[Experience Name] | Verana Experiences"
  - Blog: "[Post Title] | Verana Blog"
- **Meta descriptions:** 150-160 caracteres, incluyen keywords principales, CTA sutil
- **Open Graph:** títulos, descripciones, imágenes optimizadas para compartir en redes
- **Twitter Cards:** formato adecuado para previews en Twitter

#### Estructura HTML
- **H1 único por página:** keyword principal, claro y descriptivo
- **H2-H6 jerárquicos:** estructura lógica, keywords secundarios naturales
- **URLs limpias:** estructura semántica (/houses/casa-verde/, /experiences/sunset-kayaking/)

#### Canonical y duplicados
- **Canonical tags:** una URL canónica por página, evitar contenido duplicado
- **Hreflang:** si se implementa multi-idioma (EN/ES), tags correctos por versión

#### Sitemap y robots
- **sitemap.xml:** actualizado automáticamente, incluye todas las páginas importantes, prioridades y frecuencias
- **robots.txt:** configuración correcta, permite indexación de contenido relevante, bloquea admin/privado

#### Redirecciones y errores
- **301 redirects:** para URLs antiguas en migraciones, mantener link equity
- **404 gestionados:** página 404 amigable, sugerencias de navegación
- **410 para contenido eliminado:** si se retira contenido permanentemente

#### Paginación
- **rel="prev/next":** si hay paginación en blog o listados
- **View-all opcional:** para evitar contenido duplicado en paginación

### 5.2 Schema JSON-LD

#### Tipos de schema implementados

**Hotel / LodgingBusiness:**
```json
{
  "@type": "LodgingBusiness",
  "name": "Verana",
  "address": {...},
  "geo": {...},
  "priceRange": "$$$",
  "amenityFeature": [...],
  "starRating": {...}
}
```

**LocalBusiness:**
- Información de contacto, horarios, ubicación

**FAQPage:**
- Para página "How to Get Here" y otras con preguntas frecuentes

**BreadcrumbList:**
- Navegación estructurada para todas las páginas

**Review (si aplica):**
- Si hay reseñas de clientes, schema de Review agregado

**ImageObject:**
- Para galerías, optimización de imágenes en resultados de búsqueda

### 5.3 Arquitectura de contenido (Topic Clusters)

#### Landings por intención de búsqueda

**Cluster principal: Hotel Boutique Yelapa**
- **Página hub:** /boutique-hotel-yelapa/
  - Contenido principal sobre Verana como hotel boutique
  - Enlaces internos a Houses, Experiences, ubicación
  - Keywords: "boutique hotel yelapa", "luxury hotel yelapa"

**Cluster: Ubicación y Acceso**
- **Landing:** /luxury-hotel-near-puerto-vallarta/
  - Enfoque en proximidad a PV, transporte, accesibilidad
  - Keywords: "hotel near puerto vallarta", "yelapa hotel from pv"
- **Landing:** /how-to-get-to-yelapa-from-puerto-vallarta/
  - Guía detallada de transporte, pasos, opciones
  - Keywords: "how to get to yelapa", "yelapa transportation"

**Cluster: Bodas y Eventos**
- **Landing:** /yelapa-wedding-venue/
  - Información sobre espacios, paquetes, testimonios
  - Keywords: "wedding venue yelapa", "destination wedding mexico"

**Cluster: Honeymoon y Romance**
- **Landing:** /honeymoon-off-grid-mexico/
  - Enfoque en privacidad, romanticismo, experiencias para parejas
  - Keywords: "honeymoon mexico", "romantic getaway yelapa"

**Cluster: Actividades y Experiencias**
- **Landing:** /things-to-do-yelapa/
  - Actividades locales, excursiones, experiencias en Verana
  - Keywords: "things to do yelapa", "yelapa activities", "adventure yelapa"

### 5.4 Estrategia de contenido (Blog)

#### 12 ideas de posts propuestos

| # | Título sugerido | Intención | H2 sugeridos | CTA principal |
|---|---|---|---|---|
| 1 | "Top 10 Things To Do in Yelapa for Adventure Lovers" | Informativa | Waterfall Hike to Hidden Cascades; Kayaking in Yelapa Bay; Exploring Local Markets; Sunset Viewpoints; Snorkeling Spots | Link a Experiences / "Book Your Adventure" |
| 2 | "How to Get to Verana from Puerto Vallarta: Complete Guide 2024" | Transaccional/Informativa | Option 1: Taxi + Water Taxi; Option 2: Hiking Trail; Transportation Costs; Best Times to Travel; What to Bring | CTA "How to Get Here" página / WhatsApp |
| 3 | "Planning a Destination Wedding at Verana: Everything You Need to Know" | Transaccional | Venue Spaces & Capacity; Wedding Packages; Off-Season Advantages; Real Wedding Stories; Planning Timeline | "Request a Wedding Quote" |
| 4 | "Romantic Off-Grid Honeymoon at Verana: A Complete Guide" | Inspiracional | Private Moments & Privacy; Spa Experiences for Couples; Dining Under the Stars; Excursions for Two; What Makes It Special | "Check Availability for Honeymoon" |
| 5 | "Sustainable Luxury: How Verana Balances Comfort and Eco-Consciousness" | Informativa/Branding | Architecture & Design Philosophy; Local Community Impact; Waste Management; Energy Practices; Guest Education | "Experience Sustainable Luxury" |
| 6 | "Yelapa vs. Puerto Vallarta: Which Destination is Right for You?" | Informativa | Atmosphere Comparison; Activities & Nightlife; Accommodation Styles; Budget Considerations; Best For... | "Explore Verana Houses" |
| 7 | "The Ultimate Yelapa Packing List: What to Bring for Your Stay" | Informativa | Clothing Essentials; Tech & Gear; Toiletries; Documents; What NOT to Bring | "Book Your Stay" |
| 8 | "Best Time to Visit Yelapa: Weather, Seasons, and What to Expect" | Informativa | Dry Season (Nov-Apr); Rainy Season (May-Oct); Whale Watching Season; Temperature Guide; Crowd Levels | "Check Availability" |
| 9 | "Verana Houses: A Guide to Choosing Your Perfect Villa" | Transaccional | House Overviews; Views & Locations; Capacity & Amenities; Accessibility; Booking Tips | "View All Houses" / "Check Availability" |
| 10 | "Local Cuisine at Verana: Farm-to-Table Dining in Yelapa" | Inspiracional | Menu Highlights; Sourcing Local Ingredients; Dining Experiences; Dietary Accommodations; Chef's Recommendations | "Book a Culinary Experience" |
| 11 | "Wellness & Spa at Verana: Reconnect with Nature and Yourself" | Inspiracional | Spa Treatment Menu; Yoga & Meditation; Natural Surroundings; Wellness Packages; Guest Testimonials | "Explore Spa Experiences" |
| 12 | "Photography Guide: Capturing Yelapa's Natural Beauty" | Inspiracional | Best Photo Spots; Golden Hour Tips; Wildlife Photography; Drone Regulations; Sharing Your Experience | "Book Your Photography Adventure" |

### 5.5 Estrategia de backlinks / PR

#### Tácticas concretas

**1. Recuperación de menciones de prensa existentes**
- **Objetivo:** convertir menciones pasivas en enlaces reales
- **Proceso:** 
  - Auditoría de menciones sin enlace (herramientas: Ahrefs, Mention)
  - Contacto profesional con medios que han mencionado Verana
  - Solicitud amigable de actualización con enlace
- **Criterios de calidad:** medios con DA ≥ 30, relevancia temática (travel, luxury, design)

**2. Colaboración con wedding planners y blogs de bodas**
- **Objetivo:** generar contenido editorial sobre Verana como destino de bodas
- **Proceso:**
  - Identificación de wedding planners locales/internacionales
  - Ofertas de colaboración: sesiones de prensa, intercambio de contenido, testimonios
  - Publicaciones invitadas en blogs de bodas de destino
- **Criterios de calidad:** blogs con tráfico real, audiencia relevante, contenido de calidad

**3. Luxury travel blogs y revistas de diseño/eco-turismo**
- **Objetivo:** posicionar Verana en nichos de lujo sostenible y diseño arquitectónico
- **Proceso:**
  - Pitch a editores de blogs de luxury travel (ej. Travel + Leisure contributors, design blogs)
  - Sesiones de prensa para influencers/bloggers de viajes de lujo
  - Contenido sobre arquitectura sostenible, diseño off-grid
- **Criterios de calidad:** DA ≥ 40, tráfico orgánico relevante, audiencia de alto valor

#### Criterios de calidad de backlinks

- **Domain Authority (DA):** mínimo 30-40, ideal 50+
- **Relevancia temática:** travel, luxury, design, sustainability, weddings
- **Tráfico real:** verificar con herramientas de analítica
- **Naturalidad:** evitar granjas de enlaces, PBNs, directorios de baja calidad
- **Texto de enlace variado:** evitar sobre-optimización con mismo anchor text
- **Contexto editorial:** enlaces dentro de contenido relevante, no footer/sponsor

### 5.6 Medición y tracking

#### Google Analytics 4 (GA4)
- **Eventos personalizados:** (ver Anexo para lista completa)
  - `click_book_now`, `click_whatsapp`, `submit_booking`, `view_house_detail`, etc.
- **Conversiones:** reservas completadas, leads de WhatsApp, descargas de guías
- **Audiencias:** segmentación por comportamiento (visitantes que vieron Houses, abandonaron en reserva, etc.)

#### Google Search Console
- **Monitoreo de impresiones, CTR, posiciones:** para keywords objetivo
- **Cobertura de indexación:** detección de errores, páginas no indexadas
- **Performance por página:** identificar páginas con mejor rendimiento SEO

#### Conversion tracking
- **Funnel de reservas:** tracking completo desde click en "Book Now" hasta confirmación
- **Attribution:** entender qué canales/contenidos generan más conversiones

#### UTM parameters
- **Campañas externas:** redes sociales, email marketing, PR
- **Tracking de fuentes:** identificar qué contenido genera más tráfico cualificado

#### Dashboards
- **Looker Studio (ex Google Data Studio):** dashboard mensual con KPIs clave
- **Métricas incluidas:** tráfico orgánico, conversiones, Core Web Vitals, top keywords, backlinks nuevos

---

## 6. PLAN DE PERFORMANCE (CORE WEB VITALS)

### 6.1 Estrategias de optimización

#### Imágenes
- **Formatos modernos:** WebP/AVIF para todas las imágenes, fallback a JPG para compatibilidad
- **Compresión inteligente:** calidad balanceada (80-85% para WebP), sin pérdida visible
- **Lazy-load:** todas las imágenes fuera del viewport inicial con `loading="lazy"`
- **Responsive images:** `srcset` y `sizes` para servir tamaños adecuados por dispositivo
- **CDN para imágenes:** servir desde CDN geográficamente cercano

#### CSS y JavaScript
- **Critical CSS inline:** CSS necesario para above-the-fold inline en `<head>`
- **CSS restante:** cargar de forma asíncrona o diferida
- **Code splitting:** dividir JS en chunks, cargar solo lo necesario por página
- **Tree shaking:** eliminar código no utilizado de librerías
- **Minificación:** CSS y JS minificados en producción

#### Caching
- **Cache de navegador:** headers HTTP adecuados (Cache-Control, ETag)
- **Cache de servidor:** Redis para fragmentos de página, queries frecuentes
- **Service Workers (opcional):** para cache offline y performance avanzada

#### Renderizado
- **SSR/SSG con Next.js:** Server-Side Rendering o Static Generation para páginas principales
- **Pre-render de rutas críticas:** Home, Houses principales, How to Get Here
- **Hydration selectiva:** solo componentes interactivos necesitan JavaScript del cliente

#### Recursos externos
- **Carga asíncrona de terceros:** Google Analytics, mapas, widgets con `async` o `defer`
- **Lazy-load de iframes:** mapas, videos embebidos solo cuando son visibles
- **Optimización de fuentes:** preload de fuentes críticas, subset de caracteres si es posible

### 6.2 Checklist de implementación y pruebas

#### Pre-lanzamiento
- [ ] Lighthouse audit: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.10 en móvil
- [ ] WebPageTest: pruebas en múltiples ubicaciones, conexiones 3G/4G
- [ ] Pruebas en dispositivos reales: iPhone, Android, tablets
- [ ] Monitoreo de TTFB (Time to First Byte): objetivo < 600ms
- [ ] Verificación de tamaños: imágenes < 200KB optimizadas, JS total < 300KB inicial
- [ ] Validación de lazy-load: imágenes cargadas solo cuando son necesarias

#### Post-lanzamiento
- [ ] RUM (Real User Monitoring): herramientas como Google Analytics, Cloudflare Web Analytics
- [ ] Alertas de performance: notificaciones si Core Web Vitals se degradan
- [ ] Análisis continuo: revisión mensual de métricas, identificación de regresiones

#### Herramientas de referencia (sin ejecutar en propuesta)
- **Lighthouse:** auditoría automatizada de performance, accesibilidad, SEO
- **WebPageTest:** pruebas de velocidad desde múltiples ubicaciones y dispositivos
- **PageSpeed Insights:** combinación de Lighthouse y datos de campo (Chrome User Experience Report)

---

## 7. ARQUITECTURA TÉCNICA DJANGO + REACT

### 7.1 Backend (Django)

#### Stack tecnológico
- **Django 4.2+:** framework principal
- **Django REST Framework (DRF):** API REST para frontend
- **PostgreSQL:** base de datos relacional
- **Redis:** caching (fragmentos, sessions), rate limiting
- **Celery:** tareas asíncronas (envío de emails, procesamiento de imágenes, generación de sitemaps)
- **Storage S3-compatible:** AWS S3, DigitalOcean Spaces, o similar para media assets
- **Wagtail CMS (opcional):** evaluación de pros/cons más abajo

#### Wagtail vs Django Admin estándar

**Wagtail CMS - Pros:**
- Editor WYSIWYG amigable para no técnicos
- StreamFields flexibles para contenido estructurado
- Workflows de aprobación para contenido
- Mejor UX para gestión de contenido editorial
- Soporte multi-idioma integrado

**Wagtail CMS - Cons:**
- Curva de aprendizaje inicial mayor
- Overhead adicional si el contenido es relativamente estático
- Más complejidad en setup inicial

**Recomendación:** Si el cliente necesita editar contenido frecuentemente (blog, descripciones, FAQs), Wagtail es recomendable. Si el contenido es más estático, Django Admin estándar con campos personalizados puede ser suficiente.

### 7.2 Frontend

#### Opción recomendada: React con Next.js

**Justificación:**
- **SSR/SSG:** Server-Side Rendering y Static Site Generation para mejor SEO
- **Performance:** optimizaciones automáticas (code splitting, image optimization)
- **Meta tags dinámicos:** generación de Open Graph, Twitter Cards por página
- **Routing optimizado:** sistema de routing integrado, prefetching inteligente
- **API Routes:** endpoints de API dentro de Next.js si se necesita lógica del servidor

**Alternativa considerada: React SPA con prerender**
- Pros: más control, menor complejidad inicial
- Contras: SEO más complejo, requiere configuración adicional de prerender

**Decisión:** Next.js es la opción recomendada por balance de SEO, performance y mantenibilidad.

### 7.3 Contenido administrable (Models Django)

#### Models propuestos

**Houses (Casas/Villas):**
- `name`, `slug`, `description`, `capacity` (número de huéspedes), `bedrooms`, `bathrooms`
- `amenities` (ManyToMany o JSONField), `view_type` (jungle, ocean, mixed)
- `accessibility_notes` (texto sobre escaleras, dificultad), `gallery` (relación con Image model)
- `base_price` (opcional), `featured` (boolean), `published` (boolean)

**Experiences / Spa Treatments / Weddings:**
- Modelo base `Experience` con `type` (experience, spa, wedding)
- `name`, `slug`, `description`, `duration` (horas), `inclusions` (JSONField o ManyToMany)
- `target_audience` (parejas, grupos, individual), `gallery`, `price_range` (opcional)
- `bookable_directly` (boolean), `published`

**Blog Posts:**
- `title`, `slug`, `excerpt`, `content` (RichTextField), `author`, `published_date`
- `featured_image`, `categories` (ManyToMany), `tags`, `seo_title`, `meta_description`
- `schema_markup` (JSONField opcional para schema personalizado)

**Press:**
- `title`, `publication`, `publication_date`, `link` (URL externa), `excerpt`, `featured_image`

**FAQs:**
- `question`, `answer`, `category` (general, booking, transportation, etc.), `order` (para ordenamiento)

**Gallery:**
- `Image` model: `title`, `image_file`, `alt_text`, `category` (houses, experiences, general), `house` (ForeignKey opcional)

**Site Settings:**
- Modelo singleton para configuración global:
  - `contact_email`, `contact_phone`, `whatsapp_number`
  - `social_media_links` (JSONField), `address`, `map_embed_code`
  - `brand_logo`, `favicon`

### 7.4 Multi-idioma (i18n)

#### Estrategia
- **Django i18n:** uso de `django-modeltranslation` o `wagtail-localize` (si Wagtail)
- **Rutas separadas:** `/en/` y `/es/` (o `/` para español como default, `/en/` para inglés)
- **Hreflang tags:** implementación correcta en templates
- **Contenido traducible:** todos los modelos de contenido con campos traducibles
- **CMS multi-idioma:** interfaz de admin que permita editar ambas versiones

### 7.5 Integración de reservas

#### Si existe motor externo
- **Booking funnel design:**
  - Click en "Book Now" → tracking de evento GA4
  - Redirección a motor externo (iframe o nueva ventana) o integración API
  - Tracking de entrada al funnel externo
  - Evento de conversión cuando reserva se completa (webhook o polling)
- **Si es iframe:** diseño de contenedor que mantenga branding Verana
- **Si es API:** integración completa con UI personalizada

#### Si no hay motor externo
- **Desarrollo de sistema básico:** formulario de consulta de disponibilidad, integración con calendario, confirmación por email

### 7.6 Endpoints DRF propuestos

| Recurso | Endpoint | Métodos | Descripción |
|---|---|---|---|
| **Houses** | `/api/houses/` | GET | Lista de casas (filtros: featured, view_type) |
| | `/api/houses/{id}/` | GET | Detalle de casa específica |
| **Experiences** | `/api/experiences/` | GET | Lista de experiencias (filtro: type) |
| | `/api/experiences/{id}/` | GET | Detalle de experiencia |
| **Blog Posts** | `/api/posts/` | GET | Lista de posts (paginación, filtros: category, tag) |
| | `/api/posts/{slug}/` | GET | Detalle de post por slug |
| **Press** | `/api/press/` | GET | Lista de artículos de prensa |
| **Gallery** | `/api/gallery/` | GET | Imágenes de galería (filtros: category, house) |
| **FAQs** | `/api/faqs/` | GET | Lista de FAQs (filtro: category) |
| **Site Settings** | `/api/site-settings/` | GET | Configuración global del sitio |
| **Bookings** | `/api/bookings/` | POST | Crear consulta/reserva (si aplica) |
| | `/api/bookings/{id}/` | GET | Estado de reserva (si aplica) |

### 7.7 Autenticación y permisos

#### Admin
- **Django Admin estándar** o **Wagtail Admin** (según decisión)
- **Roles propuestos:**
  - **Super Admin:** acceso total
  - **Content Editor:** puede editar contenido (posts, houses, experiences), no configuración
  - **Booking Manager:** acceso a reservas/consultas, no contenido
  - **SEO Manager:** acceso a contenido + configuración SEO (metas, schema)

#### Permisos granulares
- Django permissions system para control de acceso a modelos específicos
- Wagtail workflows (si aplica) para aprobación de contenido antes de publicación

---

## 8. PLAN DE PROYECTO POR FASES

### Fase 0: Discovery (2-3 semanas)

**Entregables:**
- Auditoría UX/UI completa del sitio actual
- Análisis de analítica (GA4, Search Console) con métricas actuales
- Mapa de flujos de usuario (user journeys) actuales
- Inventario completo de contenido (textos, imágenes, FAQs)
- Benchmark competitivo (3-5 competidores directos)
- Documento de hipótesis validadas/invalidadas
- Definición final de KPIs con baseline establecido

**Dependencias:**
- Acceso a Google Analytics, Search Console
- Acceso a contenido existente (CMS, repositorio, archivos)
- Acceso técnico al sitio actual (hosting, código si aplica)
- Información del motor de reservas actual

**Criterios de aceptación:**
- Documento de auditoría completo con hallazgos priorizados
- KPIs definidos con métricas actuales documentadas
- Alcance acordado y firmado por cliente
- Inventario de contenido completo

---

### Fase 1: Diseño UX/UI + Prototipo (3-4 semanas)

**Entregables:**
- Wireframes mobile y desktop para páginas clave:
  - Home
  - Houses (listado + detalle)
  - Experiences/Spa/Weddings (listado + detalle)
  - How to Get Here
  - Blog (listado + detalle)
- UI Kit / Design System completo
- Prototipo interactivo en Figma con flujos principales
- Especificación responsive (breakpoints, comportamientos)
- Documento de accesibilidad (checklist WCAG)

**Dependencias:**
- Resultados de Fase 0
- Brand guidelines y assets visuales (si disponibles)
- Fotos de alta calidad para prototipo (si disponibles)

**Criterios de aceptación:**
- Aprobación de wireframes por cliente
- Aprobación de UI Kit y paleta de colores
- Prototipo interactivo validado en sesión con cliente
- Especificación responsive documentada

---

### Fase 2: Desarrollo Backend + Frontend + CMS (5-7 semanas)

**Entregables:**
- Setup completo de Django + DRF + PostgreSQL
- Configuración de Redis (cache) y Celery
- Integración con storage S3-compatible
- Models Django implementados (Houses, Experiences, Blog, etc.)
- Endpoints DRF funcionales (todos los recursos)
- CMS configurado (Django Admin o Wagtail) con permisos
- Frontend Next.js implementado:
  - Páginas principales con SSR/SSG
  - Integración con API DRF
  - Componentes reutilizables
  - Sistema de routing
- Integración de reservas (iframe o API según disponibilidad)
- Sistema multi-idioma (EN/ES) implementado
- Entorno de staging funcional

**Dependencias:**
- Diseño aprobado (Fase 1)
- Decisión tecnológica final (Wagtail sí/no)
- Infraestructura de hosting definida
- Acceso a servicios externos (S3, email, etc.)

**Criterios de aceptación:**
- Todas las páginas clave renderizando correctamente en staging
- Endpoints API funcionando y documentados
- CMS operativo con roles y permisos
- Integración de reservas funcionando (testeada)
- Multi-idioma funcionando correctamente
- Pruebas básicas de funcionalidad pasadas

---

### Fase 3: SEO + Contenido Inicial + Performance (4-5 semanas)

**Entregables:**
- SEO técnico completo:
  - Titles y metas únicos por plantilla
  - Schema JSON-LD implementado (Hotel, FAQ, Breadcrumb, etc.)
  - Sitemap.xml generado automáticamente
  - robots.txt configurado
  - Hreflang implementado (si aplica)
  - Redirecciones 301 configuradas
- Landings SEO creadas (6 landings por intención)
- Contenido inicial completo:
  - Todas las Houses con información completa
  - Experiences/Spa/Weddings con descripciones
  - 5-6 posts de blog iniciales (de los 12 propuestos)
  - FAQs completas
  - Página How to Get Here con contenido completo
- Optimización de performance:
  - Imágenes convertidas a WebP/AVIF, optimizadas
  - Lazy-load implementado
  - Critical CSS inline
  - Code splitting configurado
  - CDN configurado
  - Caching implementado (Redis)
- Core Web Vitals dentro de metas (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.10)

**Dependencias:**
- Desarrollo base completado (Fase 2)
- Contenido disponible (textos, imágenes) del cliente
- Revisión de contenido por cliente (si aplica)

**Criterios de aceptación:**
- Todas las páginas con SEO técnico correcto (validado con herramientas)
- Schema markup validado (Google Rich Results Test)
- Landings SEO publicadas y indexables
- Contenido inicial completo y publicado
- Lighthouse audit: Core Web Vitals dentro de metas
- Pruebas de performance en dispositivos reales pasadas

---

### Fase 4: QA, Lanzamiento y Monitoreo (2-3 semanas)

**Entregables:**
- Pruebas funcionales completas (todas las funcionalidades)
- Pruebas de accesibilidad (WCAG 2.1 AA)
- Pruebas cross-navegador (Chrome, Firefox, Safari, Edge)
- Pruebas en dispositivos móviles (iOS, Android)
- Corrección de bugs identificados
- Configuración de analítica (GA4 events, Search Console)
- Migración de contenido final (si aplica)
- Lanzamiento a producción
- Documentación técnica (para mantenimiento)
- Dashboard de monitoreo (Looker Studio)
- Plan de mejora continua (roadmap v2)

**Dependencias:**
- Todas las fases anteriores completadas
- Aprobación final del cliente para lanzamiento
- Infraestructura de producción lista (hosting, DNS, SSL)

**Criterios de aceptación:**
- Sitio en producción estable y funcional
- Todas las pruebas pasadas (funcional, accesibilidad, performance)
- Analítica configurada y funcionando
- KPIs iniciales medidos y documentados
- Plan de monitoreo y mejora continua activado

---

### Cronograma resumido

| Fase | Duración | Total acumulado |
|---|---|---|
| Fase 0: Discovery | 2-3 semanas | 2-3 semanas |
| Fase 1: Diseño | 3-4 semanas | 5-7 semanas |
| Fase 2: Desarrollo | 5-7 semanas | 10-14 semanas |
| Fase 3: SEO + Performance | 4-5 semanas | 14-19 semanas |
| Fase 4: QA + Lanzamiento | 2-3 semanas | **16-22 semanas** |

**Total estimado: 16-22 semanas (4-5.5 meses)** hasta lanzamiento completo de v1.

**Nota:** Las fases pueden solaparse parcialmente (ej. desarrollo puede comenzar mientras se finaliza diseño de algunas páginas). El cronograma puede ajustarse según disponibilidad de recursos y aprobaciones del cliente.

---

## 9. ALCANCE INCLUIDO / FUERA DE ALCANCE

### ✅ Incluido en el alcance

- **Rediseño responsive completo:** todas las páginas principales adaptadas a mobile, tablet y desktop
- **Implementación de CMS:** sistema de gestión de contenido (Django Admin o Wagtail) con modelos para Houses, Experiences, Blog, FAQs, etc.
- **SEO técnico completo:** titles, metas, schema, sitemap, robots, hreflang, redirecciones
- **5 páginas clave + plantillas:**
  - Home
  - Houses (listado + plantilla de detalle)
  - Experiences/Spa/Weddings (listado + plantilla de detalle)
  - How to Get Here (página dedicada)
  - Blog (listado + plantilla de detalle)
- **6 landings SEO:** páginas optimizadas por intención de búsqueda
- **Contenido inicial:** hasta 6 posts de blog, contenido completo de Houses y Experiences existentes
- **Optimización de performance:** Core Web Vitals dentro de metas, imágenes optimizadas, lazy-load, caching
- **Analítica y tracking:** configuración de GA4, Search Console, eventos personalizados, dashboards
- **Sistema multi-idioma:** implementación de EN/ES (si aplica)
- **Integración de reservas:** conexión con motor existente (iframe o API según disponibilidad)
- **Accesibilidad:** cumplimiento WCAG 2.1 AA mínimo

### ❌ Fuera de alcance

- **Copywriting ilimitado:** se incluye contenido inicial definido (6 posts, descripciones de houses/experiences). Copywriting adicional o revisiones extensas fuera de alcance estándar
- **Producción fotográfica nueva:** se usarán fotos existentes proporcionadas por el cliente o stock premium de calidad. Sesiones fotográficas en sitio fuera de alcance
- **Integración compleja de pagos:** si no hay motor de reservas existente con API, desarrollo de sistema de pagos completo fuera de alcance (se puede cotizar por separado)
- **Marketing continuo:** gestión de redes sociales, campañas PPC, email marketing fuera del alcance (se puede cotizar como servicio adicional)
- **Desarrollo de app móvil:** solo web responsive, no app nativa
- **Integraciones de terceros complejas:** sistemas de CRM, herramientas de marketing automation fuera de alcance (se puede evaluar por separado)
- **Hosting y mantenimiento post-lanzamiento:** configuración inicial incluida, hosting mensual y mantenimiento continuo fuera de alcance (se puede cotizar por separado)
- **Contenido de video:** producción de videos promocionales fuera de alcance (se pueden integrar videos existentes)

---

## 10. RIESGOS Y MITIGACIONES

| # | Riesgo | Impacto | Probabilidad | Mitigación |
|---|---|---|---|---|
| 1 | **Dependencia de motor de reservas externo limitado** | Alto | Media | Revisar API disponible en Fase 0; plan B con iframe si API no disponible; negociar mejoras con proveedor de reservas; documentar limitaciones claramente |
| 2 | **Contenido faltante o fotografías de baja calidad** | Medio | Media | Inventario temprano en Fase 0; uso de fotografía stock premium si necesario; plan de mejora visual incremental; establecer expectativas claras sobre calidad requerida |
| 3 | **Cambios de alcance no planificados** | Medio | Alta | Acuerdo claro de alcance firmado; proceso de change requests documentado; limitar iteraciones de diseño a 2 rondas; control de versiones y aprobaciones |
| 4 | **Problemas de migración SEO que afecten rankings** | Alto | Media | Auditoría completa de URLs actuales en Fase 0; redirecciones 301 para todas las URLs importantes; mantenimiento de estructura de URLs clave; sitemap actualizado inmediatamente post-lanzamiento; monitoreo de tráfico orgánico post-migración |
| 5 | **Demoras en aprobaciones de diseño o contenido** | Medio | Alta | Cronograma con hitos definidos y fechas límite claras; reuniones regulares de seguimiento (semanales); proceso de aprobación documentado; escalación temprana si hay bloqueos |
| 6 | **Sobrecarga de JavaScript / dependencias externas lentas** | Medio | Media | Auditoría de scripts de terceros en Fase 0; solo incluir scripts necesarios; uso de carga asíncrona o defer; code splitting agresivo; monitoreo continuo de performance |
| 7 | **Internacionalización mal implementada** | Medio | Baja | Plan de hreflang claro desde inicio; traducciones profesionales (si aplica); estructura de URL consistente; pruebas en ambas versiones de idioma; validación con herramientas de SEO |
| 8 | **Riesgo de no cumplir estándares de accesibilidad** | Medio | Baja | Incorporar pruebas de accesibilidad en cada fase; uso de herramientas de validación (axe, WAVE); revisión manual de contraste y navegación por teclado; incluir en criterios de QA |
| 9 | **Problemas de performance en dispositivos móviles reales** | Alto | Media | Pruebas en dispositivos reales (no solo emuladores); conexiones 3G simuladas; optimización agresiva de imágenes; lazy-load estricto; monitoreo RUM post-lanzamiento |
| 10 | **Falta de alineación con expectativas del cliente sobre diseño** | Medio | Media | Presentaciones regulares de diseño; moodboards y referencias compartidas temprano; proceso de feedback estructurado; límite de iteraciones acordado |

---

## 11. PRESUPUESTO (PAQUETES PROPUESTAS)

### Paquete BÁSICO

**Entregables:**
- Rediseño responsive de Home + Houses (listado + detalle)
- Diseño UI Kit básico (componentes esenciales)
- Integración básica de booking funnel (iframe o link)
- SEO técnico básico en páginas clave (titles, metas, schema mínimo)
- Performance mínimo (optimización de imágenes, lazy-load básico)
- CMS básico (Django Admin estándar)
- Contenido inicial limitado (hasta 3 posts de blog)
- Configuración básica de analítica (GA4)

**No incluye:**
- Página How to Get Here dedicada
- Landings SEO adicionales
- Optimización avanzada de performance
- Estrategia de backlinks
- Soporte de contenido continuo

---

### Paquete ESTÁNDAR

**Entregables (todo lo del Básico +):**
- Diseño completo de Experiences/Spa/Weddings (listado + detalle)
- Página How to Get Here dedicada con mapa y FAQs
- Cluster SEO con 6 landings por intención
- Performance hardening completo (Core Web Vitals optimizados)
- GA4 events completos y tracking avanzado
- CMS con Wagtail (editor más amigable)
- Contenido inicial extendido (6 posts de blog, contenido completo de houses/experiences)
- Estrategia de backlinks inicial (recuperación de menciones)
- Testing de accesibilidad completo (WCAG 2.1 AA)
- Soporte de contenido continuo (hasta 2 meses post-lanzamiento)

**No incluye:**
- Blog completo de 12 posts
- PR y recuperación extensa de menciones
- Integraciones avanzadas más allá de reservas
- Roadmap de mejoras v2 detallado

---

### Paquete PREMIUM

**Entregables (todo lo del Estándar +):**
- Blog completo de 12 posts optimizados SEO
- PR y recuperación extensa de menciones de prensa
- Estrategia de backlinks avanzada (colaboraciones con wedding planners, luxury blogs)
- Integraciones avanzadas (si aplica: CRM básico, email marketing setup)
- Roadmap detallado de mejoras v2 (mejoras incrementales planificadas)
- Optimización avanzada de imagen (formatos AVIF, compresión inteligente)
- Análisis competitivo profundo
- Mantenimiento mensual (primeros 3 meses incluidos)
- Soporte para campañas de marketing (setup de UTM, tracking avanzado)
- Sesiones de capacitación para equipo del cliente (uso de CMS)

**Incluye también:**
- Revisión y optimización continua de contenido (hasta 6 meses)
- Monitoreo proactivo de performance y SEO
- Reportes mensuales de KPIs y recomendaciones

---

## 12. ANEXOS

### Anexo A: Información Detallada del Sitio Actual (Extraída de HTML)

#### A.1 Casas Disponibles (10)

| Casa | Capacidad | Temporada Alta (Dec 22 - Jan 6) | Temporada Media (Nov 1 - Dec 21, Jan 7 - May 31) | Temporada Baja (June 1 - Oct 25) |
|------|-----------|----------------------------------|---------------------------------------------------|-----------------------------------|
| Studio | 2 | $460 | $410 | $320 |
| Bungalow | 2 | $525 | $410 | $320 |
| Casa Piedra | 2 | $525 | $440 | $320 |
| Colibrí | 2 | $525 | $440 | $320 |
| Palapa | 2 | $605 | $440 | $320 |
| Tea House | 2 | $605 | $550 | $440 |
| Pool House | 2 | $650 | $550 | $385 |
| Casa Grande | 2 | $650 | $480 | $370 |
| V House | 2 | $705 | $430 | $320 |
| Villa Verana | 2+ | $825 | $600 | $440 |

**Notas:**
- Todas las tarifas en US$, por noche, single o double occupancy
- Incluyen taxes y boat transfers (llegada y salida)
- Extra guests: $95 surcharge por persona por noche
- Holiday Season (Dec 22 - Jan 6): tarifas basadas en max occupancy

#### A.2 Experiencias Disponibles

**HONEYMOON:**
- **Luxe ($270):** Cena romántica privada con velas, Paradise Picnic en playa privada, Baño romántico en la jungla, Champagne al llegar
- **Classic ($170):** Cena romántica privada con velas, Paradise Picnic en playa privada, Botella de vino seleccionado

**EVENING UNDER THE STARS ($250):**
- Masaje de pareja (media hora)
- Cena privada con velas
- Baño en la jungla bajo las estrellas

**OPEN KITCHEN ($100):**
- Clase de cocina práctica para dos
- Lado a lado con el chef de Verana
- Descubrir cultura mexicana a través de su cocina

**JUNGLE SPA ($120-250):**
- **RENEW (2 horas):** Masaje de tejido profundo y exfoliante purificante
- **DETOX (2 horas):** Reflexología, exfoliante de café antioxidante, tratamiento facial calmante para el sol
- **BALANCE (2.5 horas):** Masaje con piedras calientes y facial nutritivo, tratamiento para los ojos

**WEDDING:**
- **I Do ($800):** Oficiante, arco escenario, flores (ramo de novia y boutonniere), cena privada de boda, pastel
- **Full Wedding:** Hasta 28 huéspedes en sitio, hasta 50 personas para ceremonia y cena, coordinador de eventos incluido

**EVENTS:**
- Tarifa nocturna para propiedad completa: $6,165 (9 casas, hasta 20 huéspedes, incluye comidas)
- Huéspedes adicionales (hasta 28 total): $175 cada uno
- Estancia mínima: 3 noches
- Coordinador de eventos incluido desde confirmación hasta cierre
- Contacto: events@verana.com

#### A.3 Actividades Disponibles

**BY LAND:**
- Caminata para descubrir el pueblo de Yelapa
- Cascadas cercanas
- Flora y fauna local
- Vistas impresionantes

**BY SEA:**
- Safari marítimo
- Avistamiento de ballenas
- Snorkel en calas hermosas
- Explorar la costa
- Descubrir un ritmo de vida casi olvidado

**BY HOOK:**
- Pesca de atún, mahi mahi, pargo y más
- El chef preparará tu captura

**BY US:**
- Clases de tequila y mezcal
- Degustación de vinos mexicanos
- Clases de cocina con el chef
- Platos signature

**BY YOURSELF:**
- Playas privadas
- Experiencia de playa exclusiva

#### A.4 Políticas de Reserva

**Estancia Mínima:**
- Estándar: 5 o más noches
- Solicitudes de 3 noches pueden ser acomodadas
- Holiday Season (Dec 22 - Jan 6): mínimo 7 noches

**Plan de Comidas:**
- Full board: $95 por persona por día
- Incluye: desayuno, almuerzo y cena
- NO es opcional (excepto Villa Verana)
- Verana es remoto, no hay restaurantes cercanos

**Términos y Cancelaciones:**
- **Depósito:** 50% requerido dentro de 14 días de la reserva
- **Balance restante:** Vence 30 días antes de la llegada
- **Reembolso completo** (menos $75 fee de cancelación) si se cancela 30+ días antes
- **Reservas de temporada alta** (Dec 22-Jan 6): 60 días de aviso requerido
- **Reservas grupales** (4+ alojamientos) o **Buyouts:** 90+ días de aviso requerido
- **Hotel buyouts:** $1,000 depósito no reembolsable al momento de la reserva
- **Force Majeure:** No cubierto por política de cancelación

**Métodos de Pago:**
- Pre-llegada: Tarjetas de crédito, PayPal, cheques, transferencias bancarias (US$)
- Checkout en sitio: Tarjetas de crédito (cargadas en Pesos Mexicanos)
- Tasa de cambio publicada diariamente en el host desk
- 15% cargo por servicio agregado a todos los servicios de Verana en sitio

**Temporada Baja** (June 1 – Oct 25):
- Rango de servicios ligeramente reducido
- Comidas generalmente servidas en restaurante
- Room service disponible si hay mal tiempo
- Servicios de spa y actividades bajo demanda y según disponibilidad

#### A.5 FAQs Principales (18 Preguntas)

1. **¿Cómo llegar del aeropuerto a Boca de Tomatlan?** - Taxi (~45 minutos), todos registrados
2. **¿Verana puede recogernos en el aeropuerto?** - No directamente, pero puede arreglar servicio de auto privado
3. **¿Cómo sabemos cuál es el bote de Verana?** - Buscar bote con "V E R A N A" en el lado, techo de lona naranja
4. **¿Cuál es la temperatura durante nuestra estancia?** - Nov: 85-90°F/65-70°F; Dec-Mar: 75-85°F/55-65°F; Apr-Jun: 85-90°F/65-70°F
5. **¿Qué hay de los mosquitos?** - Abierto durante temporada seca (Nov-Jun), insectos no molestos, aún así recomiendan repelente
6. **¿Puedo reservar con tarjeta de crédito?** - Sí, también aceptan PayPal, cheques, transferencias bancarias
7. **¿Podemos reservar sin el plan de comidas?** - NO (excepto Villa Verana). Verana es remoto sin restaurantes cercanos
8. **¿Podemos llevar nuestro almuerzo?** - Sí, con aviso previo (noche anterior o temprano en la mañana)
9. **¿Cómo pagar la cuenta final en sitio?** - Tarjeta de crédito, efectivo (USD o pesos), o pago directo PayPal
10. **¿Es necesario traer pesos?** - Dólares ampliamente aceptados, no esencial
11. **¿Hay opciones dietéticas?** - Sí, pueden acomodar cualquier restricción o preferencia dietética
12. **¿Hay caja fuerte en las habitaciones?** - No, pero hay una en la oficina para guardar objetos de valor
13. **¿Información de contacto de emergencia?** - Teléfono celular Verana: (desde U.S. 011.52.1.322.227.5420)
14. **¿Aceptan niños?** - Política de edad: 16 años o mayor (debido a atmósfera adulta y escorpiones)
15. **¿Más información sobre escorpiones?** - Nativos de la región, picadura puede ser dolorosa pero no peligrosa para adultos
16. **¿Qué tan lejos está el océano/playa?** - Muelle privado (snorkel): 5 minutos; Playa más cercana: 10 minutos; Playa más grande con restaurante: 30 minutos
17. **¿Podemos reservar actividades o tratamientos de spa antes de llegar?** - Sí, email hostdesk@verana.com o reservations@verana.com
18. **¿Qué pasa si nuestro vuelo se retrasa?** - Contactar por teléfono o email tan pronto como se reporte el retraso; generalmente aún pueden llegar el mismo día

#### A.6 Información de Transporte

**Llegada:**
- Vuelo debe llegar a Puerto Vallarta a más tardar **3 pm** para tomar último bote
- Del aeropuerto a Boca de Tomatlan: ~45 minutos en taxi
- Viaje en bote: 30 minutos a Yelapa
- Personal esperando en el muelle con mulas para equipaje
- Sendero a la propiedad: ~10 minutos desde muelle privado
- Paseo en mula disponible si se necesita (avisar antes de llegar)

**Salida:**
- Vuelos saliendo a las **12 pm o después** (preferiblemente 3 pm o después)
- Transferencias en bote incluidas en días de llegada y salida

**Servicio de Auto:**
- Verana puede ayudar a arreglar transporte
- Servicio de auto privado disponible
- Contactar para programación y tarifas

**Si Pierden el Último Bote:**
- Pueden ser recogidos en Boca de Tomatlan al día siguiente

#### A.7 Facilidades

**Disponibles:**
- Restaurante
- Bar completo
- Piscina
- Pequeña biblioteca
- Spa en la jungla
- Tienda de regalos
- WiFi (disponible)
- Servicio de teléfono celular (disponible pero limitado)

**Cada Casa Incluye:**
- Patio privado grande con vista magnífica
- Baño completo
- Mosquiteros grandes en todas las camas
- Agua potable filtrada
- Electricidad
- Servicio de limpieza diario
- Ropa de cama cambiada cada tercer día (a menos que se solicite lo contrario)

**Conservación de Agua:**
- El agua viene de un manantial a tres millas en las montañas
- La conservación es importante

---

### Anexo A.8: Inventario de Imágenes Disponibles

**Estado:** ✅ Carpeta `imagenes/` con 22 imágenes en formato WebP proporcionadas

#### Categorización de Imágenes

**Imágenes de Casas (Houses):**
- `verana_bungalow_6-1275x781.jpg.webp` - Bungalow
- `verana_palapa_9-1275x781.jpg.webp` - Palapa
- `verana_tea_1-1275x781.jpg.webp` - Tea House
- `v_house_main-1275x781.jpg.webp` - V House
- `CasaNuova_Verana-1275x781.jpg.webp` - Casa Nuova (posiblemente Casa Grande)

**Imágenes de Tour/Experiencias:**
- `verana_tour_23-750x460.jpg.webp` - Tour/Experiencia
- `verana_tour_33-750x460.jpg.webp` - Tour/Experiencia
- `verana_tour_40.jpg.webp` - Tour/Experiencia
- `17_1201_163-1275x851.jpg.webp` - Experiencia/Actividad
- `17_1201_189-1275x851.jpg.webp` - Experiencia/Actividad

**Imágenes de Intro/Hero:**
- `Boutique_hotel_Mexico_Verana_Intro_1.jpg.webp` - Imagen principal de intro/hero
- `small_luxury_hotels_mexico_15.jpg.webp` - Imagen promocional

**Imágenes de Huéspedes/Instagram:**
- `Verana_LauraAustin_0113-1275x850.jpg.webp` - Foto de huésped (Laura Austin)
- `Verana_LauraAustin_0337-750x500.jpg.webp` - Foto de huésped (Laura Austin)
- `317803_0011-750x1024.jpg.webp` - Foto de huésped/experiencia

**Screenshots de Redes Sociales:**
- `Screen-Shot-2020-04-21-at-1.09.13-PM-750x924.png.webp` - Screenshot Instagram/redes
- `Screen-Shot-2020-04-21-at-1.11.28-PM-750x919.png.webp` - Screenshot Instagram/redes
- `Screen-Shot-2020-04-21-at-1.13.20-PM-750x909.png.webp` - Screenshot Instagram/redes
- `Screen-Shot-2020-04-21-at-1.20.48-PM-750x931.png.webp` - Screenshot Instagram/redes
- `Screen-Shot-2020-04-21-at-1.24.56-PM-750x866.png.webp` - Screenshot Instagram/redes
- `Screen-Shot-2023-11-02-at-2.42.45-PM.jpg.webp` - Screenshot reciente

**Logo/Branding:**
- `verana.png.webp` - Logo de Verana

#### Análisis Técnico

**Formatos:**
- ✅ Todas las imágenes están en formato **WebP**, optimizado para web
- ✅ Resoluciones variadas: desde 750px hasta 1275px de ancho
- ✅ Aspectos ratio variados: adecuados para diferentes usos (hero, cards, galerías)

**Uso Propuesto:**

1. **Hero Section (Home):**
   - `Boutique_hotel_Mexico_Verana_Intro_1.jpg.webp` - Imagen principal hero
   - `small_luxury_hotels_mexico_15.jpg.webp` - Alternativa hero

2. **Houses Preview y Detalles:**
   - `verana_bungalow_6-1275x781.jpg.webp` → Bungalow
   - `verana_palapa_9-1275x781.jpg.webp` → Palapa
   - `verana_tea_1-1275x781.jpg.webp` → Tea House
   - `v_house_main-1275x781.jpg.webp` → V House
   - `CasaNuova_Verana-1275x781.jpg.webp` → Casa Grande

3. **Instagram Gallery:**
   - `Verana_LauraAustin_0113-1275x850.jpg.webp`
   - `Verana_LauraAustin_0337-750x500.jpg.webp`
   - `317803_0011-750x1024.jpg.webp`
   - Screenshots de redes sociales para sección de momentos de huéspedes

4. **Experiencias/Tours:**
   - `verana_tour_23-750x460.jpg.webp`
   - `verana_tour_33-750x460.jpg.webp`
   - `verana_tour_40.jpg.webp`
   - `17_1201_163-1275x851.jpg.webp`
   - `17_1201_189-1275x851.jpg.webp`

5. **Logo:**
   - `verana.png.webp` → Logo para header/navegación

#### Recomendaciones de Implementación

1. **Migración a `/public/images/`:**
   - Mover imágenes desde `imagenes/` a `frontend/public/images/`
   - Organizar en subcarpetas:
     - `/public/images/houses/` - Imágenes de casas
     - `/public/images/experiences/` - Imágenes de tours/experiencias
     - `/public/images/guests/` - Fotos de huéspedes
     - `/public/images/hero/` - Imágenes hero
     - `/public/images/logo/` - Logo y branding

2. **Optimización Adicional:**
   - Generar versiones AVIF para mejor compresión (Next.js Image lo maneja automáticamente)
   - Crear múltiples tamaños para responsive images (Next.js Image genera automáticamente)
   - Agregar alt text descriptivo para SEO y accesibilidad

3. **Imágenes Faltantes Identificadas:**
   - Studio (casa)
   - Casa Piedra
   - Colibrí
   - Pool House
   - Villa Verana
   - Imágenes adicionales para galerías de cada casa
   - Imágenes de Spa
   - Imágenes de Weddings

**Nota:** Las imágenes proporcionadas son un excelente punto de partida. Se recomienda complementar con fotografías adicionales de las casas faltantes y experiencias para tener un inventario completo.

---

### Anexo B: Tabla de Páginas/Plantillas

| Página / Plantilla | Propósito | SEO Target (Keywords principales) | CTA Principal | Contenido Requerido |
|---|---|---|---|---|
| **Home** | Presentación de marca + enganche visual + acceso reservas | "boutique hotel yelapa", "luxury hotel puerto vallarta", "verana yelapa" | Book Now / How to Get Here | Hero con H1, propuesta de valor, fotos destacadas, testimonios, resumen de casas |
| **Houses - Listado** | Mostrar todas las opciones de alojamiento | "verana houses", "luxury villas yelapa", "boutique hotel rooms yelapa" | Ver detalle / Check Availability | Grid de casas con imagen, nombre, capacidad, vista, precio aproximado |
| **Houses - Detalle** | Mostrar alojamiento específico con toda la información | "[House Name] yelapa", "luxury villa [vista] yelapa", "hotel room amenities yelapa" | Check Availability (sticky) | Galería completa, capacidad detallada, amenities lista, accesibilidad, vista, descripción |
| **Experiences - Listado** | Promover servicios auxiliares y actividades | "things to do yelapa", "verana experiences", "activities yelapa" | Ver detalle / Add to Booking | Cards con imagen, nombre, duración, para quién es, precio aproximado |
| **Experiences - Detalle** | Información completa de experiencia específica | "[Experience Name] yelapa", "spa yelapa", "wedding venue yelapa" | Add to Booking / Request Quote | Descripción completa, inclusiones, duración, galería, testimonios si aplica |
| **Spa - Listado/Detalle** | Promover tratamientos de spa | "spa yelapa", "wellness retreat mexico", "luxury spa puerto vallarta" | Book Treatment | Similar a Experiences |
| **Weddings - Listado/Detalle** | Promover Verana como destino de bodas | "wedding venue yelapa", "destination wedding mexico", "yelapa wedding" | Request Wedding Quote | Información de espacios, capacidad, paquetes, testimonios de bodas |
| **How to Get Here** | Reducir fricción de llegada, responder dudas de acceso | "how to get to yelapa", "yelapa transportation", "how to reach verana" | View Map / Read FAQs / Contact Us | Mapa interactivo, rutas detalladas, tiempos, costos aproximados, FAQs, checklist |
| **Blog - Listado** | Atraer tráfico orgánico, posicionar expertise | Keywords variadas según posts | Leer más / Ver post completo | Grid de posts con imagen destacada, título, excerpt, fecha, categoría |
| **Blog - Detalle** | Contenido profundo optimizado SEO | Keywords específicas del post | Contact / Book Now (contextual) | Título optimizado, estructura H2 clara, imágenes, CTA internos, schema FAQ si aplica |
| **About / Philosophy** | Branding, historia, valores | "verana hotel story", "sustainable luxury yelapa" | Book Now / Learn More | Historia, filosofía, sostenibilidad, equipo (opcional) |
| **Contact** | Facilitar contacto directo | "contact verana", "verana reservations" | Submit Form / WhatsApp | Formulario de contacto, información de contacto, mapa, horarios |

---

### Anexo B: Eventos GA4 Recomendados

#### Eventos de conversión principales
- `click_book_now` - Click en botón "Book Now" (cualquier ubicación)
- `click_whatsapp` - Click en botón/enlace de WhatsApp
- `submit_booking` - Confirmación de reserva completada (si se puede trackear)
- `submit_contact_form` - Envío de formulario de contacto
- `request_quote` - Solicitud de cotización (weddings, experiences)

#### Eventos de engagement
- `view_house_detail` - Visualización de detalle de casa (más de 10 segundos en página)
- `view_experience_detail` - Visualización de detalle de experiencia
- `view_how_to_get_here` - Visita a página How to Get Here
- `download_guide` - Descarga de guía PDF (si aplica)
- `view_map` - Click en "View Map" o interacción con mapa

#### Eventos de contenido
- `blog_post_read` - Lectura de post de blog (scroll > 75% o tiempo > 2 min)
- `blog_post_share` - Compartir post en redes sociales
- `view_gallery` - Interacción con galería de imágenes (múltiples imágenes vistas)

#### Eventos de navegación
- `scroll_depth_mobile_50` - Scroll alcanzó 50% en móvil
- `scroll_depth_mobile_75` - Scroll alcanzó 75% en móvil
- `menu_interaction` - Apertura de menú móvil
- `filter_applied` - Aplicación de filtro (houses, experiences)

#### Eventos de performance (opcional)
- `page_load_slow` - Página cargó en > 3 segundos (para identificar problemas)
- `image_load_error` - Error al cargar imagen (para debugging)

#### Configuración de conversiones
Marcar como "conversión" en GA4:
- `submit_booking`
- `submit_contact_form`
- `request_quote`
- `click_whatsapp` (opcional, si se considera lead cualificado)

---

## PRÓXIMOS PASOS

### 1. Acordar paquete y alcance
- Revisión de esta propuesta con el equipo de Verana
- Selección de paquete (Básico / Estándar / Premium) según presupuesto y necesidades
- Ajustes de alcance si es necesario (dentro de lo razonable)
- Firma de acuerdo de alcance y cronograma

### 2. Recolección de información y acceso
Proveer los siguientes elementos para iniciar Fase 0 (Discovery):
- **Analítica:** acceso a Google Analytics (GA4 o Universal) y Google Search Console
- **Contenido:** inventario de textos existentes, ✅ **imágenes disponibles** (22 imágenes WebP proporcionadas - ver Anexo A.8), derechos de uso
- **Brand guidelines:** estilo gráfico, tipografía, paleta de colores, imágenes de marca, tono de voz
- **Accesos técnicos:** 
  - Hosting actual (si aplica)
  - CMS o repositorio de código (si aplica)
  - Sistema de reservas (información del proveedor, API disponible o no)
- **Información de negocio:** precios aproximados (rangos), temporadas, políticas, datos de contacto (WhatsApp, email)

### 3. Reunión kick-off
- **Participantes:** equipo técnico, diseño, contenido de nuestro lado + stakeholders clave de Verana
- **Objetivos:** 
  - Alinear expectativas
  - Confirmar hipótesis iniciales
  - Definir entregables finales y criterios de éxito
  - Establecer proceso de comunicación y aprobaciones
  - Resolver dudas técnicas y de alcance
- **Duración estimada:** 2-3 horas
- **Formato:** presencial o videollamada según preferencia

---

## INFORMACIÓN ADICIONAL REQUERIDA DEL CLIENTE

Para proceder de manera eficiente, necesitamos la siguiente información:

### Técnica
- [ ] Motor de reservas actual: proveedor, tipo de integración disponible (API, iframe, link externo)
- [ ] Hosting actual: proveedor, tipo de servidor, acceso SSH/FTP si aplica
- [ ] CMS actual: tipo de sistema, versión, acceso admin
- [ ] Dominio y DNS: proveedor, acceso para configuración

### Contenido
- [x] **Inventario de fotografías:** ✅ Disponible - 22 imágenes WebP en carpeta `imagenes/` (ver Anexo A.8 para detalles completos)
- [ ] Textos existentes: descripciones de houses, experiences, historia, FAQs
- [ ] Brand assets: logos, tipografía, paleta de colores, guía de estilo (logo `verana.png.webp` disponible)
- [ ] Contenido de video: si hay videos promocionales existentes

### Negocio
- [ ] Información de contacto: WhatsApp oficial, email de reservas, teléfono
- [ ] Precios: rangos aproximados de houses y experiences (para mostrar u ocultar según estrategia)
- [ ] Temporadas: alta/baja, fechas especiales
- [ ] Políticas: cancelación, check-in/out, mascotas, etc.

### Analítica y marketing
- [ ] Acceso a Google Analytics (cuenta, permisos)
- [ ] Acceso a Google Search Console
- [ ] Redes sociales: cuentas existentes, si se integrarán
- [ ] Campañas actuales: si hay PPC, email marketing activo

---

**Quedo atento para resolver dudas, ajustar alcance según necesidades específicas, o agendar reunión para arrancar el proyecto.**

---

*Documento generado para Verana - Hotel Boutique de Lujo*  
*Propuesta de rediseño y optimización digital*
