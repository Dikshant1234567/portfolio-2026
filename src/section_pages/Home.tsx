import ChildContainer from '../ui/ChildContainer'
import ProfileCard from '../ui/ProfileCard'
import img from "../assets/profile.jpg"
import RotatingText from '../ui/RotatingText'

export default function Home() {
  return (
    <ChildContainer id='home' classname='flex items-start space-x-16 pt-18'>
      <div className=''>
        <ProfileCard 
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={img}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgba(0, 230, 255, 0.9)"
          iconUrl={img}
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
      <div className='bg-amber-400'>
        
        skak
      </div>
    </ChildContainer>
  )
}
