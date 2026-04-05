export default function Herosection() {
  return (
    <section className="relative w-full min-h-screen bg-slate-950 flex items-center justify-center py-20 px-6 overflow-hidden">
      
    
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-mono text-lg tracking-[0.2em] uppercase">
              Software Engineering Student
            </h3>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Kavidu Dushamantha</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              An enthusiastic <span className="text-white font-semibold">Undergraduate Software Engineering Student</span> at the 
              <span className="text-cyan-400"> University of Kelaniya</span>. 
              I specialize in building modern web applications with a focus on clean code and user-centric design.
            </p>
          </div>

         
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-slate-950 font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105">
              Download CV
            </button>
            
          
          </div>

        
          <div className="pt-8 flex justify-center lg:justify-start gap-10 border-t border-slate-900">
            <div>
              <p className="text-white text-2xl font-bold">2+</p>
              <p className="text-slate-500 text-sm">Years Learning</p>
            </div>
           
          </div>
        </div>

      
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group">
           
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
           
            <div className="relative bg-slate-900 p-2 rounded-2xl">
              <img 
                src="profile pic.jpg" 
                alt="Aditya Kumar" 
                className="w-72 h-72 md:w-[450px] md:h-[450px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

         
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-lg shadow-2xl hidden md:block">
              <p className="text-cyan-400 font-bold text-xl">Kelaniya</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">University</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}