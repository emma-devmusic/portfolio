import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { label: "Experiencias", targetId: "experiencias" },
  { label: "Proyectos", targetId: "proyectos" },
  { label: "Contacto", targetId: "contact" },
];

const MOBILE_NAV_QUERY = "(max-width: 1199px)";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileNav, setIsMobileNav] = useState(
    () => window.matchMedia(MOBILE_NAV_QUERY).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_QUERY);
    const onChange = () => setIsMobileNav(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const scrollRoot = document.getElementById("content-degrade");
    const sections = NAV_LINKS.map(({ targetId }) =>
      document.getElementById(targetId),
    ).filter((section): section is HTMLElement => Boolean(section));

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
    const topbar = document.querySelector(".topbar");
    const topbarOffset =
      topbar instanceof HTMLElement &&
      window.getComputedStyle(topbar).position === "fixed"
        ? topbar.offsetHeight + 12
        : 0;
    const targetTop =
      scrollRoot.scrollTop + targetRect.top - rootRect.top - topbarOffset;
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

  const topbar = (
    <header className={`topbar${isMobileNav ? " topbar--fixed" : ""}`}>
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

  // En mobile lo montamos en body para que `position: fixed` no quede
  // atrapado por transforms/filters de ancestros del Hero.
  if (isMobileNav) {
    return createPortal(topbar, document.body);
  }

  return topbar;
};
