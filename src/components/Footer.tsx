import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Dikshant Naudiyal
            </h3>

            <p className="mt-2 max-w-md text-sm text-zinc-400">
              Web Developer passionate about building
              scalable web applications and crafting exceptional
              user experiences.
            </p>
          </div>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/Dikshant1234567"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/dikshant-naudiyal-6415b0235/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:dikshantnaudiyal06@gmail.com"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;