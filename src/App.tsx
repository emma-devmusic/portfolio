import {
  Hero,
  Contact,
  Proyect,
  WelcomeVisitor,
  FloatingCircle1,
  FloatingTriangle,
  FloatingCircle2,
  Loading,
} from "./components";
import simpleBarDesktop from "./assets/img/projects/simplebar-desktop.png";
import simpleBarPhone from "./assets/img/projects/simplebar-phone.webp";
import reserviaDesktop from "./assets/img/projects/reservia-desktop.png";
import reserviaPhone from "./assets/img/projects/reservia-phone.png";
import { MouseEvent, useEffect, useRef, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const trianglePointerRef = useRef({ x: 0, y: 0 });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  useEffect(() => {
    if (!showContent) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const scrollContainer = ref.current;

    if (!scrollContainer) {
      return;
    }

    let animationFrame = 0;
    let targetScroll = scrollContainer.scrollTop;
    let currentScroll = targetScroll;
    let currentPointerX = trianglePointerRef.current.x;
    let currentPointerY = trianglePointerRef.current.y;

    const handleScroll = () => {
      targetScroll = scrollContainer.scrollTop;
    };

    const animateTriangle = () => {
      currentScroll += (targetScroll - currentScroll) * 0.075;
      currentPointerX +=
        (trianglePointerRef.current.x - currentPointerX) * 0.09;
      currentPointerY +=
        (trianglePointerRef.current.y - currentPointerY) * 0.09;

      if (triangleRef.current) {
        const scrollX = Math.sin(currentScroll * 0.0014) * 52;
        const scrollY = currentScroll * 0.1;
        const rotation = currentScroll * 0.009;

        triangleRef.current.style.transform = `translate3d(${
          currentPointerX + scrollX
        }px, ${currentPointerY + scrollY}px, 0) rotate(${rotation}deg)`;
      }

      animationFrame = window.requestAnimationFrame(animateTriangle);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    animationFrame = window.requestAnimationFrame(animateTriangle);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [showContent]);

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

    trianglePointerRef.current = {
      x: moveX * -0.3,
      y: moveY * 0.7,
    };

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
      className={`app relative h-screen overflow-hidden ${showContent ? "app-fade-in" : "app-loading"}`}
    >
      <FloatingTriangle ref={triangleRef} />
      <FloatingCircle1 ref={circleRef1} />
      <FloatingCircle2 ref={circleRef2} />
      <div
        ref={ref}
        id="content-degrade"
        className={`relative h-screen ${showContent ? "background-fade-in" : "background-hidden"}`}
      >
        <div className="relative h-screen">
          <div className="flex max-[1199px]:flex-col relative">
            <div
              className={`mx-auto max-[1366px]:w-full max-[1366px]:max-w-100 max-[1199px]:max-h-125 max-w-125 min-[1200px]:sticky w-fit top-0 h-fit basis-1/3 ${showContent ? "" : "content-hidden"}`}
            >
              <Hero />
            </div>
            <div
              className={`max-w-5xl mx-auto w-full ${showContent ? "content-slide-in-right" : "content-hidden"}`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <WelcomeVisitor className="reveal" />
                <div className="space-y-8">
                  <Proyect
                    title="SimpleBar"
                    description="Plataforma SaaS de gestión gastronómica que unifica POS, menú QR, pedidos, caja, mesas, productos y sucursales en una experiencia web responsive."
                    imgBack={simpleBarDesktop}
                    imgFront={simpleBarPhone}
                    imageAlt="Sitio y panel de gestión gastronómica de SimpleBar"
                    projectUrl="https://simplebar.net/"
                    className="reveal"
                  />
                  <Proyect
                    title="ReservIA"
                    description="Asistente con inteligencia artificial para gestionar reservas por conversación, consultar disponibilidad en tiempo real y operar el calendario del negocio mediante texto o voz."
                    imgBack={reserviaDesktop}
                    imgFront={reserviaPhone}
                    imageAlt="Asistente conversacional para gestión de reservas ReservIA"
                    projectUrl="https://reservaicclistg.ding.com.ar/"
                    className="reveal"
                  />
                </div>
                <Contact />
                {/* <Newsletter /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
