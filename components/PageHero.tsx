import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
  label?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImageUrl, label, children }) => (
  <section className="relative isolate overflow-hidden bg-[#111827] text-white">
    {backgroundImageUrl && (
      <img
        src={backgroundImageUrl}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
    )}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(10,18,28,0.95),rgba(10,18,28,0.75)_45%,rgba(10,18,28,0.5))]" />
    <div className="sevali-container py-24 md:py-32">
      <div className="max-w-4xl">
        {label && <p className="mb-5 text-sm font-extrabold text-amber-300">{label}</p>}
        <h1 className="sevali-heading-lg">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{subtitle}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
