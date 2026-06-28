import {
  FaChartLine,
  FaDroplet,
  FaEarthAmericas,
  FaFireExtinguisher,
  FaGasPump,
  FaHandshake,
  FaIndustry,
  FaLeaf,
  FaRecycle,
  FaShieldHalved,
  FaTruckFast,
  FaWrench,
} from 'react-icons/fa6';
import { MdWaterDrop } from 'react-icons/md';

export const contactInfo = {
  address: 'Gazanfar Musabeyov 23, Baku, Azerbaijan',
  office: '+994 12 560 28 25',
  mobile: '+994 55 820 89 81',
  legacyMobile: '+994 55 320 42 81',
  email: 'yalchin@sevalienergy.com',
  website: 'www.sevalienergy.com',
};

export const primaryNav = [
  { to: '/', title: 'Home' },
  { to: '/solutions', title: 'Solutions' },
  { to: '/environmental-balance', title: 'EBD Platform' },
  { to: '/how-it-works', title: 'VRU' },
  { to: '/fire-safety', title: 'Fire Safety' },
  { to: '/industries', title: 'Industries' },
  { to: '/projects', title: 'Projects' },
  { to: '/resources', title: 'Resources' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
];

export const solutionGroups = [
  {
    slug: 'station-environmental-balance',
    title: 'Environmental Balance Devices',
    shortTitle: 'EBD Platform',
    eyebrow: 'Passive environmental support for soil, water, air, and operations',
    icon: FaLeaf,
    color: 'emerald',
    summary:
      'Passive Environmental Balance Devices help operators address soil, groundwater, odor, scaling, sludge, corrosion, wastewater, and remediation challenges without heavy disruption.',
    details: [
      'Supports soil remediation for oil, heavy metals, and pollutant contamination without excavation where conditions allow.',
      'Addresses water and wastewater issues including odor control, sludge breakdown, scaling prevention, and nutrient reduction.',
      'Operates without electricity, chemicals, filters, salt, or routine consumables in many EBD applications.',
      'Can support carbon-credit and green-finance pathways where projects qualify.',
    ],
    outcomes: ['Cleaner soil and groundwater', 'Lower odor and emissions exposure', 'Reduced maintenance burden', 'Long-term site resilience'],
    image: '/miami-ebd-soil-placement.jpg',
  },
  {
    slug: 'vapor-recovery',
    title: 'Vapor Recovery Units',
    shortTitle: 'Vapor Recovery',
    eyebrow: 'Hydrocarbon capture for stations, terminals, and storage facilities',
    icon: FaGasPump,
    color: 'amber',
    summary:
      'VRU systems capture fuel vapors that would otherwise escape during storage and transfer, recovering saleable gasoline while reducing emissions and fire risk.',
    details: [
      'Captures over 99% of fuel vapors in suitable applications and converts them back into usable gasoline.',
      'Reduces VOC emissions, flammable vapor accumulation, product loss, and regulatory exposure.',
      'Saudi Arabia project data showed 10,248 liters recovered in June 2024 at a fuel site with 1.3M liters monthly turnover.',
      'Supports fuel retailers, terminals, and storage operators seeking efficiency, compliance, safety, and visible sustainability leadership.',
    ],
    outcomes: ['Recovered fuel value', 'Lower VOC emissions', 'Improved site safety', 'Regulatory confidence'],
    image: '/koreastation2.webp',
  },
  {
    slug: 'oil-water-separation',
    title: 'Oil-Water Separation',
    shortTitle: 'OWS',
    eyebrow: 'Retrofittable separation kits for contaminated runoff',
    icon: FaDroplet,
    color: 'cyan',
    summary:
      'Below-ground and above-ground coalescing oil-water separation systems help operators treat hydrocarbon-contaminated water while using local tank infrastructure.',
    details: [
      'Retrofittable kits integrate with new or existing steel and concrete tanks, above or below ground.',
      'Removes free non-emulsified oil, hydrocarbons, diesel, gasoline, and fuels to below 5 PPM in specified systems, supporting U.S. requirements and the stricter EN858 European standard.',
      'Supports treatment capacities from 15 GPM to more than 1,600 GPM, with multiple units installable side by side for higher flow requirements.',
      'Uses washable, reusable coalescing cartridges instead of bulky plate packs, so operators can remove cartridges by hand from above ground.',
      'Maintenance can be conducted above ground, avoiding confined-space entry and reducing the need to empty oil and water from the tank before service.',
    ],
    outcomes: ['Cleaner discharge', 'Lower VAC-truck cost', 'Safer above-ground maintenance', 'Fail-safe discharge protection'],
    image: '/ows-ecoline-system.webp',
  },
  {
    slug: 'fuel-economy-emissions',
    title: 'Fuel Economy & Emissions',
    shortTitle: 'Fuel Economy',
    eyebrow: 'Cleaner mobility and fleet performance',
    icon: FaTruckFast,
    color: 'blue',
    summary:
      'Fuel economizer technology supports fleets and commercial vehicles with lower fuel consumption, cleaner combustion, and reduced engine wear.',
    details: [
      'Supertech Azerbaijan represents an Italian-engineered fuel economizer for Azerbaijan.',
      'Applicable for cars, trucks, motorcycles, fleets, government agencies, and distributor partnerships.',
      'Targets fuel savings up to 12% and CO2 emissions reduction up to 80% under appropriate conditions.',
      'Helps reduce carbon deposits, stabilize engine temperature, lower maintenance costs, and extend engine life.',
    ],
    outcomes: ['Fuel savings', 'Lower emissions', 'Extended engine life', 'Fleet operating cost reduction'],
    image: '/SevaliPakistan.jpeg',
  },
  {
    slug: 'fire-safety',
    title: 'Fire & Safety Products',
    shortTitle: 'Fire & Safety',
    eyebrow: 'Cable and infrastructure fire protection',
    icon: FaFireExtinguisher,
    color: 'red',
    summary:
      'Stabiterm fire-protection materials help fuel sites, tank farms, and industrial facilities reduce cable-fire spread and protect critical electrical routes.',
    details: [
      'Stabiterm-300 is an intumescent mesh wrap for new and existing electrical cables, cable lines, and cable trays.',
      'Under extreme heat, the mesh forms a porous thermal char layer that helps isolate the fire point and slow flame spread across cable surfaces.',
      'APPLUS+ testing confirmed IEC 60331-21 circuit-integrity performance for 90 minutes plus cooling under the tested cable configuration.',
      'EN 60332-3-22 Category A flame-spread testing showed the protected cable stayed below the 2.5 m carbonization limit under the tested conditions.',
    ],
    outcomes: ['90-minute circuit-integrity test', 'Bunched-cable flame-spread compliance', 'Cable tray retrofit support', 'Up to 40-year operating properties'],
    image: '/stabiterm-300-mesh.png',
  },
];

export const solutionPillars = [
  {
    title: 'Environmental',
    summary:
      'EBD, soil and groundwater remediation, odor reduction, sludge control, wastewater support, and oil-water separation for cleaner operating environments.',
    solutionSlugs: ['station-environmental-balance', 'oil-water-separation'],
    outcomes: ['Cleaner soil and water', 'Lower odor burden', 'Reduced sludge and scale', 'Practical remediation support'],
  },
  {
    title: 'Optimization',
    summary:
      'VRU, oil and gas infrastructure support, storage and transfer improvements, and process-focused interventions that reduce avoidable loss.',
    solutionSlugs: ['vapor-recovery', 'station-environmental-balance'],
    outcomes: ['Recovered product value', 'Lower vapor and emissions loss', 'Better storage performance', 'Site-specific operating plans'],
  },
  {
    title: 'Efficiency',
    summary:
      'Fuel economy, emissions reduction, maintenance reduction, carbon management, and technology partnerships that improve the business case for sustainability.',
    solutionSlugs: ['fuel-economy-emissions', 'fire-safety'],
    outcomes: ['Lower operating cost', 'Reduced emissions exposure', 'Improved maintenance rhythm', 'ESG and finance readiness'],
  },
];

export const vruStorageFacilities = {
  title: 'Vapor Recovery for Storage Facilities',
  eyebrow: 'Tank farms, terminals, bulk storage, and loading operations',
  summary:
    'Storage facilities lose valuable hydrocarbon product through tank breathing, loading activity, transfer operations, and temperature-driven vaporization. Sevali VRU systems help capture those vapors, reduce emissions, and return recovered product to usable inventory.',
  image: '/proj_3.png',
  applications: ['Fuel storage terminals', 'Tank farms', 'Bulk gasoline storage', 'Truck loading areas', 'Refinery storage', 'Pipeline pumping stations'],
  benefits: [
    'Capture fugitive VOC emissions from tanks and transfer points.',
    'Reduce product loss during storage, breathing, and loading cycles.',
    'Improve safety by lowering flammable vapor accumulation around storage infrastructure.',
    'Support compliance and community air-quality expectations for high-volume facilities.',
  ],
  proof: 'A typical gasoline operation losing 0.1% to 1% of monthly volume through vaporization can turn preventable loss into recoverable value when the system is sized and operated correctly.',
};

export const owsStationChallenges = [
  {
    title: 'High maintenance cost',
    description:
      'Conventional plate-pack separators are not set-and-forget systems. Trapped oily sludge often requires frequent vacuum-truck cleanout and expensive hazardous-waste disposal.',
  },
  {
    title: 'Plate-pack cleaning burden',
    description:
      'Coalescing plates can become coated in grime, forcing operators to remove and power-wash internal parts before the separator performs properly again.',
  },
  {
    title: 'Emulsion failure',
    description:
      'Detergents, car-wash soaps, and some biofuel conditions can mix oil and water into emulsions that gravity-only separators cannot reliably separate.',
  },
  {
    title: 'Storm-flood vulnerability',
    description:
      'A heavy downpour can push water through an undersized separator too quickly, flushing previously trapped oil downstream before gravity separation can work.',
  },
  {
    title: 'Confined-space safety risk',
    description:
      'Underground separator vaults can contain petroleum vapors and low oxygen, making tank entry dangerous without specialized training and monitoring.',
  },
];

export const owsSystemAdvantages = [
  {
    title: 'EcoLine B cartridge design',
    description:
      'EcoLine B Series systems use easy-to-handle coalescing cartridges instead of bulky plate packs, allowing one operator to remove washable cartridges from above ground without entering the tank.',
  },
  {
    title: 'Automatic oil draw-off',
    description:
      'The optional mechanical ADD oil skimmer collects separated oil from the water surface and drains it by gravity into a pure-oil collection tank, reducing mixed oily-water disposal.',
  },
  {
    title: 'Pure recovered oil value',
    description:
      'The ADD system is designed to deliver very high skimmed-oil purity, allowing oil recyclers to remove collected oil more economically than water-heavy VAC-truck waste.',
  },
  {
    title: 'Free and emulsified oil options',
    description:
      'The EcoLine B Ecosorp configuration can be evaluated where sites need treatment for free oil plus chemically or mechanically emulsified oil from soaps, detergents, or wash activity.',
  },
  {
    title: '100-year storm sizing',
    description:
      'Systems can be sized around the local 100-year maximum storm event, giving operators a practical path to oversize treatment flow for flash-flood conditions.',
  },
  {
    title: 'Catastrophic spill protection',
    description:
      'An upstream Oil Draw Off system can divert and store high volumes of pure oil during spill events, helping prevent downstream contamination and cleanup liability.',
  },
  {
    title: 'Mechanical shut-off and alarms',
    description:
      'The system includes a mechanical automatic shut-off valve and can be equipped with AC or DC alarms with internet-based notifications for tanks requiring attention.',
  },
  {
    title: 'Retrofit flexibility',
    description:
      'Units can be installed or retrofitted in new or existing concrete, carbon steel, fiberglass, single-wall, or double-wall tanks in common round, square, or rectangular shapes.',
  },
];

export const owsPerformanceSpecs = [
  {
    label: '<5 mg/L',
    title: 'Free-oil discharge target',
    description:
      'EcoLine B is documented for residual free petroleum content below 5 mg/L in suitable non-emulsified oil applications, exceeding EN858 performance expectations.',
  },
  {
    label: '0.1 mg/L',
    title: 'EcoSorp polishing target',
    description:
      'EcoSorp can be evaluated as a downstream adsorption stage for small amounts of free, mechanically emulsified, or chemically emulsified oil when very low hydrocarbon discharge is required.',
  },
  {
    label: '16-1,600 GPM',
    title: 'Standard flow range',
    description:
      'The EcoLine B model family spans 16 GPM to 1,600 GPM, with larger or parallel configurations evaluated for higher-flow projects.',
  },
  {
    label: '30-50%',
    title: 'Potential maintenance savings',
    description:
      'Brochure guidance cites annual maintenance cost savings of roughly 30% to 50% compared with conventional separator systems, depending on site conditions.',
  },
];

export const owsTechnicalNotes = [
  'Two-step treatment combines gravity separation with enhanced coalescing media for droplets too small to separate by gravity alone.',
  'An optional upstream grit chamber removes solids and helps stabilize temperature and oil-concentration fluctuations before separation.',
  'The coalescing media is a durable reticular polyurethane foam cartridge that can be rinsed and reinstalled during routine service.',
  'EcoLine B systems use stainless steel grade 304 and high-grade polyethylene components, with permanent operating temperature documented from above freezing to 158 F / 70 C.',
  'Routine guidance calls for early visual inspection during startup, then maintenance intervals adjusted to the actual site load.',
  'The outlet spill-control valve closes when maximum oil storage capacity is reached, and can be paired with an optional oil-level alarm.',
];

export const ecoSorpNotes = [
  'EcoSorp is intended as a final treatment element after a grit chamber and high-efficiency oil-water separator.',
  'The adsorption media physically binds oil particles that are too small for gravity separation and can hold roughly 9 to 10 times its own weight in hydrocarbons and petroleum byproducts.',
  'Media condition is visually trackable: new media is bright white, then turns yellow or brown as hydrocarbons are adsorbed.',
  'Inspection is typically monthly after startup and after non-routine events, with replacement intervals often in the 3 to 4 month range depending on inlet concentration.',
  'Detailed water analysis should be reviewed for pH outside the 6 to 8 range, high chloride levels, heavy suspended solids, or other conditions that may impede adsorption performance.',
];

export const addDeviceSpecs = [
  'Patented mechanical ADD DN50 device can retrofit into EcoLine A, EcoLine B, XL Panel, or suitable third-party gravity separators.',
  'The device activates when the oil layer reaches approximately 50 to 60 mm / 2.4 in and drains separated oil through a DN50 outlet.',
  'Maximum oil draw-off flow is documented up to 0.25 L/s / 4.0 GPM depending on project parameters.',
  'The collected oil is documented as 99.7% free of water, turning separated oil from disposal waste into a more practical recycling stream.',
];

export const supportingServices = [
  {
    title: 'Environmental & Carbon Management Consulting',
    icon: FaChartLine,
    summary:
      'Assessment, target setting, decarbonization roadmaps, stakeholder engagement, ESG reporting, and strategy optimization for organizations beginning or refining their climate journey.',
    steps: ['Current emissions assessment', 'Target setting', 'Strategic action planning', 'Stakeholder engagement', 'Monitoring and reporting'],
  },
  {
    title: 'International Technology Partnerships',
    icon: FaHandshake,
    summary:
      'SEVALI works with technology manufacturers and solution providers from the US, UK, EU, South Korea, China, Russia, Italy, and regional partners.',
    steps: ['Technology sourcing', 'Local market adaptation', 'Installation coordination', 'Long-term support'],
  },
];

export const industryGroups = [
  {
    title: 'Oil & Gas',
    icon: FaIndustry,
    summary:
      'EBD, VRU, OWS, and optimization technologies for pipelines, wells, tanks, terminals, refineries, and retail fuel assets.',
    applications: ['Pipelines and wells', 'Storage tanks and tankers', 'Refineries', 'Fuel terminals', 'Gas stations as proof sites'],
  },
  {
    title: 'Agriculture & Farming',
    icon: FaEarthAmericas,
    summary:
      'Soil recovery, crop-health support, slurry and odor management, aquaculture water support, and low-disruption environmental improvement.',
    applications: ['Crop farming', 'Animal farming', 'Soil restoration', 'Fish ponds', 'Aquaculture raceways'],
  },
  {
    title: 'Water & Wastewater',
    icon: MdWaterDrop,
    summary:
      'Wastewater, drinking water, septic, oxidation pond, sewage, solid waste, odor, corrosion, and carbon-credit opportunities.',
    applications: ['WWTP', 'Drinking-water plants', 'Septic tanks', 'Municipal solid waste', 'River and coastal discharge'],
  },
  {
    title: 'Industrial & Infrastructure',
    icon: FaIndustry,
    summary:
      'Environmental and efficiency programs for cement, steel, chemical storage, transformer sites, power generation, and process-water systems.',
    applications: ['Steel plants', 'Cement plants', 'Chemical storage', 'Transformer sites', 'Power generation sites'],
  },
  {
    title: 'Municipal Remediation',
    icon: FaRecycle,
    summary:
      'Long-term environmental support for water bodies, odor complaints, contaminated soil, public infrastructure, and green-finance pathways.',
    applications: ['Lakes and rivers', 'Public land remediation', 'Odor control', 'Solid waste sites', 'Green finance programs'],
  },
  {
    title: 'Gas Stations',
    icon: FaGasPump,
    summary:
      'A proven vertical where Sevali combines VRU, OWS, EBD, fuel economy, and safety systems into measurable site upgrades.',
    applications: ['Retail fuel sites', 'Car wash runoff', 'Forecourt soil', 'Tank areas', 'Station safety'],
  },
];

export const proofPoints = [
  { value: '9+', label: 'EBD application families', note: 'Across soil, water, agriculture, aquaculture, oil infrastructure, and wastewater' },
  { value: '99%+', label: 'Potential vapor recovery efficiency', note: 'For suitable VRU and storage applications' },
  { value: '<5 PPM', label: 'Oil-water separation target', note: 'For free non-emulsified oil in specified OWS systems' },
  { value: '15+ yrs', label: 'Long-term EBD action', note: 'For selected remediation use cases' },
];

export const projects = [
  {
    title: 'Saudi Arabia VRU Recovery',
    location: 'Saudi Arabia',
    imageUrl: '/proj_1.webp',
    type: 'Vapor Recovery',
    challenge: 'A high-throughput fuel site needed to reduce vapor losses while improving environmental performance and profitability.',
    solution: 'SEVALI deployed vapor recovery technology configured for fuel turnover and local operating conditions.',
    results: 'In June 2024, a fuel site with 1.3 million liters monthly turnover recovered 10,248 liters of gasoline vapor, averaging more than 340 liters per day.',
  },
  {
    title: 'Jordan SGS Validation',
    location: 'Jordan',
    imageUrl: '/jordansgstest.jpg',
    type: 'Testing & Certification',
    challenge: 'Fuel operators needed verified confidence that vapor recovery technology could meet performance and compliance expectations.',
    solution: 'SEVALI supported testing and documentation with SGS-related validation work in Jordan.',
    results: 'The project strengthened regional proof for VRU adoption and helped connect performance claims to third-party testing culture.',
  },
  {
    title: 'Pakistan Market Partnership',
    location: 'Pakistan',
    imageUrl: '/PIPSevali.jpg',
    type: 'Partnership',
    challenge: 'A new market needed institutional support for vapor recovery development and environmental modernization.',
    solution: 'SEVALI signed an MoU with the Petroleum Institute of Pakistan and met with PSO leadership to advance market deployment.',
    results: 'The partnership created a channel for future VRU projects and broader environmental technology solutions.',
  },
  {
    title: 'Global Energy Transition Congress',
    location: 'International',
    imageUrl: '/sevaliGET.jpg',
    type: 'Climate & Partnerships',
    challenge: 'SEVALI needed to present its technology portfolio to global energy-transition stakeholders.',
    solution: 'The team showcased vapor recovery and environmental solutions at the Global Energy Transition Congress.',
    results: 'The event strengthened SEVALI’s positioning as a practical environmental technology partner beyond a single product.',
  },
  {
    title: 'COP29 Presence',
    location: 'Baku, Azerbaijan',
    imageUrl: '/sevaliCOP29.jpeg',
    type: 'Climate Forum',
    challenge: 'Climate-focused stakeholders need credible technologies that connect emissions reduction with operational value.',
    solution: 'SEVALI participated in COP29 conversations around cleaner operations and sustainability implementation.',
    results: 'The presence connected the company’s practical environmental solutions with wider decarbonization and climate-finance conversations.',
  },
  {
    title: 'OEM & Technology Network',
    location: 'Korea, China, and regional partners',
    imageUrl: '/sevaliOEMfactory.jpeg',
    type: 'Manufacturing',
    challenge: 'Clients need dependable supply, installation, and technology adaptation across different markets.',
    solution: 'SEVALI works with international manufacturers and solution providers to source and implement reliable systems.',
    results: 'The network supports practical delivery across VRU, environmental, water, and safety product categories.',
  },
];

export const resources = [
  {
    title: 'VRU ROI Calculator',
    description: 'Estimate the value of recovered vapor for a fuel site based on volume, fuel price, and unit investment.',
    to: '/roi-calculator',
    icon: FaChartLine,
  },
  {
    title: 'System Care & Maintenance',
    description: 'Operational guidance for keeping recovery, separation, remediation, and safety systems reliable after installation.',
    to: '/maintenance',
    icon: FaWrench,
  },
  {
    title: 'Frequently Asked Questions',
    description: 'Answers about the expanded solution portfolio, installation, safety, compliance, and purchasing.',
    to: '/faq',
    icon: FaShieldHalved,
  },
  {
    title: 'News & Partnerships',
    description: 'Recent project updates, market partnerships, and global climate-event participation.',
    to: '/news',
    icon: FaRecycle,
  },
];
