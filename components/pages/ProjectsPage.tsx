import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../PageHero';
import { FiX } from 'react-icons/fi';
import { projects } from '../../data/siteContent';

type Project = (typeof projects)[0];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <div className="sevali-page">
      <PageHero
        label="Projects"
        title="Proof across stations, partnerships, testing, and climate forums."
        subtitle="Sevali’s project story combines measurable vapor recovery, regional partnerships, certification culture, and participation in energy-transition conversations."
        backgroundImageUrl="/koreastation2.webp"
      />

      <section className="sevali-section">
        <div className="sevali-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="sevali-card group overflow-hidden text-left transition hover:-translate-y-1 hover:border-amber-400"
            >
              <img src={project.imageUrl} alt={project.title} loading="lazy" decoding="async" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-sm font-extrabold text-amber-700">{project.type}</p>
                <h2 className="mt-2 text-2xl font-extrabold text-gray-950">{project.title}</h2>
                <p className="mt-1 text-sm font-bold text-gray-500">{project.location}</p>
                <p className="mt-4 line-clamp-4 leading-7 text-gray-600">{project.results}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div ref={modalRef} className="grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white md:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} decoding="async" className="h-72 w-full object-cover md:h-full" />
            <div className="relative overflow-y-auto p-8">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-gray-200 p-2 text-gray-700"
                aria-label="Close project details"
              >
                <FiX className="h-6 w-6" />
              </button>
              <p className="text-sm font-extrabold text-amber-700">{selectedProject.type}</p>
              <h2 id="project-title" className="mt-2 pr-12 text-3xl font-extrabold text-gray-950">
                {selectedProject.title}
              </h2>
              <p className="mt-1 font-bold text-gray-500">{selectedProject.location}</p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-extrabold text-gray-950">Challenge</h3>
                  <p className="mt-2 leading-7 text-gray-600">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-950">Solution</h3>
                  <p className="mt-2 leading-7 text-gray-600">{selectedProject.solution}</p>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-950">Result</h3>
                  <p className="mt-2 leading-7 text-gray-600">{selectedProject.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
