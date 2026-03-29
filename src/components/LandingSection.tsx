import ScrollReveal from "./ScrollReveal";

const LandingSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-36 pb-20 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-3xl space-y-8 order-2 lg:order-1">
            <ScrollReveal delay={0.2}>
              <p className="text-primary font-display font-medium tracking-widest uppercase text-sm">
                CS + Math Student · Software Engineer · Systems & Infrastructure
              </p>
            </ScrollReveal>
            {/* <ScrollReveal delay={0.4} enableParallax>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                I build things
                <br />
                close to the
                <br />
                metal.
              </h1>
            </ScrollReveal> */}
            <ScrollReveal delay={0.4} enableParallax>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                {/* From metal to cloud */}
                Source to
                <br />
                cloud.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Computer science student passionate about operating systems, low-level programming, and infrastructure. Seeking internship and full-time opportunities.
              </p>
            </ScrollReveal>
          </div>

          {/* Headshot */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <ScrollReveal delay={0.8}>
              <div className="relative">
                {/* circle variant: <div className="rounded-full ring-2 ring-border shadow-lg"><div className="w-80 h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-2 rounded-full"><img ... className="w-full h-full object-cover rounded-full" /></div></div> */}
                <div className="w-80 h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-2 rounded-2xl">
                  <img
                    src="/headshot-2.jpeg"
                    alt="Pranav Jothivel"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
