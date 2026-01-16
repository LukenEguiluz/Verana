# PROYECTO REDISEÑO VERANA
## Estructura del Proyecto Django + React (Next.js)

### Arquitectura
- **Backend:** Django + Django REST Framework
- **Frontend:** Next.js (React) con SSR/SSG
- **Base de datos:** PostgreSQL
- **Cache:** Redis
- **Storage:** S3-compatible para media
- **CMS:** Django Admin o Wagtail (a definir)

### Estructura de carpetas

```
verana-redesign/
├── backend/                 # Django backend
│   ├── verana/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── api/                 # Django REST Framework
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── content/             # Models de contenido
│   │   ├── models.py        # Houses, Experiences, Blog, etc.
│   │   ├── admin.py
│   │   └── migrations/
│   └── manage.py
│
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/             # Next.js 13+ App Router
│   │   │   ├── page.tsx    # Home
│   │   │   ├── houses/
│   │   │   ├── experiences/
│   │   │   ├── how-to-get-here/
│   │   │   └── blog/
│   │   ├── components/      # Componentes React
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── HouseCard.tsx
│   │   │   ├── CTAButton.tsx
│   │   │   └── MobileBottomBar.tsx
│   │   ├── lib/            # Utilidades
│   │   │   ├── api.ts      # Cliente API DRF
│   │   │   └── utils.ts
│   │   └── styles/         # Estilos globales
│   │       └── globals.css
│   ├── public/             # Assets estáticos
│   ├── next.config.js
│   └── package.json
│
├── docs/                    # Documentación
│   ├── PROPUESTA_REDISEÑO_VERANA.md
│   ├── ANALISIS_SITIO_ACTUAL.md
│   └── wireframes/
│
└── docker/                  # Docker config (opcional)
    ├── Dockerfile.backend
    └── Dockerfile.frontend
```

### Componentes principales a desarrollar

1. **Home Page**
   - Hero con H1 + CTAs
   - Sección "Why Verana"
   - Preview de Houses
   - Módulos colapsables (historia)

2. **Houses**
   - Listado con cards
   - Detalle con galería, amenities, capacidad

3. **Experiences/Spa/Weddings**
   - Listado tipo cards
   - Detalle con información completa

4. **How to Get Here**
   - Mapa interactivo
   - Pasos detallados
   - FAQs
   - Checklist

5. **Navegación**
   - Menú desktop simplificado
   - Menú hamburguesa móvil
   - Barra fija inferior móvil

### Tecnologías

**Backend:**
- Django 4.2+
- Django REST Framework
- PostgreSQL
- Redis
- Celery

**Frontend:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS (opcional, o CSS Modules)
- Framer Motion (animaciones suaves)

### Scripts de desarrollo

```bash
# Backend
cd backend
python manage.py runserver

# Frontend
cd frontend
npm run dev
```

### Variables de entorno

**Backend (.env):**
```
SECRET_KEY=...
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_STORAGE_BUCKET_NAME=...
```

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_GA_ID=G-...
```
