
import React from 'react';
import { FaChartLine, FaGaugeHigh, FaShieldHalved, FaSliders } from 'react-icons/fa6';

interface InfoCardProps {
    icon: React.ComponentType<{ className?: string }>;
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
            icon: FaGaugeHigh,
            title: '99%+ Efficiency',
            description: 'Our system recovers over 99% of vapors, maximizing your product retention.',
        },
        {
            icon: FaChartLine,
            title: 'Rapid ROI',
            description: 'Clients typically see a full return on investment in as little as 12-24 months.',
        },
        {
            icon: FaShieldHalved,
            title: 'Exceeds Compliance',
            description: 'Designed to meet and surpass the strictest global environmental regulations.',
        },
        {
            icon: FaSliders,
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
