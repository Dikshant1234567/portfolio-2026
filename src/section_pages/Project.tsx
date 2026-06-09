import ChildContainer from '../ui/ChildContainer'
import GlowingBorderCard from '../ui/GlowingBorderCard'
import openaiImage from "../assets/openai.png"
import DigitalPlace from "../assets/Digital-place.png"
import SectionHeader from '../common/SectionHeader';
import ElectricBorder from '../ui/ElectricBorder';

const Data = [
  {
    img: openaiImage,
    title: "ai-image generator",
    mixCss: "darken",
    description:
      "You can enter the prompt to generate a high quality image for your download for free and also can share to the community. ",
    linkToSite: "https://ai-image-generator-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "OpenAi",
      3: "Tailwind",
    },
  },
  {
    img: DigitalPlace,
    title: "Digital Market Place",
    mixCss: "darken",
    description:
      "This is an application where you can buy  and sell digital products.The Products can be updated by the user anytime and can be sell or removed",
    linkToSite: "https://digital-marketplace-dikshant.netlify.app/",
    techStack: {
      1: "Next js",
      2: "Mantine UI",
      3: "Node js and Express Js",
    },
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png",
    title: "WhatsApp-clone",
    mixCss: "darken",
    description:
      "A messaging app where you can start realtime chatting with your file with your google account and check the online/offline status of your friend and you can check out the older messages and your profile about.",
    linkToSite: "https://whatsapp-clone-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "MUI",
      3: "Soket.io",
    },
  },
  {
    img: "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
    title: "Flipkart-clone",
    mixCss: "darken",
    description:
      "A flipkart clone where you can Sinup-Login and checkout the product details and place your oder.",
    linkToSite: "https://flipkart-clone-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "Redux",
      3: "MUI",
    },
  },
  {
    img: "https://w7.pngwing.com/pngs/886/137/png-transparent-file-sharing-file-hosting-service-box-secure-miscellaneous-text-logo.png",
    title: "Online File-sharing Application",
    mixCss: "hard-light",
    description:
      "An Online file sharing application where you can upload your images and get a porper HTTPS link to share the file with your friends.",
    linkToSite: "https://file-sharing-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "MUI",
      3: "Multer",
    },
  },
];
interface ProjectCardProps {
  project: {
    img: string;
    title: string;
    description: string;
    linkToSite: string;
    techStack: Record<string, string>;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='p-1'>
      {/* Image */}
      <div className="relative h-52 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl"
        />

        <div className="absolute inset-0 bg-linear-to-t` from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {Object.values(project.techStack).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.linkToSite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
function Project() {
  return (
    <ChildContainer id='project'>
      <SectionHeader title='Projects' />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid auto-rows-[1fr] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Data.map((project, index) => (

            <GlowingBorderCard
              key={project.title}
              className={`
          h-full overflow-hidden rounded-3xl
          ${index === 0 ? "xl:col-span-2" : ""}
        `}
            >
              <ProjectCard project={project} />
            </GlowingBorderCard>
          ))}
        </div>
      </div>
    </ChildContainer>
  )
}

export default Project
