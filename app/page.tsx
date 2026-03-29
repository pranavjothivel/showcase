import Navbar from "@/components/Navbar";
import LandingSection from "@/components/LandingSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PersonalProjectsSection from "@/components/PersonalProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PersonalProjectsSection />
      <ContactSection />
      <footer className="px-6 md:px-16 lg:px-24 py-8 text-center">
        <p className="text-muted-foreground text-sm font-display">
          © 2026 Pranav Jothivel — Built with intention.
        </p>
      </footer>
    </div>
  );
}