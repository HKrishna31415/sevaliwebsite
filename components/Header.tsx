import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo, primaryNav } from '../data/siteContent';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const productNav = [
  { to: '/solutions', title: 'Overview', description: 'All solution groups' },
  { to: '/environmental-balance', title: 'EBD Platform', description: 'Soil, water, odor, and remediation' },
  { to: '/how-it-works', title: 'VRU', description: 'Vapor recovery technology' },
  { to: '/fire-safety', title: 'Fire Safety', description: 'Stabiterm cable protection' },
];

const headerNav = primaryNav.filter(
  (link) => !['/environmental-balance', '/how-it-works', '/fire-safety'].includes(link.to),
);

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

const SolutionsMenu: React.FC = () => {
  const location = useLocation();
  const isActive = ['/solutions', '/environmental-balance', '/how-it-works', '/fire-safety'].some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <div className="group relative">
      <Link
        to="/solutions"
        className={`flex items-center gap-1.5 text-sm font-extrabold transition-colors duration-200 ${
          isActive ? 'text-amber-700' : 'text-gray-800 hover:text-amber-700'
        }`}
      >
        Solutions
        <FiChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-4 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
          {productNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-4 py-3 transition-colors hover:bg-amber-50 focus:bg-amber-50 focus:outline-none"
            >
              <span className="block text-sm font-extrabold text-gray-950">{item.title}</span>
              <span className="mt-1 block text-xs leading-5 text-gray-600">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/35 bg-white/82 text-gray-950 shadow-[0_8px_8px_rgba(15,23,42,0.08)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="sevali-container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center" aria-label="Go to Sevali Energy homepage">
            <img src="/sevalitransparentlogo.png" alt="Sevali Energy" className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
            {headerNav.map((link) =>
              link.to === '/solutions' ? (
                <SolutionsMenu key={link.to} />
              ) : (
                <NavLink key={link.to} to={link.to}>
                  {link.title}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="hidden text-right 2xl:block">
              <span className="block text-xs font-semibold text-gray-500">Consultation line</span>
              <span className="block whitespace-nowrap text-sm font-extrabold text-gray-950">{contactInfo.mobile}</span>
            </a>
            <Link to="/contact" className="sevali-button sevali-button-primary text-sm">
              Start project
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

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white text-gray-950 lg:hidden" aria-modal="true" role="dialog">
          <div className="flex h-full flex-col justify-center px-8 pt-20">
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {headerNav.map((link) =>
                link.to === '/solutions' ? (
                  <div key={link.to}>
                    <NavLink to="/solutions" isMobile onClick={() => setIsMenuOpen(false)}>
                      Solutions
                    </NavLink>
                    <div className="mt-4 grid gap-3 border-l border-gray-200 pl-5">
                      {productNav.slice(1).map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-bold text-gray-700 transition-colors hover:text-amber-700"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={link.to} to={link.to} isMobile onClick={() => setIsMenuOpen(false)}>
                    {link.title}
                  </NavLink>
                ),
              )}
            </nav>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-sm font-semibold text-gray-500">Consultation line</p>
              <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="mt-1 block text-2xl font-extrabold text-gray-950">
                {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
