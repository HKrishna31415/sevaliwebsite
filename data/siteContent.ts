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
      'Removes free non-emulsified oil, hydrocarbons, diesel, gasoline, and fuels to below 5 PPM in specified systems.',
      'Supports flow capacities from 50 to over 1,100 GPM based on site requirements.',
      'Maintenance can be conducted above ground, avoiding confined-space entry.',
    ],
    outcomes: ['Cleaner discharge', 'Lower shipping and retrofit cost', 'No electrical power requirement', 'Fail-safe discharge protection'],
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
