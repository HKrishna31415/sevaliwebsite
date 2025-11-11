import React from 'react';

export const FaqBenefitsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" fill="#FBEDDC" rx="4"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18V8M7 18v-4m10 4v-8"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  </svg>
);