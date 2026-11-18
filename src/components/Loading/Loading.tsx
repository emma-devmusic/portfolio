import { useEffect, useRef, useState } from "react";
import profileImg from "../../assets/img/emma-profile.png";

interface LoadingProps {
  onLoadingComplete: () => void;
  duration?: number;
}

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

export const Loading = ({ onLoadingComplete, duration = 1200 }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    let animationFrame = 0;
    let completionTimer = 0;
    let exitTimer = 0;
    let cancelled = false;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minimumDuration = reducedMotion ? Math.min(duration, 350) : duration;
    const startedAt = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = Math.min((now - startedAt) / minimumDuration, 1);
      const easedProgress = 1 - Math.pow(1 - elapsed, 3);
      const nextProgress = Math.floor(easedProgress * 90);

      setProgress((current) =>
        current === nextProgress ? current : nextProgress,
      );
      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const profileReady = preloadImage(profileImg);
    const minimumTime = new Promise<void>((resolve) => {
      completionTimer = window.setTimeout(resolve, minimumDuration);
    });

    Promise.all([pageReady, fontsReady, profileReady, minimumTime]).then(() => {
      if (cancelled || completedRef.current) {
        return;
      }

      completedRef.current = true;
      window.cancelAnimationFrame(animationFrame);
      setProgress(100);

      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        completionTimer = window.setTimeout(
          onLoadingComplete,
          reducedMotion ? 80 : 500,
        );
      }, reducedMotion ? 20 : 280);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onLoadingComplete, duration]);

  return (
    <div
      className={`loading-screen ${isExiting ? "loading-screen--exiting" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Cargando portafolio</span>

      <div className="loading-content" aria-hidden="true">
        <svg
          className="loading-mark"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="loading-mark__slash"
            d="M22 9 11 55"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="square"
          />
          <path
            className="loading-mark__chevron"
            d="m31 20 21 12-21 12"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinejoin="miter"
          />
        </svg>

        <div className="loading-track">
          <div
            className="loading-track__fill"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};
