import ScrollReveal from "./ScrollReveal";
import AdaptiveScrollReveal from "./AdaptiveScrollReveal";
import LogoCarousel from "./LogoCarousel";

const AboutSection = () => {

  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <AdaptiveScrollReveal direction="left" baseDuration={0.9}>
          <div>
            <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              A bit about me
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a computer science student with a deep interest in how systems work under the hood — from OS internals and resource management to cloud computing/distributed infrastructure and networking.
              </p>
              <p>
                I spend my time writing code, working with others, and developing my skills. I'm currently looking for internship and full-time roles where I can tackle hard systems problems.
              </p>
            </div>
          </div>
        </AdaptiveScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <div className="flex flex-col justify-center">
            <p className="font-display font-medium text-sm tracking-widest uppercase mb-6 text-primary">
              Skills & Tools
            </p>
            <LogoCarousel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
