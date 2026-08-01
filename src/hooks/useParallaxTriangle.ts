import { MutableRefObject, RefObject, useEffect } from "react";
import { prefersReducedMotion } from "./usePrefersReducedMotion";

type Pointer = { x: number; y: number };

export const useParallaxTriangle = (
  enabled: boolean,
  scrollContainerRef: RefObject<HTMLElement | null>,
  triangleRef: RefObject<HTMLElement | null>,
  trianglePointerRef: MutableRefObject<Pointer>,
) => {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    let animationFrame = 0;
    let targetScroll = scrollContainer.scrollTop;
    let currentScroll = targetScroll;
    let currentPointerX = trianglePointerRef.current.x;
    let currentPointerY = trianglePointerRef.current.y;

    const handleScroll = () => {
      targetScroll = scrollContainer.scrollTop;
    };

    const animateTriangle = () => {
      currentScroll += (targetScroll - currentScroll) * 0.075;
      currentPointerX +=
        (trianglePointerRef.current.x - currentPointerX) * 0.09;
      currentPointerY +=
        (trianglePointerRef.current.y - currentPointerY) * 0.09;

      if (triangleRef.current) {
        const scrollX = Math.sin(currentScroll * 0.0014) * 52;
        const scrollY = currentScroll * 0.1;
        const rotation = currentScroll * 0.009;

        triangleRef.current.style.transform = `translate3d(${
          currentPointerX + scrollX
        }px, ${currentPointerY + scrollY}px, 0) rotate(${rotation}deg)`;
      }

      animationFrame = window.requestAnimationFrame(animateTriangle);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    animationFrame = window.requestAnimationFrame(animateTriangle);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [enabled, scrollContainerRef, triangleRef, trianglePointerRef]);
};
