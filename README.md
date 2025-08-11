### Publicar con base personalizada (PowerShell o bash)

Si tu portfolio se publica en una subcarpeta (por ejemplo, https://usuario.github.io/Portfolio/), usa el script especial:

- En PowerShell:
   ```powershell
   $env:VITE_BASE='/Portfolio/'; npm run deploy:gh
   ```
- En bash/cmd:
   ```bash
   VITE_BASE=/Portfolio/ npm run deploy:gh
   ```

Esto ajusta la base de Vite y publica correctamente en la rama gh-pages.
# Portfolio — Alejandro González

Proyecto React + Vite + Tailwind listo para desplegar en **GitHub Pages**.

## Requisitos
- Node 18+
- Git

## Instalar
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Despliegue en GitHub Pages

### Opción A: Página de usuario/organización (recomendado)
Si vas a publicar en `https://tu-usuario.github.io/`:

1. Haz un repo nuevo **vacío** con el nombre `tu-usuario.github.io`.
2. Configura el remoto y sube el código:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/tu-usuario.github.io.git
   git add .
   git commit -m "feat: portfolio inicial"
   git push -u origin main
   ```
3. Ejecuta:
   ```bash
   npm run deploy
   ```
4. Activa **Pages** desde `Settings → Pages` seleccionando la rama `gh-pages` si no se activa sola.

### Opción B: Proyecto dentro de un repositorio (subruta)
Si vas a publicar en `https://tu-usuario.github.io/mi-portfolio/`:

1. Edita **vite.config.js** y cambia:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/mi-portfolio/',
   })
   ```
2. Sube el repo y ejecuta `npm run deploy` como arriba.

---

## Publicar en GitHub Pages usando la rama `gh-pages` (recomendado)

1. Asegúrate de que tu rama principal es `master` y ahí está el código fuente.
2. Ejecuta:
   ```bash
   npm run deploy
   ```
   Esto generará la carpeta `dist` y subirá el contenido a la rama `gh-pages` automáticamente usando el paquete `gh-pages`.
3. Ve a la configuración de tu repositorio en GitHub: **Settings → Pages**.
4. En "Source", selecciona la rama `gh-pages` y la carpeta `/ (root)`.
5. Tu portfolio estará disponible en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

> Si usas una subcarpeta, puedes definir la base con la variable de entorno VITE_BASE:
> ```bash
> set VITE_BASE=/NOMBRE_REPO/ && npm run deploy
> ```
> (En PowerShell: `$env:VITE_BASE='/NOMBRE_REPO/'; npm run deploy`)

La rama `master` quedará solo para el código fuente y la rama `gh-pages` para el sitio publicado.

> Nota: La app usa `HashRouter` para que la navegación funcione en GitHub Pages.

---

Si quieres que añada proyectos, imágenes o un blog, dímelo y lo integramos. ✨
