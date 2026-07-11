import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

function DeepSpacePlanets() {
  const planetGroupRef = useRef();
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (planetGroupRef.current) {
      planetGroupRef.current.rotation.y = t * 0.02;
      planetGroupRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    }
    
    if (moonRef.current) {
      moonRef.current.position.x = Math.sin(t * 0.5) * 4;
      moonRef.current.position.z = Math.cos(t * 0.5) * 4;
    }
  });

  return (
    <group ref={planetGroupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[2, 64, 64]} position={[-3, 1, -5]}>
          <meshStandardMaterial color="#0c4a6e" wireframe={true} opacity={0.3} transparent />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[4, -2, -3]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.2} speed={1} opacity={0.6} transparent />
        </Sphere>
      </Float>

      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#818cf8" />
      
      <Stars radius={150} depth={100} count={7000} factor={6} saturation={0.5} fade speed={1.5} />
      
      <DeepSpacePlanets />
    </Canvas>
  );
}