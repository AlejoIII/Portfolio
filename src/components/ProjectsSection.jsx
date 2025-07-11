import { ArrowRight, ExternalLink, Github } from "lucide-react";

const tagLinks = {
  "React": "https://react.dev/",
  "TailwindCSS": "https://tailwindcss.com/",
  "Next.js": "https://nextjs.org/",
};

const projects = [
  {
    id: 1,
    title: "LomoJobs",
    description: "Plataforma de búsqueda de empleo con autenticación y gestión de usuarios.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary"> Proyectos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí hay una selección de mis proyectos más recientes. Cada uno de ellos
          refleja mi pasión por el desarrollo web y mi compromiso con la calidad.
          Si deseas ver más, visita mi perfil de GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <a
                      key={tag}
                      href={tagLinks[tag] || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      {tag}
                    </a>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AlejoIII"
          >
            Comprueba mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};