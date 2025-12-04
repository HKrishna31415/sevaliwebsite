import React, { useState } from 'react';
import { XIcon } from './icons/XIcon';
import { TargetIcon } from './icons/TargetIcon';
import { WrenchIcon } from './icons/WrenchIcon';
import { ChartIcon } from './icons/ChartIcon';


const projects = [
  {
    title: 'Dammam Station',
    location: 'Dammam, Saudi Arabia',
    imageUrl: '/proj_1.png',
    challenge: 'Significant product loss due to fugitive VOC emissions during storage and transfer, leading to economic losses and risks of non-compliance with state environmental regulations.',
    solution: 'Engineered and installed a state-of-the-art Sevali Energy VRU system, custom-configured for the refinery\'s specific hydrocarbon blend and operational throughput.',
    results: 'Achieved a 95% reduction in VOC emissions, recovering over 70,000 gallons of product annually. The client realized a full return on investment in just 22 months.'
  },
  {
    title: 'Makkah Station',
    location: 'Makkah, Saudi Arabia',
    imageUrl: '/proj_2.png',
    challenge: 'High levels of vapor loss during ship loading and tank breathing at a major coastal terminal, resulting in lost revenue and environmental concerns.',
    solution: 'Implemented a large-scale, multi-stage VRU system designed to handle high-volume, intermittent vapor flows from marine loading operations.',
    results: 'Recovers an average of 1,500 gallons of gasoline per day, ensuring full compliance with MARPOL and EPA regulations. The system has become a model for portside vapor recovery.'
  },
  {
    title: 'Jeddah Station',
    location: 'Jeddah, Saudi Arabia',
    imageUrl: '/proj_3.png',
    challenge: 'Capture valuable hydrocarbon vapors in a harsh, corrosive offshore environment with strict space and weight limitations.',
    solution: 'Designed and deployed a specialized, compact, and explosion-proof VRU made with marine-grade materials. The system is fully automated for remote operation.',
    results: 'Maintains a 99.8% recovery efficiency even in extreme weather, significantly improving the platform\'s safety rating and recovering previously lost product.'
  },
  {
    title: 'Riyadh Station',
    location: 'Riyadh, Saudi Arabia',
    imageUrl: '/proj_4.png',
    challenge: 'Severe product evaporation from storage tanks at a critical pipeline pumping station due to extreme ambient temperatures.',
    solution: 'Provided a high-capacity VRU equipped with an advanced cooling system tailored for high-temperature desert operation, ensuring consistent performance.',
    results: 'Drastically reduced evaporation losses by over 90%, saving the client millions in product value annually and improving air quality in the region.'
  },
  {
    title: 'Amman Station',
    location: 'Amman, Jordan',
    imageUrl: '/proj_5.png',
    challenge: 'Prevent the release of methane and other volatile hydrocarbons during processing, under extreme cold-weather conditions that can affect equipment reliability.',
    solution: 'Delivered a custom-winterized VRU with specialized heating elements and insulation, engineered to operate flawlessly at temperatures down to -50°C.',
    results: 'The system has a 100% operational uptime, preventing greenhouse gas emissions and contributing to both economic and environmental goals in the arctic region.'
  },
  {
    title: 'Jordanian SGS test',
    location: 'Jordan',
    imageUrl: '/proj_6.png',
    challenge: 'An existing, underperforming vapor recovery system was failing to meet new, stricter EPA regulations, putting the facility at risk of fines and operational shutdowns.',
    solution: 'Conducted a full-scale upgrade of the terminal\'s vapor recovery infrastructure, replacing outdated components with our high-efficiency absorption technology.',
    results: 'Increased the facility\'s processing capacity by 40% and surpassed all new EPA air quality standards, safeguarding local communities and ensuring uninterrupted operation.'
  },
];

type Project = typeof projects[0];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div onClick={onClick} className="relative rounded-xl overflow-hidden group cursor-pointer border border-gray-200 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-xl font-semibold font-display">{project.title}</h3>
      <p className="text-sm text-gray-200">{project.location}</p>
    </div>
  </div>
);

const CaseStudyDetail = ({ icon: Icon, title, children }: { icon: React.ComponentType<any>, title: string, children: React.ReactNode }) => (
    <div>
        <div className="flex items-center mb-2">
            <Icon className="w-6 h-6 text-amber-500 mr-3" />
            <h4 className="text-lg font-bold text-gray-700">{title}</h4>
        </div>
        <p className="text-gray-600 leading-relaxed pl-9">{children}</p>
    </div>
)

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-labelledby="project-modal-title"
  >
    <div
      className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-fade-in-up"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full md:w-1/2">
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close project details"
        >
          <XIcon className="w-8 h-8" />
        </button>
        <h3 id="project-modal-title" className="text-3xl font-bold font-display text-gray-900 mb-2">{project.title}</h3>
        <p className="text-md text-gray-500 mb-6">{project.location}</p>
        
        <div className="space-y-6">
            <CaseStudyDetail icon={TargetIcon} title="The Challenge">
                {project.challenge}
            </CaseStudyDetail>
            <CaseStudyDetail icon={WrenchIcon} title="Our Solution">
                {project.solution}
            </CaseStudyDetail>
            <CaseStudyDetail icon={ChartIcon} title="The Results">
                {project.results}
            </CaseStudyDetail>
        </div>
      </div>
    </div>
     <style>{`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
    `}</style>
  </div>
);


const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display">Our Projects</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto my-4 rounded"></div>
            <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
              A showcase of our commitment to excellence and innovation in vapor recovery and energy solutions across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
};

export default ProjectsSection;