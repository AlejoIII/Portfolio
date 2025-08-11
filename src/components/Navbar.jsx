export default function Navbar() {
  const items = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#skills', label: 'Tecnologías' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#educacion', label: 'Educación' },
    { href: '#certificaciones', label: 'Certificaciones' },
    { href: '#contacto', label: 'Contacto' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="container-max flex items-center justify-between py-4">
        <a href="#inicio" className="font-semibold tracking-tight">
          <span className="text-brand-400">Alejandro</span> González
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <li key={i.href}>
              <a href={i.href} className="hover:text-brand-300">{i.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="md:inline-block hidden border border-brand-500/40 hover:border-brand-400 text-brand-300 hover:text-brand-200 rounded-xl px-4 py-2">
          Contacto
        </a>
      </nav>
    </header>
  )
}
