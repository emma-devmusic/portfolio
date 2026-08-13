import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface SectionAdvanceButtonProps {
  sectionId: string;
  targetId: string;
  label: string;
  delayMs?: number;
  align?: "start" | "center";
}

const MOBILE_QUERY = "(max-width: 1199px)";
const DEFAULT_DELAY_MS = 3000;

const getLayoutTop = (element: HTMLElement, scrollRoot: HTMLElement) => {
  let top = 0;
  let current: HTMLElement | null = element;

  while (current && current !== scrollRoot) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }

  return top;
};

export const SectionAdvanceButton = ({
  sectionId,
  targetId,
  label,
  delayMs = DEFAULT_DELAY_MS,
  align = "start",
}: SectionAdvanceButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollRoot = document.getElementById("content-degrade");
    const section = document.getElementById(sectionId);
    const media = window.matchMedia(MOBILE_QUERY);

    if (!scrollRoot || !section) {
      return;
    }

    let revealTimer: number | undefined;
    let animationFrame: number | undefined;

    const clearRevealTimer = () => {
      if (revealTimer !== undefined) {
        window.clearTimeout(revealTimer);
        revealTimer = undefined;
      }
    };

    const sectionIsCurrent = () => {
      const rootRect = scrollRoot.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const rootCenter = rootRect.top + rootRect.height / 4;

      return sectionRect.top <= rootCenter && sectionRect.bottom >= rootCenter;
    };

    const scheduleReveal = () => {
      clearRevealTimer();
      setIsVisible(false);

      if (!media.matches || !sectionIsCurrent()) {
        return;
      }

      revealTimer = window.setTimeout(() => {
        if (media.matches && sectionIsCurrent()) {
          setIsVisible(true);
        }
      }, delayMs);
    };

    const handleScroll = () => {
      clearRevealTimer();
      setIsVisible(false);

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(scheduleReveal);
    };

    scheduleReveal();
    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleReveal);
    media.addEventListener("change", scheduleReveal);

    return () => {
      clearRevealTimer();
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
      scrollRoot.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleReveal);
      media.removeEventListener("change", scheduleReveal);
    };
  }, [delayMs, sectionId]);

  const navigateToNextSection = () => {
    const scrollRoot = document.getElementById("content-degrade");
    const target = document.getElementById(targetId);

    if (!scrollRoot || !target) {
      return;
    }

    setIsVisible(false);

    const topbar = document.querySelector(".topbar");
    const topbarOffset =
      topbar instanceof HTMLElement &&
      window.getComputedStyle(topbar).position === "fixed"
        ? topbar.offsetHeight
        : 0;
    const targetTop = getLayoutTop(target, scrollRoot);
    const visibleHeight = scrollRoot.clientHeight - topbarOffset;
    const visibleCenter = topbarOffset + visibleHeight / 2;
    const centeredTargetTop =
      targetTop + target.offsetHeight / 2 - visibleCenter;
    const destinationTop =
      align === "center" ? centeredTargetTop : targetTop - topbarOffset;
    const maxScroll = scrollRoot.scrollHeight - scrollRoot.clientHeight;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    scrollRoot.scrollTo({
      top: Math.min(Math.max(destinationTop, 0), maxScroll),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return createPortal(
    <button
      ref={buttonRef}
      type="button"
      className={`section-advance${isVisible ? " section-advance--visible" : ""}`}
      aria-label={label}
      aria-controls={targetId}
      onClick={navigateToNextSection}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m6.75 9 5.25 5.25L17.25 9" />
      </svg>
    </button>,
    document.body,
  );
};
