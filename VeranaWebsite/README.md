# Verana Website

Frontend del sitio web de Verana - Hotel Boutique de Lujo en Yelapa, México.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con SSR/SSG
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones modernas
- **Next/Image** - Optimización de imágenes

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El servidor estará disponible en **http://localhost:3000**

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter
- `npm run type-check` - Verificación de tipos TypeScript

## 🎨 Características

- ✅ Mobile-first responsive design
- ✅ Optimización de imágenes (WebP/AVIF)
- ✅ Lazy loading
- ✅ SEO optimizado (metadata, Open Graph, Schema JSON-LD)
- ✅ Animaciones modernas con Framer Motion
- ✅ Accesibilidad (WCAG 2.1 AA)
- ✅ Performance optimizado (Core Web Vitals)

## 📁 Estructura del Proyecto

```
VeranaWebsite/
├── src/
│   ├── app/              # Páginas (Next.js App Router)
│   │   ├── layout.tsx    # Layout raíz
│   │   ├── page.tsx      # Home
│   │   ├── houses/       # Páginas de casas
│   │   └── how-to-get-here/  # Página de cómo llegar
│   ├── components/       # Componentes React reutilizables
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── PressSection.tsx
│   │   └── ...
│   ├── lib/             # Utilidades
│   │   └── seo.ts       # Funciones de SEO
│   └── styles/          # Estilos globales
│       └── globals.css
├── public/              # Assets estáticos
│   ├── imagenes/        # Imágenes del hotel
│   └── revista/         # Imágenes de prensa
├── next.config.js       # Configuración de Next.js
├── tailwind.config.js   # Configuración de Tailwind CSS
└── package.json
```

## 🌐 Páginas Principales

- `/` - Homepage con hero, houses preview, press, testimonials
- `/houses` - Listado de todas las casas
- `/houses/[slug]` - Detalle de casa individual
- `/how-to-get-here` - Guía de transporte y llegada

## 📸 Imágenes

Las imágenes están organizadas en:
- `/public/imagenes/` - Imágenes del hotel (casas, experiencias, etc.)
- `/public/revista/` - Imágenes de prensa y cobertura

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env.local` basado en `.env.example`:

```bash
cp .env.example .env.local
```

Luego completar los valores necesarios.

## 🚀 Despliegue en Vercel

### Opción 1: Desde la CLI de Vercel (Recomendado)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Iniciar sesión:**
   ```bash
   vercel login
   ```

3. **Desplegar:**
   ```bash
   vercel
   ```
   
   Para producción:
   ```bash
   vercel --prod
   ```

### Opción 2: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub/GitLab/Bitbucket
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno si es necesario
5. Haz clic en "Deploy"

### Variables de Entorno en Vercel

Configura estas variables en el dashboard de Vercel:

- `NEXT_PUBLIC_SITE_URL` - URL del sitio (ej: https://verana.com)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (opcional)
- `NEXT_PUBLIC_API_URL` - URL de la API backend (cuando esté disponible)

### Configuración Automática

El proyecto incluye `vercel.json` con:
- Headers de seguridad
- Cache para imágenes
- Rewrites para sitemap y robots.txt
- Región: `iad1` (US East)

## 🔗 Repositorio

Este proyecto está disponible en GitHub:
**https://github.com/LukenEguiluz/Verana**

## 📤 Subir a GitHub

### Opción 1: Usando el Script (Recomendado)

**Windows:**
```bash
.\push-to-github.bat
```

**Linux / macOS:**
```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

### Opción 2: Manualmente

```bash
cd VeranaWebsite
git init
git remote add origin https://github.com/LukenEguiluz/Verana.git
git add .
git commit -m "Initial commit: Verana website frontend"
git branch -M main
git push -u origin main
```

## 📄 Licencia

Propiedad de Verana Hotel
