import React from 'react';
import PageHero from '../PageHero';
import { FiCheck } from 'react-icons/fi';
import { contactInfo, proofPoints, solutionGroups, supportingServices } from '../../data/siteContent';

const AboutPage: React.FC = () => (
  <div className="sevali-page">
    <PageHero
      label="About Sevali"
      title="Integrated solutions for water, energy, environment, and industry."
      subtitle="Sevali Energy delivers environmental technologies, optimization solutions, and efficiency programs for organizations working across Oil & Gas, agriculture, water, industry, remediation, and proven fuel-site applications."
      backgroundImageUrl="/sevaliCOP29.jpeg"
    />

    <section className="sevali-section">
      <div className="sevali-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="sevali-kicker">Company profile</p>
          <h2 className="sevali-heading-md mt-2">From vapor recovery specialist to multi-sector environmental technology partner.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-700">
          <p>
            Sevali works with international technology partners and solution providers to introduce reliable, efficient, and environmentally conscious systems to local and regional markets. The company supports businesses that need to optimize operations, reduce environmental impact, improve safety standards, and contribute to decarbonization goals.
          </p>
          <p>
            Vapor recovery remains a strong proof point, but the expanded portfolio now includes environmental balance devices, water purification and wastewater treatment, oil-water separation, fuel-saving solutions, environmental remediation, carbon management consulting, and sustainable fire protection materials.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-[#111827] py-16 text-white">
      <div className="sevali-container grid gap-5 md:grid-cols-4">
        {proofPoints.map((point) => (
          <div key={point.label} className="border-t border-white/20 pt-5">
            <p className="text-4xl font-extrabold text-amber-300">{point.value}</p>
            <p className="mt-2 font-bold">{point.label}</p>
            <p className="mt-1 text-sm leading-6 text-white/64">{point.note}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="sevali-kicker">What we cover</p>
          <h2 className="sevali-heading-md mt-2">A cross-sector portfolio with practical field proof.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {solutionGroups.map((solution) => (
            <div key={solution.slug} className={`solution-accent-${solution.color} sevali-card p-5`}>
              <solution.icon className="h-8 w-8 text-[color:var(--accent)]" />
              <h3 className="mt-4 font-extrabold text-gray-950">{solution.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{solution.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sevali-section">
      <div className="sevali-container grid gap-10 lg:grid-cols-2">
        {supportingServices.map((service) => (
          <article key={service.title} className="sevali-card p-7">
            <service.icon className="h-10 w-10 text-amber-600" />
            <h2 className="mt-5 text-2xl font-extrabold text-gray-950">{service.title}</h2>
            <p className="mt-4 leading-7 text-gray-600">{service.summary}</p>
            <ul className="mt-6 space-y-3">
              {service.steps.map((step) => (
                <li key={step} className="flex items-center gap-3 font-bold text-gray-900">
                  <FiCheck className="h-5 w-5 text-emerald-600" />
                  {step}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="sevali-section bg-white">
      <div className="sevali-container rounded-xl bg-[#17202b] p-8 text-white md:p-12">
        <p className="text-sm font-extrabold text-amber-300">Head office</p>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-white/60">Address</p>
            <p className="mt-2 font-bold">{contactInfo.address}</p>
          </div>
          <div>
            <p className="text-white/60">Phone</p>
            <p className="mt-2 font-bold">{contactInfo.office}</p>
            <p className="font-bold">{contactInfo.mobile}</p>
          </div>
          <div>
            <p className="text-white/60">Email</p>
            <a href={`mailto:${contactInfo.email}`} className="mt-2 block font-bold text-amber-300 hover:text-amber-200">
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
