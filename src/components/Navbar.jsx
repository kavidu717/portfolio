import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";


const NavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-slate-300 hover:text-cyan-400 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:scale-105"
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="bg-slate-950/80 sticky top-0 z-[100] border-b border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
      
        <div className="text-white group cursor-pointer">
          <Link to="/home">
            <code className="text-xl font-bold tracking-tighter text-blue-500">
              <span className="text-blue-500">&lt;</span>
              dev.portfolio
              <span className="text-blue-500"> /&gt;</span>
            </code>
          </Link>
        </div>

      
        <nav className="hidden md:flex gap-8 items-center">
          <NavItem to="/home" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/contact" label="Contact" />
        </nav>

  
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-10">
              <NavItem to="/home" label="Home" onClick={closeMenu} />
              <NavItem to="/about" label="About" onClick={closeMenu} />
              <NavItem to="/projects" label="Projects" onClick={closeMenu} />
              <NavItem to="/contact" label="Contact" onClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}