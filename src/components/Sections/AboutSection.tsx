import { GraduationCap, Code, Trophy, Heart, Languages } from 'lucide-react';

export function AboutSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left side - Description */}
          <div className="flex flex-col h-full">
            <div className="space-y-3 flex-shrink-0">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-justify">
                Hi! I'm Josh Bradley Cimanes, a third-year Computer Science student at the University of the Philippines Manila, passionate about full-stack development, AI/ML, and creating impactful tech solutions. I enjoy collaborating in hackathons and student orgs, and have led and won several tech competitions.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-justify">
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
      </div>
    </section>
  );
}