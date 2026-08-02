import { ReactNode } from "react";

interface ExperienceTimelineProps {
  eyebrow: string;
  title: string;
  description?: string;
  headingId?: string;
  projectsTitle?: string;
  featured?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const ExperienceTimeline = ({
  eyebrow,
  title,
  description,
  headingId = "experience-timeline",
  projectsTitle,
  featured,
  children,
  className = "",
}: ExperienceTimelineProps) => (
  <section
    className={`experience-timeline ${className}`.trim()}
    aria-labelledby={headingId}
  >
    <header className="experience-timeline__header -ml-2!">
      <span className="experience-timeline__eyebrow mb-2! inline-block ml-1">{eyebrow}</span>
      <h2 id={headingId}>{title}</h2>
      {description ? <p className="ml-1!">{description}</p> : null}
    </header>

    <div className="experience-timeline__track">
      {featured ? (
        <div className="experience-timeline__featured">{featured}</div>
      ) : null}

      <div className="experience-timeline__items">
        {projectsTitle ? (
          <p className="experience-timeline__items-title">
            {projectsTitle}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  </section>
);

interface ExperienceItemProps {
  children: ReactNode;
  variant?: "featured" | "nested";
  className?: string;
}

export const ExperienceItem = ({
  children,
  variant = "nested",
  className = "",
}: ExperienceItemProps) => (
  <div
    className={`experience-item experience-item--${variant} ${className}`.trim()}
  >
    {children}
  </div>
);
