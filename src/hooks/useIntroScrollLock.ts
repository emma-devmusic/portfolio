import { RefObject, useEffect, useState } from "react";
import { prefersReducedMotion } from "./usePrefersReducedMotion";

const SCROLL_BLOCK_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
  "Spacebar",
];

/** Coincide con el startDelay del saludo en WelcomeVisitor */
export const INTRO_SCROLL_LOCK_MS = 3000;

export const useIntroScrollLock = (
  enabled: boolean,
  scrollContainerRef: RefObject<HTMLElement | null>,
  delayMs = INTRO_SCROLL_LOCK_MS,
) => {
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (prefersReducedMotion()) {
      setIsScrollLocked(false);
      return;
    }

    setIsScrollLocked(true);
    const unlockTimer = window.setTimeout(() => {
      setIsScrollLocked(false);
    }, delayMs);

    return () => {
      window.clearTimeout(unlockTimer);
    };
  }, [enabled, delayMs]);

  useEffect(() => {
    if (!enabled || !isScrollLocked) {
      document.documentElement.classList.remove("intro-scroll-locked");
      document.body.classList.remove("intro-scroll-locked");
      return;
    }

    const scrollContainer = scrollContainerRef.current;

    document.documentElement.classList.add("intro-scroll-locked");
    document.body.classList.add("intro-scroll-locked");

    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
    window.scrollTo(0, 0);

    const preventScroll = (event: Event) => {
      event.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    };

    const preventKeys = (event: KeyboardEvent) => {
      if (SCROLL_BLOCK_KEYS.includes(event.key)) {
        event.preventDefault();
      }
    };

    const wheelOptions: AddEventListenerOptions = {
      passive: false,
      capture: true,
    };

    window.addEventListener("wheel", preventScroll, wheelOptions);
    window.addEventListener("touchmove", preventScroll, wheelOptions);
    document.addEventListener("keydown", preventKeys, true);

    return () => {
      document.documentElement.classList.remove("intro-scroll-locked");
      document.body.classList.remove("intro-scroll-locked");
      window.removeEventListener("wheel", preventScroll, wheelOptions);
      window.removeEventListener("touchmove", preventScroll, wheelOptions);
      document.removeEventListener("keydown", preventKeys, true);
    };
  }, [enabled, isScrollLocked, scrollContainerRef]);

  return isScrollLocked;
};
