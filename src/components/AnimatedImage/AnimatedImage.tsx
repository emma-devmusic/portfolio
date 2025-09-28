import { forwardRef } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: string;
  marginLeft?: string;
  marginTop?: string;
  className?: string;
}

export const AnimatedImage = forwardRef<HTMLDivElement, AnimatedImageProps>(
  ({ src, alt, width = "30%", marginLeft = "0%", marginTop = "0%", className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`img-container-interactive absolute ${className}`}
        style={{
          marginLeft,
          marginTop,
          width,
        }}
      >
        <img
          className="img-rotate-interactive absolute"
          src={src}
          alt={alt}
          style={{
            display: "block",
            width: "100%",
          }}
        />
      </div>
    );
  }
);

AnimatedImage.displayName = 'AnimatedImage';