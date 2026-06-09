import "./App.css";
import MainLayout from "./layout/MainLayout";
import LazySection from "./components/LazySection";
import { lazy, Suspense, } from "react";
import LoadingSpinner from "./ui/LoadingSpinner";
import HomeSection from "./section_pages/Home";
import { SectionWrapper } from "./common/SectionWrapper";

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

      <SectionWrapper id="experience">
        <LazySection>
          <Suspense fallback={<LoadingSpinner />}>
            <ExperienceSection />
          </Suspense>
        </LazySection>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <LazySection>
          <Suspense fallback={<LoadingSpinner />}>
            <SkillsSection />
          </Suspense>
        </LazySection>
      </SectionWrapper>

      <SectionWrapper id="project">
        <LazySection>
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectsSection />
          </Suspense>
        </LazySection>
      </SectionWrapper>

      <SectionWrapper id="education">
        <LazySection>
          <Suspense fallback={<LoadingSpinner />}>
            <EducationSection />
          </Suspense>
        </LazySection>
      </SectionWrapper>

      <SectionWrapper id="footer" >
        <LazySection minHeight={200}>
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </LazySection>
      </SectionWrapper>
    </MainLayout>
  );
}