import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import {
  addDeviceSpecs,
  ecoSorpNotes,
  owsPerformanceSpecs,
  owsStationChallenges,
  owsSystemAdvantages,
  owsTechnicalNotes,
  solutionGroups,
  supportingServices,
  vruStorageFacilities,
} from '../../data/siteContent';
import { VruDiagram } from '../VruDiagram';

const SolutionsPage: React.FC = () => {
  const [openSlug, setOpenSlug] = useState(solutionGroups[0].slug);
  const vruSteps = [
    'Fuel is transferred into the station storage tank.',
    'Displaced hydrocarbon vapor is captured instead of vented.',
    'The VRU processes vapor through compression, separation, and condensation.',
    'Recovered product returns to the tank as usable gasoline.',
  ];

  return (
    <div className="sevali-page">
      <PageHero
        label="Solutions"
        title="A complete environmental and safety portfolio for modern fuel stations."
        subtitle="Sevali brings vapor recovery, environmental balance devices, oil-water separation, fuel-economy technology, and fire-safety materials into one practical station modernization plan."
        backgroundImageUrl="/koreastation2.png"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="sevali-button sevali-button-amber">
            Discuss your station
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
            <p className="sevali-kicker">Dedicated sections</p>
            <h2 className="sevali-heading-md mt-2">Start with the two offers buyers need to understand first.</h2>
            <p className="sevali-copy mt-5">
              For now, Sevali should sell VRU and Environmental Balance with more depth than the rest of the portfolio. The remaining products stay available as supporting categories below.
            </p>
          </div>

          <div className="space-y-8">
            {[solutionGroups[1], solutionGroups[0]].map((solution) => (
              <article key={solution.slug} id={`${solution.slug}-focus`} className={`solution-accent-${solution.color} sevali-card scroll-mt-28 overflow-hidden`}>
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative min-h-[24rem] bg-gray-900">
                    <img src={solution.image} alt={solution.title} className="h-full w-full object-cover opacity-85" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68),transparent)]" />
                    <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white">
                      <p className="text-sm font-extrabold text-amber-200">{solution.eyebrow}</p>
                      <h3 className="mt-3 text-4xl font-extrabold">{solution.title}</h3>
                    </div>
                  </div>
                  <div className="p-7 md:p-10">
                    <div className="mb-6 h-1.5 w-20 rounded-full bg-[color:var(--accent)]" />
                    <p className="text-xl leading-8 text-gray-800">{solution.summary}</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {solution.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3 text-sm font-bold text-gray-900">
                          <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 rounded-xl bg-gray-50 p-5">
                      <p className="font-extrabold text-gray-950">What this means on site</p>
                      <ul className="mt-4 space-y-3">
                        {solution.details.map((detail) => (
                          <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-700">
                            <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {solution.slug === 'station-environmental-balance' && (
                      <Link to="/environmental-balance" className="sevali-button sevali-button-primary mt-8">
                        Learn more
                        <FiArrowRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vru-technology" className="sevali-section">
        <div className="sevali-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="sevali-kicker">VRU technology</p>
            <h2 className="sevali-heading-md mt-2">The recovery loop buyers asked about is back.</h2>
            <p className="sevali-copy mt-5">
              Vapor recovery is still the clearest commercial proof point. The animated flow shows how displaced fuel vapor is captured, processed, and returned as usable product instead of being lost to emissions.
            </p>
            <div className="mt-8 grid gap-3">
              {vruSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-xl bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-extrabold text-gray-950">
                    {index + 1}
                  </span>
                  <p className="font-bold leading-7 text-gray-800">{step}</p>
                </div>
              ))}
            </div>
            <Link to="/how-it-works" className="sevali-button sevali-button-primary mt-8">
              Learn more
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="sevali-card bg-white p-5 md:p-8">
            <VruDiagram />
          </div>
        </div>
      </section>

      <section id="storage-facilities" className="sevali-section bg-white">
        <div className="sevali-container">
          <article className="sevali-card overflow-hidden">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[26rem] bg-gray-900">
                <img src={vruStorageFacilities.image} alt={vruStorageFacilities.title} className="h-full w-full object-cover opacity-85" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.78))]" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-sm font-extrabold text-amber-200">{vruStorageFacilities.eyebrow}</p>
                  <h2 className="mt-3 text-4xl font-extrabold">{vruStorageFacilities.title}</h2>
                </div>
              </div>
              <div className="p-7 md:p-10">
                <div className="mb-6 h-1.5 w-20 rounded-full bg-amber-500" />
                <p className="text-xl leading-8 text-gray-800">{vruStorageFacilities.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {vruStorageFacilities.applications.map((application) => (
                    <span key={application} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                      {application}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {vruStorageFacilities.benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3 text-sm font-bold leading-6 text-gray-900">
                      <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-amber-50 p-5">
                  <p className="text-sm font-extrabold text-amber-800">Commercial case</p>
                  <p className="mt-2 leading-7 text-gray-700">{vruStorageFacilities.proof}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container">
          <div className="max-w-4xl">
            <p className="sevali-kicker">Supporting portfolio</p>
            <h2 className="sevali-heading-md mt-2">Other station products stay available without stealing the page.</h2>
            <p className="sevali-copy mt-5">
              Oil-water separation, fuel economy, and fire safety remain part of the one-stop station story, but VRU and Environmental Balance now get the dedicated space first.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {solutionGroups.slice(2).map((solution, index) => {
              const isOpen = openSlug === solution.slug;
              return (
                <article
                  key={solution.slug}
                  id={solution.slug}
                  className={`solution-accent-${solution.color} sevali-card scroll-mt-28 overflow-hidden`}
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[22rem] overflow-hidden bg-gray-900">
                      <img src={solution.image} alt={solution.title} className="h-full w-full object-cover opacity-78" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
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
                        <div className="mt-8 space-y-6">
                          <div className="grid gap-4 md:grid-cols-4">
                            {owsPerformanceSpecs.map((spec) => (
                              <div key={spec.title} className="rounded-xl bg-white p-4 ring-1 ring-cyan-100">
                                <p className="text-2xl font-extrabold text-cyan-800">{spec.label}</p>
                                <h4 className="mt-2 text-sm font-extrabold text-gray-950">{spec.title}</h4>
                                <p className="mt-2 text-xs leading-5 text-gray-700">{spec.description}</p>
                              </div>
                            ))}
                          </div>

                          <div className="rounded-xl bg-cyan-50 p-5">
                            <p className="text-sm font-extrabold text-cyan-900">Why conventional plate-pack OWS units fail stations</p>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                              {owsStationChallenges.map((challenge) => (
                                <div key={challenge.title} className="rounded-lg bg-white p-4">
                                  <h4 className="font-extrabold text-gray-950">{challenge.title}</h4>
                                  <p className="mt-2 text-sm leading-6 text-gray-700">{challenge.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-xl bg-gray-950 p-5 text-white">
                            <p className="text-sm font-extrabold text-cyan-200">EcoLine B advantages</p>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                              {owsSystemAdvantages.map((advantage) => (
                                <div key={advantage.title} className="flex gap-3">
                                  <FiCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                                  <div>
                                    <h4 className="font-extrabold">{advantage.title}</h4>
                                    <p className="mt-1 text-sm leading-6 text-white/72">{advantage.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-5 lg:grid-cols-3">
                            <div className="rounded-xl bg-white p-5 ring-1 ring-gray-200">
                              <p className="font-extrabold text-gray-950">System design notes</p>
                              <ul className="mt-4 space-y-3">
                                {owsTechnicalNotes.map((note) => (
                                  <li key={note} className="flex gap-3 text-sm leading-6 text-gray-700">
                                    <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                                    <span>{note}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-xl bg-white p-5 ring-1 ring-gray-200">
                              <p className="font-extrabold text-gray-950">EcoSorp adsorption stage</p>
                              <ul className="mt-4 space-y-3">
                                {ecoSorpNotes.map((note) => (
                                  <li key={note} className="flex gap-3 text-sm leading-6 text-gray-700">
                                    <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                                    <span>{note}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-xl bg-white p-5 ring-1 ring-gray-200">
                              <p className="font-extrabold text-gray-950">ADD oil skimmer specs</p>
                              <ul className="mt-4 space-y-3">
                                {addDeviceSpecs.map((note) => (
                                  <li key={note} className="flex gap-3 text-sm leading-6 text-gray-700">
                                    <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                                    <span>{note}</span>
                                  </li>
                                ))}
                              </ul>
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
