import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-8 left-0 right-0 z-50 bg-transparent py-4">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Replace with your logo */}
              <span className="text-xl font-black text-white tracking-tight font-display">ARCHITEX CREATIVE AGENCY</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/work" className="text-white hover:text-yellow-300 transition-colors uppercase font-bold text-sm tracking-widest font-sans">
              OUR WORK
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300 transition-colors uppercase font-bold text-sm tracking-widest font-sans">
              SERVICES
            </Link>
            <Link href="/faq" className="text-white hover:text-yellow-300 transition-colors uppercase font-bold text-sm tracking-widest font-sans">
              FAQ
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors uppercase font-bold text-sm tracking-widest font-sans">
              CONTACT
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border-2 border-white text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-300 uppercase font-black text-sm tracking-widest font-display"
            >
              CONTACT US →
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-yellow-400 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-4 bg-transparent backdrop-blur-sm border-t border-gray-800/30 shadow-lg">
          <Link
            href="/work"
            className="block py-2 text-white hover:text-yellow-300 transition-colors uppercase font-semibold text-sm tracking-wider font-sans"
          >
            OUR WORK
          </Link>
          <Link
            href="/services"
            className="block py-2 text-white hover:text-yellow-300 transition-colors uppercase font-semibold text-sm tracking-wider font-sans"
          >
            SERVICES
          </Link>
          <Link
            href="/faq"
            className="block py-2 text-white hover:text-yellow-300 transition-colors uppercase font-semibold text-sm tracking-wider font-sans"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-white hover:text-yellow-300 transition-colors uppercase font-semibold text-sm tracking-wider font-sans"
          >
            CONTACT
          </Link>
          <Link
            href="/contact"
            className="inline-block mt-4 px-5 py-2 border-2 border-white text-white hover:bg-yellow-300 hover:text-black hover:border-yellow-300 transition-all duration-300 uppercase font-black text-sm tracking-widest font-display"
          >
            CONTACT US →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
