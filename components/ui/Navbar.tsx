import { useState } from 'react';

import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 mb-10 relative z-50">
      <div className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-white select-none">
        <Link href="/"> EasyInvest</Link>
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <Link href="/stocks" className="text-white/70 hover:text-white text-sm font-[family-name:var(--font-inter)]">Stocks</Link>
        <Link href="/blog" className="text-white/70 px-10 hover:text-white text-sm font-[family-name:var(--font-inter)]">Blog</Link>
        <Link href="/auth/login" className="bg-[#1C0846] px-4 py-1.5 rounded text-sm font-medium hover:bg-[#59497c] transition-colors border border-[#2C1259]">Login</Link>
        <Link href="/auth/signup" className="bg-[#894aff] px-4 py-1.5 rounded text-sm font-medium hover:bg-[#9d69ff] transition-colors border border-[#2C1259]">Sign Up</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white focus:outline-none hover:text-[#894aff] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 bg-[#1C0846] md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <button 
            onClick={() => setIsOpen(false)} 
            className="self-end text-white/70 hover:text-white focus:outline-none transition-colors mb-8"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-white select-none">
            <Link href="/"> EasyInvest</Link>
          </div>
          <div className="flex flex-col space-y-8 mt-8">
            <Link href="/stocks" className="text-white/70 hover:text-white text-xl font-[family-name:var(--font-inter)] transition-colors hover:translate-x-2 transform duration-200">
              Stock
            </Link>
            <Link href="/blog" className="text-white/70 hover:text-white text-xl font-[family-name:var(--font-inter)] transition-colors hover:translate-x-2 transform duration-200">
              Blog
            </Link>
            <div className="pt-8 space-y-4">
              <Link href="/auth/login" className="bg-[#1C0846] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#59497c] transition-all border border-[#2C1259] block text-center hover:shadow-lg hover:shadow-[#1C0846]/20">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-[#894aff] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#9d69ff] transition-all border border-[#2C1259] block text-center hover:shadow-lg hover:shadow-[#894aff]/20">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              Start investing today
            </p>
            <p className="text-[#894aff] font-medium mt-2">
              Get $50 bonus →
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
