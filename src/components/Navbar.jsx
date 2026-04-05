import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     
      <div className="flex justify-between items-center bg-slate-900 px-8 py-5 w-full sticky top-0 z-50 border-b border-slate-800 backdrop-blur">
        
        {/* Logo Section */}
        <div className="text-white group cursor-pointer">
          <code className="text-xl font-bold tracking-tighter text-blue-500">
            <span className="text-blue-500">&lt;</span>
            dev.portfolio
            <span className="text-blue-500"> /&gt;</span>
          </code>
        </div>

      
        <nav className="flex gap-8 items-center">
          <Link 
            className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105" 
            to="/home"
          >
            Home
          </Link>
          <Link 
            className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105" 
            to="/about"
          >
            About
          </Link>
          <Link 
            className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105" 
            to="/projects"
          >
            Project
          </Link>
          <Link 
            className="text-slate-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105" 
            to="/contact"
          >
            Contact
          </Link>
        </nav>

      </div>
    </>
  );
}