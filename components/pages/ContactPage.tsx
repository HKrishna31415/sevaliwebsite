
import React from 'react';
import PageHero from '../PageHero';

const ContactPage: React.FC = () => (
  <>
    <PageHero
      title="Contact Us"
      subtitle="We're here to help. Reach out to us any time for questions, support, or a project consultation."
      backgroundImageUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1920&auto=format&fit=crop"
    />
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed mt-4">
                You can call us any time at <a href="tel:+994553204281" className="font-semibold text-amber-500 hover:underline">+994 55 320 42 81</a> or fill out the form below and we'll get back to you as soon as possible.
            </p>
        </div>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </>
);

export default ContactPage;
