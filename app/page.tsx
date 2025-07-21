'use client';
import Navbar from '@/components/ui/Navbar';
import { Canvas } from '@react-three/fiber';

import Hero from '@/components/home/HeroSection';
import OutAdvantaves from '@/components/home/OurAdvantagesSection';
import HowItWorks from '@/components/home/HowItWorksSection';
import TopStocksSection from '@/components/home/TopStocksSection';
import CallToActionSection from '@/components/home/CallToActionSection';

import SpinningCoin from '@/components/ui/Safe3D';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
      <Navbar />
      <Hero />

      <Canvas className="h-screen p-10">
        <SpinningCoin />
      </Canvas>

      <OutAdvantaves />
      <HowItWorks />
      <TopStocksSection />
      <CallToActionSection />
    </div>
  );
}
