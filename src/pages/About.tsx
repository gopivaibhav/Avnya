const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Us</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
              Avnya Smart Builds manufactures Pre-Engineered Buildings using a turnkey approach—from design to installation—ensuring timely delivery, quality, and budget-aligned solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Our automated engineering process and dedicated software ensure accurate design, load validation, and efficient material estimation for seamless project delivery.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 sm:p-8 rounded-xl animate-fadeInRight">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Vision</h3>
              <p className="text-sm sm:text-base">To be India's premier Pre-Engineered Building Solutions provider.</p>
            </div>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Mission</h3>
              <p className="text-sm sm:text-base">Setting new standards in design, management, productivity, and quality while mastering on-time completion.</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Values</h3>
              <p className="text-sm sm:text-base">Integrity · Committed Delivery · Continued Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;