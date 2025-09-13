import { Github, Linkedin, Download, Mail, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/cimanesdev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cimanesdev', label: 'LinkedIn' },
  { icon: Download, href: '/Josh Bradley Cimanes CV.pdf', label: 'Download CV', download: true },
  { icon: Mail, href: 'mailto:jmcimanes@up.edu.ph', label: 'Email' },
];

export function SocialNavigation() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, you'd implement actual theme switching here
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-4 shadow-2xl" style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}>
        <div className="flex flex-col items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label, download }) => (
            <a
              key={label}
              href={href}
              target={download ? "_self" : "_blank"}
              rel={download ? "" : "noopener noreferrer"}
              download={download ? "Josh_Cimanes_CV.pdf" : undefined}
              className="social-button group relative"
              aria-label={label}
              title={label}
            >
              <Icon size={18} />
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
            className="social-button"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function MobileSocialNavigation() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, you'd implement actual theme switching here
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-2xl" style={{ boxShadow: '0 0 0 1px hsl(var(--border)), 0 0 10px hsl(var(--glow-color) / 0.2), 0 0 20px hsl(var(--glow-color) / 0.1)' }}>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label, download }) => (
            <a
              key={label}
              href={href}
              target={download ? "_self" : "_blank"}
              rel={download ? "" : "noopener noreferrer"}
              download={download ? "Josh_Cimanes_CV.pdf" : undefined}
              className="social-button group relative"
              aria-label={label}
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
          
          <div className="w-px h-6 bg-border mx-1" />
          
          <button
            onClick={toggleTheme}
            className="social-button"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}