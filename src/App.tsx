import {
  Hero,
  Contact,
  Proyect,
  WelcomeVisitor,
  FloatingCircle1,
  FloatingTriangle,
  FloatingCircle2,
  Loading,
  TechIcons,
} from "./components";
import simpleBarDesktop from "./assets/img/projects/simplebar-desktop.png";
import simpleBarPhone from "./assets/img/projects/simplebar-phone.webp";
import reserviaDesktop from "./assets/img/projects/reservia-desktop.png";
import reserviaPhone from "./assets/img/projects/reservia-phone.png";
import notLocalsDesktop from "./assets/img/projects/notlocals-desktop.png";
import notLocalsPhone from "./assets/img/projects/notlocals-phone.png";
import feldicoDesktop from "./assets/img/projects/feldico-desktop.png";
import feldicoPhone from "./assets/img/projects/feldico-phone.png";
import madowDesktop from "./assets/img/projects/madow-desktop.png";
import madowPhone from "./assets/img/projects/madow-phone.png";
import padelCenterDesktop from "./assets/img/projects/padelcenter-desktop.png";
import padelCenterPhone from "./assets/img/projects/padelcenter-phone.png";
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
                    description="Plataforma SaaS multitenant de gestión gastronómica que unifica POS, menú QR, pedidos, caja, mesas, productos y sucursales. Arquitectura con BFF y microservicios independientes en una experiencia web responsive."
                    imgBack={simpleBarDesktop}
                    imgFront={simpleBarPhone}
                    imageAlt="Sitio y panel de gestión gastronómica de SimpleBar"
                    techStack={[
                      { name: "React", variant: "react", icon: <TechIcons.React /> },
                      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
                      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
                      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
                      { name: "NestJS", variant: "nestjs", icon: <TechIcons.NestJS /> },
                      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
                      { name: "RabbitMQ", variant: "rabbitmq", icon: <TechIcons.RabbitMQ /> },
                    ]}
                    projectUrl="https://simplebar.net/"
                    className="reveal"
                  />
                  <Proyect
                    title="ReservIA"
                    description="Asistente con inteligencia artificial para gestionar reservas por conversación, consultar disponibilidad en tiempo real y operar el calendario del negocio mediante texto o voz."
                    imgBack={reserviaDesktop}
                    imgFront={reserviaPhone}
                    imageAlt="Asistente conversacional para gestión de reservas ReservIA"
                    techStack={[
                      { name: "React", variant: "react", icon: <TechIcons.React /> },
                      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
                      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
                      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
                      { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
                      { name: "Express", variant: "express", icon: <TechIcons.Express /> },
                      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
                      { name: "Firebase", variant: "firebase", icon: <TechIcons.Firebase /> },
                    ]}
                    projectUrl="https://reservaicclistg.ding.com.ar/"
                    className="reveal"
                  />
                  <Proyect
                    title="Not Locals"
                    description="Plataforma comunitaria con identidad visual retro y experiencia inmersiva. Landing con collage fotográfico, navegación bilingüe y registro de usuarios, construida full-stack con React, Redux, NestJS y PostgreSQL."
                    imgBack={notLocalsDesktop}
                    imgFront={notLocalsPhone}
                    imageAlt="Landing page de la plataforma comunitaria Not Locals"
                    techStack={[
                      { name: "React", variant: "react", icon: <TechIcons.React /> },
                      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
                      { name: "Redux", variant: "redux", icon: <TechIcons.Redux /> },
                      { name: "NestJS", variant: "nestjs", icon: <TechIcons.NestJS /> },
                      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
                    ]}
                    projectUrl="https://notlocals.com/"
                    className="reveal"
                  />
                  <Proyect
                    title="Feldico"
                    description="Marketplace agrícola para conectar productores con contratistas y maquinaria confiable. Búsqueda por servicio, localidad y fechas, con publicación y solicitud de servicios en una experiencia web responsive."
                    imgBack={feldicoDesktop}
                    imgFront={feldicoPhone}
                    imageAlt="Marketplace agrícola Feldico para contratistas y maquinaria"
                    techStack={[
                      { name: "Ember.js", variant: "ember", icon: <TechIcons.Ember /> },
                      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
                      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
                      { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
                      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
                      { name: "Kurier", variant: "kurier", icon: <TechIcons.Kurier /> },
                      { name: "Knex", variant: "knex", icon: <TechIcons.Knex /> },
                    ]}
                    projectUrl="https://feldico.com/"
                    className="reveal"
                  />
                  <Proyect
                    title="Madow.tech"
                    description="Landing page corporativa para una empresa desarrolladora de software. Presenta servicios, tecnologías y equipo con una estética espacial y minimalista, orientada a generar contacto comercial."
                    imgBack={madowDesktop}
                    imgFront={madowPhone}
                    imageAlt="Landing page corporativa de la empresa de software Madow.tech"
                    techStack={[
                      { name: "Ember.js", variant: "ember", icon: <TechIcons.Ember /> },
                      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
                      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
                      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
                    ]}
                    projectUrl="https://madow.tech/"
                    className="reveal"
                  />
                  <Proyect
                    title="Pádel Center"
                    description="Tienda online de pádel en Argentina construida con WordPress. Integración con Unicobros y Tarjeta Naranja para pagos, y sincronización de stock en tiempo real con Dux Software."
                    imgBack={padelCenterDesktop}
                    imgFront={padelCenterPhone}
                    imageAlt="Tienda online de pádel Pádel Center ARG"
                    techStack={[
                      { name: "WordPress", variant: "wordpress", icon: <TechIcons.WordPress /> },
                      { name: "Unicobros", variant: "default" },
                      { name: "Tarjeta Naranja", variant: "default" },
                      { name: "Dux Software", variant: "default" },
                    ]}
                    projectUrl="https://padelcenter.store/"
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
