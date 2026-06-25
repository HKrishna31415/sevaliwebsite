import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import CertificateModal from './CertificateModal';
import { AstmLogo } from './icons/AstmLogo';
import { AtexLogo } from './icons/AtexLogo';
import { IsoLogo } from './icons/IsoLogo';
import { SgsLogo } from './icons/SgsLogo';
import { contactInfo, primaryNav, resources, solutionGroups } from '../data/siteContent';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-400 transition-colors hover:text-amber-300">
      {children}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-[#12161d] text-gray-300">
        <div className="border-b border-white/10 bg-[#1c222b]">
          <div className="sevali-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-extrabold text-amber-300">Station environmental balance starts with one conversation.</p>
              <h2 className="mt-2 max-w-3xl text-3xl font-bold text-white md:text-4xl">
                Bring vapor recovery, water separation, remediation, and safety products into one station plan.
              </h2>
            </div>
            <Link to="/contact" className="sevali-button sevali-button-amber shrink-0">
              Request consultation
            </Link>
          </div>
        </div>

        <div className="sevali-container py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img src="/sevaliyellow.png" alt="Sevali Energy" className="h-20 w-auto" />
              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
                Integrated solutions for water, energy, environment, and industry, focused on cleaner and safer fuel-station operations.
              </p>
              <div className="mt-7 flex items-center gap-7 text-gray-400">
                {[
                  ['sgs', SgsLogo],
                  ['atex', AtexLogo],
                  ['iso', IsoLogo],
                  ['astm', AstmLogo],
                ].map(([type, Logo]) => (
                  <button key={type as string} type="button" onClick={() => setActiveCertificate(type as string)} aria-label={`View ${type} certificate`}>
                    {React.createElement(Logo as React.ComponentType<React.SVGProps<SVGSVGElement>>, {
                      className: 'h-8 w-auto transition-colors hover:text-white',
                    })}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-4 font-bold text-white">Navigate</h3>
              <ul className="space-y-3 text-sm">
                {primaryNav.map((link) => (
                  <FooterLink key={link.to} to={link.to}>
                    {link.title}
                  </FooterLink>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-4 font-bold text-white">Solutions</h3>
              <ul className="space-y-3 text-sm">
                {solutionGroups.map((solution) => (
                  <FooterLink
                    key={solution.slug}
                    to={
                      solution.slug === 'station-environmental-balance'
                        ? '/environmental-balance'
                        : solution.slug === 'vapor-recovery'
                          ? '/how-it-works'
                          : `/solutions#${solution.slug}`
                    }
                  >
                    {solution.shortTitle}
                  </FooterLink>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-4 font-bold text-white">Get in touch</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <FiPhone className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <div>
                    <a href={`tel:${contactInfo.office.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-amber-300">
                      {contactInfo.office}
                    </a>
                    <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-amber-300">
                      {contactInfo.mobile}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-amber-300">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-gray-400">{contactInfo.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>All rights reserved © Sevali Energy. 2026</p>
            <div className="flex flex-wrap gap-5">
              {resources.map((resource) => (
                <Link key={resource.to} to={resource.to} className="text-gray-500 hover:text-amber-300">
                  {resource.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {activeCertificate && <CertificateModal certificateType={activeCertificate} onClose={() => setActiveCertificate(null)} />}
    </>
  );
};

export default Footer;
