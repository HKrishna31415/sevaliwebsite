
import React from 'react';
import PageHero from '../PageHero';
import { VruDiagram } from '../VruDiagram';
import Infographic from '../Infographic';

const stepsData = [
  {
    id: 1,
    title: "The truck dispenses gasoline into the fuel tank",
  },
  {
    id: 2,
    title: "Fuel vapor is fed into the VRU",
  },
  {
    id: 3,
    title: "VRU uses compression, separation, and condensation",
  },
  {
    id: 4,
    title: "Vapor is turned into gasoline",
  },
  {
    id: 5,
    title: "Fuel is returned back to the tank. You make money.",
  },
];

const HowItWorksPage: React.FC = () => {


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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {stepsData.map(step => (
                                <div key={step.id} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Step {step.id}</h3>
                                    <p className="text-gray-700">{step.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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