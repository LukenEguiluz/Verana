# Instrucciones para Inicializar Git

## Opción 1: Usando el Script (Recomendado)

### Windows
```bash
.\init-git.bat
```

### Linux / macOS
```bash
chmod +x init-git.sh
./init-git.sh
```

## Opción 2: Manualmente

Si prefieres hacerlo manualmente, ejecuta estos comandos desde la carpeta `VeranaWebsite`:

```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Verana website frontend"
```

## Conectar con un Repositorio Remoto

Si quieres conectar con GitHub, GitLab u otro servicio:

```bash
# Agregar remoto
git remote add origin [URL_DEL_REPOSITORIO]

# Cambiar a rama main (si es necesario)
git branch -M main

# Subir cambios
git push -u origin main
```

## Nota

Si Git no está instalado en tu sistema, puedes descargarlo desde:
- https://git-scm.com/download/win (Windows)
- https://git-scm.com/download/mac (macOS)
- `sudo apt-get install git` (Linux)
