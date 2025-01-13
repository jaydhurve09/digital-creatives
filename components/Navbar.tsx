'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/#home' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Team', path: '/#team' },
  { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (path: string) => {
    const sectionId = path.split('#')[1];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/70 backdrop-blur-lg shadow-lg'
          : 'bg-background/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/#home" 
              onClick={() => scrollToSection('/#home')}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
            >
              Digital Creatives
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.path)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <ul className="md:hidden flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.path)}
                      className="px-4 py-2 rounded-full text-gray-800"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
