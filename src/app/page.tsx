import AboutMeSection from '../features/about/AboutMeSection';
import ContactSection from '../features/contact/ContactSection';
import ExperienceSection from '../features/experience/ExperienceSection';
import HeroSection from '../features/hero/HeroSection';
import ProjectsSection from '../features/projects/ProjectsSection';
import TechnologiesSection from '../features/technologies/TechnologiesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
