import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Bourse Exchange Server",
    category: "Systems / Networking",
    description:
      "Multithreaded exchange server handling 15+ concurrent clients over TCP with a custom packet protocol. Implemented a matchmaker thread to process thousands of orders and broadcast events, eliminating race conditions under 2,000+ randomized requests.",
    color: "bg-primary/10",
  },
  {
    title: "Phreddit",
    category: "Full Stack",
    description:
      "Full-stack Reddit-style app built with the MERN stack, Redux, and React Router. Designed 5+ Mongoose schemas for nested comments, voting, and authentication, achieving 90% Jest test coverage across UI components, database logic, and server setup.",
    color: "bg-secondary",
  },
  {
    title: "Tetris Battleship Server",
    category: "Systems / Networking",
    description:
      "Networked multiplayer Battleship game server in C enabling real-time gameplay between two clients over a Tetris-style board. Used the C Sockets API for client-server communication and Valgrind to confirm zero memory leaks under dynamic allocation.",
    color: "bg-card",
  },
  {
    title: "PPM Compression & Steganography",
    category: "Systems / Algorithms",
    description:
      "PPM image loader and quadtree compression algorithm achieving a 25% processing boost and 35% file size reduction. Extended with steganographic embedding and extraction of messages and images with 100% retrieval accuracy.",
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
