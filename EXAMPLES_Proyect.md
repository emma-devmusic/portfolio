// Ejemplo de uso del componente Proyect refactorizado

import { Proyect, TechIcons } from '../components';

// Ejemplo 1: Usando valores por defecto
<Proyect 
  imgBack="/path/to/image1.jpg"
  imgFront="/path/to/image2.jpg"
/>

// Ejemplo 2: Proyecto personalizado completo
<Proyect 
  title="E-Commerce Platform"
  description="Una plataforma de comercio electrónico moderna y escalable construida con React y Node.js. Incluye carrito de compras, pasarela de pagos, panel de administración y sistema de inventario en tiempo real."
  imgBack="/path/to/ecommerce-back.jpg"
  imgFront="/path/to/ecommerce-front.jpg"
  techStack={[
    { name: "React", variant: "react", icon: <TechIcons.React /> },
    { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
    { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
    { name: "Tailwind", variant: "tailwind", icon: <TechIcons.Tailwind /> },
    { name: "Git", variant: "git", icon: <TechIcons.Git /> }
  ]}
  projectUrl="https://mi-ecommerce.com"
  githubUrl="https://github.com/usuario/ecommerce-project"
/>

// Ejemplo 3: Proyecto sin tech stack personalizado (usa el default)
<Proyect 
  title="Portfolio Personal"
  description="Mi portfolio personal donde muestro mis proyectos y habilidades como desarrollador frontend."
  imgBack="/path/to/portfolio-back.jpg"
  imgFront="/path/to/portfolio-front.jpg"
  projectUrl="https://mi-portfolio.com"
/>

// Ejemplo 4: Solo con código (sin demo live)
<Proyect 
  title="CLI Tool"
  description="Una herramienta de línea de comandos para automatizar tareas de desarrollo."
  imgBack="/path/to/cli-back.jpg"
  imgFront="/path/to/cli-front.jpg"
  techStack={[
    { name: "Node.js", variant: "node", icon: <TechIcons.Node /> },
    { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> }
  ]}
  githubUrl="https://github.com/usuario/cli-tool"
/>