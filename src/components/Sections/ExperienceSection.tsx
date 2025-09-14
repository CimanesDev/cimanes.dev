import { Calendar, MapPin, Code, Briefcase, Users, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ExperienceSection() {
  const { ref: expRef, isVisible: expVisible } = useScrollAnimation({ delay: 100 });
  const { ref: orgRef, isVisible: orgVisible } = useScrollAnimation({ delay: 200 });

  const experiences = [
    {
      title: "Lead Developer",
      company: "Expoxur",
      location: "Philippines",
      period: "August 2025 - Present",
      description: "Leading the website development for Expoxur, a startup connecting Social Enterprises with communities.",
      skills: ["React", "TypeScript", "Leadership", "Project Management"],
      type: "leadership"
    },
    {
      title: "Web/App Developer Intern",
      company: "Wisdom IPVault",
      location: "Philippines", 
      period: "September 2025 - Present",
      description: "Details about this experience will be added soon.",
      skills: ["TBD"],
      type: "internship"
    }
  ];

  const organizations = [
    {
      title: "VP for Projects",
      company: "UP Society of Computer Scientists",
      location: "Manila, Philippines",
      period: "July 2025 - 2026", 
      description: "Overseeing project management and technical initiatives for the computer science society.",
      skills: ["Project Management", "Leadership", "Event Coordination"],
      type: "leadership"
    },
    {
      title: "Project Head",
      company: "Level Up - UP Manila",
      location: "Manila, Philippines",
      period: "August 2024 - May 2025",
      description: "Planned and spearheaded gaming events to deliver engaging experiences for the UP Manila gaming community.",
      skills: ["Project Leadership"],
      type: "leadership"
    },
    {
      title: "Chief Technology Officer / CTO",
      company: "Google Developer Groups on Campus UP Manila",
      location: "Manila, Philippines",
      period: "September 2025 - 2026",
      description: "Role and initiatives to be announced soon.",
      skills: ["TBA"],
      type: "leadership",
      isFullWidth: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'leadership':
        return Code;
      case 'internship':
        return Briefcase;
      default:
        return Calendar;
    }
  };

  const getOrgIcon = (company: string) => {
    if (company.includes("Google")) return Users;
    if (company.includes("UP Society")) return GraduationCap;
    if (company.includes("Level Up")) return Code;
    return Users;
  };

  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        <div className="text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Experience</h2>
        </div>

        <div 
          ref={expRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 ${
            expVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {experiences.map((exp, index) => {
            const Icon = getTypeIcon(exp.type);
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out hover:border-white/30 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{exp.title}</h4>
                    <p className="text-primary font-semibold mb-2 text-lg">{exp.company}</p>
                    <p className="text-muted-foreground mb-3 font-medium text-base">{exp.location} • {exp.period}</p>
                    <div className="space-y-2">
                      <p className="text-base text-foreground/90 font-medium">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organizations Subsection */}
        <div 
          ref={orgRef}
          className={`mt-8 transition-all duration-700 ${
            orgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-left mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Organizations</h3>
          </div>
          
          {/* Top row - VP for Projects and Project Head */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {organizations.filter(org => !org.isFullWidth).map((org, index) => {
              const Icon = getOrgIcon(org.company);
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out hover:border-white/30 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{org.title}</h4>
                      <p className="text-primary font-semibold mb-2 text-lg">{org.company}</p>
                      <p className="text-muted-foreground mb-3 font-medium text-base">{org.location} • {org.period}</p>
                      <div className="space-y-2">
                        <p className="text-base text-foreground/90 font-medium">{org.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {org.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full width CTO card */}
          {organizations.filter(org => org.isFullWidth).map((org, index) => {
            const Icon = getOrgIcon(org.company);
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out hover:border-white/30 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{org.title}</h4>
                    <p className="text-primary font-semibold mb-2 text-lg">{org.company}</p>
                    <p className="text-muted-foreground mb-3 font-medium text-base">{org.location} • {org.period}</p>
                    <div className="space-y-2">
                      <p className="text-base text-foreground/90 font-medium">{org.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {org.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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