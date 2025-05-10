import { useState } from 'react';

import Link from "next/link";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden md:flex flex-col items-center relative z-50 w-1/4 h-dvh bg-[#1B0A56]">
      <div className="m-10 ml-15 lg:ml-25 w-full font-[family-name:var(--font-montserrat)] font-bold text-4xl text-white select-none">
        <Link href="/dashboard">EasyInvest</Link>
      </div>

      <div className="flex flex-col items-start justify-start w-full lg:pl-15">
        <Link href="/stocks" className="w-full p-4 text-white/70 hover:text-white text-3xl font-[family-name:var(--font-inter)] bg-[#311878]">Dashboard</Link>
        <Link href="/stocks" className="w-full p-4 text-white/70 hover:text-white text-3xl font-[family-name:var(--font-inter)] hover:bg-[#311878] transition-colors">Portfolio</Link>
        <Link href="/blog" className="w-full p-4 text-white/70 hover:text-white text-3xl font-[family-name:var(--font-inter)] hover:bg-[#311878] transition-colors">Stocks</Link>
      </div>
    </nav>
  );
}
