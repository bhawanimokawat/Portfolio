import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
 
 

function Home() {
  return (
    <div className="min-h-screen bg-[#12080D] text-white">

      <Navbar />
       
      <Hero />

      <Projects />
      
      <Skills />
      
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default Home;