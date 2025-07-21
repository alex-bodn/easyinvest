'use client';
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Center } from '@react-three/drei'

import { Group } from 'three'

export default function SpinningCoin() {
  const coinRef = useRef<Group>(null);

  const { scene } = useGLTF('/goldbar.glb')

  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  
  useFrame(() => {
    if (!coinRef.current) return

    const speed = 0.001;
    const rotation = coinRef.current.rotation.y;

    if (direction === 'forward') {
      coinRef.current.rotation.y += speed
      if (rotation >= Math.PI / 2.5) setDirection('backward')
    } else if (direction === 'backward') {
      coinRef.current.rotation.y -= speed
      if (rotation <= -Math.PI / 50) setDirection('forward')
    }
    })

    
  return (
    <group ref={coinRef} scale={[4, 4, 4]} position={[-2, 0, 0]}>
      <ambientLight intensity={1.2} />
      <directionalLight
        intensity={3}
        position={[5, 10, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="sunset" />

      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  )
}