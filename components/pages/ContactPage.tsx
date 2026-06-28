import React, { useState } from 'react';
import PageHero from '../PageHero';
import { contactInfo, solutionGroups } from '../../data/siteContent';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
  <div className="sevali-page">
    <PageHero
      label="Contact"
      title="Tell us what your station needs to solve."
      subtitle="Share the site challenge: vapor loss, runoff, soil contamination, emissions, fire readiness, or a broader environmental balance program."
      backgroundImageUrl="/sevaliGETbooth.jpg"
    />

    <section className="sevali-section">
      <div className="sevali-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6">
          <div className="sevali-card p-6">
            <h2 className="text-2xl font-extrabold text-gray-950">Direct contact</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-bold text-gray-500">Office</dt>
                <dd className="mt-1">
                  <a href={`tel:${contactInfo.office.replace(/\s/g, '')}`} className="font-extrabold text-gray-950">
                    {contactInfo.office}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-gray-500">Mobile</dt>
                <dd className="mt-1">
                  <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="font-extrabold text-gray-950">
                    {contactInfo.mobile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-gray-500">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contactInfo.email}`} className="font-extrabold text-gray-950">
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-gray-500">Address</dt>
                <dd className="mt-1 font-extrabold text-gray-950">{contactInfo.address}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-xl bg-[#111827] p-6 text-white">
            <p className="font-extrabold text-amber-300">What to prepare</p>
            <p className="mt-3 leading-7 text-white/72">
              Station location, average fuel volume, known environmental or safety concerns, existing tanks/separators, and any compliance deadlines.
            </p>
          </div>
        </aside>

        <form className="sevali-card p-6 md:p-8" onSubmit={handleSubmit}>
          {submitted && (
            <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4" role="status" aria-live="polite">
              <p className="font-extrabold text-emerald-950">Request noted.</p>
              <p className="mt-1 text-sm leading-6 text-emerald-900">
                This frontend form is ready for a backend connection. For now, please send the same details to{' '}
                <a href={`mailto:${contactInfo.email}`} className="font-extrabold underline underline-offset-4">
                  {contactInfo.email}
                </a>{' '}
                or call {contactInfo.mobile}.
              </p>
            </div>
          )}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-extrabold text-gray-900">
                Name
              </label>
              <input id="name" name="name" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-extrabold text-gray-900">
                Company
              </label>
              <input id="company" name="company" type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-extrabold text-gray-900">
                Email
              </label>
              <input id="email" name="email" type="email" required className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-extrabold text-gray-900">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500" />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="interest" className="block text-sm font-extrabold text-gray-900">
              Solution interest
            </label>
            <select id="interest" name="interest" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500">
              <option>Not sure yet - assess my station</option>
              {solutionGroups.map((solution) => (
                <option key={solution.slug}>{solution.title}</option>
              ))}
              <option>Carbon management consulting</option>
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-extrabold text-gray-900">
              Site challenge
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-amber-500"
              placeholder="Tell us about vapor loss, runoff, contaminated soil, fuel use, fire-safety needs, or compliance goals."
            />
          </div>

          <button type="submit" className="sevali-button sevali-button-primary mt-6 w-full">
            Send consultation request
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            This form is frontend-only for now. For urgent requests, call or email Sevali directly.
          </p>
        </form>
      </div>
    </section>
  </div>
  );
};

export default ContactPage;
