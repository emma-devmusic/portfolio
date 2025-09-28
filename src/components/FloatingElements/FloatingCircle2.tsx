import { forwardRef } from 'react';
import { AnimatedImage } from '../AnimatedImage';
import circle from '../../assets/img/parallax/circle.png';

export const FloatingCircle2 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedImage
      ref={ref}
      src={circle}
      alt="circulo flotante 2"
      width="20%"
      marginLeft="-20%"
      marginTop="10%"
      className="floating-circle-2"
    />
  );
});

FloatingCircle2.displayName = 'FloatingCircle2';