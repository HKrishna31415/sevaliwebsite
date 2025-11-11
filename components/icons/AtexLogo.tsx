import React from 'react';

export const AtexLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 60 52" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 2 L2 15 V 37 L30 50 L58 37 V 15 Z" />
      <text
        x="30"
        y="33"
        fontFamily="sans-serif"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
      >
        Ex
      </text>
    </g>
  </svg>
);
