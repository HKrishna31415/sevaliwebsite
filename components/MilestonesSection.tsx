import React from 'react';

const milestonesData = [
  {
    month: 'January',
    year: '2021',
    title: "Company Formed",
    description: 'Sevali Energy was officially formed, laying the groundwork for innovative vapor recovery solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
  },
  {
    month: 'May',
    year: '2024',
    title: 'South American Operations Begin',
    description: "Expanded into South America with a major installation project at a refinery in Brazil, customizing our solutions for the region's unique climate.",
    imageUrl: 'https://images.unsplash.com/photo-1616327311181-a8355285382e?q=80&w=800&auto=format&fit=crop',
  },
  {
    month: 'January',
    year: '2024',
    title: 'Commercial Operations in Middle East Begin',
    description: 'Initiated commercial operations in the Middle East, deploying advanced VRU systems and establishing a strong regional presence.',
    imageUrl: 'https://images.unsplash.com/photo-1563385961-32337a4b8600?q=80&w=800&auto=format&fit=crop',
  },
  {
    month: 'October',
    year: '2026',
    title: 'New Global R&D Center',
    description: 'Opened a state-of-the-art global research and development center to spearhead the next generation of sustainable energy and carbon capture technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop',
  },
];


const MilestonesSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#0F4C5C]">Company's Milestones</h2>
          <div className="w-20 h-1 bg-[#E8715A] mx-auto my-4 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
          </p>
        </div>

        <div className="flex flex-col gap-y-16">
          {milestonesData.map((milestone, index) => {
            const isLeftContent = index % 2 === 0;

            const TextContent = () => (
              <div className={`text-center ${isLeftContent ? "md:text-right" : "md:text-left"}`}>
                <h3 className="text-2xl font-bold text-[#0F4C5C] mb-2">{milestone.title}</h3>
                <p className="text-gray-500 leading-relaxed">{milestone.description}</p>
              </div>
            );

            const ImageContent = () => (
              <div className="flex items-center justify-center">
                <div className="w-[300px] h-[220px] lg:w-[400px] lg:h-[300px] bg-gradient-to-br from-red-100 to-amber-100 animate-morph p-2">
                    <img src={milestone.imageUrl} alt={milestone.title} className="w-full h-full object-cover animate-morph" style={{ borderRadius: 'inherit' }} />
                </div>
              </div>
            );

            const DottedLine = () => (
              <div className="flex-grow w-px flex flex-col items-center justify-around">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            );

            const TimelineCenter = () => (
              <div className="flex-shrink-0 flex flex-col items-center h-[300px]">
                <DottedLine />
                <div className="w-2.5 h-2.5 bg-[#0F4C5C] rounded-full my-2"></div>
                <DottedLine />
              </div>
            );
            
            const DateDisplay = () => (
                 <div className="my-4 text-center">
                  <p className="text-sm text-gray-500">{milestone.month}</p>
                  <p className="text-3xl font-bold text-[#E8715A]">{milestone.year}</p>
                </div>
            )

            return (
              <div key={index}>
                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-8">
                  {isLeftContent ? <TextContent /> : <ImageContent />}
                  <div className="relative flex justify-center items-center">
                    <div className="absolute h-full w-full">
                      <TimelineCenter />
                    </div>
                    <div className="relative bg-white px-4 z-10">
                      <DateDisplay />
                    </div>
                  </div>
                  {isLeftContent ? <ImageContent /> : <TextContent />}
                </div>

                {/* Mobile View */}
                <div className="md:hidden text-center space-y-4">
                    <TextContent />
                    <DateDisplay />
                    <ImageContent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;