
import React from 'react';

export const RefineryBgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.5">
            {/* Main tower */}
            <path d="M700 350 V 100 L 710 90 H 740 L 750 100 V 350" />
            <path d="M710 150 H 740" />
            <path d="M710 200 H 740" />
            <path d="M710 250 H 740" />
            <path d="M710 300 H 740" />
            <path d="M725 100 V 50 H 735 V 100" />
            <path d="M730 50 L 740 40 H 750 L 760 50" />

            {/* Storage Tanks */}
            <ellipse cx="850" cy="350" rx="50" ry="15" />
            <path d="M800 200 V 350 H 900 V 200" />
            <ellipse cx="850" cy="200" rx="50" ry="15" strokeDasharray="5 2" />
            <ellipse cx="850" cy="200" rx="50" ry="15" />
            
            <ellipse cx="920" cy="350" rx="40" ry="12" />
            <path d="M880 250 V 350 H 960 V 250" />
            <ellipse cx="920"cy="250" rx="40" ry="12" strokeDasharray="5 2" />
            <ellipse cx="920" cy="250" rx="40" ry="12" />

            {/* Left side structures */}
            <path d="M100 350 H 300" />
            <path d="M150 350 V 250 H 180 V 350" />
            <path d="M220 350 V 280 H 250 V 350" />

            <path d="M350 350 V 150" />
            <path d="M350 250 C 400 250, 400 200, 450 200" />
            <path d="M450 200 V 350" />
            
            <path d="M500,350 C500,300 550,300 550,350" />
            <path d="M525,300 L525,200 L580,200 L580,350" />
            <path d="M580 250 H 620" />

            {/* Ground line */}
            <path d="M0 350 H 1000" />
        </g>
    </svg>
);
