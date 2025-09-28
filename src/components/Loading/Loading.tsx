import { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
  duration?: number;
}

export const Loading = ({ onLoadingComplete, duration = 3000 }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Pequeña pausa antes de completar
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete, duration]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo animado */}
        <div className="loading-logo">
          <div className="logo-text">
            <span className="bracket">{'<'}</span>
            <span className="slash">/</span>
            <span className="bracket">{'>'}</span>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Puntos animados */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="loading-decorations">
        <div className="decoration-circle"></div>
        <div className="decoration-line"></div>
      </div>
    </div>
  );
};