import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Herosection";
import About from "../src/components/Abot";
import TechStack from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

function App() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      
      {/* 1. Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. About Section */}
      <section id="about">
        <About />
        <TechStack /> {/* Tech stack usually lives inside or under About */}
      </section>

      {/* 3. Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* 4. Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
    </main>
  );
}

export default App;