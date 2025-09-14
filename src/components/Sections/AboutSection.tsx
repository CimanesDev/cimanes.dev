import { GraduationCap, Code, Trophy, Heart, Languages } from 'lucide-react';
import StackIcon from 'tech-stack-icons';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useStaggeredAnimation } from '@/hooks/use-enhanced-scroll';
import { useMagneticCursor } from '@/hooks/use-magnetic-cursor';

export function AboutSection() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation({ delay: 100 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ delay: 200 });

  const skills = [
    { name: "HTML5", icon: "html5", level: 95, color: "orange" },
    { name: "CSS3", icon: "css3", level: 90, color: "blue" },
    { name: "TailwindCSS", icon: "tailwindcss", level: 95, color: "blue" },
    { name: "Python", icon: "python", level: 80, color: "green" },
    { name: "C#", icon: "c#", level: 75, color: "purple" },
    { name: "TypeScript", icon: "typescript", level: 85, color: "blue" },
    { name: "React", icon: "react", level: 90, color: "blue" },
    { name: "ShadcnUI", icon: "shadcnui", level: 85, color: "primary" },
    { name: "Git", icon: "git", level: 80, color: "orange" },
    { name: "GitHub", icon: "github", level: 85, color: "primary" },
    { name: "GitLab", icon: "gitlab", level: 75, color: "orange" },
    { name: "Firebase", icon: "firebase", level: 80, color: "orange" },
    { name: "Supabase", icon: "supabase", level: 70, color: "green" },
    { name: "PostgreSQL", icon: "postgresql", level: 65, color: "blue" }
  ];

  const { ref: skillCardsRef, visibleItems: skillCardsVisible } = useStaggeredAnimation(skills.length, 100);
  const magneticRef = useMagneticCursor({ strength: 0.2 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Student",
      description: "BS Computer Science at University of the Philippines Manila (2023-2027) - College Scholar/Dean's List"
    },
    {
      icon: Code,
      title: "Developer",
      description: "Full-stack developer specializing in React, TypeScript, and modern web technologies"
    },
    {
      icon: Trophy,
      title: "Hackathon Champion",
      description: "Multiple hackathon winner including Ateneo Blue Hacks 2025 and UP SoComSci PauTECHan 2024"
    },
    {
      icon: Heart,
      title: "Leader",
      description: "CTO of Google Developer Groups UP Manila and VP for Projects at UP Society of Computer Scientists"
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-content">
        <div className="text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
        </div>

        <div 
          ref={aboutRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left side - Description */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 flex-shrink-0">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Hi! I'm Josh Bradley Cimanes, a third-year Computer Science student at the University of the Philippines Manila, passionate about full-stack development, AI/ML, and creating impactful tech solutions. I enjoy collaborating in hackathons and student orgs, and have led and won several tech competitions.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
              I specialize in frontend development with React, TypeScript, and modern web technologies, with a solid foundation in backend development. I'm currently exploring AI to integrate intelligent systems into web apps for more impactful, user-friendly solutions, and I'm passionate about mentoring and contributing to the tech community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex-1 mt-2 hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in">
              <div className="flex items-start gap-4 h-full">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <Languages className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Languages</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground/90 font-medium">• Native Filipino</p>
                    <p className="text-sm text-foreground/90 font-medium">• Fluent English</p>
                    <p className="text-sm text-foreground/90 font-medium">• Conversational Mandarin (HSK 4/HSKK)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-4">
            
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">University of the Philippines Manila</h4>
                  <p className="text-primary font-semibold mb-2 text-base">BS Computer Science (2023-2027)</p>
                  <p className="text-muted-foreground mb-3 font-medium">Manila, Philippines</p>
                  <div className="space-y-3">
                    <p className="text-base text-foreground/90 font-medium">• College Scholar/Dean's List<br/>AY 2023-2025 (3 Semesters)</p>
                    <p className="text-base text-foreground/90 font-medium">• Google Developer Groups on Campus UP Manila<br/>CTO (AY 2025-2026)</p>
                    <p className="text-base text-foreground/90 font-medium">• UP Society of Computer Scientists<br/>VP for Projects (AY 2025-2026)</p>
                    <p className="text-base text-foreground/90 font-medium">• Level Up - Project Head (AY 2024-2025)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Chiang Kai Shek College</h4>
                  <p className="text-primary font-semibold mb-2 text-base">High School Diploma (2008-2023)</p>
                  <p className="text-muted-foreground mb-3 font-medium">Manila, Philippines</p>
                  <div className="space-y-3">
                    <p className="text-base text-foreground/90 font-medium">• With High Honors</p>
                    <p className="text-base text-foreground/90 font-medium">• Track and Field Varsity</p>
                    <p className="text-base text-foreground/90 font-medium">• Chess Team Varsity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Subsection */}
        <div 
          ref={skillsRef}
          className={`mt-8 transition-all duration-700 ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-left mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Skills</h3>
          </div>
          
          {/* Skill Cards Grid */}
          <div 
            ref={skillCardsRef}
            className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-3 mb-8"
          >
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                ref={index === 0 ? magneticRef : undefined}
                className={`group bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer ${
                  skillCardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 ease-out">
                    <StackIcon name={skill.icon} className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-xs font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}