import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero';
import { FiArrowRight } from 'react-icons/fi';
import { resources } from '../../data/siteContent';

const ResourcesPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="Resources"
      title="Tools and guidance for station modernization decisions."
      subtitle="Use the calculator, FAQ, station-care guidance, and project updates to move from interest to a practical consultation."
      backgroundImageUrl="/sevalibooth.webp"
    />

    <section className="sevali-section">
      <div className="sevali-container grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <Link key={resource.to} to={resource.to} className="sevali-card group p-7 hover:-translate-y-1 hover:border-amber-400 hover:text-inherit transition">
            <resource.icon className="h-10 w-10 text-amber-600" />
            <h2 className="mt-5 text-2xl font-extrabold text-gray-950">{resource.title}</h2>
            <p className="mt-3 leading-7 text-gray-600">{resource.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-amber-700">
              Open resource
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default ResourcesPage;
