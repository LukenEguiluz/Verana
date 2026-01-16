# Verana Frontend

Frontend del rediseño de Verana Hotel construido con Next.js 14, React 18 y TypeScript.

## 🚀 Inicio Rápido

### Windows
```bash
# Desde la raíz del proyecto
.\start-frontend.bat
```

### Linux / macOS
```bash
# Desde la raíz del proyecto
chmod +x start-frontend.sh
./start-frontend.sh
```

### Manual
```bash
cd frontend
npm install
npm run dev
```

El servidor estará disponible en **http://localhost:3000**

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/              # Páginas (Next.js App Router)
│   │   ├── layout.tsx    # Layout raíz
│   │   ├── page.tsx      # Home
│   │   ├── houses/       # Páginas de casas
│   │   └── how-to-get-here/  # Página de cómo llegar
│   ├── components/       # Componentes React reutilizables
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileBottomBar.tsx
│   │   └── ...
│   └── styles/
│       └── globals.css   # Estilos globales
├── public/              # Assets estáticos (imágenes, etc.)
├── next.config.js        # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind CSS
└── package.json
```

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con SSR/SSG
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **Next/Image** - Optimización de imágenes

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
npm run type-check  # Verificación de tipos TypeScript
```

## 🎨 Características

- ✅ Mobile-first responsive design
- ✅ Optimización de imágenes (WebP/AVIF)
- ✅ Lazy loading
- ✅ SEO optimizado (metadata, Open Graph)
- ✅ Accesibilidad (WCAG 2.1 AA)
- ✅ Performance optimizado (Core Web Vitals)

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Opcional
```

## 📦 Dependencias Principales

- `next` - Framework
- `react` & `react-dom` - UI
- `framer-motion` - Animaciones
- `tailwindcss` - Estilos

Ver `package.json` para la lista completa.

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
Cambia el puerto en `package.json`:
```json
"dev": "next dev -p 3001"
```

### Error de TypeScript
```bash
npm run type-check
```

## 📚 Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🚧 Próximos Pasos

- [ ] Integración con API Django
- [ ] Implementar Schema JSON-LD
- [ ] Agregar más páginas (Experiences, Spa, Blog)
- [ ] Optimización de imágenes reales
- [ ] Testing (Jest, React Testing Library)
