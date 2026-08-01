import { TechIcons } from "../components/Badge";
import type { TechStack } from "../components/Proyect/Proyect";
import simpleBarDesktop from "../assets/img/projects/simplebar-desktop.png";
import simpleBarPhone from "../assets/img/projects/simplebar-phone.webp";
import reserviaDesktop from "../assets/img/projects/reservia-desktop.png";
import reserviaPhone from "../assets/img/projects/reservia-phone.png";
import notLocalsDesktop from "../assets/img/projects/notlocals-desktop.png";
import notLocalsPhone from "../assets/img/projects/notlocals-phone.png";
import feldicoDesktop from "../assets/img/projects/feldico-desktop.png";
import feldicoPhone from "../assets/img/projects/feldico-phone.png";
import madowDesktop from "../assets/img/projects/madow-desktop.png";
import madowPhone from "../assets/img/projects/madow-phone.png";
import padelCenterDesktop from "../assets/img/projects/padelcenter-desktop.png";
import padelCenterPhone from "../assets/img/projects/padelcenter-phone.png";

export interface ProjectItem {
  title: string;
  description: string;
  imgBack: string;
  imgFront: string;
  imageAlt: string;
  techStack: TechStack[];
  projectUrl: string;
}

export const projects: ProjectItem[] = [
  {
    title: "SimpleBar",
    description:
      "Plataforma SaaS multitenant de gestión gastronómica que unifica POS, menú QR, pedidos, caja, mesas, productos y sucursales. Arquitectura con BFF y microservicios independientes en una experiencia web responsive.",
    imgBack: simpleBarDesktop,
    imgFront: simpleBarPhone,
    imageAlt: "Sitio y panel de gestión gastronómica de SimpleBar",
    techStack: [
      { name: "React", variant: "react", icon: <TechIcons.React /> },
      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
      { name: "NestJS", variant: "nestjs", icon: <TechIcons.NestJS /> },
      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
      { name: "RabbitMQ", variant: "rabbitmq", icon: <TechIcons.RabbitMQ /> },
    ],
    projectUrl: "https://simplebar.net/",
  },
  {
    title: "ReservIA",
    description:
      "Asistente con inteligencia artificial para gestionar reservas por conversación, consultar disponibilidad en tiempo real y operar el calendario del negocio mediante texto o voz.",
    imgBack: reserviaDesktop,
    imgFront: reserviaPhone,
    imageAlt: "Asistente conversacional para gestión de reservas ReservIA",
    techStack: [
      { name: "React", variant: "react", icon: <TechIcons.React /> },
      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
      { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
      { name: "Express", variant: "express", icon: <TechIcons.Express /> },
      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
      { name: "Firebase", variant: "firebase", icon: <TechIcons.Firebase /> },
    ],
    projectUrl: "https://reservaicclistg.ding.com.ar/",
  },
  {
    title: "Not Locals",
    description:
      "Plataforma comunitaria con identidad visual retro y experiencia inmersiva. Landing con collage fotográfico, navegación bilingüe y registro de usuarios, construida full-stack con React, Redux, NestJS y PostgreSQL.",
    imgBack: notLocalsDesktop,
    imgFront: notLocalsPhone,
    imageAlt: "Landing page de la plataforma comunitaria Not Locals",
    techStack: [
      { name: "React", variant: "react", icon: <TechIcons.React /> },
      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
      { name: "Redux", variant: "redux", icon: <TechIcons.Redux /> },
      { name: "NestJS", variant: "nestjs", icon: <TechIcons.NestJS /> },
      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
    ],
    projectUrl: "https://notlocals.com/",
  },
  {
    title: "Feldico",
    description:
      "Marketplace agrícola para conectar productores con contratistas y maquinaria confiable. Búsqueda por servicio, localidad y fechas, con publicación y solicitud de servicios en una experiencia web responsive.",
    imgBack: feldicoDesktop,
    imgFront: feldicoPhone,
    imageAlt: "Marketplace agrícola Feldico para contratistas y maquinaria",
    techStack: [
      { name: "Ember.js", variant: "ember", icon: <TechIcons.Ember /> },
      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
      { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
      { name: "PostgreSQL", variant: "postgres", icon: <TechIcons.PostgreSQL /> },
      { name: "Kurier", variant: "kurier", icon: <TechIcons.Kurier /> },
      { name: "Knex", variant: "knex", icon: <TechIcons.Knex /> },
    ],
    projectUrl: "https://feldico.com/",
  },
  {
    title: "Madow.tech",
    description:
      "Landing page corporativa para una empresa desarrolladora de software. Presenta servicios, tecnologías y equipo con una estética espacial y minimalista, orientada a generar contacto comercial.",
    imgBack: madowDesktop,
    imgFront: madowPhone,
    imageAlt: "Landing page corporativa de la empresa de software Madow.tech",
    techStack: [
      { name: "Ember.js", variant: "ember", icon: <TechIcons.Ember /> },
      { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
      { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
      { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
    ],
    projectUrl: "https://madow.tech/",
  },
  {
    title: "Pádel Center",
    description:
      "Tienda online de pádel en Argentina construida con WordPress. Integración con Unicobros y Tarjeta Naranja para pagos, y sincronización de stock en tiempo real con Dux Software.",
    imgBack: padelCenterDesktop,
    imgFront: padelCenterPhone,
    imageAlt: "Tienda online de pádel Pádel Center ARG",
    techStack: [
      { name: "WordPress", variant: "wordpress", icon: <TechIcons.WordPress /> },
      { name: "Unicobros", variant: "default" },
      { name: "Tarjeta Naranja", variant: "default" },
      { name: "Dux Software", variant: "default" },
    ],
    projectUrl: "https://padelcenter.store/",
  },
];
