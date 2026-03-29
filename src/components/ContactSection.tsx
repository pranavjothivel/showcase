import { Mail, Github, Linkedin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let's connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
            I'm actively looking for internship and full-time opportunities in systems software engineering and infrastructure. I'd love to chat.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="mailto:pranav@pranavjothivel.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-display font-medium rounded-full hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-4 h-4" />
            pranav@pranavjothivel.com
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/pranavjothivel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pranav-jothivel/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
