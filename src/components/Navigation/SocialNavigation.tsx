import { Github, Linkedin, Download, BookOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com/cimanesdev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cimanesdev', label: 'LinkedIn' },
  { icon: Download, href: '/Josh Bradley Cimanes CV.pdf', label: 'Download CV', download: true },
  { icon: BookOpen, href: '/blog', label: 'Blog' },
];

export function SocialNavigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-5 shadow-2xl" style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}>
        <div className="flex flex-col items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label, download }) => (
            <a
              key={label}
              href={href}
              target={download ? "_self" : (href.startsWith('/') ? "_self" : "_blank")}
              rel={download ? "" : (href.startsWith('/') ? "" : "noopener noreferrer")}
              download={download ? "Josh_Cimanes_CV.pdf" : undefined}
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25 group relative"
              aria-label={label}
              title={label}
            >
              <Icon size={20} />
              {download && (
                <div className="absolute right-full mr-2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  Download CV
                </div>
              )}
            </a>
          ))}
          
          <div className="w-6 h-px bg-border my-2" />
          
          <button
            onClick={toggleTheme}
            className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function MobileSocialNavigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-4 right-4 z-50 lg:hidden">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl" style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}>
        <div className="flex items-center gap-1.5">
          {socialLinks.map(({ icon: Icon, href, label, download }) => (
            <a
              key={label}
              href={href}
              target={download ? "_self" : (href.startsWith('/') ? "_self" : "_blank")}
              rel={download ? "" : (href.startsWith('/') ? "" : "noopener noreferrer")}
              download={download ? "Josh_Cimanes_CV.pdf" : undefined}
              className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              aria-label={label}
              title={label}
            >
              <Icon size={17} />
            </a>
          ))}
          
          <div className="w-px h-5 bg-border mx-0.5" />
          
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </nav>
  );
}