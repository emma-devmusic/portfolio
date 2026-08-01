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

export const Loading = ({ onLoadingComplete, duration = 1400 }: LoadingProps) => {
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
      const elapsed = Math.max(
        0,
        Math.min((now - startedAt) / minimumDuration, 1),
      );
      const easedProgress = 1 - Math.pow(1 - elapsed, 3);
      const nextProgress = Math.floor(easedProgress * 92);

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
          reducedMotion ? 80 : 420,
        );
      }, reducedMotion ? 20 : 160);
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
      className={`loading-screen ${
        isExiting ? "loading-screen--exiting" : ""
      }`}
      role="status"
      aria-label="Preparando el portafolio"
    >
      <div className="loading-grid" aria-hidden="true" />
      <div className="loading-glow loading-glow--one" aria-hidden="true" />
      <div className="loading-glow loading-glow--two" aria-hidden="true" />

      <div className="loading-content">
        <p className="loading-eyebrow">Emmanuel · Portfolio</p>

        <div className="loading-logo" aria-hidden="true">
          <div className="logo-text">
            <span className="bracket">{"<"}</span>
            <span className="slash">/</span>
            <span className="bracket">{">"}</span>
          </div>
        </div>

        <p className="loading-copy">Preparando la experiencia</p>

        <div className="loading-progress">
          <div className="progress-meta">
            <span>Cargando</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            />
          </div>
        </div>
      </div>

      <div className="loading-corners" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  );
};
