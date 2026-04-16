 import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import About from "./components/Abot";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
  export default function App() {
  return (
    <>
          <Navbar />
          <Herosection />
          <About />
          <Skills />
          <Projects />
          <Contact />
    </>
  );
}


