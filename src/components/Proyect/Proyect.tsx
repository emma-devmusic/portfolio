import { useIntersection } from "../../helpers/helpers";
import { Badge, TechIcons, BadgeVariant } from "../Badge";
import { ReactNode } from "react";
import { ProjectLinks } from "../ProjectLinks/ProjectLinks";

export interface TechStack {
  name: string;
  variant: BadgeVariant;
  icon?: ReactNode;
}

interface Props {
  title?: string;
  description?: string;
  imgBack: string;
  imgFront: string;
  imageAlt?: string;
  techStack?: TechStack[];
  projectUrl?: string;
  githubUrl?: string;
  className?: string;
}

const defaultTechStack: TechStack[] = [
  { name: "React", variant: "react", icon: <TechIcons.React /> },
  { name: "TypeScript", variant: "typescript", icon: <TechIcons.TypeScript /> },
  { name: "SCSS", variant: "sass", icon: <TechIcons.Sass /> },
  { name: "Vite", variant: "vite", icon: <TechIcons.Vite /> },
];

export const Proyect = ({
  title = "Mi Proyecto Increíble",
  description = "Una aplicación web moderna construida con las últimas tecnologías para ofrecer la mejor experiencia de usuario. Diseño responsive, optimización de rendimiento y código limpio.",
  imgBack,
  imgFront,
  imageAlt = "Vista previa del proyecto",
  techStack = defaultTechStack,
  projectUrl,
  githubUrl,
  className = ''
}: Props) => {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="project" className={className}>
      <div
        className={`about-box ${
          isVisible && "animate-about"
        } max-w-[1200px] mx-auto`}
      >
        <div className="about-text max-w-lg">
          <div className={`about-line`} ref={ref}>
            <h2 className="text-2xl mr-5 relative text-nowrap">{title}</h2>
            <div className="icon-blur -top-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"
                />
              </svg>
              <span />
            </div>
            <hr className="min-[1366px]:top-1 relative"/>
          </div>
          <p className="text-md">{description}</p>
          {/* Tech Stack Badges */}
          {techStack && techStack.length > 0 && (
            <div className="badge-group">
              {techStack.map((tech, index) => (
                <Badge
                  key={`${tech.name}-${index}`}
                  variant={tech.variant}
                  icon={tech.icon}
                  size="sm"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          )}

          <ProjectLinks projectUrl={projectUrl} githubUrl={githubUrl} />
        </div>
        <div className="about-image">
          <img
            src={imgBack}
            alt={imageAlt}
            decoding="async"
          />
          <img
            src={imgFront}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
