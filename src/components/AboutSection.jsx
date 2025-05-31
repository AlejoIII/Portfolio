import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              <span className="text-glow text-foreground"> <span className="text-primary">Alejandro </span> González Domínguez</span>
            </h3>
            <div className="gradient-border p-6 card-hover space-y-4">
              <p className="text-muted-foreground text-base leading-relaxed">
                <span className="font-semibold text-primary">¡Hola! Soy Alejandro González Domínguez.</span> <br />
                Desarrollador web apasionado con experiencia en la creación de aplicaciones modernas y escalables.<br />
                <span className="block mt-2">
                  <span className="font-medium">Especialidades:</span> React, Node.js y Next.js.<br />
                  Siempre busco ofrecer la mejor experiencia de usuario y un diseño de interfaces atractivo y funcional.
                </span>
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                Me motiva aprender nuevas tecnologías y mejorar mis habilidades constantemente.<br />
                <span className="block mt-2">
                  Si tienes un proyecto interesante o simplemente quieres charlar sobre desarrollo, <span className="font-semibold text-primary">¡no dudes en ponerte en contacto conmigo!</span>
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Manten el contacto
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">   
                    Desarrollo Web
                  </h4>
                  <p className="text-muted-foreground">
                    Creando aplicaciones web modernas y escalables utilizando
                    tecnologías como React, Node.js y Next.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Diseño de UI/UX
                  </h4>
                  <p className="text-muted-foreground">
                    Creando interfaces de usuario intuitivas y atractivas
                    centradas en la experiencia del usuario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
