import { MouseEvent, MutableRefObject, RefObject } from "react";

type Pointer = { x: number; y: number };

export const useInteractiveBackground = (
  contentRef: RefObject<HTMLElement | null>,
  circleRef1: RefObject<HTMLElement | null>,
  circleRef2: RefObject<HTMLElement | null>,
  trianglePointerRef: MutableRefObject<Pointer>,
) => {
  const handleMouse = (event: MouseEvent) => {
    const xNorm = event.clientX / window.innerWidth;
    const yNorm = event.clientY / window.innerHeight;
    const angle = (xNorm + (1 - yNorm)) * 45;
    const moveX = (xNorm - 0.5) * 40;
    const moveY = (yNorm - 0.5) * 40;

    if (contentRef.current) {
      contentRef.current.style.background = `
        linear-gradient(
          ${angle}deg,
          rgba(0, 16, 33, 0.95) 0%,
          rgba(14, 26, 57, 0.95) 100%
        )`;
    }

    if (circleRef1.current) {
      circleRef1.current.style.transform = `translate(${moveX * 0.5}px, ${
        moveY * 0.5
      }px)`;
    }

    trianglePointerRef.current = {
      x: moveX * -0.3,
      y: moveY * 0.7,
    };

    if (circleRef2.current) {
      circleRef2.current.style.transform = `translate(${moveX * 0.8}px, ${
        moveY * -0.4
      }px)`;
    }
  };

  return { handleMouse };
};
