import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/gasstationfuture.png')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(9,16,24,0.78),rgba(9,16,24,0.28)_55%,rgba(9,16,24,0.68))]" />

      <div className="sevali-container relative flex min-h-[calc(100vh-5rem)] items-center justify-center py-20">
        <div className="animate-morph flex aspect-square w-[min(84vw,620px)] items-center justify-center bg-gradient-to-br from-yellow-300 via-amber-500 to-emerald-600 p-7 text-center shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-10 xl:w-[700px]">
          <div className="flex max-w-[32rem] flex-col items-center">
            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.03em] text-white md:text-6xl xl:text-7xl">
              Cleaner stations. Safer operations.
            </h1>
            <p className="mt-6 max-w-md text-base font-semibold leading-7 text-white/90 md:text-lg">
              Vapor recovery, oil-water separation, soil and water remediation, fuel economy, and fire-safety products from one partner.
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
