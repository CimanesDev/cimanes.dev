import { Calendar, MapPin, Code, Briefcase, Users, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
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
      company: "Google Developer Groups on CampusUP Manila",
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
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const Icon = getTypeIcon(exp.type);
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30"
              >
                <div className="flex items-start gap-6 h-full">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{exp.title}</h4>
                    <p className="text-primary font-semibold mb-3 text-xl">{exp.company}</p>
                    <p className="text-muted-foreground mb-4 font-medium text-lg">{exp.location} • {exp.period}</p>
                    <div className="space-y-3">
                      <p className="text-lg text-foreground/90 font-medium">{exp.description}</p>
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
              </div>
            );
          })}
        </div>

        {/* Organizations Subsection */}
        <div className="mt-12">
          <div className="text-left mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Organizations</h3>
          </div>
          
          {/* Top row - VP for Projects and Project Head */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {organizations.filter(org => !org.isFullWidth).map((org, index) => {
              const Icon = getOrgIcon(org.company);
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30"
                >
                  <div className="flex items-start gap-6 h-full">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{org.title}</h4>
                      <p className="text-primary font-semibold mb-3 text-xl">{org.company}</p>
                      <p className="text-muted-foreground mb-4 font-medium text-lg">{org.location} • {org.period}</p>
                      <div className="space-y-3">
                        <p className="text-lg text-foreground/90 font-medium">{org.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {org.skills.map((skill) => (
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
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30"
              >
                <div className="flex items-start gap-6 h-full">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{org.title}</h4>
                    <p className="text-primary font-semibold mb-3 text-xl">{org.company}</p>
                    <p className="text-muted-foreground mb-4 font-medium text-lg">{org.location} • {org.period}</p>
                    <div className="space-y-3">
                      <p className="text-lg text-foreground/90 font-medium">{org.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {org.skills.map((skill) => (
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}