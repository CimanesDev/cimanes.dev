import { ExternalLink, Github, Code2, Brain, ShoppingCart, Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const projects = [
    {
      title: "EDC atbp",
      description: "Developed a complete e-commerce solution with role-based dashboards for administrators and customers, featuring product management, secure transactions, and real-time inventory tracking to replicate a seamless online shopping experience.",
      tech: ["ReactJS", "TailwindCSS", "Firebase"],
      icon: ShoppingCart,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      github: "https://github.com",
      demo: "https://edc-atbp.netlify.app",
      image: "/images/edc.png",
      featured: true
    },
    {
      title: "KaagapAI",
      description: "Developed a website that helps people log in their symptoms and lets AI analyze, get a diagnosis, and recommend nearby clinics/hospitals.",
      tech: ["ReactJS", "TailwindCSS", "Gemini API", "Firebase"],
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      github: "https://github.com",
      demo: "https://kaagap-ai.netlify.app",
      image: "/images/kaagapai.png"
    },
    {
      title: "SalbaBida",
      description: "Built the entire frontend of a real-time disaster response platform connecting victims (Biktima) with responders (Tutulong), delivering an intuitive and responsive user experience that streamlined emergency coordination.",
      tech: ["ReactJS", "Google Maps API", "Python Flask"],
      icon: Calendar,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      github: "https://github.com",
      demo: "https://salbabida.vercel.app",
      image: "/images/salbabida.png"
    },
    {
      title: "Quine-McCluskey Minimizer",
      description: "Developed a web application with an intuitive user interface that minimizes boolean functions using the Quine-McCluskey Method for our final machine problem, allowing users to efficiently simplify complex logical expressions.",
      tech: ["ReactJS"],
      icon: Code2,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      github: "https://github.com",
      demo: "https://quinemccluskey-carocimanes.netlify.app",
      image: "/images/quine.png"
    },
    {
      title: "HellWeekCoffee",
      description: "Developed a Restaurant POS system as a school requirement for our final machine problem. It manages transactions, item encoding, customizations, and sales tracking to streamline coffee shop operations.",
      tech: ["Java"],
      icon: Code2,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/placeholder.png"
    },
    {
      title: "Iskola",
      description: "Developed an AI-powered study assistant web app that helps students by summarizing uploaded notes, generating quizzes from the content, and providing a chatbot for concept clarification through Gemini API integration.",
      tech: ["ReactJS", "TailwindCSS", "Gemini API"],
      icon: Brain,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/placeholder.png"
    },
    {
      title: "BantAI",
      description: "Built a website that enables users to analyze their traffic tickets for potential errors using AI, submit appeals directly to administrators, and look up violations by license plate number.",
      tech: ["ReactJS", "TailwindCSS", "Gemini API", "Google Maps API", "Firebase"],
      icon: Brain,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      github: "https://github.com",
      demo: "https://bantai.netlify.app",
      image: "/images/bantai.png"
    },
    {
      title: "Tetris Effect",
      description: "Developed a Tetris clone with dynamic music, background effects, and multithreading for smoother gameplay. It has a highscore system and a leaderboard, as well as a local multiplayer game mode.",
      tech: ["JavaFX"],
      icon: Code2,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/placeholder.png"
    },
    {
      title: "Jogoal",
      description: "A goal tracking and productivity web application that helps users set, track, and achieve their personal and professional goals with progress visualization and milestone celebrations.",
      tech: ["ReactJS", "TailwindCSS", "Firebase"],
      icon: Code2,
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/placeholder.png"
    }     
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-content">
        <div className="text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Projects</h2>
        </div>

        {/* Featured Project - Compact Showcase */}
        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left: Project Mockup/Showcase */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in">
                {/* Browser-like header */}
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg px-2 py-1 text-xs text-foreground/60">
                    {projects[0].demo}
                  </div>
                </div>
                
                {/* Project content area */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-2 min-h-[100px] overflow-hidden">
                  <img 
                    src={projects[0].image} 
                    alt={`${projects[0].title} screenshot`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="order-1 lg:order-2">
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {projects[0].title}
                  </h3>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={projects[0].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>

                <div className="pt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
                    <span className="text-xs text-foreground/60 font-medium uppercase tracking-wider">Technologies Used</span>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {projects[0].tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - Paginated Grid */}
        <div className="relative">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(1).slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage).map((project, index) => {
              const isExpanded = expandedProject === project.title;
              const hasDemo = project.demo && project.demo !== "https://demo.com";
              const hasImage = project.image && !project.image.includes("placeholder");
              
              return (
                <div 
                  key={project.title}
                  className="group bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                >
                  {/* Project Image */}
                  {hasImage ? (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg h-32 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                          {(() => {
                            const Icon = project.icon;
                            return <Icon className="text-white/60" size={24} />;
                          })()}
                        </div>
                        <p className="text-xs text-white/60">No preview available</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    {isExpanded ? (
                      <ChevronUp className="text-primary" size={20} />
                    ) : (
                      <ChevronDown className="text-primary" size={20} />
                    )}
                  </div>

                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {isExpanded ? project.description : `${project.description.substring(0, 120)}...`}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, isExpanded ? project.tech.length : 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-foreground/60 rounded-md text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {hasDemo && (
                    <div className="flex gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-foreground rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <ChevronLeft size={18} />
                <span className="text-sm font-medium">Previous</span>
              </button>
              
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex gap-1">
                  {Array.from({ length: Math.ceil((projects.length - 1) / projectsPerPage) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentPage 
                          ? 'bg-primary scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-foreground/70 font-medium ml-2">
                  {currentPage + 1} / {Math.ceil((projects.length - 1) / projectsPerPage)}
                </span>
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(Math.ceil((projects.length - 1) / projectsPerPage) - 1, currentPage + 1))}
                disabled={currentPage >= Math.ceil((projects.length - 1) / projectsPerPage) - 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-foreground rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}