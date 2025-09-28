import { forwardRef } from 'react';
import { AnimatedImage } from '../AnimatedImage';
import triangle from '../../assets/img/parallax/triangle.png';

export const FloatingTriangle = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <AnimatedImage
      ref={ref}
      src={triangle}
      alt="triángulo flotante"
      width="40%"
      marginLeft="75%"
      marginTop="0%"
      className="floating-triangle"
    />
  );
});

FloatingTriangle.displayName = 'FloatingTriangle';