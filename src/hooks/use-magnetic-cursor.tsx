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

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distanceSquared = distanceX * distanceX + distanceY * distanceY;
        const rangeSquared = range * range;

        if (distanceSquared < rangeSquared) {
          const distance = Math.sqrt(distanceSquared);
          const moveX = (distanceX / range) * strength * 20;
          const moveY = (distanceY / range) * strength * 20;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
          element.style.transition = 'transform 0.1s ease-out';
        } else {
          element.style.transform = 'translate(0px, 0px)';
          element.style.transition = 'transform 0.3s ease-out';
        }
      });
    };

    const handleMouseLeave = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      element.style.transform = 'translate(0px, 0px)';
      element.style.transition = 'transform 0.3s ease-out';
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, range]);

  return ref;
};
