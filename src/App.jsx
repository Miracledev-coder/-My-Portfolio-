import HeroGradient from "./Components/heroSection/HeroGradient";
import HeroMain from "./Components/heroSection/HeroMain";
import NavbarMain from "./Components/Navbar/NavbarMain";
import SubHeroSection from "./Components/heroSection/SubHeroSection";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import SkillsMain from "./Components/skillSection/SkillsMain";
import HelperSection from "./Components/HelperSection";
import SubSkills from "./Components/skillSection/SubSkills";
import ExperienceMain from "./Components/experienceSection/ExperienceMain";
import ProjectMain from "./Components/projectsSection/ProjectMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";
import FooterMain from "./Components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
