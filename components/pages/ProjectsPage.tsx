
import React from 'react';
import ProjectsSection from '../ProjectsSection';
import PageHero from '../PageHero';

const ProjectsPage: React.FC = () => {
    return (
        <>
            <PageHero
                title="Our Projects"
                subtitle="A showcase of our commitment to excellence and innovation in vapor recovery and energy solutions across the globe."
                backgroundImageUrl="https://images.unsplash.com/photo-1518556399418-77c3a7a6e5b2?q=80&w=1920&auto=format&fit=crop"
            />
            {/* The ProjectsSection component has its own internal padding, so no extra wrapper is needed. */}
            <ProjectsSection />
        </>
    );
};

export default ProjectsPage;
