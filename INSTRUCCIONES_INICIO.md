# 🚀 Instrucciones para Iniciar el Frontend

## Windows

### Opción 1: Doble clic
1. Haz doble clic en `start-frontend.bat`
2. El script instalará las dependencias si es necesario
3. El servidor se iniciará automáticamente en `http://localhost:3000`

### Opción 2: Desde la terminal
```bash
# Navegar al directorio del proyecto
cd C:\Users\luken\Documents\INIT\Verana

# Ejecutar el script
.\start-frontend.bat
```

## Linux / macOS

### Opción 1: Ejecutar directamente
```bash
# Dar permisos de ejecución (solo la primera vez)
chmod +x start-frontend.sh

# Ejecutar el script
./start-frontend.sh
```

### Opción 2: Desde la terminal
```bash
# Navegar al directorio del proyecto
cd ~/Documents/INIT/Verana

# Ejecutar el script
bash start-frontend.sh
```

## Manual (si prefieres hacerlo paso a paso)

```bash
# 1. Navegar al directorio frontend
cd frontend

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

## Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** (viene con Node.js)

### Verificar instalación
```bash
node --version  # Debe ser 18.x o superior
npm --version   # Debe ser 9.x o superior
```

## Acceso

Una vez iniciado, el frontend estará disponible en:
- **URL:** http://localhost:3000
- **Hot Reload:** Los cambios se reflejan automáticamente

## Detener el Servidor

Presiona `Ctrl + C` en la terminal donde está corriendo el servidor.

## Solución de Problemas

### Error: "node_modules no encontrado"
```bash
cd frontend
npm install
```

### Error: "Puerto 3000 ya en uso"
```bash
# Opción 1: Detener el proceso que usa el puerto 3000
# Opción 2: Cambiar el puerto en package.json
# Agregar en scripts: "dev": "next dev -p 3001"
```

### Error: "Next.js no encontrado"
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Notas

- El script crea automáticamente un archivo `.env.local` si no existe
- Las dependencias se instalan automáticamente la primera vez
- El servidor se reinicia automáticamente cuando cambias archivos
