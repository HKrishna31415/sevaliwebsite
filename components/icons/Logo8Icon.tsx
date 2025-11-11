import React from 'react';

export const Logo8Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g transform="translate(50,50)">
            <path d="M0 -40 C 40 0, 40 0, 0 40" fill="#E8715A"/>
            <path d="M0 -40 C 40 0, 40 0, 0 40" transform="rotate(120)" fill="#0F4C5C"/>
            <path d="M0 -40 C 40 0, 40 0, 0 40" transform="rotate(240)" fill="#F2B65D"/>
        </g>
    </svg>
);