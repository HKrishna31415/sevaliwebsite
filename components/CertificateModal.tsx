import React, { useEffect } from 'react';
import { XIcon } from './icons/XIcon';
import { SgsLogo } from './icons/SgsLogo';
import { AtexLogo } from './icons/AtexLogo';
import { IsoLogo } from './icons/IsoLogo';
import { AstmLogo } from './icons/AstmLogo';

interface CertificateModalProps {
  certificateType: string;
  onClose: () => void;
}

const certificateData: { [key: string]: {
    title: string;
    description: string;
    imageUrl: string;
    logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}} = {
  sgs: {
    title: 'SGS Product Efficiency Certification',
    description: 'This certification verifies the gasoline recovery efficiency of our product. SGS, a leading inspection and testing company, has confirmed that our system meets high-performance standards for recovering valuable fuel.',
    imageUrl: '/JordanSGS.png',
    logo: SgsLogo,
  },
  atex: {
    title: 'ATEX OEM Product Certification',
    description: "Our product is certified under the ATEX directive by the Original Equipment Manufacturer (OEM). This certification ensures the equipment is safe for use in environments with an explosive atmosphere, meeting the highest EU safety standards for hazardous locations.",
    imageUrl: '/ATEX.png',
    logo: AtexLogo,
  },
  iso: {
    title: 'ISO 9001:2015 OEM Factory Certification',
    description: "The Original Equipment Manufacturer's (OEM) factory is certified with ISO 9001:2015. This demonstrates a commitment to a rigorous quality management system, ensuring consistency and quality in the manufacturing process of our units.",
    imageUrl: '/ISO9001.png',
    logo: IsoLogo,
  },
  astm: {
    title: 'ASTM Output Quality Certification',
    description: 'This certification ensures that the recovered gasoline meets specific quality standards set by ASTM International. It guarantees the output quality of the fuel, making it suitable for sale and use without further processing.',
    imageUrl: '/GasolineASTM.png',
    logo: AstmLogo,
  },
};


const CertificateModal: React.FC<CertificateModalProps> = ({ certificateType, onClose }) => {
  const data = certificateData[certificateType];
  const LogoComponent = data.logo;

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8">
            <div className="mb-6">
                <LogoComponent className="h-24 w-auto text-gray-700" />
            </div>
            <img 
                src={data.imageUrl} 
                alt={`${data.title} document`} 
                className="w-full h-auto object-contain rounded-md shadow-lg border border-gray-200"
            />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close certificate details"
          >
            <XIcon className="w-8 h-8" />
          </button>
          <h3 id="certificate-title" className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
       <style>{`
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CertificateModal;