import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../../assets/logo2.png";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/project') {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const isAboutActive =
    location.pathname === '/about' || location.pathname === '/fire-service';

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Avnya Smart Builds" className="h-48 w-52" />
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`font-medium transition-colors duration-300 ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Home
            </a>

            {/* About & Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 font-medium transition-colors duration-300 focus:outline-none ${
                  isAboutActive ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
                }`}
              >
                About &amp; Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
                  <a
                    href="/about"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-200 hover:text-blue-400 hover:bg-slate-700/60 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    About &amp; Services
                  </a>
                  <div className="h-px bg-slate-700/60 mx-3" />
                  <a
                    href="/fire-service"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-200 hover:text-blue-400 hover:bg-slate-700/60 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    Fire Service
                  </a>
                </div>
              )}
            </div>

            <a
              href="/project"
              className={`font-medium transition-colors duration-300 ${
                location.pathname === '/project' ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Projects &amp; Clients
            </a>

            <a
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                location.pathname === '/contact' ? 'text-blue-400' : 'text-gray-200 hover:text-blue-400'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            >
              Home
            </a>

            {/* Mobile dropdown — always expanded */}
            <div>
              <p className="px-4 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                About &amp; Services
              </p>
              <a
                href="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 pl-7 pr-4 py-2.5 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                About &amp; Services
              </a>
              <a
                href="/fire-service"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 pl-7 pr-4 py-2.5 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                Fire Service
              </a>
            </div>

            <a
              href="/project"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            >
              Projects &amp; Clients
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
