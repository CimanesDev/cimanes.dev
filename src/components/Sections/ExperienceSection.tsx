import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Developer",
      company: "Expoxur",
      location: "Manila, Philippines",
      period: "2024 - Present",
      description: "Leading development initiatives and technical strategy for innovative web solutions.",
      skills: ["React", "TypeScript", "Leadership", "Project Management"],
      type: "leadership"
    },
    {
      title: "Web/App Developer Intern",
      company: "Wisdom IPVault",
      location: "Manila, Philippines", 
      period: "2024",
      description: "Developed web and mobile applications using modern technologies and best practices.",
      skills: ["React", "JavaScript", "Mobile Development", "API Integration"],
      type: "internship"
    },
    {
      title: "CTO",
      company: "Google Developer Groups UP Manila",
      location: "Manila, Philippines",
      period: "2025 - 2026",
      description: "Leading technical initiatives and developer community programs at UP Manila's Google Developer Group.",
      skills: ["Leadership", "Community Management", "Technical Strategy"],
      type: "leadership"
    },
    {
      title: "VP for Projects",
      company: "UP Society of Computer Scientists",
      location: "Manila, Philippines",
      period: "2025 - 2026",
      description: "Overseeing project management and technical initiatives for the computer science society.",
      skills: ["Project Management", "Leadership", "Event Coordination"],
      type: "leadership"
    },
    {
      title: "Project Head",
      company: "Level Up",
      location: "Manila, Philippines",
      period: "2024 - 2025",
      description: "Led development projects and technical initiatives for the organization.",
      skills: ["Project Leadership", "Technical Development", "Team Management"],
      type: "leadership"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return Trophy;
      case 'leadership':
        return Users;
      default:
        return Calendar;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'text-yellow-400';
      case 'leadership':
        return 'text-blue-400';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My journey through internships, hackathons, and leadership roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = getTypeIcon(exp.type);
            return (
              <div 
                key={index}
                className="experience-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 bg-card rounded-lg border border-border ${getTypeColor(exp.type)}`}>
                      <Icon size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/90 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}