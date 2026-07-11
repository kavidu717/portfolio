import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Herosection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
      
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative w-full">
        
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8 bg-slate-950/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-3xl border border-slate-800/30 lg:border-none shadow-2xl lg:shadow-none">
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-mono text-sm sm:text-lg tracking-[0.2em] uppercase drop-shadow-md">
              Software Engineering Student
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg">
              I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Kavidu Dushmantha</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
              An enthusiastic <span className="text-white font-semibold">Undergraduate Software Engineering Student</span> at the 
              <span className="text-cyan-400"> University of Kelaniya</span>. 
              I specialize in building modern web applications with a focus on clean code and user-centric design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
            <a href="/Kavidu Dushmantha.pdf" 
              download="Kavidu Dushmantha.pdf"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-slate-950 font-bold text-base sm:text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Download CV
            </a>
            <div className="flex gap-6 items-center">
              <a 
                href="https://github.com/kavidu717" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-2xl sm:text-3xl hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1 drop-shadow-md"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/kavidu-dushmantha-468a3631b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-2xl sm:text-3xl hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1 drop-shadow-md"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex justify-center lg:justify-start gap-8 sm:gap-12 border-t border-slate-800/30">
            <div className="flex flex-col">
              <span className="text-white text-2xl sm:text-3xl font-bold drop-shadow-md">2+</span>
              <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Years Learning</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-2xl sm:text-3xl font-bold drop-shadow-md">4+</span>
              <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Projects Built</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center relative mt-4 lg:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-md p-2  border border-slate-700/50">
              <img 
                src="profile pic.jpg" 
                alt="Kavidu Dushmantha" 
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] object-cover   hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-3 sm:p-5 rounded-xl shadow-2xl">
              <p className="text-cyan-400 font-bold text-lg sm:text-2xl leading-none">Kelaniya</p>
              <p className="text-slate-400 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mt-1">University Student</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}