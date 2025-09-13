import { useState, useEffect } from 'react';

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isHomeVisible, setIsHomeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const homeSection = document.getElementById('home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="animate-fade-in relative flex items-center justify-center h-full">
          {/* Container for the name and positioning elements */}
          <div className="relative">
            {/* Hi, I'm positioned top left of name */}
            <p className="absolute -top-12 left-0 text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Hi, I'm
            </p>
            
            {/* Josh Cimanes centered */}
            <h1 className="hero-text-simple text-center">
              Josh Cimanes
            </h1>
            
            {/* Frontend Developer positioned bottom right of name */}
            <p className="absolute -bottom-12 -right-4 md:-right-8 text-sm md:text-lg lg:text-xl text-muted-foreground font-medium tracking-wide">
              Front-End Developer
            </p>
          </div>
          
          {/* Bouncing scroll arrow - only show on home page */}
          {isHomeVisible && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
              <button
                onClick={scrollToNext}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
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