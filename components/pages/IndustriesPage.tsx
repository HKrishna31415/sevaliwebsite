import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { industryGroups, solutionGroups } from '../../data/siteContent';

const fireSafetySolution = solutionGroups.find((solution) => solution.slug === 'fire-safety');

const fireSafetyIndustries = [
  'Fuel stations and forecourts',
  'Tank farms and transfer areas',
  'Industrial buildings and warehouses',
  'Electrical rooms and cable trays',
];

const IndustriesPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="Industries"
      title="Environmental technology across Oil & Gas, agriculture, water, industry, and remediation."
      subtitle="Sevali applies EBD, recovery, separation, optimization, and efficiency solutions across sectors where soil, water, air, sludge, corrosion, emissions, or operating loss create measurable business and environmental risk."
      backgroundImageUrl="/sevaliGET.jpg"
    />

    <section className="sevali-section">
      <div className="sevali-container">
        <div className="grid gap-6 lg:grid-cols-4">
          {industryGroups.map((industry) => (
            <article key={industry.title} className="sevali-card rounded-xl p-7">
              <industry.icon className="mb-8 h-10 w-10 text-amber-700" />
              <h2 className="text-2xl font-extrabold text-gray-950">{industry.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{industry.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link to="/solutions" className="sevali-button sevali-button-primary mt-10">
          Explore solution pillars
          <FiArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>

    {fireSafetySolution && (
      <section className="sevali-section bg-[#111827] text-white">
        <div className="sevali-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold text-amber-300">Separate safety category</p>
            <h2 className="sevali-heading-md mt-2">Fire safety protects the cable routes that keep operating sites alive.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
              For fuel stations, tank farms, and industrial sites, fire protection is not just another product line inside environmental solutions. Stabiterm cable mesh, coatings, and sealants help protect critical electrical paths for pumps, controls, alarms, lighting, and emergency systems.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {fireSafetyIndustries.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-bold leading-6 text-white/88">
                  <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/fire-safety" className="sevali-button sevali-button-amber mt-8">
              Learn more
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src={fireSafetySolution.image}
              alt={fireSafetySolution.title}
              loading="lazy"
              decoding="async"
              className="h-[30rem] w-full object-contain p-4"
            />
          </div>
        </div>
      </section>
    )}

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="sevali-kicker">Why this breadth matters</p>
          <h2 className="sevali-heading-md mt-2">The same environmental problems show up in different forms.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-700">
          <p>
            An Oil & Gas facility may need sludge, corrosion, vapor, or contaminated-water support. A farm may need healthier soil, cleaner water, or odor reduction. A municipality may need wastewater and remediation support. A gas station may need VRU, OWS, EBD, and safety systems together.
          </p>
          <p>
            The common thread is not one facility type. It is Sevali’s ability to connect environmental technology, operating efficiency, site review, and measurable proof across different physical conditions.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
