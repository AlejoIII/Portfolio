function Cert({ name, org, href, downloadName }) {
  return (
    <a
      href={href}
      download={downloadName}
      className="card block transition-colors hover:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
      title="Descargar certificado"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-neutral-700 dark:text-neutral-300">{org}</p>
    </a>
  )
}

export default function Certifications() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const certs = [
    {
      name: 'Curso de HTML5 y CSS3',
      org: 'OpenWebinar',
      file: 'certificado_curso_de_html5_y_css3.pdf',
      downloadName: 'Alejandro-Gonzalez-HTML5-CSS3.pdf'
    },
    {
      name: 'Curso de PHP para principiantes',
      org: 'OpenWebinar',
      file: 'certificado_curso_de_php_para_principiantes.pdf',
      downloadName: 'Alejandro-Gonzalez-PHP-Basico.pdf'
    },
    {
      name: 'Curso de JavaScript para principiantes',
      org: 'OpenWebinar',
      file: 'certificado_curso_de_javascript_para_principiantes.pdf',
      downloadName: 'Alejandro-Gonzalez-JS-Basico.pdf'
    }
  ];

  return (
    <section id="certificaciones" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Certificaciones</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((c) => (
          <Cert
            key={c.file}
            name={c.name}
            org={c.org}
            href={`${baseUrl}${c.file}`}
            downloadName={c.downloadName}
          />
        ))}
      </div>
    </section>
  )
}
