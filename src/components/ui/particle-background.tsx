import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Different particle counts for different themes
      const particleCount = theme === 'light' 
        ? Math.floor((canvas.width * canvas.height) / 12000) // More particles in light theme
        : Math.floor((canvas.width * canvas.height) / 30000); // Fewer particles in dark theme

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.2 + 0.8,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        // Use theme-appropriate colors with much better visibility
        const particleColor = theme === 'light' ? '0, 0, 0' : '255, 255, 255';
        const adjustedOpacity = theme === 'light' 
          ? Math.min(particle.opacity * 3, 0.6) // Much more visible in light theme
          : particle.opacity * 0.7; // Less visible in dark theme
        ctx.fillStyle = `rgba(${particleColor}, ${adjustedOpacity})`;
        ctx.fill();
      });

      // Draw connections (more subtle)
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            // Use theme-appropriate colors for connections
            const connectionColor = theme === 'light' ? '0, 0, 0' : '255, 255, 255';
            const connectionOpacity = theme === 'light' 
              ? 0.15 * (1 - distance / 100) // Much more visible in light theme
              : 0.03 * (1 - distance / 100); // Less visible in dark theme
            ctx.strokeStyle = `rgba(${connectionColor}, ${connectionOpacity})`;
            ctx.lineWidth = theme === 'light' ? 0.6 : 0.3; // Thicker lines in light theme
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]); // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
