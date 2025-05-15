import HeroGradient from "./Components/heroSection/HeroGradient";
import HeroMain from "./Components/heroSection/HeroMain";
import NavbarMain from "./Components/Navbar/NavbarMain";
import SubHeroSection from "./Components/heroSection/SubHeroSection";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import SkillsMain from "./Components/skillSection/SkillsMain";
import HelperSection from "./Components/HelperSection";
import SubSkills from "./Components/skillSection/SubSkills";

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
      <HelperSection />
    </main>
  );
}

export default App;
