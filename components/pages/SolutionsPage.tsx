import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import {
  owsPerformanceSpecs,
  solutionGroups,
  solutionPillars,
  supportingServices,
} from '../../data/siteContent';

const SolutionsPage: React.FC = () => {
  const [openSlug, setOpenSlug] = useState(solutionGroups[0].slug);
  const fireSafetySolution = solutionGroups.find((solution) => solution.slug === 'fire-safety');
  const fireSafetyApplications = [
    'Fuel-station electrical rooms',
    'Forecourt and canopy cable routes',
    'Tank-farm control cable trays',
    'Industrial buildings and warehouses',
    'Service bays and maintenance areas',
    'Commercial electrical risers',
  ];
  const fireSafetyMaterials = [
    {
      title: 'Stabiterm-300 mesh',
      description: 'Flexible intumescent mesh wrap for electrical cables, cable lines, and cable trays. It forms a thermal char layer under extreme heat.',
    },
    {
      title: 'Stabiterm-225 coating',
      description: 'Water-borne cable coating for separately laid cables or bundles where a coated fire-protection layer is preferred.',
    },
    {
      title: 'Stabiterm-008 sealant',
      description: 'Fire-resistant sealant for cable penetrations through walls, ceilings, partitions, and fire barriers.',
    },
    {
      title: 'Site safety support',
      description: 'Specification support for fire class, cable routing, surface exposure, installation method, and inspection rhythm.',
    },
  ];
  const fireSafetyProof = [
    {
      label: '90 min',
      title: 'Circuit integrity',
      description: 'IEC 60331-21 APPLUS+ test maintained cable circuit integrity for 90 minutes plus a cooling period under the tested setup.',
    },
    {
      label: '0.6 m',
      title: 'Carbonized extension',
      description: 'EN 60332-3-22 Category A test result for protected cable, below the 2.5 m limit in the referenced report.',
    },
    {
      label: '40 min',
      title: 'Flame exposure',
      description: 'Bunched-cable flame-spread test used a 40-minute flame application under the reported test conditions.',
    },
    {
      label: '1 x 20 m',
      title: 'Roll format',
      description: 'Stabiterm-300 is supplied in roll format for practical cable-tray and cable-line installation planning.',
    },
  ];

  return (
    <div className="sevali-page">
      <PageHero
        label="Solutions"
        title="Environmental, optimization, and efficiency solutions for critical operating sectors."
        subtitle="Sevali organizes EBD, VRU, OWS, fuel economy, safety materials, and consulting into practical programs for Oil & Gas, agriculture, water, industry, remediation, and fuel-site proof verticals."
        backgroundImageUrl="/miami-ebd-soil-placement.jpg"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="sevali-button sevali-button-amber">
            Discuss your site
            <FiArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/roi-calculator" className="sevali-button border border-white/40 text-white hover:bg-white/10 hover:text-white">
            Estimate VRU return
          </Link>
        </div>
      </PageHero>

      <section className="sevali-section bg-white">
        <div className="sevali-container">
          <div className="mb-10 max-w-4xl">
            <p className="sevali-kicker">Solution pillars</p>
            <h2 className="sevali-heading-md mt-2">Start with the business outcome, then select the technology stack.</h2>
            <p className="sevali-copy mt-5">
              The portfolio is no longer framed around one type of facility. Environmental, optimization, and efficiency programs can combine EBD, recovery, separation, and consulting based on the sector and the site condition.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title} className="sevali-card p-7">
                <div className="mb-6 h-1.5 w-16 rounded-full bg-amber-600" />
                <h3 className="text-3xl font-extrabold text-gray-950">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-gray-700">{pillar.summary}</p>
                <div className="mt-6 grid gap-3">
                  {pillar.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3 text-sm font-bold leading-6 text-gray-900">
                      <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container">
          <div className="max-w-4xl">
            <p className="sevali-kicker">Supporting portfolio</p>
            <h2 className="sevali-heading-md mt-2">Technology modules for sector-specific programs.</h2>
            <p className="sevali-copy mt-5">
              Each module can stand alone or combine with EBD, consulting, and partner technologies when a site needs a broader environmental or efficiency program.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {solutionGroups.map((solution, index) => {
              const isOpen = openSlug === solution.slug;
              const articleId = solution.slug === 'fire-safety' ? 'fire-safety-module' : solution.slug;
              return (
                <article
                  key={solution.slug}
                  id={articleId}
                  className={`solution-accent-${solution.color} sevali-card scroll-mt-28 overflow-hidden`}
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className={`relative min-h-[22rem] overflow-hidden ${solution.slug === 'oil-water-separation' ? 'bg-white' : 'bg-gray-900'}`}>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full ${solution.slug === 'oil-water-separation' ? 'object-contain p-8' : 'object-cover opacity-78'}`}
                      />
                      <div className={`absolute inset-0 ${solution.slug === 'oil-water-separation' ? 'bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]' : 'bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]'}`} />
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <p className="text-sm font-extrabold text-amber-200">Solution {index + 1}</p>
                        <h3 className="mt-2 text-4xl font-extrabold">{solution.title}</h3>
                      </div>
                    </div>
                    <div className="p-7 md:p-10">
                      <div className="mb-6 h-1.5 w-20 rounded-full bg-[color:var(--accent)]" />
                      <p className="text-sm font-extrabold text-[color:var(--accent)]">{solution.eyebrow}</p>
                      <p className="mt-4 text-lg leading-8 text-gray-700">{solution.summary}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {solution.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-3 text-sm font-bold text-gray-900">
                            <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                            {outcome}
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenSlug(isOpen ? '' : solution.slug)}
                        className="mt-8 text-sm font-extrabold text-gray-950 underline decoration-[color:var(--accent)] decoration-2 underline-offset-4"
                      >
                        {isOpen ? 'Hide details' : 'Show detailed PDF points'}
                      </button>
                      {isOpen && (
                        <div className="mt-6 rounded-xl bg-gray-50 p-5">
                          <ul className="space-y-4">
                            {solution.details.map((detail) => (
                              <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-700">
                                <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {solution.slug === 'oil-water-separation' && (
                        <div className="mt-8 rounded-xl bg-cyan-50 p-5">
                          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                            <div className="overflow-hidden rounded-lg bg-black">
                              <iframe
                                className="aspect-video w-full"
                                src="https://www.youtube.com/embed/TpI-Rg6qAXo"
                                title="ecoLine B Animation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-extrabold text-cyan-900">EcoLine B animation</p>
                              <p className="mt-2 text-sm leading-6 text-cyan-950">
                                Watch how the EcoLine oil-water separator handles contaminated site runoff before the technical details below.
                              </p>
                              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {owsPerformanceSpecs.slice(0, 4).map((spec) => (
                                  <div key={spec.title} className="rounded-lg bg-white p-4 ring-1 ring-cyan-100">
                                    <p className="text-xl font-extrabold text-cyan-800">{spec.label}</p>
                                    <h4 className="mt-1 text-sm font-extrabold text-gray-950">{spec.title}</h4>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {fireSafetySolution && (
        <section id="fire-safety" className="sevali-section scroll-mt-28 bg-[#111827] text-white">
          <div className="sevali-container">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold text-amber-300">Dedicated fire safety layer</p>
                <h2 className="sevali-heading-md mt-2">Stabiterm cable protection for critical electrical routes.</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-white/74">
                Cable-line fires can move quickly through connected infrastructure. Stabiterm materials help operators protect cable trays, cable penetrations, and electrical routes that support pumps, controls, alarms, lighting, and emergency systems.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-2xl bg-white">
                <img src={fireSafetySolution.image} alt={fireSafetySolution.title} loading="lazy" decoding="async" className="h-full min-h-[32rem] w-full object-contain p-4" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {fireSafetyMaterials.map((material) => (
                  <article key={material.title} className="rounded-xl border border-white/14 bg-white/7 p-5">
                    <h3 className="text-xl font-extrabold">{material.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/72">{material.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {fireSafetyProof.map((proof) => (
                <article key={proof.title} className="rounded-xl border border-white/14 bg-white/7 p-5">
                  <p className="text-3xl font-extrabold text-amber-300">{proof.label}</p>
                  <h3 className="mt-3 text-lg font-extrabold">{proof.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">{proof.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="rounded-2xl bg-white p-7 text-gray-950 md:p-8">
                <p className="text-sm font-extrabold text-red-700">Where it fits</p>
                <h3 className="mt-3 text-3xl font-extrabold">Built for sites where environmental and fire risk overlap.</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {fireSafetyApplications.map((application) => (
                    <div key={application} className="flex items-start gap-3 text-sm font-bold leading-6 text-gray-900">
                      <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                      {application}
                    </div>
                  ))}
                </div>
              </div>
              <aside className="rounded-2xl border border-amber-300/28 bg-amber-300 p-7 text-gray-950 md:p-8">
                <p className="text-sm font-extrabold text-red-950">Specification note</p>
                <p className="mt-3 text-2xl font-extrabold leading-snug">
                  Fire-protection products should be specified by cable type, fire standard, operating zone, installation access, and inspection rhythm.
                </p>
                <Link to="/fire-safety" className="sevali-button sevali-button-primary mt-8">
                  Learn more
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      )}

      <section className="sevali-section bg-white">
        <div className="sevali-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="sevali-kicker">Support layer</p>
            <h2 className="sevali-heading-md mt-2">Consulting and partnerships turn products into programs.</h2>
            <p className="sevali-copy mt-5">
              Some clients need more than a single device. Sevali can support assessment, planning, reporting, and technology sourcing across environmental and carbon-management needs.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {supportingServices.map((service) => (
              <article key={service.title} className="sevali-card p-7">
                <service.icon className="h-10 w-10 text-amber-600" />
                <h3 className="mt-5 text-2xl font-extrabold text-gray-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{service.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.steps.map((step) => (
                    <span key={step} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                      {step}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
