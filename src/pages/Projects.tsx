import React from 'react';
import img from '../assets/img.webp';

const ProjectsSection = () => {
  const clients = [
    'AgriSol', 'Amish Cropsciences', 'Harsha Toyota',
    'Kamson Hygiene Care', 'MEIL', 'TBSR Engineers',
    'Amara Raja', 'Drilmec', 'Metrochem'
  ];

  const steelBrands = ['JSW', 'Tata Steel', 'SAIL', 'AM/NS India', 'APL Apollo'];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-400 mb-12 sm:mb-16 mt-10">
          Projects & Clients
        </h2>
        <div className='flex flex-col justify-center items-center '>
                  <img src={img} alt="image" className='rounded-xl'/>

        </div>
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">Key Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-amber-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-semibold text-slate-900 text-sm sm:text-base">{client}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 p-6 sm:p-10 lg:p-12 rounded-xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-900">Premium Steel Brands We Use</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {steelBrands.map((brand, index) => (
              <div
                key={index}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-base sm:text-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;