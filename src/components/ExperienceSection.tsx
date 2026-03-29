import Image from "next/image";
import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Logo = {
  src: string;
  width?: number;
  height?: number;
  className?: string;
};

const DEFAULT_LOGO_WIDTH = 200;
const DEFAULT_LOGO_HEIGHT = 44;

const SBCS_LOGO: Logo = { src: "/assets/logos/sbcs_computer_logo.png", width: 140, height: 32 };

const experiences = [
  {
    role: "Treasurer",
    company: "Stony Brook Computing Society",
    period: "May 2025 - Present",
    logo: SBCS_LOGO,
    description:
      "Managed $3,000+ in club finances by tracking budgets and processing reimbursements for 20+ events, ensuring accurate recordkeeping and timely university approvals. Collaborated with the executive board to plan spending and fundraising strategies for the annual hackathon, workshops, and club initiatives.",
  },
  {
    role: "Software Engineer Intern",
    company: "BAE Systems, Inc.",
    period: "May 2025 - August 2025",
    logo: { src: "/assets/logos/bae_systems.svg", width: 190, height: 56 } as Logo,
    description:
      "Worked on low-level C++ software for a FPGA embedded Linux system. \
      Developed internal Python tooling to interface with Atlassian Jira API to produce actionable project progress insights. \
      Engineered Jenkins pipelines and Docker container images for optimizing team workflows and automating development processes.",
  },
  {
    role: "Mentoring Program Director",
    company: "Stony Brook Computing Society",
    period: "August 2024 - May 2025",
    logo: SBCS_LOGO,
    description:
      "Coordinated events and managed logistics for a mentoring cohort of 15+ mentors and 100+ mentees, organizing workshops, networking events, and field trips. Delivered presentations at general body meetings, communicating complex computing concepts and fostering an interactive learning environment.",
  },
  {
    role: "Teaching Assistant",
    company: "Stony Brook University",
    period: "August 2024 - December 2024",
    logo: { src: "/assets/logos/stony_brook_university_light_mode.png", width: 200, height: 62, className: "p-1 dark:bg-white" } as Logo,
    description:
      "Conducted two weekly lab sessions for Introduction to Object-Oriented Programming, teaching core material and providing guidance on lecture topics. Supported the professor in scoring 100+ midterm and final exams, delivering detailed feedback to reinforce students' understanding of OOP and Java fundamentals.",
  },
  {
    role: "IT Intern",
    company: "Lavner Education",
    period: "July 2024 - August 2024",
    logo: { src: "/assets/logos/lavner_education.png", width: 110, height: 36 } as Logo,
    description:
      "Instructed Python, Robotics, and STEM curricula to 15+ students, facilitating 100+ projects with live troubleshooting. Diagnosed and resolved software issues across 80+ devices, saving approximately one hour per device and ensuring uninterrupted operations.",
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
              <div className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-8 border-t border-border last:border-b hover:bg-muted/30 transition-colors rounded-lg px-4 -mx-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground font-display group-hover:text-foreground transition-colors whitespace-nowrap">{exp.period}</span>
                  </div>
                  {exp.logo && (
                    <Image
                      src={exp.logo.src}
                      alt={exp.company}
                      width={exp.logo.width ?? DEFAULT_LOGO_WIDTH}
                      height={exp.logo.height ?? DEFAULT_LOGO_HEIGHT}
                      className={`object-contain mx-auto${exp.logo.className ? ` ${exp.logo.className}` : ""}`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
