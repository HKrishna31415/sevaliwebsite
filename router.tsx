import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SolutionsPage from './components/pages/SolutionsPage';
import EnvironmentalBalancePage from './components/pages/EnvironmentalBalancePage';
import FireSafetyPage from './components/pages/FireSafetyPage';
import IndustriesPage from './components/pages/IndustriesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import HowItWorksPage from './components/pages/HowItWorksPage';
import ProjectsPage from './components/pages/ProjectsPage';
import MaintenancePage from './components/pages/MaintenancePage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';
import HistoryPage from './components/pages/HistoryPage';
import RoiCalculatorPage from './components/pages/RoiCalculatorPage';
import NewsPage from './components/pages/NewsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'solutions',
        element: <SolutionsPage />,
      },
      {
        path: 'environmental-balance',
        element: <EnvironmentalBalancePage />,
      },
      {
        path: 'fire-safety',
        element: <FireSafetyPage />,
      },
      {
        path: 'industries',
        element: <IndustriesPage />,
      },
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'how-it-works',
        element: <HowItWorksPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'maintenance',
        element: <MaintenancePage />,
      },
      {
        path: 'faq',
        element: <FaqPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
      {
        path: 'roi-calculator',
        element: <RoiCalculatorPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
