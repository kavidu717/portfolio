import React from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiExpress,
  SiMysql,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, color: "group-hover:text-yellow-400" },
  { name: "Java", icon: <FaJava />, color: "group-hover:text-red-500" },
  { name: "React", icon: <SiReact />, color: "group-hover:text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "group-hover:text-green-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "group-hover:text-sky-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "group-hover:text-emerald-500" },
  { name: "Express", icon: <SiExpress />, color: "group-hover:text-slate-300" },
  { name: "Figma", icon: <SiFigma />, color: "group-hover:text-purple-400" },
 { name: "MySQL", icon: <SiMysql />, color: "group-hover:text-blue-400" },
];

export default function TechStack() {

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">
            Expertise
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Stack</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

      
        <div className="flex relative">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-slate-900/50 border border-slate-800 px-8 py-4 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-3xl text-slate-400 transition-colors duration-300 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-white font-bold tracking-wide uppercase text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

       
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            Hover to explore • Continuous Integration
          </p>
        </div>
      </div>
    </section>
  );
}