function Cert({ name, org }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-neutral-300">{org}</p>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certificaciones" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Certificaciones</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Cert name="OpenWebinar" org="Formación técnica" />
        <Cert name="Diseño y desarrollo de páginas webs modernas" org="Udemy" />
      </div>
    </section>
  )
}
