import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FolderOpen, Trophy, Mail } from 'lucide-react';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of the mobile navbar + some padding
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
       <div className="fixed top-4 left-4 z-50 lg:hidden">
         <button
           onClick={() => setIsOpen(!isOpen)}
               className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-foreground hover:bg-white/20 hover:scale-110 transition-all duration-500 ease-out shadow-2xl hover:shadow-3xl"
          style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}
          aria-label="Toggle navigation menu"
        >
           {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 left-0 w-64 h-full bg-background/98 backdrop-blur-xl border-r border-white/20 shadow-2xl transform transition-transform duration-300 ease-out">
            <div className="p-6">
              {/* Menu Items */}
              <div className="flex flex-col space-y-1 mt-20">
                {navigationItems.map(({ id, label, icon: Icon }, index) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-left text-foreground hover:bg-white/10 transition-all duration-500 ease-out group hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Icon size={18} className="group-hover:text-primary transition-colors duration-300" />
                    <span className="font-medium text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
