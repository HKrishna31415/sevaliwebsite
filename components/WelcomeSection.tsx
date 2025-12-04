import React from 'react';
import { RefineryBgIcon } from './icons/RefineryBgIcon';
import { SignatureIcon } from './icons/SignatureIcon';

const WelcomeSection: React.FC = () => {
    return (
        <section className="relative bg-white py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <RefineryBgIcon className="w-full h-full text-gray-100" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
                            Welcome!
                        </h2>
                        <blockquote className="mt-6 text-xl text-gray-800 italic border-l-4 border-[#F2B65D] pl-6">
                            "Harnessing innovation to turn vapor into value, safeguarding our planet one molecule at a time."
                        </blockquote>
                    </div>

                    {/* Right Column */}
                    <div>
                        <p className="font-bold text-gray-900 mb-4 text-lg">
                            At Sevali Energy, we are dedicated to pioneering the future of vapor recovery. Our innovative solutions are engineered to not only meet but exceed environmental standards.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            We transform harmful emissions into valuable assets for our clients, demonstrating that sustainable practices and profitability can go hand-in-hand. Join us in our mission to protect the atmosphere while optimizing your operations.
                        </p>
                        <div className="flex items-center space-x-4">
                            <img 
                                src="/yalchin_image.jpg" 
                                alt="Yalchin Aliyev"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-amber-700">Yalçin Aliyev</p>
                                <div className="w-12 h-0.5 bg-amber-500 my-1"></div>
                                <SignatureIcon className="h-8 text-amber-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection;