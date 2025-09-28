import { forwardRef } from 'react';
import { AnimatedImage } from '../AnimatedImage';
import circle from '../../assets/img/parallax/circle.png';

export const FloatingCircle1 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedImage
      ref={ref}
      src={circle}
      alt="circulo flotante 1"
      width="30%"
      marginLeft="40%"
      marginTop="-10%"
      className="floating-circle-1"
    />
  );
});

FloatingCircle1.displayName = 'FloatingCircle1';