import React from 'react';
import PageHero from '../PageHero';

const timeline = [
  {
    year: 'Foundation',
    title: 'Vapor recovery as the proof point',
    text: 'Sevali began with a focused commitment to capturing harmful vapors and converting losses into recoverable fuel value for operating sites.',
  },
  {
    year: 'Expansion',
    title: 'Environmental balance portfolio',
    text: 'The company expanded into EBD, soil, water, odor, emissions, oil-water separation, optimization, and safety solutions to support cleaner operations beyond a single system.',
  },
  {
    year: 'Partnerships',
    title: 'International technology network',
    text: 'Sevali works with global manufacturers, solution providers, testing partners, and regional institutions to adapt technologies to local and regional markets.',
  },
  {
    year: 'Next',
    title: 'Multi-sector environmental technology platform',
    text: 'The new direction brings Oil & Gas, agriculture, water, industrial, municipal, and fuel-site clients a single partner for environmental, optimization, and efficiency improvements.',
  },
];

const HistoryPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="History"
      title="A focused recovery story becoming a broader environmental technology platform."
      subtitle="The company’s next chapter connects practical fuel recovery with EBD, soil, water, emissions, optimization, efficiency, and safety systems."
      backgroundImageUrl="/MEpilotprojectsevali.jpg"
    />
    <section className="sevali-section">
      <div className="sevali-container">
        <div className="grid gap-5 md:grid-cols-2">
          {timeline.map((item) => (
            <article key={item.title} className="sevali-card p-7">
              <p className="text-sm font-extrabold text-amber-700">{item.year}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-950">{item.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HistoryPage;
