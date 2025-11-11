
import React, { useState } from 'react';
import { FaqGeneralIcon } from '../icons/FaqGeneralIcon';
import { FaqTechnicalIcon } from '../icons/FaqTechnicalIcon';
import { FaqInstallationIcon } from '../icons/FaqInstallationIcon';
import { FaqMaintenanceIcon } from '../icons/FaqMaintenanceIcon';
import { FaqBenefitsIcon } from '../icons/FaqBenefitsIcon';
import { FaqSafetyIcon } from '../icons/FaqSafetyIcon';
import { FaqBillingIcon } from '../icons/FaqBillingIcon';
import { FaqCompanyIcon } from '../icons/FaqCompanyIcon';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import PageHero from '../PageHero';

const faqData = [
  {
    title: 'General Questions',
    icon: FaqGeneralIcon,
    questions: [
      {
        q: 'What is a Vapor Recovery Unit (VRU)?',
        a: 'A Vapor Recovery Unit (VRU) is a specialized system designed to capture and recover volatile organic compounds (VOCs) and other harmful vapors that are released during the transfer and storage of petroleum products. Instead of letting these vapors escape into the atmosphere, our VRUs convert them back into sellable liquid product.',
      },
      {
        q: 'What are the main benefits of installing a VRU?',
        a: 'Installing a Sevali Energy VRU offers three key benefits: 1) <strong>Economic:</strong> It recovers valuable product that would otherwise be lost to evaporation, providing a direct return on investment. 2) <strong>Environmental:</strong> It significantly reduces air pollution and greenhouse gas emissions, ensuring compliance with strict regulations. 3) <strong>Safety:</strong> It minimizes the presence of flammable vapors, creating a safer operational environment.',
      },
      {
        q: 'How does the VRU technology work?',
        a: 'Our VRUs typically use a three-step process: 1) <strong>Capture:</strong> Vapors are collected from tanks. 2) <strong>Process:</strong> The system cools and compresses the vapor, causing it to condense. 3) <strong>Recover:</strong> The condensed vapor is returned to the storage tank as liquid fuel, ready for sale.',
      },
    ],
  },
  {
    title: 'Technical Specs',
    icon: FaqTechnicalIcon,
    questions: [
        { q: 'What is the recovery efficiency of your VRUs?', a: 'Our systems are engineered to achieve over 99% recovery efficiency, ensuring minimal product loss and maximum return on investment.' },
        { q: 'What types of products can your VRUs handle?', a: 'Our units are versatile and can be configured to handle a wide range of products, including gasoline, crude oil, ethanol, and various other chemicals. Please contact us to discuss your specific needs.' },
        { q: 'What is the typical footprint of an installation?', a: 'The footprint varies depending on the capacity and model. We offer compact designs for smaller sites like gas stations, as well as larger, skid-mounted systems for refineries and terminals. We can provide detailed schematics upon request.' },
    ],
  },
  {
    title: 'Installation',
    icon: FaqInstallationIcon,
    questions: [
        { q: 'How long does installation take?', a: 'A typical installation can be completed in just a few days, depending on site-specific conditions and preparation. Our team works efficiently to minimize downtime for your operations.' },
        { q: 'Do you provide on-site support during installation?', a: 'Yes, a dedicated project manager and technical team from Sevali Energy will be on-site to oversee the entire installation process, from delivery to commissioning, ensuring a smooth and successful setup.' },
    ],
  },
  {
    title: 'Maintenance & Support',
    icon: FaqMaintenanceIcon,
    questions: [
        { q: 'What maintenance is required for a VRU?', a: 'Our VRUs are designed for high reliability and low maintenance. However, regular preventative maintenance is key to optimal performance. We offer comprehensive service plans that include routine inspections, filter changes, and system diagnostics to ensure your unit operates at peak efficiency.' },
        { q: 'What kind of warranty do you offer?', a: 'All our VRUs come with a standard one-year warranty covering all parts and labor. Extended warranty and comprehensive service packages are also available.' },
    ],
  },
  {
    title: 'Benefits & ROI',
    icon: FaqBenefitsIcon,
    questions: [
        { q: 'How quickly can I expect a return on my investment (ROI)?', a: 'The ROI period depends on factors like product volume, local fuel prices, and the specific model installed. However, many of our clients see a full return on their investment in as little as 12 to 24 months due to the value of the recovered product.' },
        { q: 'Are there any tax incentives or grants available?', a: 'Many jurisdictions offer tax credits, grants, or other incentives for installing equipment that reduces emissions. We recommend consulting with a local tax professional, and we can provide documentation about the environmental benefits of our systems to support your application.' },
    ],
  },
  {
    title: 'Safety & Compliance',
    icon: FaqSafetyIcon,
    questions: [
        { q: 'Are your systems compliant with environmental regulations?', a: 'Absolutely. Our VRUs are designed to meet or exceed the most stringent environmental regulations, including the US EPA\'s Clean Air Act and other international standards. We provide all necessary documentation for regulatory compliance.' },
        { q: 'What safety features are built into your VRUs?', a: 'Safety is our top priority. Our units are equipped with multiple safety features, including automated shutdown systems, pressure and temperature sensors, flame arrestors, and robust, explosion-proof components to ensure safe and reliable operation.' },
    ],
  },
  {
    title: 'Billing & Purchasing',
    icon: FaqBillingIcon,
    questions: [
        { q: 'What is the purchasing process?', a: 'The process starts with a consultation to assess your needs. We then provide a detailed proposal and quote. Once approved, we move to manufacturing, delivery, and installation. Contact our sales team to get started.' },
        { q: 'Do you offer financing options?', a: 'Yes, we have partnerships with financial institutions to offer flexible financing and leasing options to qualified customers. Please speak with a sales representative for more details.' },
    ],
  },
  {
    title: 'About Our Company',
    icon: FaqCompanyIcon,
    questions: [
        { q: 'How long has Sevali Energy been in business?', a: 'Sevali Energy was established in 2023. Since our inception, we have quickly become a trusted name in the vapor recovery industry, known for our innovation, reliability, and customer service.' },
        { q: 'Where are your systems manufactured?', a: 'All of our core components and systems are proudly designed and manufactured in our state-of-the-art facilities in Korea and China to ensure the highest standards of quality and performance.' },
    ],
  },
];


interface CategoryCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white border border-gray-200 rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:border-amber-400 hover:-translate-y-2"
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    <Icon className="w-16 h-16 mx-auto mb-6 text-amber-500" />
    <h3 className="font-semibold text-gray-700">{title}</h3>
  </div>
);

const FaqItem = ({ question, answer, isOpen, onToggle }: { question: string, answer: string, isOpen: boolean, onToggle: () => void }) => (
    <div className="border-b border-gray-200">
      <button onClick={onToggle} className="w-full flex justify-between items-center py-5 px-1 text-left font-medium text-gray-800 hover:text-amber-600">
        <span className="flex-1 pr-4">{question}</span>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-amber-500' : 'bg-gray-200'}`}>
            <ChevronRightIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90 text-white' : 'text-gray-600'}`} />
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
              <div className="pb-5 pr-7 text-gray-600" dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
      </div>
    </div>
);

const FaqPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<(typeof faqData)[0] | null>(null);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    if (selectedCategory) {
        return (
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <button 
                            onClick={() => setSelectedCategory(null)}
                            className="flex items-center text-amber-600 font-semibold mb-8 hover:text-amber-800 transition-colors"
                        >
                            <ArrowLeftIcon className="w-5 h-5 mr-2" />
                            Back to Categories
                        </button>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">{selectedCategory.title}</h1>
                        <p className="text-lg text-gray-500 mb-12">Find answers to the most common questions about {selectedCategory.title.toLowerCase()}.</p>
                        
                        <div className="space-y-2">
                            {selectedCategory.questions.map((faq, index) => (
                                <FaqItem
                                    key={index}
                                    question={faq.q}
                                    answer={faq.a}
                                    isOpen={openFaqIndex === index}
                                    onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
    return (
        <>
            <PageHero
                title="How can we help you?"
                subtitle="Choose a category to find answers to common questions about our technology, processes, and services."
                backgroundImageUrl="https://images.unsplash.com/photo-1559526324-593bc0a63dae?q=80&w=1920&auto-format&fit=crop"
            />
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800">Choose a Category</h2>
                        <p className="mt-4 text-lg text-gray-500">Select a topic to find the help you need</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {faqData.map((category) => (
                            <CategoryCard 
                                key={category.title}
                                icon={category.icon}
                                title={category.title}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setOpenFaqIndex(0); // Reset accordion to open the first question
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqPage;
