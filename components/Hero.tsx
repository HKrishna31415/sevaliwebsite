import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const heroBackgrounds = [
  '/miami-ebd-ground-placement.jpg',
  '/ows-ecoline-system.webp',
  '/sevaliGET.jpg',
  '/proj_3.png',
];

const Hero: React.FC = () => {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsedSlides = Math.floor((Date.now() - startedAt) / 6200);
      setActiveBackground(elapsedSlides % heroBackgrounds.length);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#111827] text-white">
      {heroBackgrounds.map((background, index) => (
        <img
          key={background}
          src={background}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            index === activeBackground ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(9,16,24,0.78),rgba(9,16,24,0.28)_55%,rgba(9,16,24,0.68))]" />

      <div className="sevali-container relative flex min-h-[calc(100vh-5rem)] items-center justify-center py-20">
        <div className="animate-morph flex aspect-square w-[min(84vw,620px)] items-center justify-center bg-gradient-to-br from-yellow-300 via-amber-500 to-emerald-600 p-7 text-center shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-10 xl:w-[700px]">
          <div className="flex max-w-[32rem] flex-col items-center">
            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.03em] text-white md:text-6xl xl:text-7xl">
              Cleaner soil, water, air, and operations.
            </h1>
            <p className="mt-6 max-w-md text-base font-semibold leading-7 text-white/90 md:text-lg">
              Environmental, optimization, and efficiency technologies for Oil & Gas, agriculture, water, industry, remediation, and proven fuel-site programs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/solutions" className="sevali-button bg-white text-gray-950 hover:bg-gray-100 hover:text-gray-950">
                Explore solutions
                <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="sevali-button border border-white/70 text-white hover:bg-white/10 hover:text-white">
                Start a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
