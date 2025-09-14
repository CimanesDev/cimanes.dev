import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Trophy, Mail } from 'lucide-react';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function StickyNavigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navigationItems.map(item => item.id);
          let currentSection = null;
          const navbarHeight = 80; // Same offset as scroll function
          
          sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              // Check if section header is visible below the navbar
              if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
                currentSection = section;
              }
            }
          });
          
          if (currentSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of the sticky navbar + some padding
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-2xl" style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}>
        <div className="flex items-center gap-1">
          {navigationItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === id 
                  ? 'bg-primary/20 text-primary shadow-lg shadow-primary/25' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
              aria-label={`Navigate to ${label}`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}