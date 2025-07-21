import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { AiOutlineDashboard, AiOutlineStock } from 'react-icons/ai';
import { MdOutlineWork } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname();
  //const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    `w-full flex items-center gap-3 p-4 text-xl rounded-2xl font-[family-name:var(--font-inter)] transition-colors ${
      pathname === href
        ? 'bg-[#4A2D9C] text-white'
        : 'text-white/70 hover:text-white hover:bg-[#311878]'
    }`;

  return (
    <nav className="hidden md:flex flex-col items-center relative z-50 w-1/4 h-dvh bg-[#1B0A56]">
      <div className="m-10 ml-15 lg:ml-25 w-full font-bold text-4xl text-white select-none font-[family-name:var(--font-montserrat)]">
        <Link href="/dashboard">EasyInvest</Link>
      </div>

      <div className="flex flex-col items-start justify-start w-2/3 space-y-2">
        <Link href="/dashboard" className={linkClass('/dashboard')}>
          <AiOutlineDashboard size={24} />
          Dashboard
        </Link>
        <Link href="/portfolio" className={linkClass('/portfolio')}>
          <MdOutlineWork size={24} />
          Portfolio
        </Link>
        <Link href="/stocks" className={linkClass('/stocks')}>
          <AiOutlineStock size={24} />
          Stocks
        </Link>
      </div>
    </nav>
  );
}
