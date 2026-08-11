import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const MonogramMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

export const Monogram3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-72 flex items-center justify-center border border-white/10 rounded-sm bg-[#121216]">
        <div className="text-center">
          <span className="font-serif text-8xl font-bold text-[#d4af37]">HG</span>
          <p className="text-xs font-mono text-[#a3a09b] mt-2 tracking-widest">
            HRISHABH GUPTA
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-72 relative rounded-sm overflow-hidden border border-white/10 bg-[#121216]/50">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#fff2d4" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#d4af37" />
        <MonogramMesh />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#d4af37]/80 uppercase">
          INTERACTIVE MONOGRAM (HG)
        </span>
      </div>
    </div>
  );
};
