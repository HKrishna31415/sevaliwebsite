import React from 'react';
import PageHero from '../PageHero';

const timeline = [
  {
    year: 'Foundation',
    title: 'Vapor recovery as the proof point',
    text: 'Sevali began with a focused commitment to capturing harmful vapors and converting losses into recoverable fuel value for station operators.',
  },
  {
    year: 'Expansion',
    title: 'Environmental balance portfolio',
    text: 'The company expanded into soil, water, odor, emissions, oil-water separation, and station safety solutions to support cleaner operations beyond a single system.',
  },
  {
    year: 'Partnerships',
    title: 'International technology network',
    text: 'Sevali works with global manufacturers, solution providers, testing partners, and regional institutions to adapt technologies to local and regional markets.',
  },
  {
    year: 'Next',
    title: 'One-stop station modernization',
    text: 'The new direction brings fuel retailers a single partner for environmental, emissions, water, recovery, and safety improvements.',
  },
];

const HistoryPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="History"
      title="A focused recovery story becoming a broader station modernization platform."
      subtitle="The company’s next chapter connects practical fuel recovery with soil, water, emissions, and safety systems."
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
