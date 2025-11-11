
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImageUrl }) => (
  <section className="relative min-h-[400px] bg-cover bg-center text-white flex items-center justify-center py-20" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent"></div>
    <div className="relative text-center z-10 px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down text-shadow-lg">{title}</h1>
      <div className="w-24 h-1 bg-amber-400 mx-auto my-6 animate-fade-in-down" style={{animationDelay: '0.4s'}}></div>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up text-shadow">{subtitle}</p>
    </div>
    <style>{`
      .text-shadow { text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
      .text-shadow-lg { text-shadow: 2px 2px 5px rgba(0,0,0,0.5); }
      @keyframes fade-in-down {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-down { animation: fade-in-down 0.6s 0.2s ease-out forwards; opacity: 0; }
      .animate-fade-in-up { animation: fade-in-up 0.6s 0.6s ease-out forwards; opacity: 0; }
    `}</style>
  </section>
);

export default PageHero;
