import {
  Hero,
  Contact,
  Proyect,
  Newsletter,
  FloatingCircle1,
  FloatingTriangle,
  FloatingCircle2,
  Loading,
} from "./components";
import code1 from "./assets/img/code-image-1.jpg";
import { MouseEvent, useRef, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeño delay para que la transición sea más suave
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const handleMouse = (event: MouseEvent) => {
    const xNorm = event.clientX / window.innerWidth; // 0 (izq) → 1 (der)
    const yNorm = event.clientY / window.innerHeight; // 0 (arriba) → 1 (abajo)

    // Calcular un ángulo entre 0° (horizontal) y 180° (horizontal invertido),
    // combinando x e y para que, al subir y mover a la derecha, bote hacia arriba-derecha.
    const angle = (xNorm + (1 - yNorm)) * 45;

    // Calcular movimiento para las imágenes (más sutil)
    const moveX = (xNorm - 0.5) * 40; // Movimiento horizontal (-10px a +10px)
    const moveY = (yNorm - 0.5) * 40; // Movimiento vertical (-10px a +10px)

    if (ref.current) {
      ref.current.style.background = `
        linear-gradient(
          ${angle}deg,
          rgba(0, 16, 33, 0.95) 0%,
          rgba(14, 26, 57, 0.95) 100%
        )`;
    }

    // Aplicar movimiento a los contenedores, las imágenes mantienen su rotación
    if (circleRef1.current) {
      circleRef1.current.style.transform = `translate(${moveX * 0.5}px, ${
        moveY * 0.5
      }px)`;
    }

    if (triangleRef.current) {
      triangleRef.current.style.transform = `translate(${moveX * -0.3}px, ${
        moveY * 0.7
      }px)`;
    }

    if (circleRef2.current) {
      circleRef2.current.style.transform = `translate(${moveX * 0.8}px, ${
        moveY * -0.4
      }px)`;
    }
  };

  // Mostrar pantalla de carga si está cargando
  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div
      onMouseMove={handleMouse}
      className={`app relative h-screen overflow-x-hidden ${showContent ? 'app-fade-in' : 'app-loading'}`}
    >
      <FloatingTriangle ref={triangleRef} />
      <FloatingCircle1 ref={circleRef1} />
      <FloatingCircle2 ref={circleRef2} />
      <div ref={ref} id="content-degrade" className={`relative h-screen ${showContent ? 'background-fade-in' : 'background-hidden'}`}>
        <div className="relative h-screen">
          <div className="flex flex-col lg:flex-row relative">
            <div className={`mx-auto max-[1366px]:w-full max-[1366px]:max-w-[400px] max-w-[500px] lg:sticky w-fit top-0 h-fit basis-1/3 ${showContent ? 'content-slide-in-left' : 'content-hidden'}`}>
              <Hero />
            </div>
            <div className={`w-full ${showContent ? 'content-slide-in-right' : 'content-hidden'}`}>
              <Proyect
                imgBack={code1}
                imgFront={code1}
                githubUrl="sdfsdf"
                projectUrl=""
                className="reveal"
              />
              <Proyect
                imgBack={code1}
                imgFront={code1}
                githubUrl="sdfsdf"
                projectUrl=""
                className="reveal"
              />
              <Contact />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
