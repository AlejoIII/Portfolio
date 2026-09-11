function Item({ role, company, period, current, bullets }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold">{role} · <span className="text-brand-300">{company}</span></h3>
        <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{period}</span>
      </div>
      {current && (
        <p className="text-sm text-brand-300 mb-2">Puesto actual</p>
      )}
      <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Experiencia</h2>
      <div className="grid gap-6">
        <Item
          role="Desarrollo Frontend y Backend"
          company="Treyder Informática"
          period="6 meses · Actualidad"
          current
          bullets={[
            "Desarrollo de aplicaciones con Flutter, PHP y Firebird.",
            "Implementación de funcionalidades en frontend y backend, y mantenimiento de sistemas en producción.",
            "Sigo formando parte del equipo de Treyder Informática."
          ]}
        />
        <Item
          role="Desarrollo Frontend y Backend"
          company="Digital Sistemi"
          period="6 meses"
          bullets={[
            "Participación en el desarrollo de funcionalidades en frontend y backend.",
            "Colaboración en revisión de código y resolución de incidencias.",
            "Trabajo con bases de datos relacionales."
          ]}
        />
        <Item
          role="Desarrollo Frontend y Backend"
          company="Noray"
          period="3 meses"
          bullets={[
            "Apoyo en tareas de mantenimiento y mejoras de aplicaciones.",
            "Implementación de componentes reutilizables.",
            "Aprendizaje de buenas prácticas y control de versiones."
          ]}
        />
      </div>
    </section>
  )
}
