import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

function DeepSpacePlanets() {
  const planetGroupRef = useRef();
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (planetGroupRef.current) {
      planetGroupRef.current.rotation.y = t * 0.03;
      planetGroupRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    }
    
    if (moonRef.current) {
      moonRef.current.position.x = Math.sin(t * 0.6) * 5;
      moonRef.current.position.z = Math.cos(t * 0.6) * 5;
    }
  });

  return (
    <group ref={planetGroupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={4}>
        <Sphere args={[2, 64, 64]} position={[-4, 2, -5]}>
          <meshStandardMaterial 
            color="#0c4a6e" 
            emissive="#0284c7" 
            emissiveIntensity={0.6} 
            wireframe={true} 
            opacity={0.7} 
            transparent 
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[1.5, 64, 64]} position={[5, -2, -4]}>
          <MeshDistortMaterial 
            color="#06b6d4" 
            emissive="#06b6d4"
            emissiveIntensity={0.4}
            distort={0.4} 
            speed={2} 
            opacity={0.8} 
            transparent 
          />
        </Sphere>
      </Float>

      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#818cf8" />
      
      <Stars radius={150} depth={100} count={7000} factor={6} saturation={0.8} fade speed={1.5} />
      
      <DeepSpacePlanets />
    </Canvas>
  );
}