import SectionHeader from '../common/SectionHeader'
import ChildContainer from '../ui/ChildContainer'
import ElectricBorder from '../ui/ElectricBorder';
import GlowingBorderCard from '../ui/GlowingBorderCard'
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era Hill University",
    period: "2024 - 2026",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "Shri Dev Suman University",
    period: "2021 - 2024",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Senior Secondary School",
    period: "2020 - 2021",
  },
  {
    degree: "High School (Class X)",
    institution: "Secondary School",
    period: "2018 - 2019",
  },
];
export default function Education() {
  return (
    <ChildContainer id='education'>
      <SectionHeader title='Education' />
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-cyan-500/30" />

        {education.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.degree}
              className="relative mb-12 flex items-center"
            >
              {/* Left Side */}
              <div className={`w-1/2 ${isLeft ? "pr-8" : ""}`}>
                {isLeft && (
                  <ElectricBorder>
                    <div className="p-5">


                      <h3 className="text-xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="text-zinc-400">
                        {item.institution}
                      </p>
                      <p className="text-cyan-400 text-sm">
                        {item.period}
                      </p>

                    </div>
                  </ElectricBorder>
                )}
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-zinc-950 bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

              {/* Right Side */}
              <div className={`w-1/2 ${!isLeft ? "pl-8" : ""}`}>
                {!isLeft && (
                  <ElectricBorder>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="text-zinc-400">
                        {item.institution}
                      </p>
                      <p className="text-cyan-400 text-sm">
                        {item.period}
                      </p>
                    </div>
                  </ElectricBorder>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </ChildContainer>
  )
}

