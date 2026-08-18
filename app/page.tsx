import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
    </>
  );
}
