import { memo } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: any;
  color: string;
  bgColor: string;
  github: string;
  demo: string;
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProjectCard = memo(({ project, index, isExpanded, onToggle }: ProjectCardProps) => {
  const hasDemo = project.demo && project.demo !== "https://demo.com";
  const hasImage = project.image && !project.image.includes("placeholder");
  
  return (
    <div 
      className="group bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onToggle}
    >
      {/* Project Image */}
      {hasImage ? (
        <div className="mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-muted/20">
          <OptimizedImage 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={128}
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

      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h4 className="text-base md:text-lg font-bold">{project.title}</h4>
        {isExpanded ? (
          <ChevronUp className="text-primary" size={18} />
        ) : (
          <ChevronDown className="text-primary" size={18} />
        )}
      </div>

      <p className="text-xs md:text-sm text-foreground/80 mb-3 md:mb-4 leading-relaxed">
        {isExpanded ? project.description : `${project.description.substring(0, 100)}...`}
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
});

ProjectCard.displayName = 'ProjectCard';
