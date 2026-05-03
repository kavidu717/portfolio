import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {  AnimatePresence } from "framer-motion";

// Sub-component for individual links
const NavItem = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-300 hover:text-cyan-400 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:scale-105"
  >
    {label}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="bg-slate-950/80 sticky top-0 z-[100] border-b border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo - Clicks back to top */}
        <a href="#home" className="text-white group cursor-pointer">
          <code className="text-xl font-bold tracking-tighter text-blue-500">
            <span className="text-blue-500">&lt;</span>
            dev.portfolio
            <span className="text-blue-500"> /&gt;</span>
          </code>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavItem href="#home" label="Home" />
          <NavItem href="#about" label="About" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#contact" label="Contact" />
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400 text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-10">
              <NavItem href="#home" label="Home" onClick={closeMenu} />
              <NavItem href="#about" label="About" onClick={closeMenu} />
              <NavItem href="#projects" label="Projects" onClick={closeMenu} />
              <NavItem href="#contact" label="Contact" onClick={closeMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}