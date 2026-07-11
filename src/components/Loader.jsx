import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

function Loading3D() {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 2;
      ring1Ref.current.rotation.y = t * 2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 2.5;
      ring2Ref.current.rotation.z = t * 2.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 3;
      ring3Ref.current.rotation.z = t * 3;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} distort={0.5} speed={3} />
      </mesh>
    </group>
  );
}

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 38); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      
      <div className="w-full h-64 sm:h-96">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Loading3D />
        </Canvas>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-black mb-6 tracking-widest text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Kavidu Dushmantha
          </span>
        </h1>
        <div className="w-64 sm:w-80 h-1 bg-slate-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-4 text-cyan-400 font-mono text-sm tracking-widest">
          LOADING {progress}%
        </div>
      </div>

    </div>
  );
}