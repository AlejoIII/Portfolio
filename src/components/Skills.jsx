const techLinks = {
  'JavaScript': 'https://developer.mozilla.org/docs/Web/JavaScript',
  'PHP': 'https://www.php.net/',
  'Java': 'https://www.java.com/',
  'HTML5': 'https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5',
  'CSS3': 'https://developer.mozilla.org/docs/Web/CSS',
  'Bootstrap 4/5': 'https://getbootstrap.com/',
  'React': 'https://react.dev/',
  'Symfony': 'https://symfony.com/',
  'Django': 'https://www.djangoproject.com/',
  'Blazor': 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor',
  '.NET': 'https://dotnet.microsoft.com/',
  'MySQL': 'https://www.mysql.com/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'MongoDB': 'https://www.mongodb.com/'
};

const pillClasses = "px-3 py-1 rounded-full border text-sm bg-neutral-100 border-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100";

const Tag = ({children}) => {
  const link = techLinks[children];
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={pillClasses + " hover:underline focus:underline"}
    >
      {children}
    </a>
  ) : (
    <span className={pillClasses}>{children}</span>
  );
};

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
