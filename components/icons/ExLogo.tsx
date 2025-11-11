
import React from 'react';

export const ExLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#FFD700" d="M1.33 4.5L0 6.65l10.67 12.85h2.66L24 6.65 22.67 4.5 12 17.35z"/>
    <text x="6" y="14" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="black">Ex</text>
  </svg>
);
