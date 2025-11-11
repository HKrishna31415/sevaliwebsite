import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { SunIcon } from './icons/SunIcon';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold tracking-widest">ABOUT US</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Pioneers in Vapor Recovery</h2>
          <h2 className="text-4xl font-bold text-gray-800">for Gas Stations!</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://picsum.photos/id/1043/600/700" alt="Refinery" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            <div className="absolute top-12 left-0 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-40">
              <div className="bg-amber-100 p-3 rounded-full mb-3">
                <SunIcon className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-5xl font-bold text-amber-500">15+</p>
              <p className="text-gray-600 text-sm">Projects Effected</p>
            </div>
          </div>
          <div className="text-gray-600">
            <p className="mb-6 leading-relaxed">
              We drive the transition to more sustainable, reliable & affordable recovery systems for gas stations. With our innovative technologies, we energize society, that's our aim!
            </p>
            <p className="mb-8 leading-relaxed">
              The goal of our generation is to pave a better future to our next generation. A transition to the clean energy system requires to make the entire system smarter and more flexible. We are working on accelerating this change allowing a better future.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-amber-500 mr-3" />
                <span>Certified with ISO</span>
              </div>
               <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-amber-500 mr-3" />
                <span>Renewable Energy</span>
              </div>
               <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-amber-500 mr-3" />
                <span>Affordable Pricing</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-amber-500 mr-3" />
                <span>Many other certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;