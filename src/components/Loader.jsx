import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";

const codeLogs = [
  "import { createRoot } from 'react-dom/client';",
  "import { Canvas } from '@react-three/fiber';",
  "System.init({ boot: true, env: 'production' });",
  "[INFO] Loading MERN stack modules...",
  "[INFO] Connecting to MongoDB cluster...",
  "[OK] Database connection established.",
  "[INFO] Initializing Spring Boot microservices...",
  "[OK] Eureka Server running on port 8761",
  "[INFO] Mounting villaHub booking components...",
  "[OK] PayHere sandbox gateway configured.",
  "[INFO] Verifying GitHub Actions CI/CD pipeline...",
  "[INFO] Deploying chronolux to AWS EC2 instance...",
  "[OK] Nginx reverse proxy active.",
  "[INFO] Checking IPsec VPN policies...",
  "[INFO] Running security checks (SQLi, XSS)...",
  "[OK] No vulnerabilities found.",
  "[INFO] WebGL context created.",
  "[INFO] Compiling custom Three.js shaders...",
  "[INFO] Preparing 3D space scene...",
  "[OK] Boot sequence complete.",
  "> SYSTEM READY_"
];

function Terminal3D({ lines }) {
  return (
    <group rotation={[-0.6, 0, 0]} position={[0, -0.5, 0]}>
      <Html transform wrapperClass="terminal-3d" distanceFactor={4}>
        <div className="w-[400px] sm:w-[550px] h-[350px] flex flex-col justify-end bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 p-6 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.2)] font-mono text-cyan-400 text-[10px] sm:text-xs leading-relaxed text-left overflow-hidden">
          {lines.map((line, index) => (
            <div key={index} className="opacity-90">{line}</div>
          ))}
        </div>
      </Html>
    </group>
  );
}

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const totalDuration = 4000;
    const progressInterval = 38;
    const lineInterval = totalDuration / codeLogs.length;

    const pTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, progressInterval);

    let currentIndex = 0;
    const lTimer = setInterval(() => {
      if (currentIndex < codeLogs.length) {
        setVisibleLines((prev) => [...prev, codeLogs[currentIndex]]);
        currentIndex++;
      }
    }, lineInterval);

    return () => {
      clearInterval(pTimer);
      clearInterval(lTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center bg-slate-950 overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
          <Terminal3D lines={visibleLines} />
        </Canvas>
      </div>

      <div className="absolute top-12 z-10 flex flex-col items-center w-full max-w-md px-6">
        <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-widest text-center drop-shadow-lg">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Kavidu Dushmantha
          </span>
        </h1>
        
        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mb-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between w-full text-cyan-400 font-mono text-xs sm:text-sm tracking-widest">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>

    </div>
  );
}