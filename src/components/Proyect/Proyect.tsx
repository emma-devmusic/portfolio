import { useIntersection } from "../../helpers/helpers";
import { Badge, TechIcons, BadgeVariant } from "../Badge";
import { ReactNode } from "react";

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
        } px-4 max-w-[1200px] mx-auto`}
      >
        <div className="about-text max-w-lg">
          <div className={`about-line`} ref={ref}>
            <h2 className="text-2xl mr-5 top-0.5 relative text-nowrap">{title}</h2>
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
            <hr />
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

          {/* Project Links */}
          {(projectUrl || githubUrl) && (
            <div className="project-links">
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-live"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                    />
                  </svg>
                  Ver Proyecto
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  Ver Código
                </a>
              )}
            </div>
          )}
        </div>
        <div className="about-image">
          <img src={imgBack} alt="image coding" />
          <img src={imgFront} alt="image coding" />
        </div>
      </div>
    </section>
  );
};
