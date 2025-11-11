import React from 'react';

export const Logo2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="40" stroke="#E8715A" strokeWidth="8" fill="none" />
        <path d="M50 10 V 90" stroke="#E8715A" strokeWidth="4" strokeDasharray="8 4" />
        <path d="M10 50 H 90" stroke="#E8715A" strokeWidth="4" strokeDasharray="8 4" />
        <path d="M50 50 C 70 30, 80 60, 50 90 C 20 60, 30 30, 50 50 Z" fill="#5C8D89" />
    </svg>
);