import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaJs, FaReact, FaNode, FaGithub, FaJava } from "react-icons/fa";
import { SiDotnet, SiPostman, SiFigma, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiTypescript, SiSpringboot } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";

// Añade la url oficial a cada tecnología
const skills = [
  { name: "HTML/CSS", icon: <FaHtml5 />, category: "frontend", url: "https://developer.mozilla.org/docs/Web/HTML" },
  { name: "JavaScript", icon: <FaJs />, category: "frontend", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "React", icon: <FaReact />, category: "frontend", url: "https://react.dev/" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend", url: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend", url: "https://tailwindcss.com/" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend", url: "https://nextjs.org/" },

  { name: "Java", icon: <FaJava />, category: "backend", url: "https://www.java.com/" },
  { name: "Spring Boot", icon: <SiSpringboot />, category: "backend", url: "https://spring.io/projects/spring-boot" },
  { name: "Node.js", icon: <FaNode />, category: "backend", url: "https://nodejs.org/" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend", url: "https://www.mongodb.com/" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend", url: "https://www.postgresql.org/" },
  { name: "Microsoft SQL Server", icon: <GiDatabase />, category: "backend", url: "https://www.microsoft.com/en-us/sql-server/" },
  { name: "C#", icon: <SiDotnet />, category: "backend", url: "https://learn.microsoft.com/dotnet/csharp/" },
  { name: ".NET", icon: <SiDotnet />, category: "backend", url: "https://dotnet.microsoft.com/" },

  { name: "Git/GitHub", icon: <FaGithub />, category: "Herramientas", url: "https://github.com/" },
  { name: "Figma", icon: <SiFigma />, category: "Herramientas", url: "https://www.figma.com/" },
  { name: "Postman", icon: <SiPostman />, category: "Herramientas", url: "https://www.postman.com/" },
];

const categories = ["Todos", "frontend", "backend", "Herramientas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todos" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:bg-primary hover:text-primary-foreground",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bg-secondary"
              )}
              tabIndex={0}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredSkills.map((skill, key) => (
            <a
              key={key}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer"
              title={skill.name}
            >
              <div className="text-4xl text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};