import { Trophy, Award, Medal, Star, Users, Code, Zap, Target } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      title: "Ateneo Blue Hacks 2025 - Champion",
      organization: "Ateneo de Manila University",
      description: "Won first place out of 25 teams at the hackathon by building the entire frontend of a disaster response app that connects victims with responders.",
      date: "February 2025",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "UP SoComSci PauTECHan 2024 - Champion",
      organization: "UP Society of Computer Scientists",
      description: "Competed against teams from different year levels in a General Tech Trivia and Computer Science Fun Facts competition.",
      date: "May 2024",
      icon: Award,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "UPM GDSC Case Proposal Challenge - Champion",
      organization: "Google Developer Groups UP Manila",
      description: "Proposed 'KLIMANILA: Machine Learning-powered Climate Map Tracker for Empowering Urban Adaptation Strategies' in the case competition.",
      date: "May 2024",
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Byte The Board: Hackathon '25 - 1st Runner Up",
      organization: "Byte The Board",
      description: "Achieved 1st runner-up out of 12 teams at the hackathon with a theme of 'Integrating Artificial Intelligence In The Health Field' by developing a symptom-checking platform powered by AI.",
      date: "May 2025",
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "GenAIus Hackathon 2025 - 4th Place",
      organization: "Google Developer Groups UP Manila",
      description: "Secured 4th place at the hackathon with the theme 'AI for the underserved: Tech Justice in Action'. Built an AI-powered platform to help NCAP violators analyze their traffic tickets for fairness.",
      date: "May 2025",
      icon: Users,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      title: "DLSU Hackercup 2025 - 4th Place",
      organization: "De La Salle University",
      description: "Secured 4th place at the hackathon hosted by Google Developer Groups UP Manila with the theme 'AI for the underserved: Tech Justice in Action'.",
      date: "August 2025",
      icon: Star,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10"
    }
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="section-content">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Recognition and milestones that mark my journey in technology and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.title}
                className="project-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-lg ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={achievement.color} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-1">{achievement.organization}</p>
                    <p className="text-muted-foreground text-sm">{achievement.date}</p>
                  </div>
                </div>

                <p className="text-foreground/90 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl px-8 py-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Trophy size={16} className="text-yellow-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                <Award size={16} className="text-blue-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                <Medal size={16} className="text-green-400" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold">Always striving for excellence</p>
              <p className="text-sm text-muted-foreground">Committed to continuous learning and growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}