import React from 'react';
import { Logo1Icon } from './icons/Logo1Icon';
import { Logo2Icon } from './icons/Logo2Icon';
import { Logo3Icon } from './icons/Logo3Icon';
import { Logo4Icon } from './icons/Logo4Icon';
import { Logo5Icon } from './icons/Logo5Icon';
import { Logo6Icon } from './icons/Logo6Icon';
import { Logo7Icon } from './icons/Logo7Icon';
import { Logo8Icon } from './icons/Logo8Icon';
import { Logo9Icon } from './icons/Logo9Icon';

const LogoCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-center aspect-square transition-all duration-300 hover:shadow-xl hover:border-amber-400">
        {children}
    </div>
);

const FaqSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0F4C5C]">Trusted by Industry Leaders</h2>
                    <div className="w-20 h-1 bg-[#E8715A] mx-auto my-4 rounded"></div>
                    <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
                        We are proud to partner with industry leaders and innovators from around the world, delivering solutions that drive success and sustainability.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                   <LogoCard><img src="https://play-lh.googleusercontent.com/Rn092gey0C87G161IcAg-5iI48511DmBGMCRYOQ3hJ-EW0Fcu1slB60_Y2oDFKw94FA" alt="SASCO Logo" className="h-16" /></LogoCard>
                   <LogoCard><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jordan_Refinery_Logo.png/2048px-Jordan_Refinery_Logo.png" alt="JoPetrol Logo" className="h-16" /></LogoCard>
                   <LogoCard><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpkaUVSUq3ZxsX9dHHZUiATBYBwI50c1J6Q&s" alt="Oman Oil Logo" className="h-16" /></LogoCard>
                   <LogoCard><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkiQXThVs2YvnlDYDaPV9E_JbxOcX4tHrnw&s" alt="Tosoil Logo" className="h-16" /></LogoCard>
                   <LogoCard><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SAEPkUff05KjRe-f1rSwkO6NN0Zmycq43A&s" alt="Azpetrol Logo" className="h-16" /></LogoCard>
                   <LogoCard><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf5WrdostoosXiRoWPFa524oDQ_ZPweMNYg&s" alt="SOCAR Logo" className="h-16" /></LogoCard>

                </div>
            </div>
        </section>
    )
}

export default FaqSection;