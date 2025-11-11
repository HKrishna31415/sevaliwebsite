import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}> = ({ to, children, isMobile = false, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseClasses = "transition-colors duration-300";
  const mobileClasses = `text-2xl font-medium ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'}`;
  const desktopClasses = `text-sm font-medium ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'}`;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/about', title: 'About' },
    { to: '/how-it-works', title: 'How It Works' },
    { to: '/projects', title: 'Projects' },
    { to: '/roi-calculator', title: 'ROI Calculator' },
    { to: '/maintenance', title: 'Maintenance' },
    { to: '/faq', title: 'FAQ' },
  ];

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 text-gray-900 bg-white backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center cursor-pointer flex-shrink-0"
            aria-label="Go to homepage"
          >
            <img src="/sevalitransparentlogo.png" alt="Sevali Energy Logo" className="h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to}>
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center">
            <div className="text-right">
              <div className="text-xs font-light">Call Us 24/7</div>
              <a href="tel:+994553204281" className="font-semibold text-lg hover:text-amber-300 transition-colors">
                +994 55 320 42 81
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 text-gray-800">
              {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg text-gray-900 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(link => (
                <NavLink 
                    key={link.to} 
                    to={link.to}
                    onClick={handleMobileLinkClick}
                    isMobile
                >
                    {link.title}
                </NavLink>
            ))}
            </nav>
          <div className="absolute bottom-10 text-center mt-12">
            <div className="text-sm font-light">Call Us 24/7</div>
            <a href="tel:+994553204281" className="font-semibold text-2xl hover:text-amber-300 transition-colors">
                +994 55 320 42 81
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;