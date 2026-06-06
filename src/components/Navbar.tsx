
import GooeyNav from '../common/nav';

function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Exprience", href: "#exprience" },
    { label: "Project", href: "#project" },
    { label: "Education", href: "#education" },
  ];

  return <div style={{ position: 'sticky', top:"0" }} className=' pt-4'>
    <GooeyNav
      items={items}
      particleCount={15}
      particleDistances={[90, 10]}
      particleR={100}
      initialActiveIndex={0}
      animationTime={600}
      timeVariance={300}
      colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    />
  </div>
}

export default Navbar
