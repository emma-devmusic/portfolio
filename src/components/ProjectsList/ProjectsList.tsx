import { projects } from "../../data/projects";
import {
  ExperienceItem,
  ExperienceTimeline,
} from "../ExperienceTimeline/ExperienceTimeline";
import { Proyect } from "../Proyect/Proyect";

const ProjectCard = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  const project = projects.find((item) => item.title === title);

  if (!project) {
    return null;
  }

  return (
    <Proyect
      title={project.title}
      description={project.description}
      imgBack={project.imgBack}
      imgFront={project.imgFront}
      imageAlt={project.imageAlt}
      techStack={project.techStack}
      projectUrl={project.projectUrl}
      className={className}
    />
  );
};

export const ProjectsList = () => (
  <div className="projects-list">
    <section id="experiencias" aria-label="Experiencias profesionales">
      <ExperienceTimeline
        eyebrow="Experiencia profesional"
        title="Madow Tech"
        description="Casi 2 años creando productos digitales."
        headingId="madow-experience"
        featured={
          <ExperienceItem variant="featured">
            <ProjectCard title="Madow.tech" />
          </ExperienceItem>
        }
      >
        <ExperienceItem>
          <ProjectCard title="Feldico" />
        </ExperienceItem>
        <ExperienceItem>
          <ProjectCard title="Not Locals" />
        </ExperienceItem>
      </ExperienceTimeline>

      <ExperienceTimeline
        eyebrow="Experiencia profesional"
        title="Ding"
        description="Proyectos desarrollados para clientes a través de mi emprendimiento."
        headingId="ding-experience"
      >
        <ExperienceItem>
          <ProjectCard title="SiHogar" />
        </ExperienceItem>
        <ExperienceItem>
          <ProjectCard title="Pádel Center" />
        </ExperienceItem>
        <ExperienceItem>
          <ProjectCard title="Clínica Giuliani" />
        </ExperienceItem>
      </ExperienceTimeline>
    </section>

    <section id="proyectos" aria-label="Proyectos personales">
      <ExperienceTimeline
        eyebrow="Proyectos personales"
        title="Mis Proyectos"
        description="Mi emprendimiento de desarrollo de software y soluciones digitales."
        headingId="ding-projects"
        featured={
          <ExperienceItem variant="featured">
            <ProjectCard title="Ding" />
          </ExperienceItem>
        }
      >
        <ExperienceItem>
          <ProjectCard title="SimpleBar" />
        </ExperienceItem>
        <ExperienceItem>
          <ProjectCard title="ReservIA" />
        </ExperienceItem>
      </ExperienceTimeline>
    </section>
  </div>
);
