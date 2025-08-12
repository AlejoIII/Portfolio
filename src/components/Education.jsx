function Edu({ title, center, years }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
  <span className="text-sm text-neutral-500 dark:text-neutral-400">{years}</span>
      </div>
  <p className="text-neutral-700 dark:text-neutral-300 mt-1">{center}</p>
    </div>
  )
}

export default function Education() {
  return (
    <section id="educacion" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Educación</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Edu title="Desarrollador de Aplicaciones Multiplataforma" center="IES Lomo la Herradura" years="2023 – 2025" />
        <Edu title="Técnico en Sistemas Microinformáticos y Redes" center="IES Lomo la Herradura" years="2021 – 2023" />
        <Edu title="Educación Secundaria Obligatoria" center="IES Juan Pulido Castro" years="2016 – 2021" />
      </div>
    </section>
  )
}
