import { useState, useEffect } from 'react';

export default function Navbar() {
  const items = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#skills', label: 'Tecnologías' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#educacion', label: 'Educación' },
    { href: '#certificaciones', label: 'Certificaciones' },
    // { href: '#contacto', label: 'Contacto' },
  ];

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  };

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
        <button
          onClick={toggleTheme}
          className="md:inline-block hidden border border-brand-500/40 hover:border-brand-400 text-brand-300 hover:text-brand-200 rounded-xl px-4 py-2 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
          aria-label="Cambiar tema claro/oscuro"
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07l-1.42-1.42M6.34 6.34L4.93 4.93m12.73 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
