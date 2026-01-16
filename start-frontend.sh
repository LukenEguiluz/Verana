#!/bin/bash

# Script para iniciar el frontend de Verana en localhost
# Uso: ./start-frontend.sh

set -e  # Salir si hay algún error

echo "🚀 Iniciando frontend de Verana..."
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FRONTEND_DIR="$SCRIPT_DIR/frontend"

# Verificar que existe el directorio frontend
if [ ! -d "$FRONTEND_DIR" ]; then
    echo "❌ Error: No se encuentra el directorio 'frontend'"
    echo "   Asegúrate de ejecutar este script desde la raíz del proyecto"
    exit 1
fi

# Navegar al directorio frontend
cd "$FRONTEND_DIR"

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "${YELLOW}📦 Instalando dependencias...${NC}"
    echo ""
    npm install
    echo ""
    echo "${GREEN}✅ Dependencias instaladas${NC}"
    echo ""
fi

# Verificar si existe .env.local, si no, crear uno básico
if [ ! -f ".env.local" ]; then
    echo "${YELLOW}⚠️  No se encontró .env.local, creando uno básico...${NC}"
    cat > .env.local << EOF
# API Backend URL (ajustar según tu configuración)
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Google Analytics ID (opcional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF
    echo "${GREEN}✅ Archivo .env.local creado${NC}"
    echo ""
fi

# Iniciar el servidor de desarrollo
echo "${GREEN}🎨 Iniciando servidor de desarrollo de Next.js...${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🌐 Frontend disponible en: http://localhost:3000"
echo "  📝 Presiona Ctrl+C para detener el servidor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npm run dev
