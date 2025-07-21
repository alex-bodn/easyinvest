'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';

const SpinningCoin = dynamic(() => import('@/components/ui/Safe3D'), { ssr: false });

export default function CanvasCoinWrapper() {
  return (
    <Canvas className="h-screen p-10">
      <SpinningCoin />
    </Canvas>
  );
}