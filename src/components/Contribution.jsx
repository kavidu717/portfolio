import { GitHubCalendar } from "react-github-calendar";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function FloatingGitNode() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial color="#06b6d4" wireframe={true} emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
        <Sphere args={[1.2, 32, 32]}>
          <MeshDistortMaterial color="#1e40af" distort={0.3} speed={2} emissive="#1e3a8a" emissiveIntensity={0.8} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function GithubContributions() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 relative z-10">
      
      {/* Title Section */}
      <div className="text-center mb-12">
        <h3 className="text-cyan-400 font-mono text-sm sm:text-lg tracking-[0.2em] uppercase drop-shadow-md mb-2">
          Open Source & Code
        </h3>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
          GitHub <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Metrics</span>
        </h2>
      </div>
      
      <div className="w-full max-w-7xl flex flex-col gap-6">
        
        {/* Top Row: Languages (1 Col) + Profile Details Graph (2 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Top Languages Card */}
          <div className="col-span-1 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-4  shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-center group">
            <img 
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=kavidu717&theme=tokyonight" 
              alt="GitHub Repos Per Language" 
              className="w-full h-auto max-w-[320px] object-contain  group-hover:scale-105 transition-transform duration-500"
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>

          {/* Profile Details Graph Card */}
          <div className="col-span-1 lg:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-4  shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-center group">
            <img 
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kavidu717&theme=tokyonight" 
              alt="GitHub Profile Details" 
              className="w-full h-auto max-w-[650px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>

        </div>

        {/* Bottom Row: Calendar (2 Cols) + 3D Node (1 Col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* GitHub Calendar */}
          <div className="col-span-1 lg:col-span-2 p-6 sm:p-8 bg-slate-900/40 backdrop-blur-md border border-slate-700/50  shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-center overflow-x-auto custom-scrollbar">
            <div className="min-w-[750px] flex justify-center">
              <GitHubCalendar 
                username="kavidu717" 
                colorScheme="dark"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                theme={{
                  dark: ['#0f172a', '#0891b2', '#06b6d4', '#22d3ee', '#67e8f9']
                }}
              />
            </div>
          </div>

          {/* 3D Floating Element */}
          <div className="col-span-1 h-[300px] lg:h-auto bg-slate-900/40 backdrop-blur-md border border-slate-700/50  relative overflow-hidden flex items-center justify-center shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-blue-500/30 transition-all duration-300">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 5]} intensity={1} color="#06b6d4" />
              <FloatingGitNode />
            </Canvas>
            
            {/* Beautiful Glowing Badge inside the 3D container */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
              <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">Git Node Active</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}