import { FaUserGraduate, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">
            Introduction
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
      
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <FaUserGraduate className="text-cyan-400 text-2xl" />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Software Engineer</h3>
            <p className="text-slate-400 leading-relaxed">
              Currently an <span className="text-white">Undergraduate</span> at the University of Kelaniya, focusing on scalable architecture and clean code.
            </p>
          </div>

          
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <FaCode className="text-blue-400 text-2xl" />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Full Stack Developer</h3>
            <p className="text-slate-400 leading-relaxed">
              Specializing in the <span className="text-white">MERN Stack</span>. Building responsive, high-performance web applications from front to back.
            </p>
          </div>

         
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <FaRocket className="text-purple-400 text-2xl" />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Always Learning</h3>
            <p className="text-slate-400 leading-relaxed">
              Driven by curiosity. Constantly exploring <span className="text-white">emerging technologies</span> to solve real-world problems.
            </p>
          </div>

        </div>

       
        <div className="mt-16 bg-slate-900/30 border border-slate-800/50 p-8 rounded-3xl text-center max-w-4xl mx-auto">
           <p className="text-slate-400 text-lg italic">
            "I believe that great software is built at the intersection of technical excellence and user empathy."
           </p>
        </div>

      </div>
    </section>
  );
}