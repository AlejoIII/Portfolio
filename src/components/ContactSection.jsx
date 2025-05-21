import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensaje enviado!",
        description: "Gracias por su mensaje. Vuelve pronto.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Manten el <span className="text-primary"> Contacto</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Si tienes alguna pregunta o quieres hablar sobre un proyecto, no dudes
          en ponerte en contacto conmigo. Estoy aquí para ayudarte y responder a
          cualquier consulta que puedas tener. Puedes enviarme un mensaje a
          través del formulario o contactarme directamente a través de mis redes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Información de Contacto
            </h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Alejandrotrabajodev17@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Telefono</h4>
                <a
                  href="tel:+11234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 615 19 59 92
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Localización</h4>
                <a
                  href="https://maps.app.goo.gl/XXNBp4sd38poZ9HW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Telde, IC, España
                </a>
              </div>
            </div>
          </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Contactame aqui</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/alejandro-gonz%C3%A1lez-dom%C3%ADnguez-48272a350/"
                  target="_blank"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/alejandro_jgd/"
                  target="_blank"
                  className="transition-colors text-muted-foreground hover:text-primary"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Envia un mensaje</h3>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-left"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background
                focus:outline-none
                placeholder:text-muted-foreground focus:placeholder:text-primary
                transition-colors duration-200"
              placeholder="Alejandro González..."
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background
                focus:outline-none
                placeholder:text-muted-foreground focus:placeholder:text-primary
                transition-colors duration-200"
              placeholder="Alejandrotrabajodev17@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-left"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background
                focus:outline-none resize-none
                placeholder:text-muted-foreground focus:placeholder:text-primary
                transition-colors duration-200"
              placeholder="Hola, tengo una pregunta sobre..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
            )}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            <Send size={16} />
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};
