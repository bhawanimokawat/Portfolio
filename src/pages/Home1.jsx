//import Navbar from "../components/Navbar";
//import Hero from "../components/Hero";
import About1 from "../components/About1";
import Projects1 from "../components/Projects1";
import Skills1 from "../components/Skills1";
import Contact1 from "../components/Contact1";
import Footer1 from "../components/Footer1";
import Hero1 from "../components/Hero1";
import Navbar1 from "../components/Navbar1";
import Timeline from "../components/Timeline";
//import TechOrbit from "../components/TechOrbit";
 
 

function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      <Navbar1 />
       
      <Hero1 />

      <Projects1 />
      <Timeline />
      
      <Skills1 />
      
      <About1 />
      <Contact1 />
      <Footer1 />
     
    </div>
  );
}

export default Home;