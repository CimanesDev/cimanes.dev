import { Github, Linkedin, Download, Mail, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/cimanesdev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cimanesdev', label: 'LinkedIn' },
  { icon: Download, href: '/cv.pdf', label: 'Download CV', download: true },
  { icon: Mail, href: 'mailto:jmcimanes@up.edu.ph', label: 'Email' },
];

export function SocialNavigation() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, you'd implement actual theme switching here
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-nav-background/80 backdrop-blur-lg border border-border rounded-full p-4 glow-border">
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