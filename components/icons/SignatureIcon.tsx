
import React from 'react';

export const SignatureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path 
            d="M 10,25 C 15,10 30,10 35,25 C 40,40 50,40 55,25 C 60,10 75,10 80,30 C 85,50 95,45 100,35 L 120,20 C 125,15 135,15 140,25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </svg>
);
