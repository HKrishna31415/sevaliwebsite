import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const ValueProposition: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-800 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 text-sm font-semibold tracking-wide mb-4">Reliable & Affordable Vapor Recovery!</p>
          <h2 className="text-5xl font-bold leading-tight">
            Providing Value To Our Clients Through Ongoing Product Optimization & Innovation.
          </h2>
        </div>
        <div className="md:pl-12">
          <p className="text-gray-300 mb-8 leading-relaxed">
            Through diurnal (daily unavoidable) evaporation and escaped vapors from filling up a tank, vapors escape into the atmosphere. Sevali Energy VRU's turn these harmful vapors back into helpful fuels.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/faq')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Help & FAQs</span>
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => navigate('/how-it-works')}
              className="border-2 border-gray-500 hover:border-white hover:bg-white hover:text-slate-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;