import "./App.css";
import { lazy, Suspense } from "react";
import MainLayout from "./layout/MainLayout";
import HomeSection from "./section_pages/Home";
import { SectionWrapper } from "./common/SectionWrapper";
import LoadingSpinner from "./ui/LoadingSpinner";

const ExperienceSection = lazy(() => import("./section_pages/Exprience"));
const ProjectsSection = lazy(() => import("./section_pages/Project"));
const EducationSection = lazy(() => import("./section_pages/Education"));
const SkillsSection = lazy(() => import("./section_pages/Skills"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <MainLayout>
      <SectionWrapper id="home">
        <HomeSection />
      </SectionWrapper>

      <Suspense fallback={<LoadingSpinner />}>
        <SectionWrapper id="experience">
          <ExperienceSection />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SectionWrapper id="skills">
          <SkillsSection />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SectionWrapper id="projects">
          <ProjectsSection />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SectionWrapper id="education">
          <EducationSection />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SectionWrapper id="footer">
          <Footer />
        </SectionWrapper>
      </Suspense>
    </MainLayout>
  );
}
