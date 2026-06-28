import React, { useState } from 'react';
import PageHero from '../PageHero';
import { FiChevronRight } from 'react-icons/fi';
import { solutionGroups } from '../../data/siteContent';

const faqData = [
  {
    title: 'Station Portfolio',
    questions: [
      {
        q: 'Is Sevali still mainly a vapor recovery company?',
        a: 'Vapor recovery remains a proven core solution, but Sevali is expanding into a broader one-stop station portfolio covering environmental balance devices, soil and water remediation, oil-water separation, fuel-economy technology, and fire-safety products.',
      },
      {
        q: 'Which problems can Sevali assess for one station?',
        a: 'Typical station concerns include fuel vapor loss, VOC emissions, contaminated runoff, oil-water discharge, soil or groundwater risk, odor, fire readiness, fleet fuel consumption, and compliance planning.',
      },
    ],
  },
  {
    title: 'Solutions',
    questions: solutionGroups.map((solution) => ({
      q: `What does ${solution.title} solve?`,
      a: `${solution.summary} Key outcomes include ${solution.outcomes.join(', ').toLowerCase()}.`,
    })),
  },
  {
    title: 'Installation & Operations',
    questions: [
      {
        q: 'Can these systems be integrated into existing stations?',
        a: 'Many solutions are selected specifically for retrofit potential. OWS kits can integrate with suitable existing tanks, VRU systems can be configured for station throughput, and selected EBD/remediation applications are designed to be non-intrusive.',
      },
      {
        q: 'Do all technologies require power, chemicals, or consumables?',
        a: 'No. Several EBD and remediation applications are described as operating without electricity, chemicals, filters, salt, or routine consumables. Requirements vary by solution and site conditions.',
      },
      {
        q: 'What information helps start a consultation?',
        a: 'Useful inputs include station location, fuel volume, existing tanks and separators, site photos, discharge or odor concerns, compliance targets, and any known soil or groundwater issues.',
      },
    ],
  },
  {
    title: 'Proof & Compliance',
    questions: [
      {
        q: 'What VRU proof point should buyers know?',
        a: 'In June 2024, a gas station in Saudi Arabia with monthly turnover of 1.3 million liters recovered 10,248 liters of gasoline vapor, averaging more than 340 liters per day.',
      },
      {
        q: 'What separation performance is listed for OWS?',
        a: 'The corporate profile describes OWS systems removing free non-emulsified oil, hydrocarbons, diesel, gasoline, and fuels to levels below 5 PPM in specified systems.',
      },
      {
        q: 'Can projects connect to carbon or green-finance programs?',
        a: 'Selected EBD and environmental projects may support CO2e credit generation or green-finance pathways where eligibility, verification, and local program requirements are met.',
      },
    ],
  },
];

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onToggle: () => void }> = ({ question, answer, isOpen, onToggle }) => {
  let iconStateClass = 'bg-gray-100 text-gray-700';

  if (isOpen) {
    iconStateClass = 'bg-amber-500 text-black';
  }

  return (
    <div className="border-b border-gray-200">
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 py-5 text-left font-extrabold text-gray-900">
        <span>{question}</span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconStateClass}`}>
          <FiChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </span>
      </button>
      <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 leading-7 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const selectedCategory = faqData[activeCategory];

  return (
    <div className="sevali-page">
      <PageHero
        label="FAQ"
        title="Questions about the expanded station portfolio."
        subtitle="Clear answers on Sevali’s move from VRU-only messaging to a broader environmental, water, emissions, and safety offering."
        backgroundImageUrl="/gasstationfuture.webp"
      />

      <section className="sevali-section">
        <div className="sevali-container grid gap-8 lg:grid-cols-[18rem_1fr]">
          <nav className="space-y-3" aria-label="FAQ categories">
            {faqData.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => {
                  setActiveCategory(index);
                  setOpenFaqIndex(0);
                }}
                className={`w-full rounded-xl px-5 py-4 text-left font-extrabold ${
                  activeCategory === index ? 'bg-[#111827] text-white' : 'bg-white text-gray-900'
                }`}
              >
                {category.title}
              </button>
            ))}
          </nav>

          <div className="sevali-card p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-gray-950">{selectedCategory.title}</h2>
            <div className="mt-6">
              {selectedCategory.questions.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
