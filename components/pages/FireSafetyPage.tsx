import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaBolt, FaFireExtinguisher, FaIndustry, FaShieldHalved } from 'react-icons/fa6';
import { solutionGroups } from '../../data/siteContent';

const fireSafetySolution = solutionGroups.find((solution) => solution.slug === 'fire-safety');

const proofPoints = [
  {
    label: '90 min',
    title: 'Circuit integrity',
    text: 'IEC 60331-21 APPLUS+ test maintained cable circuit integrity for 90 minutes plus cooling under the tested configuration.',
  },
  {
    label: '0.6 m',
    title: 'Flame-spread result',
    text: 'EN 60332-3-22 Category A testing reported 0.6 m carbonized extension for the protected cable, below the 2.5 m limit.',
  },
  {
    label: '40 years',
    title: 'Operating properties',
    text: 'Stabiterm-300 documentation describes long service properties for installed cable-protection applications.',
  },
  {
    label: '1 x 20 m',
    title: 'Roll format',
    text: 'Supplied in a practical roll format for cable trays, cable lines, and retrofit planning around existing infrastructure.',
  },
];

const materialSystems = [
  {
    title: 'Stabiterm-300 intumescent mesh',
    icon: FaShieldHalved,
    text: 'Flexible mesh wrap for new and existing electrical cables, cable lines, and cable trays. Under extreme heat it forms a porous char layer that helps isolate the fire point.',
  },
  {
    title: 'Stabiterm-225 cable coating',
    icon: FaFireExtinguisher,
    text: 'Water-borne coating option for cable sheaths and cable bundles when the specification calls for a coated protective barrier.',
  },
  {
    title: 'Stabiterm-008 sealant',
    icon: FaIndustry,
    text: 'Fire-resistant sealant for cable penetrations through walls, ceilings, partitions, and fire barriers.',
  },
];

const applications = [
  'Fuel-station electrical rooms',
  'Forecourt and canopy cable routes',
  'Tank-farm control cable trays',
  'Pump, lighting, alarm, and control circuits',
  'Industrial buildings and warehouses',
  'Commercial electrical risers',
];

const specificationSteps = [
  'Map cable routes that support critical pumps, controls, alarms, lighting, and emergency systems.',
  'Confirm the target fire standard, cable type, access condition, and operating environment.',
  'Select mesh, coating, sealant, or a combined system based on the risk zone and installation constraints.',
  'Document installation points and inspection rhythm so the protection layer stays visible in maintenance planning.',
];

const FireSafetyPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="Fire Safety"
      title="Stabiterm cable protection for critical fuel-site and industrial infrastructure."
      subtitle="Fire safety sits beside EBD, VRU, and OWS as a separate protection layer. Sevali helps operators specify intumescent cable mesh, coatings, and sealants for routes where flame spread can create operational shutdown and life-safety risk."
      backgroundImageUrl={fireSafetySolution?.image}
    >
      <div className="flex flex-wrap gap-3">
        <Link to="/contact" className="sevali-button sevali-button-amber">
          Discuss fire safety
          <FiArrowRight className="h-5 w-5" />
        </Link>
        <a href="#test-proof" className="sevali-button border border-white/40 text-white hover:bg-white/10 hover:text-white">
          View proof points
        </a>
      </div>
    </PageHero>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="sevali-kicker">Dedicated safety layer</p>
          <h2 className="sevali-heading-md mt-2">Electrical cable routes deserve their own protection plan.</h2>
          <p className="sevali-copy mt-5">
            Cable-line fires can travel through connected routes and threaten pumps, controls, alarms, lighting, and emergency systems. Stabiterm products are specified around the actual cable path, fire standard, access condition, and maintenance rhythm.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <img
            src={fireSafetySolution?.image}
            alt="Stabiterm-300 fire-rated intumescent mesh"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[22rem] w-full object-contain p-5"
          />
        </div>
      </div>
    </section>

    <section id="test-proof" className="sevali-section scroll-mt-28 bg-[#111827] text-white">
      <div className="sevali-container">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold text-amber-300">Tested performance</p>
            <h2 className="sevali-heading-md mt-2">Proof points operators can specify against.</h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-white/74">
            The Stabiterm documentation includes APPLUS+ fire testing for circuit integrity and vertical flame spread. Final project claims should always be tied to the selected cable, installation, and local code requirement.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {proofPoints.map((point) => (
            <article key={point.title} className="rounded-xl border border-white/14 bg-white/7 p-5">
              <p className="text-3xl font-extrabold text-amber-300">{point.label}</p>
              <h3 className="mt-3 text-lg font-extrabold">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/72">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container">
        <div className="max-w-3xl">
          <p className="sevali-kicker">Material systems</p>
          <h2 className="sevali-heading-md mt-2">Mesh, coating, and sealant work as a specification family.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {materialSystems.map((material) => (
            <article key={material.title} className="sevali-card rounded-xl p-7">
              <material.icon className="h-10 w-10 text-red-700" />
              <h3 className="mt-7 text-2xl font-extrabold text-gray-950">{material.title}</h3>
              <p className="mt-4 leading-7 text-gray-700">{material.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-gray-50">
      <div className="sevali-container grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-7 ring-1 ring-gray-200 md:p-8">
          <p className="sevali-kicker">Applications</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-950">Where fire safety fits.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {applications.map((application) => (
              <div key={application} className="flex items-start gap-3 text-sm font-bold leading-6 text-gray-900">
                <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                {application}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-[#111827] p-7 text-white md:p-8">
          <p className="text-sm font-extrabold text-amber-300">Specification flow</p>
          <h2 className="mt-2 text-3xl font-extrabold">Start with the route, not the product.</h2>
          <div className="mt-6 space-y-4">
            {specificationSteps.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-extrabold text-gray-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-white/76">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="sevali-section bg-[#1c222b] text-white">
      <div className="sevali-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-extrabold text-amber-300">Ready to review a cable route?</p>
          <h2 className="mt-2 max-w-4xl text-4xl font-extrabold md:text-5xl">
            Add fire protection to the same station plan as EBD, VRU, and OWS.
          </h2>
        </div>
        <Link to="/contact" className="sevali-button sevali-button-amber">
          Request consultation
          <FiArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  </div>
);

export default FireSafetyPage;
