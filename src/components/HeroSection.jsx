import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Foto de perfil */}
          <div className="flex justify-center">
            <img
              src="3.jpg" 
              alt="Foto de perfil de Alejandro"
              className="w-32 h-32 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-primary/60 mb-4 opacity-0 animate-fade-in"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola, soy</span>
            <span className="text-glow text-foreground"> <span className="text-primary">Alejandro </span> González Domínguez</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Desarrollador web apasionado por crear experiencias digitales
            excepcionales. Me especializo en React y Node.js.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};