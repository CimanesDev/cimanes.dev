import { useEffect, useRef } from 'react';

interface MagneticCursorOptions {
  strength?: number;
  range?: number;
}

export const useMagneticCursor = (options: MagneticCursorOptions = {}) => {
  const { strength = 0.3, range = 100 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < range) {
        const moveX = (distanceX / range) * strength * 20;
        const moveY = (distanceY / range) * strength * 20;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        element.style.transition = 'transform 0.1s ease-out';
      } else {
        element.style.transform = 'translate(0px, 0px)';
        element.style.transition = 'transform 0.3s ease-out';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
      element.style.transition = 'transform 0.3s ease-out';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, range]);

  return ref;
};
