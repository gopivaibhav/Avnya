import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo-nobg.png";
import { useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/project") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About & Services', href: '/about' },
    { label: 'Projects & Clients', href: '/project' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold text-white">AVNYA <span className="text-blue-400">Smart Builds</span></h1> */}
            <a href="/">
              <img src={logo} alt="Avnya Smart Builds" className="h-16 w-auto" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
