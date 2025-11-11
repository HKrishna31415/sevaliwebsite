
import React from 'react';

export const MarshallEncoLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 50" fill="white" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="scale(0.9)">
      <circle cx="25" cy="25" r="24" stroke="white" strokeWidth="2" fill="none" />
      <path d="M25 5 A 20 20 0 0 1 25 45" stroke="white" strokeWidth="2" fill="none" />
      <path d="M25 5 A 20 20 0 0 0 25 45" stroke="white" strokeWidth="2" fill="none" />
      <text x="15" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="white">ME</text>
      <path d="M40 10 L 45 15 L 40 20" stroke="white" strokeWidth="2" fill="none" />
    </g>
    <text x="60" y="22" fontFamily="sans-serif" fontSize="20" letterSpacing="1">Marshall</text>
    <text x="60" y="42" fontFamily="sans-serif" fontSize="20" letterSpacing="1">ENCO</text>
  </svg>
);
