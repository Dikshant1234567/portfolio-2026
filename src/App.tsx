import "./App.css";
import MainLayout from "./layout/MainLayout";
import LazySection from "./components/LazySection";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./ui/LoadingSpinner";

import HomeSection from "./section_pages/Home";

const ExperienceSection = lazy(() => import("./section_pages/Exprience"));
const ProjectsSection = lazy(() => import("./section_pages/Project"));
const EducationSection = lazy(() => import("./section_pages/Education"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <MainLayout>
      <HomeSection />

      <LazySection>
        <Suspense fallback={<LoadingSpinner />}>
          <ExperienceSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectsSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<LoadingSpinner />}>
          <EducationSection />
        </Suspense>
      </LazySection>

      <LazySection minHeight={200}>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </LazySection>
    </MainLayout>
  );
}