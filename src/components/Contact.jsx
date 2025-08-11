export default function Contact() {
  return (
    <section id="contacto" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
      <div className="card">
        <p className="text-neutral-300 mb-4">
          ¿Tienes una oportunidad o un proyecto interesante? Me encantará hablar contigo.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:alejandrotrabajodev17@gmail.com" className="bg-brand-500 hover:bg-brand-400 text-white rounded-xl px-5 py-3">Enviar email</a>
          <a href="tel:+34615195992" className="border border-neutral-700 hover:border-brand-400 rounded-xl px-5 py-3">Llamar</a>
        </div>
      </div>
    </section>
  )
}
