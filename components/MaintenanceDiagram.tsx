
import React from 'react';

interface MaintenanceDiagramProps {
  activePart: string | null;
  onPartSelect: (partId: string) => void;
}

export const MaintenanceDiagram: React.FC<MaintenanceDiagramProps> = ({ activePart, onPartSelect }) => {
  const getPartClasses = (partId: string) => {
    return `cursor-pointer transition-all duration-300 ${
      activePart === partId 
        ? 'fill-amber-400/80 stroke-amber-600' 
        : 'fill-gray-200 hover:fill-amber-200/80 stroke-gray-400'
    }`;
  };

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <style>{`
        .diagram-text {
          font-family: sans-serif;
          font-size: 11px;
          font-weight: bold;
          fill: #1f2937;
          pointer-events: none;
          text-anchor: middle;
        }
      `}</style>
      
      {/* Base */}
      <rect x="20" y="320" width="360" height="20" fill="#78909C" rx="5"/>

      {/* Top Row */}
      
      {/* Filtration */}
      <g id="filtration" onClick={() => onPartSelect('filtration')}>
        <rect x="40" y="50" width="100" height="100" rx="5" className={getPartClasses('filtration')} strokeWidth="2" />
        <ellipse cx="90" cy="50" rx="50" ry="15" className={getPartClasses('filtration')} strokeWidth="2" />
        <text x="90" y="105" className="diagram-text">Filtration</text>
      </g>

      {/* Condenser */}
      <g id="condenser" onClick={() => onPartSelect('condenser')}>
        <rect x="150" y="50" width="100" height="100" rx="5" className={getPartClasses('condenser')} strokeWidth="2" />
        {[...Array(4)].map((_, i) => (
           <line key={i} x1="160" y1={65 + i * 20} x2="240" y2={65 + i * 20} stroke="#90A4AE" strokeWidth="1.5" />
        ))}
        <text x="200" y="135" className="diagram-text">Condenser</text>
      </g>

      {/* Control Panel */}
      <g id="panel" onClick={() => onPartSelect('panel')}>
        <rect x="260" y="50" width="100" height="100" rx="5" className={getPartClasses('panel')} strokeWidth="2" />
        <rect x="270" y="60" width="80" height="50" fill="#A7FFEB" opacity="0.8" rx="2"/>
        <text x="310" y="135" className="diagram-text">Control Panel</text>
      </g>

      {/* Bottom Row */}

      {/* Vacuum Pump */}
      <g id="vacuum-pump" onClick={() => onPartSelect('vacuum-pump')}>
        <rect x="40" y="200" width="100" height="100" rx="5" className={getPartClasses('vacuum-pump')} strokeWidth="2" />
        <circle cx="90" cy="250" r="25" fill="#B0BEC5" stroke="#78909C" strokeWidth="2"/>
        <text x="90" y="285" className="diagram-text">Vacuum Pump</text>
      </g>

      {/* Oil Pump */}
      <g id="oil-pump" onClick={() => onPartSelect('oil-pump')}>
        <rect x="150" y="200" width="100" height="100" rx="5" className={getPartClasses('oil-pump')} strokeWidth="2" />
        <circle cx="200" cy="250" r="15" fill="#B0BEC5" stroke="#78909C" strokeWidth="2"/>
        <rect x="210" y="225" width="20" height="50" fill="#B0BEC5" stroke="#78909C" strokeWidth="2"/>
        <text x="200" y="285" className="diagram-text">Oil Pump</text>
      </g>

      {/* Compressor */}
      <g id="compressor" onClick={() => onPartSelect('compressor')}>
        <rect x="260" y="200" width="100" height="100" rx="5" className={getPartClasses('compressor')} strokeWidth="2" />
        <rect x="270" y="210" width="80" height="80" fill="#B0BEC5" stroke="#78909C" strokeWidth="2" rx="3"/>
        <text x="310" y="285" className="diagram-text">Compressor</text>
      </g>
    </svg>
  );
};
