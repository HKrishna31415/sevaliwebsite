import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { owsPerformanceSpecs, owsSystemAdvantages } from '../../data/siteContent';
import {
  FaBottleWater,
  FaChartLine,
  FaCloud,
  FaDroplet,
  FaFlaskVial,
  FaLeaf,
  FaSeedling,
  FaShieldHalved,
  FaWater,
} from 'react-icons/fa6';

const stationApplications = [
  {
    title: 'Soil and groundwater',
    icon: FaSeedling,
    description:
      'Supports bioremediation programs for hydrocarbon-impacted soil, groundwater risk, and long-term station site resilience.',
    items: ['Fuel spill legacy areas', 'Tank-field surroundings', 'Groundwater protection', 'Hydrocarbon and pollutant stress'],
  },
  {
    title: 'Air and odor control',
    icon: FaCloud,
    description:
      'Helps reduce odor and selected gas concerns around treatment areas by supporting more favorable natural breakdown conditions.',
    items: ['Odor around drains', 'Waste handling zones', 'Vent and process areas', 'Community air-quality pressure'],
  },
  {
    title: 'Water and sludge',
    icon: FaWater,
    description:
      'Used in water and wastewater environments where operators want to reduce odor, sludge, biofouling, scale, and corrosion burden.',
    items: ['Wash bays and drains', 'Septic and holding tanks', 'Process-water lines', 'Sludge-prone infrastructure'],
  },
];

const howItWorks = [
  'The compact units are positioned near the affected soil, water, or air environment after a site review.',
  'The device is designed to influence local electrochemical balance and reduce stress on native microbial activity.',
  'Healthier biological conditions can improve the natural breakdown of pollutants, odor compounds, sludge, and selected gases.',
  'The system keeps working passively after installation, with periodic visual checks instead of daily operation.',
];

const ebdUseCases = [
  {
    title: 'Lake, river, and algae treatment',
    icon: FaWater,
    description:
      'Continuous EBD deployments can support remediation programs for lakes, rivers, wetlands, and other bodies of water where algae, odor, nutrients, or water-quality stress need long-term attention.',
    tags: ['Lakes', 'Rivers', 'Wetlands', 'Algae pressure'],
  },
  {
    title: 'Raw sewage treatment for discharge',
    icon: FaBottleWater,
    description:
      'For sites with limited treatment infrastructure, EBD can be evaluated for flow-through sewage and wastewater support in pipes, canals, ditches, septic tanks, and wastewater treatment plants.',
    tags: ['Sewer pipes', 'Open canals', 'Septic tanks', 'WWTP support'],
  },
  {
    title: 'Agricultural soil and crop yield support',
    icon: FaSeedling,
    description:
      'Agricultural deployments can support degraded or over-farmed soil recovery, crop-health programs, disease-pressure reduction strategies, and yield-improvement goals.',
    tags: ['Soil recovery', 'Crop health', 'Disease pressure', 'Yield support'],
  },
  {
    title: 'Hard water treatment',
    icon: FaDroplet,
    description:
      'Scalable installations can be reviewed for high-mineral water systems where operators want to reduce scaling, mineral concentration effects, and maintenance burden at different flow rates.',
    tags: ['Mineral reduction', 'Scale control', 'Process water', 'Variable flow rates'],
  },
  {
    title: 'Aquaculture water remediation',
    icon: FaFlaskVial,
    description:
      'Aquaculture applications can support water remediation, disease-pressure reduction, and yield improvement in both onshore and offshore fish-production environments.',
    tags: ['Onshore farms', 'Offshore cages', 'Water quality', 'Yield support'],
  },
  {
    title: 'Oil pipelines, tanks, and tankers',
    icon: FaChartLine,
    description:
      'Oil infrastructure use cases can be assessed for sludge, drag, viscosity, corrosion, and storage or transfer performance in pipelines, tanks, tankers, and related hydrocarbon systems.',
    tags: ['Pipelines', 'Storage tanks', 'Tankers', 'Sludge and corrosion'],
  },
  {
    title: 'Crude oil well production support',
    icon: FaShieldHalved,
    description:
      'Wellhead deployments can be reviewed where operators want to address paraffin wax buildup, hydrogen sulfide concerns, corrosion, and production-efficiency constraints.',
    tags: ['Wellheads', 'Paraffin wax', 'H2S concerns', 'Corrosion reduction'],
  },
  {
    title: 'Contaminated soil and groundwater',
    icon: FaLeaf,
    description:
      'EBD technology can support remediation programs for organic and inorganic contamination, including hydrocarbon-impacted soil and groundwater around fuel, industrial, or storage sites.',
    tags: ['Organic contaminants', 'Inorganic contaminants', 'Crude oil impact', 'Groundwater risk'],
  },
  {
    title: 'Septic tank treatment and odor control',
    icon: FaCloud,
    description:
      'Septic-tank applications can help improve odor control, support treatment performance, and reduce backup risk with a low-maintenance deployment model.',
    tags: ['Odor control', 'Backup prevention', 'Low maintenance', 'Access-port installs'],
  },
];

const differentiators = [
  {
    title: 'No daily energy demand',
    icon: FaBottleWater,
    text: 'Many EBD deployments are designed to operate without electricity, filters, chemicals, salts, added bacteria, aeration, or routine consumables after installation.',
  },
  {
    title: 'Low-disruption deployment',
    icon: FaShieldHalved,
    text: 'The devices are compact and can often be added around existing station, water, or remediation infrastructure without a major construction program.',
  },
  {
    title: 'Site-specific validation',
    icon: FaFlaskVial,
    text: 'The right plan should define the target medium, baseline condition, inspection rhythm, and proof metrics before claims are made.',
  },
  {
    title: 'Finance and reporting support',
    icon: FaChartLine,
    text: 'When projects qualify, emissions, water, or remediation improvements can support ESG reporting, green finance conversations, and sustainability-linked goals.',
  },
];

const proofSignals = [
  'Technology documentation describes industrial-scale deployments across Europe, North America, and the Middle East.',
  'Independent institutions cited in the technology record include FIU in the United States and scientific bodies in Spain.',
  'Documented use cases cover greenhouse gas and odor reduction, wastewater treatment, hard-water treatment, soil remediation, agriculture, aquaculture, and oil infrastructure.',
];

const miamiTestPhotos = [
  {
    src: '/miami-ebd-station-overview.jpg',
    title: 'Station context',
    caption: 'Fuel-station forecourt and landscaped perimeter selected for field placement.',
  },
  {
    src: '/miami-ebd-core-drilling.jpg',
    title: 'Paved-area access',
    caption: 'Core drilling through pavement to place the EBD sensor near impacted station infrastructure.',
  },
  {
    src: '/miami-ebd-paved-placement.jpg',
    title: 'Paved placement',
    caption: 'Sensor positioned below a paved surface before the access point is closed.',
  },
  {
    src: '/miami-ebd-ground-placement.jpg',
    title: 'Soil placement',
    caption: 'Placement in landscaped soil to support evaluation around grass, curb, and runoff-adjacent areas.',
  },
  {
    src: '/miami-ebd-soil-placement.jpg',
    title: 'Hand placement',
    caption: 'EBD sensor placed by hand after the test location is prepared.',
  },
  {
    src: '/miami-ebd-paved-marker.jpg',
    title: 'Marked test point',
    caption: 'Marked forecourt point used to guide placement and future inspection reference.',
  },
];

const miamiProofPhotos = [miamiTestPhotos[0], miamiTestPhotos[4]];
const miamiGalleryPhotos = [miamiTestPhotos[1], miamiTestPhotos[2], miamiTestPhotos[3], miamiTestPhotos[5]];

const miamiTestPoints = [
  'Multiple sensor placements across paved and landscaped station areas.',
  'Core-drilled access points for paved forecourt testing.',
  'Soil placements near grass, curb edges, and station runoff paths.',
  'Field photos document installation context for future monitoring and client review.',
];

const EnvironmentalBalancePage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="Environmental Balance Devices"
      title="Passive remediation support for cleaner station soil, water, and air."
      subtitle="Sevali helps fuel stations apply Environmental Balance Device technology where conventional treatment is too disruptive, too maintenance-heavy, or too narrow for the whole site problem."
      backgroundImageUrl="/gasstationfuture.webp"
    >
      <div className="flex flex-wrap gap-3">
        <Link to="/contact" className="sevali-button sevali-button-amber">
          Review my site
          <FiArrowRight className="h-5 w-5" />
        </Link>
        <a href="#miami-ebd-test" className="sevali-button border border-white/40 text-white hover:bg-white/10 hover:text-white">
          View Miami field test
        </a>
      </div>
    </PageHero>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="sevali-kicker">Station use case</p>
          <h2 className="sevali-heading-md mt-2">Environmental balance is the layer around the whole fuel site.</h2>
          <p className="sevali-copy mt-5">
            Vapor recovery handles product loss at the tank. Oil-water separation handles contaminated runoff. Environmental Balance Devices support the surrounding environment: soil, groundwater, odor, wastewater, sludge, scale, corrosion, and long-running microbial remediation conditions.
          </p>
        </div>
        <div className="rounded-2xl bg-[#111827] p-6 text-white md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {['Air', 'Water', 'Soil'].map((medium) => (
              <div key={medium} className="rounded-xl border border-white/14 bg-white/7 p-5">
                <p className="text-4xl font-extrabold text-amber-300">{medium}</p>
                <p className="mt-3 text-sm leading-6 text-white/72">One passive technology family, evaluated against the local station condition.</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-white/14 pt-6">
            <p className="text-lg font-bold leading-8">
              Best fit: operators who need a practical environmental upgrade before a problem becomes a shutdown, complaint, or expensive excavation project.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="miami-ebd-test" className="sevali-section scroll-mt-28">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="sevali-kicker">Miami station field test</p>
          <h2 className="sevali-heading-md mt-2">Proof before the deep technical map.</h2>
          <p className="sevali-copy mt-5">
            Sevali documented EBD sensor placement across a real Miami fuel station: paved forecourt access points, landscaped soil, curb edges, and runoff-adjacent locations. The test gives buyers a practical view of how the technology can be placed around the actual surfaces they manage every day.
          </p>
          <div className="mt-6 grid gap-3">
            {miamiTestPoints.slice(0, 3).map((point) => (
              <div key={point} className="flex gap-3 text-sm font-bold leading-6 text-gray-900">
                <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                {point}
              </div>
            ))}
          </div>
          <a href="#miami-ebd-gallery" className="sevali-button sevali-button-primary mt-7">
            View field-test gallery
            <FiArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {miamiProofPhotos.map((photo) => (
            <figure key={photo.src} className="sevali-card overflow-hidden bg-white">
              <img src={photo.src} alt={photo.caption} loading="lazy" decoding="async" className="h-80 w-full object-cover" />
              <figcaption className="p-5">
                <p className="font-extrabold text-gray-950">{photo.title}</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="sevali-kicker">EBD + OWS</p>
          <h2 className="sevali-heading-md mt-2">Environmental balance works best when runoff is controlled too.</h2>
          <p className="sevali-copy mt-5">
            EBD supports soil, water, odor, sludge, and long-running remediation conditions around the station. Oil-water separation handles the first line of defense for contaminated runoff from drains, wash areas, spills, and stormwater. Together, they give operators a stronger station-wide environmental plan.
          </p>
          <Link to="/solutions#oil-water-separation" className="sevali-button sevali-button-primary mt-7">
            Learn about OWS
            <FiArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {owsPerformanceSpecs.slice(0, 2).map((spec) => (
            <div key={spec.title} className="rounded-xl bg-white p-5">
              <p className="text-3xl font-extrabold text-cyan-800">{spec.label}</p>
              <h3 className="mt-3 font-extrabold text-gray-950">{spec.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">{spec.description}</p>
            </div>
          ))}
          {owsSystemAdvantages.slice(0, 2).map((advantage) => (
            <div key={advantage.title} className="rounded-xl bg-white p-5">
              <FaDroplet className="h-7 w-7 text-cyan-700" />
              <h3 className="mt-4 font-extrabold text-gray-950">{advantage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section">
      <div className="sevali-container">
        <div className="max-w-3xl">
          <h2 className="sevali-heading-md">Built around the three station environments that create risk.</h2>
          <p className="sevali-copy mt-5">
            The page should sell the EBD offer where buyers feel pain first: contaminated ground, persistent odors, and water systems that become expensive to maintain.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stationApplications.map((application) => (
            <article key={application.title} className="sevali-card bg-white p-7">
              <application.icon className="h-10 w-10 text-emerald-700" />
              <h3 className="mt-6 text-2xl font-extrabold text-gray-950">{application.title}</h3>
              <p className="mt-4 leading-7 text-gray-700">{application.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {application.items.map((item) => (
                  <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-[#17202b] text-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold text-amber-300">How it works</p>
          <h2 className="sevali-heading-md mt-2">Support natural remediation without turning the site into a treatment plant.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            EBD technology is described as a compact device system that interacts with the surrounding environment and supports more favorable electrochemical conditions for natural biological processing.
          </p>
        </div>
        <div className="grid gap-4">
          {howItWorks.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-xl bg-white/7 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-extrabold text-black">
                {index + 1}
              </span>
              <p className="leading-7 text-white/82">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="sevali-heading-md">Why station owners consider it.</h2>
          <p className="sevali-copy mt-5">
            EBD is not a replacement for every engineered treatment system. It is a useful layer when the site needs passive, scalable environmental support with a lighter operational footprint.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-xl bg-gray-50 p-5">
                <item.icon className="h-8 w-8 text-amber-700" />
                <h3 className="mt-4 font-extrabold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="sevali-card h-fit p-7">
          <FaLeaf className="h-10 w-10 text-emerald-700" />
          <h3 className="mt-5 text-2xl font-extrabold text-gray-950">Good-fit assessment</h3>
          <p className="mt-4 leading-7 text-gray-700">
            Sevali should start with a site conversation, not a generic product quote. We look at the medium, the suspected pollutant load, nearby infrastructure, complaint history, and proof requirements before recommending a deployment plan.
          </p>
          <Link to="/contact" className="sevali-button sevali-button-primary mt-7">
            Start assessment
            <FiArrowRight className="h-5 w-5" />
          </Link>
        </aside>
      </div>
    </section>

    <section id="miami-ebd-gallery" className="sevali-section scroll-mt-28">
      <div className="sevali-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="sevali-kicker">Miami station field test</p>
            <h2 className="sevali-heading-md mt-2">EBD sensor placement across paved and landscaped station zones.</h2>
          </div>
          <div>
            <p className="sevali-copy">
              This field test documents how Environmental Balance Device sensors can be embedded in different station conditions: paved forecourt areas, grass and soil zones, curb edges, and runoff-adjacent locations. The goal is to create a practical placement record before long-term monitoring begins.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Paved forecourt', 'Landscaped soil', 'Core-drilled access', 'Monitoring reference points'].map((tag) => (
                <span key={tag} className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {miamiGalleryPhotos.map((photo, index) => (
              <figure key={photo.src} className={`sevali-card overflow-hidden bg-white ${index === 0 ? 'sm:col-span-2' : ''}`}>
                <img src={photo.src} alt={photo.caption} loading="lazy" decoding="async" className={`${index === 0 ? 'h-[26rem]' : 'h-72'} w-full object-cover`} />
                <figcaption className="p-5">
                  <p className="font-extrabold text-gray-950">{photo.title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{photo.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <aside className="h-fit rounded-2xl bg-[#111827] p-7 text-white md:p-8">
            <p className="text-sm font-extrabold text-amber-300">Test record</p>
            <h3 className="mt-3 text-3xl font-extrabold">What the Miami placement shows.</h3>
            <p className="mt-4 leading-7 text-white/72">
              The test is useful because it shows installability in real station surfaces, not only idealized diagrams. It gives operators a concrete view of how EBD sensors can be positioned around the actual problem areas they already manage.
            </p>
            <div className="mt-7 space-y-4">
              {miamiTestPoints.map((point) => (
                <div key={point} className="flex gap-3 text-sm font-bold leading-6 text-white/82">
                  <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  {point}
                </div>
              ))}
            </div>
            <Link to="/contact" className="sevali-button sevali-button-amber mt-8">
              Discuss a field test
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </aside>
        </div>
      </div>
    </section>

    <section className="sevali-section">
      <div className="sevali-container">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="sevali-kicker">Complete use-case map</p>
            <h2 className="sevali-heading-md mt-2">One EBD platform, multiple environmental conditions.</h2>
          </div>
          <p className="sevali-copy">
            Sevali leads with fuel stations, but the Environmental Balance Device family has documented use cases across water bodies, wastewater, agriculture, aquaculture, oil infrastructure, wells, contaminated soil, and septic systems. Each application still needs site review, baseline conditions, and success metrics before deployment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ebdUseCases.map((useCase) => (
            <article key={useCase.title} className="sevali-card bg-white p-6">
              <useCase.icon className="h-9 w-9 text-emerald-700" />
              <h3 className="mt-5 text-xl font-extrabold text-gray-950">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">{useCase.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl">
          <img src="/miami-ebd-ground-placement.jpg" alt="Environmental Balance Device soil placement at a fuel station test area" loading="lazy" decoding="async" className="h-full min-h-[28rem] w-full object-cover" />
        </div>
        <div>
          <p className="sevali-kicker">Proof posture</p>
          <h2 className="sevali-heading-md mt-2">Make the claims measurable before making them loud.</h2>
          <p className="sevali-copy mt-5">
            The technology record includes third-party institutional references and multiple international application categories. For buyers, the practical next step is to define what success means on their site.
          </p>
          <div className="mt-8 space-y-4">
            {proofSignals.map((signal) => (
              <div key={signal} className="flex gap-3 rounded-xl bg-gray-50 p-4 text-sm font-bold leading-6 text-gray-800">
                <FiCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                {signal}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-amber-50 p-5">
            <p className="font-extrabold text-gray-950">Buyer note</p>
            <p className="mt-2 leading-7 text-gray-700">
              Environmental Balance should be specified with baseline testing, installation notes, inspection cadence, and follow-up indicators such as odor, sludge, water quality, soil condition, corrosion, or emissions data.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default EnvironmentalBalancePage;
