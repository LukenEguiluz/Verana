# 📤 Subir Proyecto a GitHub

## Repositorio: https://github.com/LukenEguiluz/Verana

## Método 1: Script Automático (Recomendado)

### Windows
```bash
cd VeranaWebsite
.\push-to-github.bat
```

### Linux / macOS
```bash
cd VeranaWebsite
chmod +x push-to-github.sh
./push-to-github.sh
```

## Método 2: Manualmente

Si prefieres hacerlo paso a paso:

```bash
cd VeranaWebsite

# 1. Inicializar git (si no está inicializado)
git init

# 2. Agregar remoto de GitHub
git remote add origin https://github.com/LukenEguiluz/Verana.git

# 3. Agregar todos los archivos
git add .

# 4. Crear commit inicial
git commit -m "Initial commit: Verana website frontend - Next.js 14 with modern animations and SEO optimization"

# 5. Cambiar a rama main
git branch -M main

# 6. Subir a GitHub
git push -u origin main
```

## Autenticación con GitHub

Si es la primera vez que subes, GitHub te pedirá autenticación. Opciones:

### Opción 1: Personal Access Token (Recomendado)

1. Ve a GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con permisos `repo`
3. Cuando git pida contraseña, usa el token en lugar de tu contraseña

### Opción 2: GitHub CLI

```bash
# Instalar GitHub CLI
# Windows: winget install GitHub.cli
# macOS: brew install gh
# Linux: sudo apt install gh

# Autenticar
gh auth login

# Luego ejecuta el push normalmente
```

### Opción 3: SSH (Para uso frecuente)

```bash
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@example.com"

# Agregar clave a GitHub
# Copia el contenido de ~/.ssh/id_ed25519.pub
# Ve a GitHub → Settings → SSH and GPG keys → New SSH key

# Cambiar remoto a SSH
git remote set-url origin git@github.com:LukenEguiluz/Verana.git
```

## Verificación

Después de subir, verifica en:
- https://github.com/LukenEguiluz/Verana

Deberías ver todos los archivos del proyecto.

## Próximos Pasos

1. ✅ Código subido a GitHub
2. 🔄 Conectar con Vercel (ver `DEPLOY_VERCEL.md`)
3. 🌐 Configurar dominio personalizado
4. 📊 Configurar Google Analytics

## Troubleshooting

### Error: "repository not found"
- Verifica que el repositorio exista en GitHub
- Verifica que tengas permisos de escritura
- Verifica la URL del remoto: `git remote -v`

### Error: "authentication failed"
- Usa Personal Access Token en lugar de contraseña
- O configura SSH keys
- O usa GitHub CLI

### Error: "git is not recognized"
- Instala Git desde https://git-scm.com/download/win
- Reinicia la terminal después de instalar
