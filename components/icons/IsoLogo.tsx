import React from 'react';

export const IsoLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor">
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="13" y="32" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">ISO</text>
    </g>
  </svg>
);