
import React from 'react';

const ContactBanner: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-white py-12">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-2xl font-bold">If you have any questions or need help, feel free</h3>
                <h3 className="text-2xl font-bold">free to contact us. You can call us any time at <span className="text-blue-400">+994 55 320 42 81</span></h3>
            </div>
            <div className="hidden md:block">
                <img src="https://picsum.photos/id/1079/400/200" alt="Contact background" className="rounded-lg opacity-30" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
