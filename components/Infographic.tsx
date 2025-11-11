
import React from 'react';

const EfficiencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle cx="24" cy="24" r="18" fill="none" stroke="#E5E7EB" strokeWidth="4" />
    <path d="M 24 6 A 18 18 0 1 1 7.03 16.5" stroke="currentColor" strokeWidth="4" fill="none" />
    <text x="24" y="29" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1F2937">99%</text>
  </svg>
);

const RoiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
     <path d="M10 38 L20 28 L28 34 L38 22" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
     <path d="M30 22 H 38 V 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
     <text x="12" y="18" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4B5563">$</text>
  </svg>
);

const ComplianceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" {...props}>
        <path d="M6 9 L24 4 L42 9 V 24 C 42 35 24 44 24 44 C 24 44 6 35 6 24 Z" stroke="#4B5563" strokeWidth="3" fill="#F3F4F6" />
        <path d="M16 24 L22 30 L32 20" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SmartControlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" {...props}>
        <path d="M24,14 A10,10 0 1 1 14,24 A10,10 0 0 1 24,14 M 24,18 A6,6 0 1 0 30,24 A6,6 0 0 0 24,18 Z" fill="currentColor"/>
        <path d="M24,6 V10 M24,38 V42 M42,24 H38 M10,24 H6 M36.9,11.1 L34.1,13.9 M13.9,34.1 L11.1,36.9 M36.9,36.9 L34.1,34.1 M13.9,13.9 L11.1,11.1" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
    </svg>
);


interface InfoCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <Icon className="w-16 h-16 mb-4 text-amber-500" />
        <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
);


const Infographic: React.FC = () => {
    const infoItems = [
        {
            icon: EfficiencyIcon,
            title: '99%+ Efficiency',
            description: 'Our system recovers over 99% of vapors, maximizing your product retention.',
        },
        {
            icon: RoiIcon,
            title: 'Rapid ROI',
            description: 'Clients typically see a full return on investment in as little as 12-24 months.',
        },
        {
            icon: ComplianceIcon,
            title: 'Exceeds Compliance',
            description: 'Designed to meet and surpass the strictest global environmental regulations.',
        },
        {
            icon: SmartControlIcon,
            title: 'Smart Control',
            description: 'Real-time monitoring and optimization for peak performance and energy savings.',
        },
    ];

    return (
        <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {infoItems.map((item, index) => (
                    <InfoCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Infographic;
