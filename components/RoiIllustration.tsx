import React from 'react';

export const RoiIllustration: React.FC<React.SVGProps<SVGSVGElement> & { annualSavings: number }> = ({ annualSavings = 0, ...props }) => {
  // Updated stack heights for a more dramatic effect and specific scenarios.
  const getStackHeights = (savings: number): number[] => {
    if (savings <= 0) return [];
    if (savings <= 600) return [1]; // Single coin for minimum savings
    if (savings < 10000) return [3, 5, 3];
    if (savings < 50000) return [8, 12, 8];
    if (savings < 150000) return [12, 16, 20, 16, 12];
    if (savings < 400000) return [15, 20, 25, 20, 15];
    if (savings < 800000) return [18, 22, 26, 30, 26, 22, 18]; // Introduce 7 stacks
    return [25, 30, 35, 40, 35, 30, 25]; // Max size with 7 stacks
  };

  const stackHeights = getStackHeights(annualSavings);

  const renderCoinStack = (count: number, xOffset: number, yBase: number, stagger: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const y = yBase - i * 5;
      const x = 100 + xOffset;
      return (
        <ellipse 
          key={`${xOffset}-${i}`} 
          cx={x} 
          cy={y} 
          rx="25" 
          ry="10" 
          fill="#facc15" 
          stroke="#ca8a04" 
          strokeWidth="1"
        >
          <animate 
            attributeName="cy" 
            from="-20" 
            to={y} 
            dur="0.5s" 
            begin={`${i * 0.05 + stagger}s`}
            fill="freeze"
            calcMode="ease-in"
          />
          <animate 
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.1s"
            begin={`${i * 0.05 + stagger}s`}
            fill="freeze"
          />
        </ellipse>
      );
    });
  };

  const renderStacks = () => {
    if (stackHeights.length === 0) return null;
    
    let offsets: number[] = [];
    
    switch (stackHeights.length) {
        case 1:
            offsets = [0];
            break;
        case 3:
            offsets = [-35, 0, 35];
            break;
        case 5:
            offsets = [-60, -30, 0, 30, 60];
            break;
        case 7:
            offsets = [-75, -50, -25, 0, 25, 50, 75];
            break;
        default:
            return null;
    }

    return stackHeights.map((height, i) => 
        renderCoinStack(height, offsets[i], 140, i * 0.1)
    );
  }

  return (
    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Ground */}
      <path d="M 0 145 H 200" stroke="#cbd5e1" strokeWidth="2" fill="none" />
      
      {/* Coin Piles */}
      <g filter={stackHeights.length > 0 ? "url(#glow-gold)" : "none"}>
        {renderStacks()}
      </g>
    </svg>
  );
};
