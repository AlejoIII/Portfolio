import { useEffect, useState } from "react";

// Lista de rutas a los SVGs en public/Svg_images
const ICONS = [
  "/Svg_images/unicorn-origami-paper-svgrepo-com.svg",
  "/Svg_images/owl-origami-paper-svgrepo-com.svg",
  "/Svg_images/fox-origami-paper-svgrepo-com.svg",
  "/Svg_images/cat-origami-paper-svgrepo-com.svg",
  "/Svg_images/kangaroo-origami-paper-svgrepo-com.svg",
  "/Svg_images/giraffe-origami-paper-svgrepo-com.svg",
  "/Svg_images/horse-origami-paper-svgrepo-com.svg",
];
// Función para generar un número aleatorio entre dos valores
// Se utiliza para determinar la posición, tamaño y otras propiedades de las figuras
function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

// Componente StarBackground
// Este componente genera un fondo animado con figuras de origami
// Utiliza un efecto secundario para generar figuras al cargar el componente
// y al cambiar el tamaño de la ventana
export const StarBackground = () => {
  const [figures, setFigures] = useState([]);
  // Estado para almacenar las figuras generadas
  // Se inicializa como un array vacío
  useEffect(() => {
    generateFigures();

    const handleResize = () => {
      generateFigures();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   // Genera figuras aleatorias y las añade al estado
  // Se basa en el tamaño de la ventana para determinar cuántas figuras generar
  // y sus propiedades aleatorias
  // Se asegura de que las figuras se regeneren al cambiar el tamaño de la ventana
  // y al cargar el componente
  // Se utiliza un efecto secundario para manejar la generación de figuras
  // y la limpieza del evento de cambio de tamaño
  // Se utiliza un efecto secundario para manejar la generación de figuras
  const generateFigures = () => {
    const numberOfFigures = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    const newFigures = [];
    for (let i = 0; i < numberOfFigures; i++) {
      const xMove = randomBetween(-30, 30);
      const yMove = randomBetween(-30, 30);
      const scale = randomBetween(0.8, 1.3);
      const rotate = randomBetween(-30, 30);
      newFigures.push({
        id: i,
        icon: ICONS[i % ICONS.length], 
        size: randomBetween(32, 64),
        x: randomBetween(0, 100),
        y: randomBetween(0, 100),
        opacity: randomBetween(0.7, 1),
        duration: randomBetween(14, 28),
        delay: randomBetween(0, 10),
        xMove,
        yMove,
        scale,
        rotate,
      });
    }
    setFigures(newFigures);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {figures.map((fig) => (
        <div
          key={fig.id}
          style={{
            position: "absolute",
            left: `${fig.x}%`,
            top: `${fig.y}%`,
            width: `${fig.size}px`,
            height: `${fig.size}px`,
            opacity: fig.opacity,
            zIndex: 0,
            userSelect: "none",
            animation: `floatAround${fig.id} ${fig.duration}s ease-in-out ${fig.delay}s infinite alternate`,
            willChange: "transform",
          }}
        >
          <img
            src={fig.icon}
            alt="icono origami"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
            }}
            draggable={false}
          />
          <style>
            {`
              @keyframes floatAround${fig.id} {
                0% {
                  transform: translate(0px, 0px) scale(1) rotate(0deg);
                }
                25% {
                  transform: translate(${fig.xMove / 2}vw, ${fig.yMove / 2}vh) scale(${fig.scale}) rotate(${fig.rotate / 2}deg);
                }
                50% {
                  transform: translate(${fig.xMove}vw, ${fig.yMove}vh) scale(1) rotate(${fig.rotate}deg);
                }
                75% {
                  transform: translate(${fig.xMove / 2}vw, ${fig.yMove / 2}vh) scale(${fig.scale}) rotate(${fig.rotate / 2}deg);
                }
                100% {
                  transform: translate(0px, 0px) scale(1) rotate(0deg);
                }
              }
            `}
          </style>
        </div>
      ))}
    </div>
  );
};