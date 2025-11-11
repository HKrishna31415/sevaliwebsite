
import React from 'react';

export const ControlUnionLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 130 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g color="#888">
      <path d="M10 0 C 0 5, 0 20, 10 25" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <path d="M12 5 C 2 10, 2 15, 12 20" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <text x="25" y="18" fontFamily="sans-serif" fontSize="14" fontWeight="bold" letterSpacing="1">CONTROLUNION</text>
    </g>
  </svg>
);
