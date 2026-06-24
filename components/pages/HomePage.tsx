import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { industryGroups, proofPoints, projects, solutionGroups, supportingServices, vruStorageFacilities } from '../../data/siteContent';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="sevali-page">
      <Hero />

      <section className="sevali-section">
        <div className="sevali-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="sevali-kicker">One station plan</p>
            <h2 className="sevali-heading-lg mt-3">Environmental, emissions, water, and safety upgrades in one place.</h2>
          </div>
          <div className="space-y-6">
            <p className="sevali-copy text-lg">
              Sevali Energy is expanding beyond vapor recovery into a complete station environmental balance portfolio. Fuel retailers can address vapor losses, contaminated runoff, soil and groundwater risk, fleet emissions, and fire readiness through one practical partner.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Recover lost product', 'Reduce emissions and odors', 'Separate oil from water', 'Improve station safety'].map((item) => (
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
              That same mindset now extends across the station environment: vapor recovery, soil and groundwater protection, water separation, emissions reduction, and safety readiness.
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
                The video gives visitors a visual entry point into Sevali’s vapor recovery foundation, then the surrounding page connects that technology to the broader environmental balance and safety portfolio.
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
              <h2 className="sevali-heading-md mt-2">Five ways to modernize a station.</h2>
            </div>
            <Link to="/solutions" className="sevali-button sevali-button-ghost w-fit">
              View all solutions
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {solutionGroups.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions#${solution.slug}`}
                className={`solution-accent-${solution.color} sevali-card group flex min-h-[18rem] flex-col overflow-hidden hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-inherit transition`}
              >
                <img src={solution.image} alt="" className="h-28 w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-5 h-1.5 w-12 rounded-full bg-[color:var(--accent)]" />
                  <h3 className="text-xl font-extrabold text-gray-950">{solution.shortTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{solution.summary}</p>
                  <span className="mt-auto pt-6 text-sm font-extrabold text-[color:var(--accent)]">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container">
          <div className="mb-10 max-w-4xl">
            <p className="sevali-kicker">Current focus</p>
            <h2 className="sevali-heading-md mt-2">Two dedicated offers first: VRU and Environmental Balance.</h2>
            <p className="sevali-copy mt-5">
              The wider portfolio is still visible, but the strongest near-term buyer journey should give vapor recovery and environmental balance their own space.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {solutionGroups.slice(0, 2).reverse().map((solution) => (
              <article key={solution.slug} className={`solution-accent-${solution.color} sevali-card overflow-hidden`}>
                <img src={solution.image} alt={solution.title} className="h-72 w-full object-cover" />
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
                  <Link to={`/solutions#${solution.slug}`} className="sevali-button sevali-button-primary mt-8">
                    Read the section
                    <FiArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sevali-section bg-white">
        <div className="sevali-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="sevali-kicker">Storage facilities</p>
            <h2 className="sevali-heading-md mt-2">VRU is not only for retail stations.</h2>
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
            <img src={vruStorageFacilities.image} alt={vruStorageFacilities.title} className="h-[28rem] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="sevali-section">
        <div className="sevali-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="sevali-kicker">Broader capability</p>
            <h2 className="sevali-heading-md mt-2">Built for stations, backed by environmental technology depth.</h2>
            <p className="sevali-copy mt-5">
              The corporate profile spans municipal water, industrial sites, agriculture, aquaculture, remediation, transportation, and carbon management. The website leads with gas stations while showing that Sevali’s toolkit comes from a wider environmental and industrial practice.
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
              The next version of Sevali should sell with real proof: station recovery numbers, regional expansion, testing culture, and climate-event participation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="sevali-card overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="h-44 w-full object-cover" />
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
