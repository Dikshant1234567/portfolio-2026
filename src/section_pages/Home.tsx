import ChildContainer from "../ui/ChildContainer";
import GlowingCard from "../ui/GlowingCard";
import profileSrc from "../assets/imresizer-profile.webp";
export default function Home() {
  return (
    <ChildContainer id="home" classname="flex items-start space-x-16 pt-18">
      <div className="">
        <GlowingCard
          className="mt-0 w-2xs"
          name="Dikshant Naudiyal"
          title="Web Developer"
          handle="dikshantnadiyal06@gmail.com"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profileSrc}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() =>
            (window.location.href = "mailto:dikshantnaudiyal06@gmail.com")
          }
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          // iconUrl={CodeXml}
        />
      </div>
      <div className=" flex flex-col justify-center mt-[10%]">
        <h3 className="text-2xl md:text-3xl text-gray-600">
          A <span className="text-blue-600">Frontend Developer</span>
        </h3>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl">
          I build beautiful, responsive websites and web applications with
          React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </ChildContainer>
  );
}
