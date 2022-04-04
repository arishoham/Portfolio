import React, { useRef, useState, useEffect, useContext } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function Earth({ rot, location, setLocation }) {
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useLoader(
    TextureLoader,
    [
      'textures/8k_earth_daymap.jpg',
      'textures/8k_earth_normal_map.jpg',
      'textures/8k_earth_specular_map.jpg',
      'textures/8k_earth_clouds.jpg',
      'textures/8k_earth_nightmap.jpg',
    ]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();
  const orbitRef = useRef();

  useEffect(() => {
    if (location) {
      if(window.innerWidth <= 640) {
        orbitRef.current.object.position.y = 1.8583891134230555;
        orbitRef.current.object.position.z = 1.9170047770646415;
      } else {
        orbitRef.current.object.position.y = 2.033004867564547;
        orbitRef.current.object.position.z = 2.0981430799032514;
      }
      orbitRef.current.object.position.x = 0.6587735482106234;
      earthRef.current.rotation.x = 0;
      earthRef.current.rotation.y = 0;
      earthRef.current.rotation.z = 0;
      cloudsRef.current.rotation.x = 0;
      cloudsRef.current.rotation.y = 0;
      cloudsRef.current.rotation.z = 0;
      rot.current = false
      setLocation(false);
    }
  }, [location, setLocation, rot]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (rot.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
      cloudsRef.current.rotation.y = elapsedTime / 6;
    } else {
      clock.start();
    }
  });

  return (
    <>
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
      <mesh
        ref={earthRef}
        position={[0, 0, 0]}
        scale={2.5}
      >
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
          rotateSpeed={0.2}
        />
      </mesh>
    </>
  );
}
