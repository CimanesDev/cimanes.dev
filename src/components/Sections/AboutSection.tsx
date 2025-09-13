import { GraduationCap, Code, Trophy, Heart } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Josh Bradley Cimanes, a passionate computer science student at the University of the Philippines Manila. 
            As a College Scholar and multiple hackathon champion, I specialize in full-stack development with React, 
            TypeScript, and modern web technologies. I'm also actively involved in leadership roles as CTO of 
            Google Developer Groups UP Manila and VP for Projects at UP Society of Computer Scientists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <div 
              key={title}
              className="experience-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl px-8 py-6">
            <div className="text-2xl">🚀</div>
            <div className="text-left">
              <p className="font-semibold">Ready to collaborate?</p>
              <p className="text-sm text-muted-foreground">Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}