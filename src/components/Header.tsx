'use client';

import { Globe, Menu, X } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const getLinkClass = (link: string) =>
    activeLink === link
      ? "px-6 py-2 border-2 border-emerald-300 shadow-emerald-300 shadow-md text-emerald-300 text-base sm:text-lg rounded-md"
      : "text-base sm:text-lg px-4 py-2";

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 py-4">
      <div className="flex items-center justify-between lg:justify-between">
        {/* Logo - always on the left */}
        <div className="text-xl sm:text-2xl font-black text-white">
          <h1>Rodsone Bacela</h1>
        </div>

        {/* Desktop Nav - centered on large screens */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" onClick={() => setActiveLink('home')} className={getLinkClass('home')}>Home</Link>
          <Link href="#" onClick={() => setActiveLink('about')} className={getLinkClass('about')}>About</Link>
          <Link href="#" onClick={() => setActiveLink('project')} className={getLinkClass('project')}>Project</Link>
        </nav>

        {/* Globe and Menu - on right for all screens */}
        <div className="flex items-center gap-4">
          <Link href="#">
            <Globe size={24} className="text-white" />
          </Link>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav Menu */}
      {menuOpen && (
  <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-start space-y-6 p-4">
    {/* Close Button */}
    <button
      onClick={toggleMenu}
      aria-label="Close Menu"
      className="absolute top-4 right-4 text-white"
    >
      <X size={32} />
    </button>

    {/* Nav Links */}
    <Link
      href="#"
      onClick={() => { setActiveLink('home'); setMenuOpen(false); }}
      className={getLinkClass('home')}
    >
      Home
    </Link>
    <Link
      href="#"
      onClick={() => { setActiveLink('about'); setMenuOpen(false); }}
      className={getLinkClass('about')}
    >
      About
    </Link>
    <Link
      href="#"
      onClick={() => { setActiveLink('project'); setMenuOpen(false); }}
      className={getLinkClass('project')}
    >
      Project
    </Link>
  </div>
)}

    </header>
  );
}
