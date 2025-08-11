export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="container-max py-8 text-sm text-neutral-400 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {year} Alejandro José González Domínguez</p>
        <p>Hecho con React + Tailwind · Deploy en GitHub Pages</p>
      </div>
    </footer>
  )
}
