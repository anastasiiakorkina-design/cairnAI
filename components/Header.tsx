'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-hero text-white'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl no-underline">
          <span className={isScrolled ? 'text-cairn-navy' : 'text-white'}>
            Cairn<span className="text-cairn-blue">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="group relative">
            <button className={`flex items-center gap-1 transition-colors ${isScrolled ? 'text-cairn-ink-dark hover:text-cairn-blue' : 'text-white hover:text-cairn-gold'}`}>
              Platform
              <span>▼</span>
            </button>
          </div>
          <div className="group relative">
            <button className={`flex items-center gap-1 transition-colors ${isScrolled ? 'text-cairn-ink-dark hover:text-cairn-blue' : 'text-white hover:text-cairn-gold'}`}>
              Solutions
              <span>▼</span>
            </button>
          </div>
          <a href="#scotland" className={`transition-colors ${isScrolled ? 'text-cairn-ink-dark hover:text-cairn-blue' : 'text-white hover:text-cairn-gold'}`}>
            Scotland
          </a>
          <a href="#resources" className={`transition-colors ${isScrolled ? 'text-cairn-ink-dark hover:text-cairn-blue' : 'text-white hover:text-cairn-gold'}`}>
            Resources
          </a>
          <a href="#pricing" className={`transition-colors ${isScrolled ? 'text-cairn-ink-dark hover:text-cairn-blue' : 'text-white hover:text-cairn-gold'}`}>
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#demo" className={`btn-primary px-6 py-2 text-sm ${isScrolled ? 'bg-cairn-blue text-white' : 'bg-cairn-gold text-cairn-navy hover:bg-opacity-90'}`}>
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-cairn-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-cairn-navy' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`lg:hidden border-t ${isScrolled ? 'bg-white border-cairn-frost' : 'bg-cairn-navy-light border-cairn-navy'}`}>
          <div className="container-max py-4 space-y-4">
            <a href="#platform" className={`block ${isScrolled ? 'text-cairn-ink-dark' : 'text-white'}`} onClick={() => setIsOpen(false)}>
              Platform
            </a>
            <a href="#solutions" className={`block ${isScrolled ? 'text-cairn-ink-dark' : 'text-white'}`} onClick={() => setIsOpen(false)}>
              Solutions
            </a>
            <a href="#scotland" className={`block ${isScrolled ? 'text-cairn-ink-dark' : 'text-white'}`} onClick={() => setIsOpen(false)}>
              Scotland
            </a>
            <a href="#resources" className={`block ${isScrolled ? 'text-cairn-ink-dark' : 'text-white'}`} onClick={() => setIsOpen(false)}>
              Resources
            </a>
            <a href="#pricing" className={`block ${isScrolled ? 'text-cairn-ink-dark' : 'text-white'}`} onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <a href="#demo" className="btn-primary block text-center py-2" onClick={() => setIsOpen(false)}>
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
