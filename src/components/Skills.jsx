const Tag = ({children}) => (
  <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm">{children}</span>
)

export default function Skills() {
  return (
    <section id="skills" className="container-max">
      <h2 className="text-2xl font-semibold mb-6">Tecnologías</h2>
      <div className="card">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-brand-300 mb-3">Lenguajes y Web</h3>
            <div className="flex flex-wrap gap-2">
              <Tag>JavaScript</Tag>
              <Tag>PHP</Tag>
              <Tag>Java</Tag>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>Bootstrap 4/5</Tag>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-brand-300 mb-3">Frameworks y librerías</h3>
            <div className="flex flex-wrap gap-2">
              <Tag>React</Tag>
              <Tag>Symfony</Tag>
              <Tag>Django</Tag>
              <Tag>Blazor</Tag>
              <Tag>.NET</Tag>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-brand-300 mb-3">Bases de datos</h3>
            <div className="flex flex-wrap gap-2">
              <Tag>MySQL</Tag>
              <Tag>PostgreSQL</Tag>
              <Tag>MongoDB</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
