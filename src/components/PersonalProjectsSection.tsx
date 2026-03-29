import { Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { PersonalProject } from "@/types/data";
import personalProjectsData from "@/data/personal-projects.json";

const personalProjects = personalProjectsData as PersonalProject[];

const PersonalProjectsSection = () => {
  return (
    <section id="personal-projects" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Side Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-16">
            Things I build for fun
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15} className="h-full">
              <div className="group border border-border rounded-xl p-6 hover:bg-card transition-colors h-full flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-display font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
