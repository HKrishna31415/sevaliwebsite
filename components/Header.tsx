import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo, primaryNav } from '../data/siteContent';
import { FiMenu, FiX } from 'react-icons/fi';

const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}> = ({ to, children, isMobile = false, onClick }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  const classes = isMobile
    ? `text-3xl font-semibold ${isActive ? 'text-amber-600' : 'text-gray-900'}`
    : `text-sm font-extrabold ${isActive ? 'text-amber-700' : 'text-gray-800 hover:text-amber-700'}`;

  return (
    <Link to={to} onClick={onClick} className={`transition-colors duration-200 ${classes}`}>
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/35 bg-white/82 text-gray-950 shadow-[0_8px_8px_rgba(15,23,42,0.08)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="sevali-container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center" aria-label="Go to Sevali Energy homepage">
            <img src="/sevalitransparentlogo.png" alt="Sevali Energy" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {primaryNav.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.title}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="text-right">
              <span className="block text-xs font-semibold text-gray-500">Consultation line</span>
              <span className="text-sm font-extrabold text-gray-950">{contactInfo.mobile}</span>
            </a>
            <Link to="/contact" className="sevali-button sevali-button-primary text-sm">
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="rounded-full border border-gray-200 p-2 text-gray-900 lg:hidden"
          >
            {isMenuOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-white text-gray-950 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-20">
          <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
            {primaryNav.map((link) => (
              <NavLink key={link.to} to={link.to} isMobile onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </NavLink>
            ))}
          </nav>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm font-semibold text-gray-500">Consultation line</p>
            <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="mt-1 block text-2xl font-extrabold text-gray-950">
              {contactInfo.mobile}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
