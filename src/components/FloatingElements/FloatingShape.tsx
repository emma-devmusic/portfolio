import { forwardRef, ReactNode } from "react";

interface FloatingShapeProps {
  width?: string;
  marginLeft?: string;
  marginTop?: string;
  className?: string;
  children: ReactNode;
}

export const FloatingShape = forwardRef<HTMLDivElement, FloatingShapeProps>(
  (
    {
      width = "30%",
      marginLeft = "0%",
      marginTop = "0%",
      className = "",
      children,
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={`img-container-interactive absolute ${className}`.trim()}
      style={{
        ["--shape-width" as string]: width,
        ["--shape-margin-left" as string]: marginLeft,
        ["--shape-margin-top" as string]: marginTop,
      }}
    >
      <div className="floating-shape-rotate img-rotate-interactive">
        {children}
      </div>
    </div>
  ),
);

FloatingShape.displayName = "FloatingShape";
