import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "LMS Paper Hub",
    description: "A comprehensive platform for downloading academic papers and managing learning materials efficiently. Built with React, Node.js, and MongoDB. and also includes real email sending functionality",
    liveLink: "https://lms-fronend-gamma.vercel.app/",
    repoLink: "https://github.com/kavidu717/Paper-Download-System", // Replace with your actual link
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "CineSearch App",
    description: "A film exploration application using the OMDb API, featuring real-time search and detailed movie insights.",
    liveLink: "https://search-film-application.vercel.app/",
    repoLink: "https://github.com/kavidu717/search-film-application", // Replace with your actual link
    tech: ["React", "Tailwind", "OMDb API"]
  },
  
];

export default function Projects() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">
            My Work
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
     
              <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                {project.description}
              </p>

       
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-cyan-400/80 border border-cyan-400/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  <FaExternalLinkAlt className="text-lg" /> Demo
                </a>
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  <FaGithub className="text-xl" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}