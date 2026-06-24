import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight } from 'react-icons/fi';
import { industryGroups } from '../../data/siteContent';

const IndustriesPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="Industries"
      title="Gas stations first, with environmental technology depth across sectors."
      subtitle="The website prioritizes fuel-station decision makers while showing that Sevali’s portfolio is grounded in water, energy, environment, agriculture, industry, and safety applications."
      backgroundImageUrl="/sevaliGET.jpg"
    />

    <section className="sevali-section">
      <div className="sevali-container">
        <div className="grid gap-6 lg:grid-cols-4">
          {industryGroups.map((industry, index) => (
            <article key={industry.title} className={`${index === 0 ? 'bg-[#111827] text-white lg:col-span-2 lg:row-span-2' : 'sevali-card'} rounded-xl p-7`}>
              <div className={`mb-8 h-1.5 w-20 rounded-full ${index === 0 ? 'bg-amber-300' : 'bg-amber-600'}`} />
              <h2 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-extrabold`}>{industry.title}</h2>
              <p className={`mt-4 leading-7 ${index === 0 ? 'text-white/72' : 'text-gray-600'}`}>{industry.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.applications.map((application) => (
                  <span
                    key={application}
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      index === 0 ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {application}
                  </span>
                ))}
              </div>
              {index === 0 && (
                <Link to="/solutions" className="sevali-button sevali-button-amber mt-8">
                  See station solutions
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="sevali-kicker">Why this breadth matters</p>
          <h2 className="sevali-heading-md mt-2">The same environmental problems show up in different forms.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-700">
          <p>
            A gas station may need vapor recovery and oil-water separation. A municipality may need odor control and wastewater treatment. A farm may need slurry or water-quality support. The site should make the fuel-station offer clear while using this wider capability as proof that Sevali understands environmental systems, not just equipment sales.
          </p>
          <p>
            That is why the primary buyer journey stays focused on stations, and the industries page gives procurement teams, partners, and regulators confidence that Sevali can connect station needs to proven environmental thinking.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
