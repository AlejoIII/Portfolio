import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground text-center">
          <span className="text-glow text-foreground">
            &copy; {new Date().getFullYear()} Alejandro González Domínguez.
          </span>
        </p>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-8 top-1/2 -translate-y-1/2"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};