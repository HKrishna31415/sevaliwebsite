import React from 'react';

export const AstmLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor">
      <rect x="5" y="5" width="90" height="40" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="50" y="32" fontFamily="sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="currentColor">ASTM</text>
    </g>
  </svg>
);