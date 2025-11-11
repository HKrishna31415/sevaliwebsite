
import React, { useState } from 'react';
import PageHero from '../PageHero';
import { VruDiagram } from '../VruDiagram';
import Infographic from '../Infographic';

const stepsData = [
  {
    id: 1,
    title: "The truck dispenses gasoline into the fuel tank",
    // Positioned near the truck and tank connection area
    position: "top-[40%] left-[20%]",
  },
  {
    id: 2,
    title: "Fuel vapor is fed into the VRU",
    // Positioned over the storage tank, moved right
    position: "top-[58%] left-[55%]",
  },
  {
    id: 3,
    title: "VRU uses compression, separation, and condensation",
    // Positioned over the VRU machine, moved right
    position: "top-[28%] left-[85%]",
  },
  {
    id: 4,
    title: "Vapor is turned into gasoline",
    // Positioned near the VRU to show output
    position: "top-[55%] left-[75%]",
  },
  {
    id: 5,
    title: "Fuel is returned back to the tank. You make money.",
    // Positioned near the bottom, between truck and tank
    position: "top-[88%] left-[55%]",
  },
];

const HowItWorksPage: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(1);

    return (
        <>
            <PageHero
                title="How It Works"
                subtitle="Our vapor recovery units follow a simple yet highly effective process to capture, process, and recover valuable product."
                backgroundImageUrl="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=1920&auto=format&fit=crop"
            />

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl relative">
                        <div className="w-full max-w-4xl mx-auto">
                            <VruDiagram />
                        </div>

                        {/* Interactive Points & Tooltips */}
                        {stepsData.map(step => (
                             <div key={step.id} className={`absolute ${step.position} transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center`}>
                                {activeStep === step.id && (
                                    <div className="mb-3 w-60 bg-white p-4 rounded-lg shadow-2xl z-10 animate-fade-in-up">
                                        <p className="text-gray-700 font-medium text-center">{step.title}</p>
                                    </div>
                                )}
                                <button
                                    onClick={() => setActiveStep(step.id)}
                                    className="w-10 h-10 bg-amber-500 text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                                    aria-label={`Show details for step ${step.id}`}
                                >
                                    {step.id}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style>{`
              @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
            `}</style>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-amber-500 font-semibold tracking-wider">TECHNICAL OVERVIEW</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">A Smarter, More Flexible System</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Sevali Energy VRU integrates seamlessly into existing infrastructure. Using a combination of activated carbon beds for adsorption and a vacuum-assisted regeneration process, our system achieves over 99% recovery efficiency.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                An intelligent control system monitors pressure and flow rates in real-time, optimizing the cycle for different product types and ambient conditions. This ensures maximum recovery with minimal energy consumption, providing the best possible return on investment.
                            </p>
                        </div>
                        <div>
                            <Infographic />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowItWorksPage;