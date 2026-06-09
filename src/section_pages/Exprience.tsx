
import SectionHeader from '../common/SectionHeader'
import ChildContainer from '../ui/ChildContainer'
import ElectricBorder from '../ui/ElectricBorder';
import GlowingCard from '../ui/GlowingCard';

const ExprienceDetails = () => {
  const experiences = [
    {
      title: "Fullstack Developer Intern",
      company: "Medhavyn Technologies Pvt. Ltd",
      location: "Nashik",
      period: "02/2026 - 06/2026 (4 months)",
      description: [
        "Developed 5+ responsive web pages using React and Tailwind CSS",
        "Collaborated with senior developers to implement UI components",
        "Fixed 20+ bugs across the company's main product",
        "Participated in daily standups and agile ceremonies",
        "Learned industry best practices for code review and Git workflow",
      ],
      achievements: [
        "Received appreciation for delivering features ahead of schedule",
        "Implemented a reusable component used across 3 projects",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "Node Js",
        "Express Js",
        "Postgres"
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className='p-8'
        // className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {exp.title}
              </h3>

              <p className="text-lg text-zinc-300 mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-zinc-500 mt-1">
                📍 {exp.location}
              </p>
            </div>

            <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 bg-white/5">
              {exp.period}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Responsibilities */}
          <div className="mt-8">
            <h4 className="font-semibold text-white mb-4">
              Responsibilities
            </h4>

            <ul className="space-y-3">
              {exp.description.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-zinc-300"
                >
                  <span className="mt-1 text-green-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mt-8">
            <h4 className="font-semibold text-white mb-4">
              Key Achievements
            </h4>

            <div className="space-y-3">
              {exp.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300"
                >
                  🏆 {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
function Exprience() {

  return (
    <ChildContainer id='exprience' classname=''>
      <SectionHeader title='Exprience' />
      <ElectricBorder>
        <GlowingCard
          width="100%"
          height='120vh'
          className='items-center p-2'
          isCardContentChildren={<ExprienceDetails />}
        />
      </ElectricBorder>
    </ChildContainer>
  )
}

export default Exprience
