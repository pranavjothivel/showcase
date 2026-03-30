import Image from "next/image";
import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Experience, Logo } from "@/types";
import experienceData from "@/data/experience.json";
import logosData from "@/data/experience-logos.json";

const experiences = experienceData as Experience[];
const logos = logosData as Record<string, Logo>;

const DEFAULT_LOGO_WIDTH = 200;
const DEFAULT_LOGO_HEIGHT = 44;

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
          {experiences.map((exp, i) => {
            const logo = exp.logoKey ? logos[exp.logoKey] : undefined;
            return (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-8 border-t border-border last:border-b hover:bg-muted/30 transition-colors rounded-lg px-4 -mx-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm text-muted-foreground font-display group-hover:text-foreground transition-colors whitespace-nowrap">{exp.period}</span>
                    </div>
                    {logo && (
                      <Image
                        src={logo.src}
                        alt={exp.company}
                        width={logo.width ?? DEFAULT_LOGO_WIDTH}
                        height={logo.height ?? DEFAULT_LOGO_HEIGHT}
                        className={`object-contain mx-auto${logo.className ? ` ${logo.className}` : ""}`}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-display text-sm font-medium mb-3 group-hover:text-primary/80 transition-colors">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
