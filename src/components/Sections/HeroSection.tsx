import { useState, useEffect } from 'react';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { ParticleBackground } from '@/components/ui/particle-background';

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const navbarHeight = 80; // Height of the navbar + some padding
      const elementPosition = nextSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Wait for the fade-in animation to complete (0.6s from CSS)
    const animationTimer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 700); // Slightly longer than the 0.6s animation

    // Then set up the intersection observer
    const observerTimer = setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHomeVisible(entry.isIntersecting);
        },
        { 
          threshold: 0.5,
          rootMargin: '0px 0px 0px 0px'
        }
      );

      observer.observe(homeSection);

      return () => {
        observer.unobserve(homeSection);
      };
    }, 800); // Wait for animation + a bit more

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(observerTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-0 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="animate-fade-in relative flex items-center justify-center min-h-[80vh] md:h-full">
          {/* Container for the name and positioning elements */}
          <div className="relative">
            {/* Hi, I'm positioned top left of name */}
            <p className="absolute -top-8 md:-top-12 left-0 text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Hi, I'm
            </p>
            
            {/* Josh Cimanes centered with typing animation */}
            <h1 className="hero-text-simple text-center text-5xl md:text-7xl lg:text-8xl">
              <TypingAnimation 
                text="Josh Cimanes" 
                speed={150} 
                delay={2000}
                className="inline-block"
                onComplete={() => {
                  setShowSubtitle(true);
                  // Show arrow after subtitle appears with a slight delay
                  setTimeout(() => setShowArrow(true), 500);
                }}
              />
            </h1>
            
            {/* Frontend Developer positioned bottom right of name - only shows after typing completes */}
            <p className={`absolute -bottom-8 md:-bottom-12 -right-2 md:-right-8 text-xs md:text-sm lg:text-lg xl:text-xl text-muted-foreground font-medium tracking-wide transition-opacity duration-1000 ${
              showSubtitle ? 'opacity-100' : 'opacity-0'
            }`}>
              Front-End Developer
            </p>
          </div>
          
          {/* Bouncing scroll arrow - only show when animation is complete and home is visible */}
          {isAnimationComplete && isHomeVisible && showArrow && (
            <div className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${
              showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={scrollToNext}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                style={{ animation: 'smoothFloat 4s ease-in-out infinite' }}
                aria-label="Scroll to next section"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}