import { ExternalLink, Github, Code2, Brain, ShoppingCart, Calendar } from 'lucide-react';
import aiStudyAssistant from '@/assets/ai-study-assistant.jpg';
import ecommerceDashboard from '@/assets/ecommerce-dashboard.jpg';
import taskManager from '@/assets/task-manager.jpg';
import codeSnippets from '@/assets/code-snippets.jpg';

export function ProjectsSection() {
  const projects = [
    {
      title: "KaagapAI",
      description: "AI-driven healthcare web application designed to provide preliminary medical diagnoses based on user-reported symptoms, improving accessibility to healthcare guidance with AI analysis, urgency assessment, and location-based healthcare recommendations.",
      tech: ["React", "JavaScript", "AI Integration", "Healthcare Tech"],
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      github: "https://github.com",
      demo: "https://kaagap-ai.netlify.app",
      image: aiStudyAssistant,
      featured: true
    },
    {
      title: "EDC atbp",
      description: "Complete e-commerce solution with role-based dashboards for administrators and customers, featuring product management, secure transactions, and real-time inventory tracking to replicate a seamless online shopping experience.",
      tech: ["React", "JavaScript", "E-commerce", "Dashboard"],
      icon: ShoppingCart,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      github: "https://github.com",
      demo: "https://edc-atbp.netlify.app",
      image: ecommerceDashboard
    },
    {
      title: "SalbaBida",
      description: "Real-time disaster response platform connecting victims (Biktima) with responders (Tutulong), delivering an intuitive and responsive user experience that streamlined emergency coordination.",
      tech: ["React", "JavaScript", "Real-time", "Emergency Response"],
      icon: Calendar,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: taskManager
    },
    {
      title: "Quine-McCluskey Minimizer",
      description: "Web application with an intuitive user interface that minimizes boolean functions using the Quine-McCluskey Method, allowing users to efficiently simplify complex logical expressions.",
      tech: ["React", "JavaScript", "Boolean Logic", "Algorithm"],
      icon: Code2,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      github: "https://github.com",
      demo: "https://quinemccluskey-carocimanes.netlify.app",
      image: codeSnippets
    },
    {
      title: "HellWeekCoffee",
      description: "Restaurant POS system that manages transactions, item encoding, customizations, and sales tracking to streamline coffee shop operations.",
      tech: ["Java", "POS System", "Database", "Business Logic"],
      icon: Code2,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      github: "https://github.com",
      demo: "https://demo.com",
      image: codeSnippets
    },
    {
      title: "Personal Portfolio",
      description: "Dynamic, interactive portfolio inspired by GitHub's minimalist design language, built to showcase technical skills, projects, education and professional journey.",
      tech: ["React", "TypeScript", "TailwindCSS", "Portfolio"],
      icon: Code2,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      github: "https://github.com",
      demo: "https://cimanesdev.netlify.app",
      image: codeSnippets
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-content">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A showcase of my latest work in web development and AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title}
                className={`project-card animate-fade-in ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${project.bgColor}`}>
                    <Icon className={project.color} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-2">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}