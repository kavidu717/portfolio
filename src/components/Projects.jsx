import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {

     title: "chronolux",
     image: "https://res.cloudinary.com/doujmzgn3/image/upload/v1781716751/Screenshot_2026-06-17_224856_v3fk6s.png",
    description: " A modern and elegant web application for exploring premium watches. Features a sleek user interface for a seamless browsing experience.",
    liveLink: "https://chrono-lux.store/",
    repoLink: "https://github.com/kavidu717/chronolux",
    tech: ["React", "Node.js", "MongoDB","Redux","Tailwind",]

  },
  {
     title: "villHUB",
     image: "https://res.cloudinary.com/doujmzgn3/image/upload/v1781716903/Screenshot_2026-06-17_225102_wd80oq.png",
    description: "A comprehensive platform for the booking and management of villas, offering a seamless experience for both villa owners and customers. Built with React, Node.js, and MongoDB. and also includes real email sending functionality ",
    liveLink: "https://villa-hub-front.vercel.app/",
    repoLink: "https://github.com/kavidu717/villaHub-front",
    tech: ["React", "Node.js", "MongoDB"]
  },


  

  {
    title: "LMS Paper Hub",
    image: "https://res.cloudinary.com/doujmzgn3/image/upload/v1781716816/Screenshot_2026-06-17_224957_dvgevh.png",
    description: "A comprehensive platform for downloading academic papers and managing learning materials efficiently. Built with React, Node.js, and MongoDB. and also includes real email sending functionality",
    liveLink: "https://lms-fronend-gamma.vercel.app/",
    repoLink: "https://github.com/kavidu717/Paper-Download-System", 
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "CineSearch App",
    image: "https://res.cloudinary.com/doujmzgn3/image/upload/v1781716959/Screenshot_2026-06-17_225224_nqibpj.png",
    description: "A film exploration application using the OMDb API, featuring real-time search and detailed movie insights.",
    liveLink: "https://search-film-application.vercel.app/",
    repoLink: "https://github.com/kavidu717/search-film-application",
    tech: ["React", "Tailwind", "OMDb API"]
  },
  
];

export default function Projects() {
  return (
    <section className="bg-transparent py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">
            My Work
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              
              {/* Project Image */}
              <div className="w-full h-60 mb-6 overflow-hidden rounded-xl border border-slate-800/50 relative">
                {/* Overlay gradient for a cooler look */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-cyan-400/80 border border-cyan-400/20 px-2 py-1 rounded bg-cyan-400/5">
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