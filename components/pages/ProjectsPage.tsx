
import React from 'react';
import ProjectsSection from '../ProjectsSection';
import PageHero from '../PageHero';

const ProjectsPage: React.FC = () => {
    return (
        <>
            <PageHero
                title="Our Projects"
                subtitle="A showcase of our commitment to excellence and innovation in vapor recovery and energy solutions across the globe."
                backgroundImageUrl="/koreastation2.png"
            />
            {/* The ProjectsSection component has its own internal padding, so no extra wrapper is needed. */}
            <ProjectsSection />
        </>
    );
};

export default ProjectsPage;
