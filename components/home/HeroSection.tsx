'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';

import { splitText } from 'motion-plus';

import Link from 'next/link';

import Lottie from 'lottie-react';
import chartAnimation from '@/public/chart-animation.json';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      const { chars } = splitText(containerRef.current.querySelector('.wavy')!);
      containerRef.current.style.visibility = 'visible';
      const staggerDelay = 0.15;
      animate(
        chars,
        { y: [-5, 5] },
        {
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          duration: 0.5,
          delay: stagger(
            staggerDelay,

            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
    <header className="max-w-5xl mx-auto mb-16">
      <div className="bg-[#1C0846] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between border border-[#2C1259]">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2
            className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-montserrat)] mb-4"
            ref={containerRef}
          >
            WE HAVE MORE THAN
            <span className="wavy text-[#894aff]">134 STOCKS</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Begin your investment journey today and claim your $50 bonus! Ready
            to grow your wealth? Simply click below to start trading.
          </p>
          <Link href="/auth/signup">
            <button className="px-5 py-2.5 bg-white text-[#1C0846] font-medium rounded-md transition-colors cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-[#2C1259]">
            <div className="w-full bg-[#140152]/20 rounded-md p-6 flex flex-col items-center justify-center">
              <Lottie
                animationData={chartAnimation}
                className="hidden md:flex absolute w-96 h-96 top-18 left-54"
              />
              <span className="text-4xl font-[family-name:var(--font-roboto-mono)] font-bold">
                $50
              </span>
              <span className="text-xs text-gray-400">for signup</span>
              <div className="h-px w-70 bg-white/10 my-6"></div>
              <div className="w-full">
                <div className="text-center">
                  <p className="text-white/60 mb-1 text-xs">S&P 500</p>
                  <p className="text-2xl font-[family-name:var(--font-roboto-mono)]">
                    4,783
                  </p>
                  <p className="text-green-400 text-xs">+1.23%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
