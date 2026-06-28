import React from 'react';
import PageHero from '../PageHero';

const posts = [
  {
    title: 'Meeting with PSO seniors in Karachi',
    date: '2025-06-21',
    excerpt: 'Sevali met with PSO leadership to discuss VRU deployment and broader environmental station modernization in Pakistan.',
    imageUrl: '/PSOSeniorsSevali.jpg',
    objectPosition: 'object-position-top',
    tag: 'Partnership',
  },
  {
    title: 'MoU with Petroleum Institute of Pakistan',
    date: '2025-06-20',
    excerpt: 'The partnership supports vapor recovery development in Pakistan and creates a path for expanded station environmental solutions.',
    imageUrl: '/PIPSevali.jpg',
    objectPosition: 'object-position-top',
    tag: 'Market development',
  },
  {
    title: 'Sevali at COP29',
    date: '2024-11-11',
    excerpt: 'Sevali participated in COP29 conversations around practical climate technologies, emissions reduction, and sustainable operations.',
    imageUrl: '/sevaliCOP29.jpeg',
    tag: 'Climate',
  },
  {
    title: 'Global Energy Transition Congress',
    date: '2024-05-20',
    excerpt: 'The team showcased vapor recovery and environmental technology capabilities to global energy-transition stakeholders.',
    imageUrl: '/sevaliGET.jpg',
    tag: 'Event',
  },
  {
    title: 'Sevali meets Wafi/Shell of Pakistan',
    date: '2024-04-16',
    excerpt: 'A strategic meeting to explore collaborations around cleaner fuel retail, emissions reduction, and operational improvement.',
    imageUrl: '/SevaliWafi.jpeg',
    tag: 'Partnership',
  },
  {
    title: 'OEM facility and technology network',
    date: '2024-02-20',
    excerpt: 'Sevali continues building supply and technology partnerships for recovery, environmental, and safety solutions.',
    imageUrl: '/sevaliOEMfactory.jpeg',
    tag: 'Operations',
  },
];

const NewsPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="News"
      title="Partnerships, project milestones, and climate conversations."
      subtitle="Sevali’s updates show the company growing from VRU deployment into a wider station environmental and safety platform."
      backgroundImageUrl="/sevaliGET.jpg"
    />
    <section className="sevali-section">
      <div className="sevali-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="sevali-card overflow-hidden">
            <img src={post.imageUrl} alt={post.title} loading="lazy" decoding="async" className={`h-56 w-full object-cover ${post.objectPosition || ''}`} />
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-800">{post.tag}</span>
                <time className="text-sm font-bold text-gray-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-gray-950">{post.title}</h2>
              <p className="mt-3 leading-7 text-gray-600">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default NewsPage;
