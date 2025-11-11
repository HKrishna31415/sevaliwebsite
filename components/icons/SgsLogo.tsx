import React from 'react';

export const SgsLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g color="currentColor">
        <rect x="2" y="15" width="46" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="1" fill="none"/>
        <text x="20" y="45" fontFamily="sans-serif" fontSize="8" fill="currentColor">SGS</text>
    </g>
  </svg>
);