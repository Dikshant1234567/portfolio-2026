import "./App.css";
import MainLayout from "./layout/MainLayout";
import HomeSection from "./section_pages/Home";
import { SectionWrapper } from "./common/SectionWrapper";

import ExperienceSection from "./section_pages/Exprience";
import ProjectsSection from "./section_pages/Project";
import EducationSection from "./section_pages/Education";
import SkillsSection from "./section_pages/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MainLayout>
      <SectionWrapper id="home">
        <HomeSection />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="project">
        <ProjectsSection />
      </SectionWrapper>

      <SectionWrapper id="education">
        <EducationSection />
      </SectionWrapper>

      <SectionWrapper id="footer">
        <Footer />
      </SectionWrapper>
    </MainLayout>
  );
}
