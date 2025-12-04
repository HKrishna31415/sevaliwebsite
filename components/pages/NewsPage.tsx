import React from 'react';
import PageHero from '../PageHero';

interface Post {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  objectPosition?: string; // Optional: for custom object-position classes like 'object-position-bottom'
}

const posts: Post[] = [
  {
    title: 'Meeting with PSO seniors in Karachi',
    date: '2025-06-21',
    excerpt:
      'Sevali Energy held a productive meeting with PSO seniors in Karachi to discuss the VRU pilot project.',
    imageUrl: '/PSOSeniorsSevali.jpg',
    objectPosition: 'object-position-top',
  },
  {
    title: 'Sign MoU with Petroleum Institute of Pakistan regarding partnership for development VRU in Pakistan Market.',
    date: '2025-06-20',
    excerpt:
      'Sevali Energy signed a Memorandum of Understanding with the Petroleum Institute of Pakistan, formalizing a partnership for the development of Vapor Recovery Units (VRU) in the Pakistan market.',
    imageUrl: '/PIPSevali.jpg',
    objectPosition: 'object-position-top',
  },
  {
    title: 'Sevali went to Global Energy Transition congress',
    date: '2024-05-20',
    excerpt:
      'Sevali Energy participated in the Global Energy Transition Congress, showcasing innovative vapor recovery solutions and engaging with industry leaders.',
    imageUrl: '/sevaliGET.jpg',
  },
  {
    title: 'Sevali Meets Secretary Saif Anjum',
    date: 'Apr 15, 2024',
    excerpt: 'Sevali Energy held productive meetings with Secretary Saif Anjum of the Ministry of Industries & Production, Government of Pakistan, to discuss collaborations and advancements in energy solutions.',
    imageUrl: '/SevaliPakistan.jpeg',
    objectPosition: 'object-position-10-top',
  },

  {
    title: 'Sevali at COP29',
    date: '2024-11-11',
    excerpt:
      'Sevali Energy participated in COP29, showcasing innovative solutions for a sustainable future and engaging with global leaders on climate action.',
    imageUrl: '/sevaliCOP29.jpeg',
  },
  {
    title: 'Sevali Meets Wafi/Shell of Pakistan',
    date: '2024-04-16',
    excerpt:
      'Sevali Energy held a significant meeting with Wafi to discuss potential collaborations and advancements in sustainable energy solutions.',
    imageUrl: '/SevaliWafi.jpeg',
  },
  {
    title: 'Sevali Kobia at Azerbaijan Convention',
    date: '2024-06-01',
    excerpt:
      'Sevali Energy participated in the Azerbaijan Convention, showcasing innovative solutions and fostering international collaborations.',
    imageUrl: '/azconventionsevali.png',
  },
  {
    title: 'ME Pilot Project in Riyadh',
    date: '2023-08-01',
    excerpt:
      'Sevali Energy has launched a significant pilot project in Riyadh, marking the beginning of commercial operations in the Middle East.',
    imageUrl: '/MEpilotprojectsevali.jpg',
  },
  {
    title: 'New OEM Facility',
    date: '2024-02-20',
    excerpt:
      'Sevali Energy proudly announces the opening of its new OEM facility, enhancing production capabilities and innovation in vapor recovery solutions.',
    imageUrl: '/sevaliOEMfactory.jpeg',
  },
  {
    title: 'Jordan SGS',
    date: '2023-09-15',
    excerpt:
      'Sevali Energy successfully completed SGS testing in Jordan, demonstrating compliance with international standards and quality assurance.',
    imageUrl: '/jordansgstest.jpg',
  },
];

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="News & Blog"
        subtitle="Latest updates, milestones, and insights from Sevali Energy."
        backgroundImageUrl="/gasstationfuture.png"
      />
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm group bg-white transform hover:-translate-y-0.5 transition-shadow hover:shadow-lg">
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={`w-full h-full object-cover ${post.objectPosition || ''} transform group-hover:scale-105 transition-transform duration-300`}
                />
              </div>
              <div className="p-6">
                <div className="text-amber-600 text-xs font-semibold tracking-widest mb-2">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 font-semibold text-sm">Read more</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsPage;