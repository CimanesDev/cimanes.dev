import { StickyNavigation } from './Navigation/StickyNavigation';
import { SocialNavigation, MobileSocialNavigation } from './Navigation/SocialNavigation';
import { MobileNavigation } from './Navigation/MobileNavigation';
import { HeroSection } from './Sections/HeroSection';
import { AboutSection } from './Sections/AboutSection';
import { ExperienceSection } from './Sections/ExperienceSection';
import { ProjectsSection } from './Sections/ProjectsSection';
import { AchievementsSection } from './Sections/AchievementsSection';
import { ContactSection } from './Sections/ContactSection';
import { ScrollProgress } from './ui/scroll-progress';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation Components */}
      <StickyNavigation />
      <SocialNavigation />
      <MobileSocialNavigation />
      <MobileNavigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Josh Cimanes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}