import { GitHubCalendar } from "react-github-calendar";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

// 3D Floating Element (Git Node / Cyber Core)
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
        {/* පිටත තියෙන Wireframe එක (Tech vibe එකට) */}
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial color="#06b6d4" wireframe={true} emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
        {/* ඇතුළත තියෙන දිලිසෙන ගෝලය */}
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
      
      <div className="text-center mb-12">
        <h3 className="text-cyan-400 font-mono text-sm sm:text-lg tracking-[0.2em] uppercase drop-shadow-md mb-2">
          Open Source & Code
        </h3>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
          GitHub <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Metrics</span>
        </h2>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Left Side: GitHub Stats Widgets */}
        <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Main GitHub Stats Card */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 p-2 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-shadow duration-300 w-full sm:w-1/2">
                <img 
                 src="https://github-readme-stats.vercel.app/api?username=kavidu717&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=cbd5e1&icon_color=06b6d4" 
                 alt="GitHub Stats" 
                 className="w-full h-auto object-contain"
                onError={(e) => e.target.style.display = 'none'} 
/>
          </div>

          {/* Top Languages Card */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 p-2 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-shadow duration-300 w-full sm:w-1/2">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=kavidu717&theme=tokyonight&hide_border=true&layout=compact&bg_color=00000000&title_color=22d3ee&text_color=cbd5e1" 
              alt="Top Languages" 
              className="w-full h-auto object-contain"
               onError={(e) => e.target.style.display = 'none'} 
            />
          </div>
        </div>

        {/* Right Side: 3D Floating Element */}
        <div className="col-span-1 h-64 lg:h-auto bg-slate-900/30 backdrop-blur-sm border border-slate-800/30 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.1)]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} color="#06b6d4" />
            <FloatingGitNode />
          </Canvas>
          <div className="absolute bottom-4 text-center w-full pointer-events-none">
             <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">Git Node Active</p>
          </div>
        </div>

      </div>

      {/* Bottom: Contribution Calendar */}
      <div className="w-full max-w-6xl p-6 sm:p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] flex justify-center overflow-x-auto custom-scrollbar">
        <div className="min-w-[800px]">
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

    </div>
  );
}