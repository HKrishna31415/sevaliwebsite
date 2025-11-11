import React from 'react';
import Hero from '../Hero';
import WelcomeSection from '../WelcomeSection';
import AboutUs from '../AboutUs';
import ValueProposition from '../ValueProposition';
import VideoBanner from '../VideoBanner';
import FaqSection from '../FaqSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <AboutUs />
      <ValueProposition />
      <VideoBanner />
      <FaqSection />
    </>
  );
};

export default HomePage;