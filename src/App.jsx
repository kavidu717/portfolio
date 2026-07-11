import { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Herosection";
import About from "../src/components/Abot";
import TechStack from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Scene3D from "../src/components/Scene3D";
import Loader from "../src/components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative bg-slate-950 min-h-screen text-white overflow-hidden">
      
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <Scene3D />
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
      
    </main>
  );
}

export default App;