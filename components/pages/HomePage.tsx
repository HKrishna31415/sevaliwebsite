import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { industryGroups, proofPoints, projects, solutionGroups, solutionPillars, supportingServices, vruStorageFacilities } from '../../data/siteContent';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);
  const owsSolution = solutionGroups.find((solution) => solution.slug === 'oil-water-separation');
  const fireSafetySolution = solutionGroups.find((solution) => solution.slug === 'fire-safety');

  return (
    <div className="sevali-page">
      <Hero />

      <section className="sevali-section">
        <div className="sevali-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="sevali-kicker">Environmental technology provider</p>
            <h2 className="sevali-heading-lg mt-3">One partner for environmental, optimization, and efficiency solutions.</h2>
          </div>
          <div className="space-y-6">
            <p className="sevali-copy text-lg">
              Sevali Energy helps organizations improve soil, water, air, energy use, and operational resilience across multiple sectors. Gas stations remain a proven application area, but EBD opens a wider market across Oil & Gas, agriculture, wastewater, industry, and remediation.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Restore soil and water', 'Reduce emissions and odors', 'Optimize infrastructure', 'Improve efficiency and safety'].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold text-gray-900">
                  <FiCheck className="h-5 w-5 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sevali-section bg-white">
        <div className="sevali-container grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <aside className="rounded-2xl bg-[#111827] p-7 text-white shadow-xl md:p-9">
            <div className="flex items-center gap-5">
              <img
                src="/yalchin_image.jpg"
                alt="Yalçin Aliyev"
                loading="lazy"
                decoding="async"
                className="h-20 w-20 shrink-0 rounded-full border-2 border-amber-300 object-cover"
              />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-amber-300">CEO perspective</p>
                <p className="mt-1 text-xl font-extrabold">Yalçin Aliyev</p>
                <p className="text-sm text-white/64">Founder & CEO</p>
              </div>
            </div>
            <blockquote className="mt-8 text-2xl font-extrabold leading-snug md:text-3xl">
              "Harnessing innovation to turn vapor into value, safeguarding our planet one molecule at a time."
            </blockquote>
            <p className="mt-6 leading-7 text-white/72">
              That same mindset now extends across EBD, vapor recovery, water separation, remediation, fuel efficiency, and safety programs for many operating environments.
            </p>
          </aside>

          <div className="sevali-card overflow-hidden bg-white">
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/560Ph0VHnw4"
                title="Sevali Energy vapor recovery video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-7 md:p-8">
              <p className="sevali-kicker">Video explainer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-950">See the recovery story in motion.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Vapor recovery remains one of Sevali’s clearest proof points. The broader company story now connects that operating discipline to EBD, water treatment, agricultural, industrial, and remediation opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-16 text-white">
        <div className="sevali-container grid gap-5 md:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="border-t border-white/20 pt-5">
              <p className="text-4xl font-extrabold text-amber-300">{point.value}</p>
              <p className="mt-2 font-bold">{point.label}</p>
              <p className="mt-1 text-sm leading-6 text-white/64">{point.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sevali-section bg-white">
        <div className="sevali-container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="sevali-kicker">Solutions</p>
              <h2 className="sevali-heading-md mt-2">Three solution pillars, multiple sectors.</h2>
            </div>
            <Link to="/solutions" className="sevali-button sevali-button-ghost w-fit">
              View all solutions
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <Link
                key={pillar.title}
                to="/solutions"
                className="sevali-card group flex min-h-[18rem] flex-col overflow-hidden hover:-translate-y-1 hover:border-amber-400 hover:text-inherit transition"
              >
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-5 h-1.5 w-12 rounded-full bg-amber-600" />
                  <h3 className="text-2xl font-extrabold text-gray-950">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{pillar.summary}</p>
                  <span className="mt-auto pt-6 text-sm font-extrabold text-amber-700">Explore pillar</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container">
          <div className="mb-10 max-w-4xl">
            <p className="sevali-kicker">Platform focus</p>
            <h2 className="sevali-heading-md mt-2">EBD is the growth platform; VRU remains the proof engine.</h2>
            <p className="sevali-copy mt-5">
              Environmental Balance Devices give Sevali a broader addressable market across soil, water, agriculture, aquaculture, wastewater, and Oil & Gas infrastructure. Vapor recovery keeps a measurable commercial proof point in the portfolio.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {solutionGroups.slice(0, 2).reverse().map((solution) => (
              <article key={solution.slug} className={`solution-accent-${solution.color} sevali-card overflow-hidden`}>
                <img src={solution.image} alt={solution.title} loading="lazy" decoding="async" className="h-72 w-full object-cover" />
                <div className="p-7 md:p-9">
                  <p className="text-sm font-extrabold text-[color:var(--accent)]">{solution.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-extrabold text-gray-950">{solution.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-gray-700">{solution.summary}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {solution.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 text-sm font-bold text-gray-900">
                        <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                  <Link
                    to={solution.slug === 'station-environmental-balance' ? '/environmental-balance' : `/solutions#${solution.slug}`}
                    className="sevali-button sevali-button-primary mt-8"
                  >
                    Read the section
                    <FiArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {owsSolution && (
        <section className="sevali-section bg-white">
          <div className="sevali-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="sevali-card overflow-hidden bg-white">
              <img src={owsSolution.image} alt={owsSolution.title} loading="lazy" decoding="async" className="h-[28rem] w-full object-cover" />
            </div>
            <div>
              <p className="sevali-kicker">Oil-water separation</p>
              <h2 className="sevali-heading-md mt-2">EcoLine OWS gives contaminated runoff its own dedicated treatment path.</h2>
              <p className="sevali-copy mt-5">
                OWS deserves its own spotlight because water risk appears across fuel sites, industrial yards, vehicle wash areas, terminals, and runoff-heavy operations. EcoLine B helps separate hydrocarbons from water with above-ground service access, washable cartridges, and optional oil draw-off support.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {owsSolution.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3 text-sm font-bold leading-6 text-gray-900">
                    <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                    {outcome}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-xl bg-cyan-50 p-5">
                <p className="font-extrabold text-cyan-950">EcoLine B animation is included in the detailed OWS section.</p>
                <p className="mt-2 text-sm leading-6 text-cyan-900">
                  The solution page now pairs the video with performance specs, cartridge-service advantages, EcoSorp notes, and ADD oil-skimmer details.
                </p>
              </div>
              <Link to="/solutions#oil-water-separation" className="sevali-button sevali-button-primary mt-8">
                Explore OWS
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {fireSafetySolution && (
        <section className="sevali-section bg-[#111827] text-white">
          <div className="sevali-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold text-amber-300">Fire and safety</p>
              <h2 className="sevali-heading-md mt-2">Cable-fire protection for high-risk infrastructure.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
                Stabiterm fire-protection materials help operators protect electrical cables, cable trays, and control routes where flame spread can turn a localized issue into a wider operating shutdown.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {fireSafetySolution.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3 text-sm font-bold leading-6 text-white/88">
                    <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    {outcome}
                  </div>
                ))}
              </div>
              <Link to="/fire-safety" className="sevali-button sevali-button-amber mt-8">
                Explore fire safety
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white">
              <img src={fireSafetySolution.image} alt={fireSafetySolution.title} loading="lazy" decoding="async" className="h-[30rem] w-full object-contain p-4" />
            </div>
          </div>
        </section>
      )}

      <section className="sevali-section bg-white">
        <div className="sevali-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="sevali-kicker">Storage facilities</p>
            <h2 className="sevali-heading-md mt-2">Optimization extends across storage, transfer, and Oil & Gas infrastructure.</h2>
            <p className="sevali-copy mt-5">{vruStorageFacilities.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {vruStorageFacilities.applications.slice(0, 4).map((application) => (
                <span key={application} className="rounded-full bg-gray-100 px-3 py-2 text-xs font-bold text-gray-700">
                  {application}
                </span>
              ))}
            </div>
            <Link to="/solutions#storage-facilities" className="sevali-button sevali-button-primary mt-8">
              See storage-facility VRU
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="sevali-card overflow-hidden">
            <img src={vruStorageFacilities.image} alt={vruStorageFacilities.title} loading="lazy" decoding="async" className="h-[28rem] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="sevali-kicker">Broader capability</p>
            <h2 className="sevali-heading-md mt-2">Balanced sectors, connected environmental problems.</h2>
            <p className="sevali-copy mt-5">
              Soil contamination, water stress, odor, sludge, corrosion, emissions, and operating loss appear differently in each sector. Sevali’s role is to match the technology stack to the condition, the proof requirement, and the business case.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industryGroups.map((industry) => (
              <div key={industry.title} className="sevali-card p-5">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-amber-600" />
                <h3 className="font-extrabold text-gray-950">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{industry.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section bg-white">
        <div className="sevali-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="sevali-kicker">Proof in motion</p>
            <h2 className="sevali-heading-md mt-2">Projects, partnerships, and field data.</h2>
            <p className="sevali-copy mt-5">
              Sevali’s current proof includes fuel-site recovery numbers, EBD field placement records, regional partnerships, testing culture, and global climate-event participation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="sevali-card overflow-hidden">
                <img src={project.imageUrl} alt={project.title} loading="lazy" decoding="async" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-extrabold text-amber-700">{project.type}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-gray-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{project.results}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section bg-[#17202b] text-white">
        <div className="sevali-container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-extrabold text-amber-300">Supporting services</p>
            <h2 className="sevali-heading-md mt-2">Carbon strategy and technology partnerships complete the offer.</h2>
          </div>
          <div className="grid gap-4">
            {supportingServices.map((service) => (
              <div key={service.title} className="rounded-xl bg-white/7 p-6">
                <service.icon className="h-8 w-8 text-amber-300" />
                <h3 className="mt-4 text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
