import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SevaliFooterLogo } from './icons/SevaliFooterLogo';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { SgsLogo } from './icons/SgsLogo';
import { AtexLogo } from './icons/AtexLogo';
import { IsoLogo } from './icons/IsoLogo';
import CertificateModal from './CertificateModal';
import { AstmLogo } from './icons/AstmLogo';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <li>
        <Link to={to} className="hover:text-amber-400 transition-colors duration-300 ease-in-out text-gray-400">
            {children}
        </Link>
    </li>
);

const Footer: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-[#1D1D1D] text-gray-300 font-sans">
        {/* CTA Section */}
        <div className="bg-[#2D2D2D]">
          <div className="container mx-auto px-6 py-12 flex justify-center items-center text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white max-w-2xl">
              Ready to turn harmful vapors into valuable, recoverable assets?
            </h2>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-x-8 gap-y-12">
            
            {/* Column 1: Logo & Social */}
            <div className="lg:col-span-4">
              <img src="/sevaliyellow.png" alt="Sevali Energy Logo" className="h-20" />
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mt-6 mb-6">
                Harnessing innovation to turn vapor into value, safeguarding our planet one molecule at a time.
              </p>
            </div>

            {/* Column 2: Explore Links */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider uppercase">Explore</h3>
              <ul className="space-y-3">
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/how-it-works">How It Works</FooterLink>
                <FooterLink to="/projects">Projects</FooterLink>
                <FooterLink to="/news">News & Blog</FooterLink>
                <FooterLink to="/history">Our History</FooterLink>
              </ul>
            </div>

            {/* Column 3: Resources Links */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider uppercase">Resources</h3>
              <ul className="space-y-3">
                  <FooterLink to="/faq">FAQs</FooterLink>
                  <FooterLink to="/maintenance">Maintenance</FooterLink>
                  <FooterLink to="/roi-calculator">ROI Calculator</FooterLink>
              </ul>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-white text-lg mb-4 tracking-wider uppercase">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PhoneIcon className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 mt-1" />
                  <a href="tel:+994553204281" className="hover:text-amber-400 transition-colors text-sm text-gray-400">+994 55 320 42 81</a>
                </li>
                <li className="flex items-start">
                  <MailIcon className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 mt-1" />
                  <a href="mailto:yalchin@sevalienergy.com" className="hover:text-amber-400 transition-colors text-sm text-gray-400">yalchin@sevalienergy.com</a>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-400">Qezenfer Musabeyov str. 23,<br/>Baku, Azerbaijan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-center">
            <p className="text-gray-500 mb-4 md:mb-0">All rights reserved © Sevali Energy. 2025</p>
            <div className="flex items-center space-x-8 text-gray-400">
              <button onClick={() => setActiveCertificate('sgs')} aria-label="View SGS Certificate">
                <SgsLogo className="h-8 w-auto hover:text-white transition-colors" />
              </button>
              <button onClick={() => setActiveCertificate('atex')} aria-label="View ATEX Certificate">
                <AtexLogo className="h-8 w-auto hover:text-white transition-colors" />
              </button>
              <button onClick={() => setActiveCertificate('iso')} aria-label="View ISO Certificate">
                <IsoLogo className="h-8 w-auto hover:text-white transition-colors" />
              </button>
              <button onClick={() => setActiveCertificate('astm')} aria-label="View ASTM Certificate">
                <AstmLogo className="h-8 w-auto hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      {activeCertificate && (
        <CertificateModal
          certificateType={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </>
  );
};

export default Footer;