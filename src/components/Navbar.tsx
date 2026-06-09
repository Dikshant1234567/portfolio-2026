import { useMemo } from "react";
import { useActiveSection } from "../context/ActiveSectionContext";
import GooeyNav from "../ui/nav";

const items = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const SECTION_INDEX: Record<string, number> = {
  home: 0,
  experience: 1,
  skills: 2,
  project: 3,
  education: 4,
};

function Navbar() {
  const { activeSection } = useActiveSection();

  const activeSectionId = useMemo(() => SECTION_INDEX[activeSection] ?? null, [activeSection]);

  console.log("activeSection is " + activeSection)
  console.log("activeSection id " + activeSectionId)
  return (
    <div
      style={{ position: "sticky", top: 0, zIndex: 1000, }}
      className="pt-4"
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={activeSectionId}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default Navbar;