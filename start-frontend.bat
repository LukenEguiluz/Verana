@echo off
REM Script para iniciar el frontend de Verana en localhost (Windows)
REM Uso: start-frontend.bat

echo.
echo 🚀 Iniciando frontend de Verana...
echo.

REM Obtener el directorio del script
set SCRIPT_DIR=%~dp0
set FRONTEND_DIR=%SCRIPT_DIR%frontend

REM Verificar que existe el directorio frontend
if not exist "%FRONTEND_DIR%" (
    echo ❌ Error: No se encuentra el directorio 'frontend'
    echo    Asegúrate de ejecutar este script desde la raíz del proyecto
    pause
    exit /b 1
)

REM Navegar al directorio frontend
cd /d "%FRONTEND_DIR%"

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    echo.
    call npm install
    echo.
    echo ✅ Dependencias instaladas
    echo.
)

REM Verificar si existe .env.local, si no, crear uno básico
if not exist ".env.local" (
    echo ⚠️  No se encontró .env.local, creando uno básico...
    (
        echo # API Backend URL (ajustar según tu configuración
        echo NEXT_PUBLIC_API_URL=http://localhost:8000/api
        echo.
        echo # Google Analytics ID (opcional
        echo # NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
    ) > .env.local
    echo ✅ Archivo .env.local creado
    echo.
)

REM Iniciar el servidor de desarrollo
echo 🎨 Iniciando servidor de desarrollo de Next.js...
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   🌐 Frontend disponible en: http://localhost:3000
echo   📝 Presiona Ctrl+C para detener el servidor
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

call npm run dev

pause
