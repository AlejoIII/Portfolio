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

> Nota: La app usa `HashRouter` para que la navegación funcione en GitHub Pages.

---

Si quieres que añada proyectos, imágenes o un blog, dímelo y lo integramos. ✨
