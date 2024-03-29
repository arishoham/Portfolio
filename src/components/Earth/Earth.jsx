import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function Earth({ rot, location }) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      'textures/8k_earth_daymap.jpg',
      'textures/8k_earth_normal_map.jpg',
      'textures/8k_earth_specular_map.jpg',
      'textures/8k_earth_clouds.jpg',
    ]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();
  const orbitRef = useRef();

  function FindHome() {
    let vec;
    if (location === 'Austin') {
      vec =
        window.innerWidth <= 640
          ? new THREE.Vector3(-0.33, 1.39, 2.34)
          : new THREE.Vector3(-0.34, 1.49, 2.56);
    }
    if (location === 'Boston') {
      vec =
        window.innerWidth <= 640
          ? new THREE.Vector3(0.65, 1.85, 1.91)
          : new THREE.Vector3(0.65, 2.03, 2.09);
    }
    return useFrame(({ camera }) => {
      camera.position.lerp(vec, 0.05);
    });
  }

  useEffect(() => {
    if (!location) return;

    earthRef.current.rotation.y = 0;
    cloudsRef.current.rotation.y = 0;
    rot.current = false;
  }, [location, rot]);

  useFrame(({ clock }) => {
    if (rot.current) {
      const elapsedTime = clock.getElapsedTime();
      earthRef.current.rotation.y = elapsedTime / 6;
      cloudsRef.current.rotation.y = elapsedTime / 6;
    } else {
      clock.start();
    }
  });

  return (
    <>
      {location && <FindHome />}
      <ambientLight intensity={0.1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <mesh ref={cloudsRef} position={[0, 0, 0]} scale={2.5}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          ref={orbitRef}
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.4}
          minDistance={2.75}
          maxDistance={7}
          rotateSpeed={0.2}
        />
      </mesh>
    </>
  );
}
