import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Experiencias", targetId: "experiencias" },
  { label: "Proyectos", targetId: "proyectos" },
  { label: "Contacto", targetId: "contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const scrollRoot = document.getElementById("content-degrade");
    const sections = NAV_LINKS
      .map(({ targetId }) => document.getElementById(targetId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!scrollRoot || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: scrollRoot,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigateTo = (targetId: string) => {
    const scrollRoot = document.getElementById("content-degrade");
    const target = document.getElementById(targetId);

    if (!scrollRoot || !target) {
      return;
    }

    const rootRect = scrollRoot.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetTop = scrollRoot.scrollTop + targetRect.top - rootRect.top;
    const maxScroll = scrollRoot.scrollHeight - scrollRoot.clientHeight;

    // La app tiene su propio contenedor de scroll. Evitamos scrollIntoView
    // porque también puede desplazar el documento y desarmar el layout fijo.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollRoot.scrollTo({
      top: Math.min(Math.max(targetTop, 0), maxScroll),
      behavior: "smooth",
    });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <header className="topbar">
      <nav className="topbar__nav" aria-label="Navegación principal">
        <ul>
          {NAV_LINKS.map(({ label, targetId }) => (
            <li key={targetId}>
              <a
                href={`#${targetId}`}
                className={activeSection === targetId ? "is-active" : ""}
                aria-current={
                  activeSection === targetId ? "location" : undefined
                }
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(targetId);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
