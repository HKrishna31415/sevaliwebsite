import React from 'react';
import { GasStationIcon } from './icons/GasStationIcon';
import { AviationFuelIcon } from './icons/AviationFuelIcon';
import { FactoryIcon } from './icons/FactoryIcon';
import { ChemicalsIcon } from './icons/ChemicalsIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ServiceCardProps {
  // FIX: Changed `icon` prop to be a component type (`React.ComponentType`) instead of a React element.
  // This is a more robust and type-safe pattern that resolves the `React.cloneElement` error.
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg flex flex-col text-center text-gray-800 h-full">
      <div className="text-blue-500 mb-6 flex-shrink-0">
        {/* FIX: Instantiate the icon component directly with desired props instead of using React.cloneElement. */}
        <Icon className="w-16 h-16 mx-auto" strokeWidth={1} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
      <button className="mt-auto bg-slate-700 hover:bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors self-center">
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};


const Services: React.FC = () => {
  const services = [
    {
      icon: GasStationIcon,
      title: 'Gas station tanks',
      description: 'Recover gasoline and save money.'
    },
    {
      icon: AviationFuelIcon,
      title: 'Aviation Fuel Tanks',
      description: 'Works for JP54 and Avgas.'
    },
    {
      icon: FactoryIcon,
      title: 'Factory Oil Storage',
      description: 'Reduce leakage before and after transport.'
    },
    {
      icon: ChemicalsIcon,
      title: 'Chemicals',
      description: 'Reduce ethanol evaporation.'
    },
  ];

  return (
    <section className="bg-slate-800 pt-12 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 space-x-3">
          <span className="block w-8 h-2 bg-blue-500 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Services;
