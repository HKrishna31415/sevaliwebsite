import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlayIcon } from './icons/PlayIcon';

const VideoBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-800 text-white pt-12 pb-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-2xl font-light mb-6">
            If you have any questions or need help, feel free to contact with our team, or you can call us any time <span className="text-amber-400 font-semibold">+994 55 320 42 81</span>
          </h3>
          <button
            onClick={() => navigate('/faq')}
            className="border-2 border-gray-500 hover:border-white hover:bg-white hover:text-slate-800 text-white font-bold py-3 px-6 rounded-md flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span>Help & FAQs</span>
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="relative rounded-lg overflow-hidden group w-full h-0 pb-[56.25%] bg-black">
          <iframe
            src="https://www.youtube.com/embed/560Ph0VHnw4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;