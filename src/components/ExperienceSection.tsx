import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Systems Engineering Intern",
    company: "Cloudflare",
    period: "Summer 2024",
    description:
      "Worked on low-level networking components for edge infrastructure. Implemented kernel-bypass I/O optimizations and profiled memory allocation patterns in high-throughput packet processing pipelines.",
  },
  {
    role: "Infrastructure Intern",
    company: "Stripe",
    period: "Summer 2023",
    description:
      "Built Terraform modules for multi-region service deployments. Contributed to an internal Kubernetes operator that reduced deployment rollback times by 40%.",
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University Systems Lab",
    period: "2022 — 2023",
    description:
      "Researched memory safety techniques for OS kernels. Developed eBPF-based profiling tools to trace allocation patterns in production-like environments.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-16">
            Where I've worked
          </h2>
        </ScrollReveal>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-t border-border last:border-b hover:bg-muted/30 transition-colors rounded-lg px-4 -mx-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground font-display group-hover:text-foreground transition-colors">{exp.period}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-primary font-display text-sm font-medium mb-3 group-hover:text-primary/80 transition-colors">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
