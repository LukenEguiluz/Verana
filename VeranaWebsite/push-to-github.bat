@echo off
echo Configurando repositorio Git para GitHub...
echo.

REM Verificar si git está instalado
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git no está instalado o no está en el PATH
    echo Por favor instala Git desde https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Inicializar git si no está inicializado
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    echo.
)

REM Agregar remoto
echo Configurando remoto de GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/LukenEguiluz/Verana.git
echo.

REM Agregar todos los archivos
echo Agregando archivos al staging...
git add .
echo.

REM Crear commit inicial
echo Creando commit inicial...
git commit -m "Initial commit: Verana website frontend - Next.js 14 with modern animations and SEO optimization"
echo.

REM Cambiar a rama main si es necesario
git branch -M main 2>nul
echo.

REM Push al repositorio
echo Subiendo código a GitHub...
echo.
echo NOTA: Si es la primera vez, GitHub te pedirá autenticación.
echo Puedes usar:
echo   1. Personal Access Token (recomendado)
echo   2. GitHub CLI (gh auth login)
echo   3. Credenciales de GitHub
echo.
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Código subido exitosamente a GitHub!
    echo.
    echo Repositorio: https://github.com/LukenEguiluz/Verana
    echo.
) else (
    echo.
    echo ⚠️  Hubo un error al subir. Verifica:
    echo   1. Que tengas acceso al repositorio
    echo   2. Que hayas configurado autenticación de GitHub
    echo   3. Que el repositorio exista en GitHub
    echo.
)

pause
