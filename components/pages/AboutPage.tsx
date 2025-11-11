
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* New Integrated Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white flex flex-col justify-center items-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-black/30"></div>
        <div className="relative z-10 text-center container mx-auto px-6 pt-32 pb-48">
          <p className="text-amber-400 font-semibold tracking-widest mb-2">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            Bringing Our Vision to Life
            <br />
            with Expertise and Dedication
          </h1>
        </div>
        {/* Stats Bar overlaying the hero */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-6 z-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <StatItem value="15+" label="Projects Done" />
              <StatItem value="5+" label="Countries" />
              <StatItem value="10+" label="Employees" />
              <StatItem value="1" label="Global Office" />
              <StatItem value="1M+" label="Liters Recovered" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Story - with increased top padding to account for overlaid stats bar */}
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <p className="text-amber-500 font-semibold tracking-widest mb-2">OUR JOURNEY</p>
           <h2 className="text-4xl font-bold text-gray-800 mb-6">The Sevali Energy Story</h2>
           <p className="text-gray-600 leading-relaxed">
             At Sevali Energy, our journey began with a simple yet powerful vision: to transform the landscape of the energy sector by making it cleaner and more efficient. Founded by a team of passionate industry veterans, Sevali Energy was built on a foundation of innovation, integrity, and a relentless pursuit of excellence in vapor recovery technology. Our story is one of dedication and perseverance, growing from a specialized startup into a leading force that helps companies worldwide turn harmful emissions into valuable assets. We remain committed to our core values, driving the transition to a more sustainable future every step of the way.
           </p>
        </div>
      </section>
      
      {/* Timeline / History */}
      <section className="pb-24 bg-gray-50 pt-20">
        <div className="container mx-auto px-6 space-y-20">

          {/* Inception Vision */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800&auto=format&fit=crop" 
                alt="Looking up at modern skyscrapers against a clear blue sky, symbolizing ambition and a forward-thinking vision."
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Inception Vision:</h3>
              <p className="text-gray-600 leading-relaxed">
                Sevali Energy was founded on a collective vision shared among seasoned professionals who sought to redefine excellence in the energy industry. With decades of combined experience, our founders established a company that prioritizes technological innovation, operational integrity, and an unwavering dedication to client success. This initial vision—to create smarter, more flexible energy systems—served as the driving force behind our creation and set the stage for our remarkable journey.
              </p>
            </div>
          </div>

          {/* Evolutionary Journey */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2 rounded-2xl overflow-hidden shadow-lg">
               <img 
                src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?q=80&w=800&auto=format&fit=crop" 
                alt="An industrial plant with complex piping and structures at dusk, representing growth, complexity, and evolution."
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Evolutionary Journey:</h3>
              <p className="text-gray-600 leading-relaxed">
                Over the years, Sevali Energy has evolved from a focused vapor recovery provider into a comprehensive energy solutions leader. Our journey is marked by patented technologies, successful large-scale projects, and strategic global expansion. By continuously optimizing our products and embracing new challenges, we have grown our team of experts and solidified our reputation for reliability. We look ahead with the same passion that fueled our inception, ready to engineer the sustainable energy solutions of tomorrow.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-4xl font-bold text-amber-500">{value}</p>
    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</p>
  </div>
);

export default AboutPage;
