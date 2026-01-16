@echo off
echo Inicializando repositorio Git para VeranaWebsite...
git init
git add .
git commit -m "Initial commit: Verana website frontend"
echo.
echo Repositorio Git inicializado exitosamente!
echo.
echo Para conectar con un repositorio remoto, ejecuta:
echo   git remote add origin [URL_DEL_REPOSITORIO]
echo   git push -u origin main
pause
