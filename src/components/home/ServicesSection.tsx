import React from "react";

const ServicesSection = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = React.useState<number | null>(null);
  const [hoveredFrameIndex, setHoveredFrameIndex] = React.useState<number | null>(null);

  const services = [
    {
      title: "Pre-Engineered Buildings (PEB)",
      description: "Computer-assisted design creating efficient, cost-effective buildings with unlimited custom configurations for warehouses, sports complexes, factories, and more.",
    },
    {
      title: "Metal Building Components",
      description: "Complete range including Anchor Bolts, Primaries & Secondaries, Sheeting, Aluminum Windows, Insulation, Doors, Louvers, and Ventilators.",
    },
    {
      title: "Technical Capabilities",
      description: "Comprehensive design parameters covering Width, Length, Height, Roof Slope, Bay Spacing, Load Design, and Sub-Systems like EOT Cranes and Mezzanines.",
    },
  ];

  const frameTypes = [
    "Clear Span", "Multi-Gable", "Multi-Span (MS-1, MS-2)", 
    "Single Slope", "Lean-To", "T-Canopy", "Roof System"
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 sm:mb-16 opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredServiceIndex(index)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
              className="group relative bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mb-4 transform origin-top group-hover:scale-y-125 transition-transform duration-500"></div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 transform group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed transform group-hover:translate-x-1 transition-all duration-300 delay-75">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-x-24 group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 sm:p-8 lg:p-10 rounded-xl text-white relative overflow-hidden opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/20 rounded-full transform -translate-x-32 translate-y-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center transform animate-[slideIn_0.8s_ease-out_0.8s_backwards]">
              Frame Types We Offer
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {frameTypes.map((type, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFrameIndex(index)}
                  onMouseLeave={() => setHoveredFrameIndex(null)}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base transform hover:scale-110 hover:-translate-y-1 cursor-pointer opacity-0 animate-[fadeInScale_0.6s_ease-out_forwards] shadow-lg hover:shadow-xl"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <span className={`inline-block transition-transform duration-300 ${hoveredFrameIndex === index ? 'scale-110' : ''}`}>
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;