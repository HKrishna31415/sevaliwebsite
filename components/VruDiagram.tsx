import React from 'react';

export const VruDiagram: React.FC = () => (
  <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <style>{`
      .flow-dots {
        stroke-dasharray: 7 7;
        animation: dash 2s linear infinite;
      }
      @keyframes dash {
        to {
          stroke-dashoffset: -28;
        }
      }
    `}</style>
    
    {/* Base platform for tank */}
    <path d="M225 450 L275 420 L575 420 L525 450 Z" fill="#E0E0E0" />
    <path d="M275 420 V 410 L575 410 V 420" fill="#BDBDBD" />

    {/* Storage Tank */}
    <ellipse cx="400" cy="405" rx="100" ry="30" fill="#607D8B" />
    <rect x="300" y="345" width="200" height="60" fill="#455A64" />
    <ellipse cx="400" cy="345" rx="100" ry="30" fill="#455A64" />
    <path d="M300 345 a 100 30 0 0 0 200 0" fill="#607D8B" />
    <rect x="340" y="325" width="20" height="20" fill="#263238" />
    <rect x="440" y="325" width="20" height="20" fill="#263238" />
    <rect x="305" y="395" width="10" height="20" fill="#B0BEC5" />
    <rect x="295" y="410" width="30" height="5" fill="#B0BEC5" />

    {/* VRU Machine */}
    <path d="M580 390 L600 370 L600 160 L580 180 Z" fill="#ECEFF1" />
    <path d="M600 370 L700 370 L700 160 L600 160 Z" fill="#CFD8DC" />
    <path d="M700 370 L680 390 L580 390 L600 370 Z" fill="#B0BEC5" />
    <rect x="610" y="170" width="80" height="50" fill="#A7FFEB" opacity="0.8" />
    <rect x="615" y="320" width="70" height="30" fill="#424242" />
    <circle cx="587" cy="190" r="3" fill="#757575" />
    <circle cx="587" cy="200" r="3" fill="#757575" />
    <circle cx="587" cy="210" r="3" fill="#757575" />

    {/* Truck */}
    <path d="M480 250 L500 230 L500 130 L480 150 Z" fill="#90A4AE" />
    <path d="M150 250 L480 250 L480 150 L150 150 Z" fill="#4DD0E1" />
    <ellipse cx="200" cy="150" rx="30" ry="10" fill="#E0E0E0" />
    <ellipse cx="300" cy="150" rx="30" ry="10" fill="#E0E0E0" />
    <ellipse cx="400" cy="150" rx="30" ry="10" fill="#E0E0E0" />
    <rect x="100" y="230" width="50" height="40" fill="#B0BEC5" />
    <rect x="150" y="250" width="350" height="20" fill="#78909C" />
    <circle cx="200" cy="270" r="20" fill="#37474F" />
    <circle cx="350" cy="270" r="20" fill="#37474F" />
    <circle cx="200" cy="270" r="10" fill="#B0BEC5" />
    <circle cx="350" cy="270" r="10" fill="#B0BEC5" />
    
    {/* Animated Paths based on reference */}
    {/* Yellow: vapor from tank to VRU */}
    <path d="M400 330 C 475 290, 525 290, 580 280" stroke="#FBBF24" strokeWidth="5" fill="none" className="flow-dots" />
    {/* Orange: recovered fuel from VRU back to Tank */}
    <path d="M590 350 C 500 380, 450 380, 450 335" stroke="#D97706" strokeWidth="5" fill="none" className="flow-dots" style={{animationDelay: '0.5s'}} />

  </svg>
);