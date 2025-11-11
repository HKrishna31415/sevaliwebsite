import React from 'react';

export const FaqCompanyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" fill="#FBEDDC" rx="4"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 22V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16h4m-4-4h4m-4-4h4"/>
  </svg>
);