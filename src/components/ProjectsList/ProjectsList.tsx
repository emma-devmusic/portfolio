import { projects } from "../../data/projects";
import { Proyect } from "../Proyect/Proyect";

export const ProjectsList = () => (
  <div className="space-y-8">
    {projects.map((project) => (
      <Proyect
        key={project.title}
        title={project.title}
        description={project.description}
        imgBack={project.imgBack}
        imgFront={project.imgFront}
        imageAlt={project.imageAlt}
        techStack={project.techStack}
        projectUrl={project.projectUrl}
        className="reveal"
      />
    ))}
  </div>
);
