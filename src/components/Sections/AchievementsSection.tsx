
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AchievementsSection() {
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation({ delay: 100 });

  const achievements = [
    {
      title: "Ateneo Blue Hacks 2025 - Champion",
      organization: "Ateneo de Manila University",
      description: "Won first place out of 25 teams at the hackathon by building the entire frontend of a disaster response app that connects victims with responders.",
      date: "February 2025"
    },
    {
      title: "UP SoComSci PauTECHan 2024 - Champion",
      organization: "UP Society of Computer Scientists",
      description: "Competed against teams from different year levels in a General Tech Trivia and Computer Science Fun Facts competition.",
      date: "May 2024"
    },
    {
      title: "UPM GDSC Case Proposal Challenge - Champion",
      organization: "Google Developer Groups UP Manila",
      description: "Proposed 'KLIMANILA: Machine Learning-powered Climate Map Tracker for Empowering Urban Adaptation Strategies' in the case competition.",
      date: "May 2024"
    },
    {
      title: "Byte The Board: Hackathon '25 - 1st Runner Up",
      organization: "Byte The Board",
      description: "Achieved 1st runner-up out of 12 teams at the hackathon with a theme of 'Integrating Artificial Intelligence In The Health Field' by developing a symptom-checking platform powered by AI.",
      date: "May 2025"
    },
    {
      title: "GenAIus Hackathon 2025 - 4th Place",
      organization: "Google Developer Groups UP Manila",
      description: "Secured 4th place at the hackathon with the theme 'AI for the underserved: Tech Justice in Action'. Built an AI-powered platform to help NCAP violators analyze their traffic tickets for fairness.",
      date: "May 2025"
    },
    {
      title: "DLSU Hackercup 2025 - 4th Place",
      organization: "De La Salle University",
      description: "Achieved 4th place at the hackathon hosted by DLSU LSCS with the theme 'SDG 11: Sustainable Cities and Communities and Convenience'.",
      date: "August 2025"
    }
  ];

  return (
    <section id="achievements" className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Achievements</h2>
        </div>

        <div 
          ref={achievementsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 ${
            achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {achievements.map((achievement, index) => {
            return (
              <div 
                key={achievement.title}
                className="group bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out hover:border-white/20 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-foreground leading-tight">{achievement.title}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{achievement.organization}</p>
                  <p className="text-xs text-foreground/60 font-medium">{achievement.date}</p>
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}