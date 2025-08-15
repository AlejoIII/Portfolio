export default function Projects() {
  const baseUrl = import.meta.env.BASE_URL || '/';
    const imgBase = `${baseUrl}Proyectos/`;
    const projects = [
    {
      title: 'SlimeFighter',
    image: `${imgBase}SlimeFighter.png`,
    url: 'https://slimefighter.onrender.com',
      alt: 'Vista previa de SlimeFighter'
    }
  ];

  return (
    <section id="proyectos" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const href = p.url || p.image;
          return (
            <a
              key={p.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card block overflow-hidden transition-colors hover:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
              title={`Abrir ${p.title}`}
            >
              <div className="aspect-video rounded-xl overflow-hidden flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 p-2">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${baseUrl}placeholder-profile.svg`;
                  }}
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}
