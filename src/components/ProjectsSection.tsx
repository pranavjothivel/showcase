import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types";
import projectsData from "@/data/projects.json";

const projects = projectsData as Project[];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-16">
            Recent projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.2}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
