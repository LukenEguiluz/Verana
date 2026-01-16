# 🚀 Guía de Despliegue en Vercel

## Prerrequisitos

1. Cuenta en [Vercel](https://vercel.com)
2. Repositorio Git (GitHub, GitLab o Bitbucket) - opcional pero recomendado
3. Node.js instalado (para desarrollo local)

## Método 1: Despliegue desde GitHub/GitLab (Recomendado)

### Paso 1: Subir código a Git

**Opción rápida (Windows):**
```bash
cd VeranaWebsite
.\push-to-github.bat
```

**Opción manual:**
```bash
cd VeranaWebsite
git init
git add .
git commit -m "Initial commit: Verana website frontend"
git remote add origin https://github.com/LukenEguiluz/Verana.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Importa tu repositorio de Git
4. Vercel detectará automáticamente Next.js
5. Configura las variables de entorno (ver abajo)
6. Haz clic en "Deploy"

### Paso 3: Configurar Variables de Entorno

En el dashboard de Vercel, ve a Settings > Environment Variables y agrega:

```
NEXT_PUBLIC_SITE_URL=https://verana.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (opcional)
NEXT_PUBLIC_API_URL=https://api.verana.com (cuando esté disponible)
```

## Método 2: Despliegue desde CLI

### Paso 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Paso 2: Iniciar sesión

```bash
vercel login
```

### Paso 3: Desplegar

```bash
cd VeranaWebsite
vercel
```

Sigue las instrucciones en pantalla. Para producción:

```bash
vercel --prod
```

## Configuración Automática

El proyecto incluye `vercel.json` que configura:

- ✅ Framework: Next.js (detección automática)
- ✅ Headers de seguridad
- ✅ Cache para imágenes estáticas (1 año)
- ✅ Región: US East (iad1)
- ✅ Build command: `npm run build`
- ✅ Install command: `npm install`

## Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings > Domains
3. Agrega tu dominio (ej: verana.com)
4. Sigue las instrucciones para configurar DNS

## Variables de Entorno

### Desarrollo Local

Crea `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Producción en Vercel

Configura en el dashboard de Vercel:

- `NEXT_PUBLIC_SITE_URL` - URL de producción
- `NEXT_PUBLIC_GA_ID` - Google Analytics (opcional)
- `NEXT_PUBLIC_API_URL` - URL del backend (cuando esté disponible)

## Verificación Post-Despliegue

Después del despliegue, verifica:

- ✅ El sitio carga correctamente
- ✅ Las imágenes se muestran (`/imagenes/` y `/revista/`)
- ✅ Las rutas funcionan (`/houses`, `/how-to-get-here`)
- ✅ El SEO está configurado (verifica con herramientas SEO)
- ✅ El performance es bueno (Lighthouse)

## Troubleshooting

### Error: Build Failed

- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel
- Asegúrate de que no haya errores de TypeScript

### Imágenes no cargan

- Verifica que las imágenes estén en `/public/`
- Revisa las rutas en los componentes
- Asegúrate de que `next.config.js` tenga los `remotePatterns` correctos

### Variables de entorno no funcionan

- Las variables deben empezar con `NEXT_PUBLIC_` para ser accesibles en el cliente
- Reinicia el deployment después de agregar variables
- Verifica que estén configuradas para el entorno correcto (Production, Preview, Development)

## Próximos Pasos

1. Configurar dominio personalizado
2. Configurar Google Analytics
3. Conectar con backend (cuando esté disponible)
4. Configurar webhooks para CI/CD
5. Configurar monitoreo y alertas
