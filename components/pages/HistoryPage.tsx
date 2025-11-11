
import React from 'react';
import MilestonesSection from '../MilestonesSection';
import PageHero from '../PageHero';

const HistoryPage: React.FC = () => {
    return (
        <>
            <PageHero
                title="Our History"
                subtitle="Tracing our journey of innovation and excellence from foundation to future."
                backgroundImageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
            />
            <MilestonesSection />
        </>
    );
};

export default HistoryPage;
