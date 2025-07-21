'use client';
import Navbar from '@/components/ui/Navbar';

import Hero from '@/components/home/HeroSection';

import CanvasCoinWrapper from '@/components/ui/Safe3DWrapper';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
      <Navbar />
      <Hero />

      <CanvasCoinWrapper />
{/* 
      <OutAdvantaves />
      <HowItWorks />
      <TopStocksSection />
      <CallToActionSection /> */}
    </div>
  );
}
