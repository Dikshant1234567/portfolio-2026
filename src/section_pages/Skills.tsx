import SectionHeader from "../common/SectionHeader";
import ChildContainer from "../ui/ChildContainer";
import SkillsCarsouel from "../ui/SkillsCarsouel";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

export default function Skills() {
  return (
    <ChildContainer id="skills">
      <SectionHeader title="Skills" />
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="mt-28"
      >
        <SkillsCarsouel
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </ChildContainer>
  );
}
