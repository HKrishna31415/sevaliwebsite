
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620536253997-52a1a3b11e26?q=80&w=1920&auto=format&fit=crop&blur=2')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative w-[600px] h-[600px] xl:w-[700px] xl:h-[700px] bg-gradient-to-br from-yellow-400 to-amber-600 animate-morph flex items-center justify-center text-center p-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold tracking-widest mb-4">VAPOR RECOVERY</p>
          <h1 className="text-6xl md:text-7xl font-thin leading-tight">
            Save Oil Save The Planet
          </h1>
          <div className="mt-12 flex items-center space-x-8">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;