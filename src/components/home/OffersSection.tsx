import React from 'react';
import { Building2, ChevronRight, Target, Wrench } from 'lucide-react';

const OffersSection = () => {
  const offerings = [
    { 
      icon: <Building2 className="w-8 h-8" />,
      title: 'Pre-Engineered Buildings', 
      items: ['Complete design-to-installation solutions', 'Advanced engineering & manufacturing', 'Custom subsystems integration'] 
    },
    { 
      icon: <Wrench className="w-8 h-8" />,
      title: 'Metal Building Components', 
      items: ['Roof & Wall Cladding', 'Z & C Purlins', 'Gutters & Flashings', 'Turbo Ventilators'] 
    },
    { 
      icon: <Target className="w-8 h-8" />,
      title: 'Additional Systems', 
      items: ['Mezzanines & Canopies', 'EOT Cranes', 'Sky Lights & Ridge Vents'] 
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">What We Offer</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Complete range of Metal Building Systems with end-to-end solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
                {offer.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                {offer.title}
              </h3>
              <ul className="space-y-3">
                {offer.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base text-gray-700 ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;