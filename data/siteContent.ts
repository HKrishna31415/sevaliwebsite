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
  { to: '/environmental-balance', title: 'EBD' },
  { to: '/how-it-works', title: 'VRU' },
  { to: '/industries', title: 'Industries' },
  { to: '/projects', title: 'Projects' },
  { to: '/resources', title: 'Resources' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
];

export const solutionGroups = [
  {
    slug: 'station-environmental-balance',
    title: 'Station Environmental Balance',
    shortTitle: 'Environmental Balance',
    eyebrow: 'Soil, water, odor, and site remediation',
    icon: FaLeaf,
    color: 'emerald',
    summary:
      'Passive environmental balance devices help stations and connected facilities address soil, groundwater, odor, scaling, sludge, and emissions challenges without heavy disruption.',
    details: [
      'Supports soil remediation for oil, heavy metals, and pollutant contamination without excavation where conditions allow.',
      'Addresses water and wastewater issues including odor control, sludge breakdown, scaling prevention, and nutrient reduction.',
      'Operates without electricity, chemicals, filters, salt, or routine consumables in many EBD applications.',
      'Can support carbon-credit and green-finance pathways where projects qualify.',
    ],
    outcomes: ['Cleaner soil and groundwater', 'Lower odor and emissions exposure', 'Reduced maintenance burden', 'Long-term site resilience'],
    image: '/gasstationfuture.png',
  },
  {
    slug: 'vapor-recovery',
    title: 'Vapor Recovery Units',
    shortTitle: 'Vapor Recovery',
    eyebrow: 'Hydrocarbon capture for fuel stations and tank farms',
    icon: FaGasPump,
    color: 'amber',
    summary:
      'VRU systems capture fuel vapors that would otherwise escape during storage and transfer, recovering saleable gasoline while reducing emissions and fire risk.',
    details: [
      'Captures over 99% of fuel vapors in suitable applications and converts them back into usable gasoline.',
      'Reduces VOC emissions, flammable vapor accumulation, product loss, and regulatory exposure.',
      'Saudi Arabia project data showed 10,248 liters recovered in June 2024 at a station with 1.3M liters monthly turnover.',
      'Supports modern fuel retailers seeking efficiency, compliance, safety, and visible sustainability leadership.',
    ],
    outcomes: ['Recovered fuel value', 'Lower VOC emissions', 'Improved station safety', 'Regulatory confidence'],
    image: '/koreastation2.png',
  },
  {
    slug: 'oil-water-separation',
    title: 'Oil-Water Separation',
    shortTitle: 'OWS',
    eyebrow: 'Retrofittable separation kits for station runoff',
    icon: FaDroplet,
    color: 'cyan',
    summary:
      'Below-ground and above-ground coalescing oil-water separation systems help stations treat hydrocarbon-contaminated water while using local tank infrastructure.',
    details: [
      'Retrofittable kits integrate with new or existing steel and concrete tanks, above or below ground.',
      'Removes free non-emulsified oil, hydrocarbons, diesel, gasoline, and fuels to below 5 PPM in specified systems, supporting U.S. requirements and the stricter EN858 European standard.',
      'Supports treatment capacities from 15 GPM to more than 1,600 GPM, with multiple units installable side by side for higher flow requirements.',
      'Uses washable, reusable coalescing cartridges instead of bulky plate packs, so operators can remove cartridges by hand from above ground.',
      'Maintenance can be conducted above ground, avoiding confined-space entry and reducing the need to empty oil and water from the tank before service.',
    ],
    outcomes: ['Cleaner discharge', 'Lower VAC-truck cost', 'Safer above-ground maintenance', 'Fail-safe discharge protection'],
    image: '/proj_6.png',
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
    eyebrow: 'Protection materials for high-risk infrastructure',
    icon: FaFireExtinguisher,
    color: 'red',
    summary:
      'Fire-resistant coatings, extinguishing powders, antibacterial coatings, and fire-rated mesh help stations and industrial sites improve safety readiness.',
    details: [
      'Fire-resistant liquid and paste are designed for extreme temperatures up to 3000 C for over two hours.',
      'Suitable surfaces include wood, gypsum board, steel, iron, concrete, paper, and textiles.',
      'Fire extinguishing powder covers Class A, B, C, and E fire applications.',
      'Fire-rated mesh supports electrical cable protection and flame-spread prevention.',
    ],
    outcomes: ['Higher safety readiness', 'Electrical fire prevention', 'Critical infrastructure protection', 'Hygiene and antibacterial surface options'],
    image: '/sevaliOEMfactory.jpeg',
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
      'Systems can be sized around the local 100-year maximum storm event, giving stations a practical path to oversize treatment flow for flash-flood conditions.',
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
  'Routine guidance calls for early visual inspection during startup, then maintenance intervals adjusted to the actual station load.',
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
    title: 'Fuel Stations & Tank Farms',
    icon: FaGasPump,
    summary:
      'The primary focus: cleaner, safer, more profitable stations through VRU, OWS, EBD, fuel economy, and fire safety systems.',
    applications: ['Gasoline and diesel stations', 'Tank farms', 'Fuel storage terminals', 'Jet-fuel facilities', 'Vehicle wash and maintenance facilities'],
  },
  {
    title: 'Municipal Water & Waste',
    icon: MdWaterDrop,
    summary:
      'Wastewater, drinking water, septic, oxidation pond, sewage, solid waste, odor, corrosion, and carbon-credit opportunities.',
    applications: ['WWTP', 'Drinking-water plants', 'Septic tanks', 'Municipal solid waste', 'River and coastal discharge'],
  },
  {
    title: 'Industrial & Energy Sites',
    icon: FaIndustry,
    summary:
      'Oil and gas facilities, refineries, pipelines, cement, steel, chemical storage, transformer sites, and process-water treatment.',
    applications: ['Refineries', 'Pipelines', 'Steel plants', 'Cement plants', 'Power generation sites'],
  },
  {
    title: 'Agriculture & Aquaculture',
    icon: FaEarthAmericas,
    summary:
      'Air, wastewater, slurry, soil, crop, reforestation, fish-farming, and water bioremediation solutions for cleaner production.',
    applications: ['Animal farming', 'Crop farming', 'Reforestation', 'Fish ponds', 'Aquaculture raceways'],
  },
];

export const proofPoints = [
  { value: '99%+', label: 'Potential vapor recovery efficiency', note: 'For suitable VRU applications' },
  { value: '10,248 L', label: 'Recovered in one month', note: 'June 2024 Saudi station example' },
  { value: '<5 PPM', label: 'Oil-water separation target', note: 'For free non-emulsified oil in specified OWS systems' },
  { value: '15+ yrs', label: 'Long-term EBD action', note: 'For selected remediation use cases' },
];

export const projects = [
  {
    title: 'Saudi Arabia VRU Recovery',
    location: 'Saudi Arabia',
    imageUrl: '/proj_1.png',
    type: 'Vapor Recovery',
    challenge: 'A high-throughput fuel station needed to reduce vapor losses while improving environmental performance and profitability.',
    solution: 'SEVALI deployed vapor recovery technology configured for station fuel turnover and local operating conditions.',
    results: 'In June 2024, a station with 1.3 million liters monthly turnover recovered 10,248 liters of gasoline vapor, averaging more than 340 liters per day.',
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
    results: 'The partnership created a channel for future VRU projects and broader station environmental solutions.',
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
    results: 'The presence connected the company’s practical station solutions with wider decarbonization and climate-finance conversations.',
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
    description: 'Estimate the value of recovered vapor for a station based on volume, fuel price, and unit investment.',
    to: '/roi-calculator',
    icon: FaChartLine,
  },
  {
    title: 'Station Care & Maintenance',
    description: 'Operational guidance for keeping recovery, separation, and safety systems reliable after installation.',
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
