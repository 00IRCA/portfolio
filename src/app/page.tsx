import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import AboutMeSection from '../components/sections/AboutMeSection';
import ContactSection from '../components/sections/ContactSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TechnologiesSection from '../components/sections/TechnologiesSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <div className="bg-foreground/2">
        <TechnologiesSection />
      </div>
      <ExperienceSection />
      <div className="bg-foreground/2">
        <ProjectsSection />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
