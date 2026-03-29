import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Custom RTOS",
    category: "Operating Systems",
    description: "A minimal real-time operating system built from scratch in C for ARM Cortex-M microcontrollers.",
    color: "bg-primary/10",
  },
  {
    title: "NetStack",
    category: "Networking",
    description: "User-space TCP/IP stack with zero-copy I/O, achieving near line-rate throughput on commodity hardware.",
    color: "bg-secondary",
  },
  {
    title: "Infraforge",
    category: "Infrastructure",
    description: "Terraform-based IaC platform automating multi-cloud deployments with built-in observability.",
    color: "bg-card",
  },
  {
    title: "MemTrace",
    category: "Performance",
    description: "Low-overhead memory profiler using eBPF to trace allocations in production without restarts.",
    color: "bg-primary/5",
  },
];

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
