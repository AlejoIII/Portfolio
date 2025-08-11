export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const cvUrl = `${baseUrl}CV.pdf`
  const photoUrl = `${baseUrl}Foto CV.jpg`
  const fallbackPhotoUrl = `${baseUrl}placeholder-profile.svg`

  return (
    <section id="inicio" className="container-max pt-12 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <span className="inline-block text-xs tracking-widest uppercase text-brand-300/80">Desarrollador</span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Alejandro José <span className="text-brand-400">González Domínguez</span>
        </h1>
        <p className="text-neutral-300">
          Desde que finalicé mi Grado Medio, he desarrollado un gran interés por el desarrollo
          de software. Busco una oportunidad para seguir aprendiendo, adquirir experiencia práctica
          y crecer como profesional. Soy una persona comprometida, con ganas de aportar, mejorar
          constantemente y enfrentar nuevos retos.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contacto" className="bg-brand-500 hover:bg-brand-400 text-white rounded-xl px-5 py-3">Hablemos</a>
          <a href="#experiencia" className="border border-neutral-700 hover:border-brand-400 rounded-xl px-5 py-3">Ver experiencia</a>
          <a
            href={cvUrl}
            download="Alejandro-Gonzalez-CV.pdf"
            className="border border-brand-500/40 hover:border-brand-400 text-brand-300 hover:text-brand-200 rounded-xl px-5 py-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar CV"
          >
            Descargar CV
          </a>
        </div>
      </div>
      <div className="card md:justify-self-end">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={photoUrl}
            alt="Foto de Alejandro González"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = fallbackPhotoUrl
            }}
            className="w-20 h-20 rounded-full object-cover border border-neutral-800"
          />
          <div>
            <p className="text-sm text-neutral-400">Disponible para trabajar</p>
            <p className="font-semibold">Alejandro González</p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li><span className="text-neutral-400">Ubicación</span><br/>España</li>
          <li><span className="text-neutral-400">Idioma</span><br/>Inglés</li>
          <li><span className="text-neutral-400">Email</span><br/><a className="text-brand-300 hover:underline" href="mailto:alejandrotrabajodev17@gmail.com">alejandrotrabajodev17@gmail.com</a></li>
          <li><span className="text-neutral-400">Teléfono</span><br/><a className="hover:underline" href="tel:+34615195992">+34 615 19 59 92</a></li>
        </ul>
      </div>
    </section>
  )
}
