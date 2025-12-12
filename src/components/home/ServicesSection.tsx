const ServicesSection = () => {
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 sm:mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 sm:p-8 lg:p-10 rounded-xl text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Frame Types We Offer
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {frameTypes.map((type, index) => (
              <div
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
