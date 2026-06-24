import React, { useState } from 'react';
import PageHero from '../PageHero';
import { FiCheck } from 'react-icons/fi';
import { solutionGroups } from '../../data/siteContent';

const careGuides = [
  {
    title: 'VRU performance checks',
    cadence: 'Daily to quarterly',
    tasks: ['Check pressure and temperature readings', 'Inspect filters and condensate paths', 'Listen for abnormal pump or compressor noise', 'Test safety shutdowns on schedule'],
  },
  {
    title: 'Oil-water separator service',
    cadence: 'Weekly to monthly',
    tasks: ['Inspect inlet and outlet conditions', 'Clean coalescing media where required', 'Confirm mechanical shutoff condition', 'Document discharge quality and service dates'],
  },
  {
    title: 'EBD and remediation monitoring',
    cadence: 'Monthly to annual',
    tasks: ['Track odor, water, or soil condition changes', 'Document installation locations', 'Review site contamination sources', 'Confirm whether new runoff or dumping has changed conditions'],
  },
  {
    title: 'Fire and safety readiness',
    cadence: 'Monthly to annual',
    tasks: ['Inspect treated surfaces and protected cable areas', 'Confirm extinguisher powder availability', 'Review fire-class coverage', 'Keep safety documentation accessible'],
  },
];

const MaintenancePage: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState(careGuides[0]);

  return (
    <div className="sevali-page">
      <PageHero
        label="Station Care"
        title="Maintenance guidance for a broader station solution stack."
        subtitle="The old maintenance page was VRU-only. This guide keeps VRU care while adding OWS, environmental balance, and fire-safety operating rhythms."
        backgroundImageUrl="/sevaliOEMfactory.jpeg"
      />

      <section className="sevali-section">
        <div className="sevali-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="sevali-kicker">Operating rhythm</p>
            <h2 className="sevali-heading-md mt-2">Choose the system you need to keep reliable.</h2>
            <p className="sevali-copy mt-5">
              Every installation should receive manufacturer-specific service documentation. This page gives buyers a practical view of the categories Sevali can help operators manage.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {solutionGroups.map((solution) => (
                <span key={solution.slug} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-gray-700">
                  {solution.shortTitle}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[17rem_1fr]">
            <div className="space-y-3">
              {careGuides.map((guide) => (
                <button
                  key={guide.title}
                  type="button"
                  onClick={() => setActiveGuide(guide)}
                  className={`w-full rounded-xl px-5 py-4 text-left font-extrabold ${
                    activeGuide.title === guide.title ? 'bg-[#111827] text-white' : 'bg-white text-gray-900'
                  }`}
                >
                  {guide.title}
                  <span className="mt-1 block text-sm font-semibold opacity-70">{guide.cadence}</span>
                </button>
              ))}
            </div>
            <div className="sevali-card p-7">
              <p className="text-sm font-extrabold text-amber-700">{activeGuide.cadence}</p>
              <h3 className="mt-2 text-3xl font-extrabold text-gray-950">{activeGuide.title}</h3>
              <ul className="mt-7 space-y-4">
                {activeGuide.tasks.map((task) => (
                  <li key={task} className="flex gap-3 leading-7 text-gray-700">
                    <FiCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
