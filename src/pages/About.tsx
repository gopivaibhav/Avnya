import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hover-lift:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.4);
        }

        .arrow-shape {
          clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
        }

        .arrow-shape-last {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .glow-border {
          position: relative;
        }

        .glow-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #fbbf24, #f97316);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-border:hover::before {
          opacity: 1;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer-text {
          background: linear-gradient(90deg, #fbbf24 0%, #fff 50%, #fbbf24 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 animate-fadeInUp text-slate-100">
          About Us
        </h2>
        
        {/* Company Description */}
        <div className="mb-12 sm:mb-16 px-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed text-justify">
            AVNYA manufactures complete range of Metal Building Systems, including Pre-Engineered Buildings on a turnkey basis with design, engineering, manufacturing and installation. AVNYA can integrate customer specified mezzanines, canopies in the building design. AVNYA also manufactures and sells metal buildings components like Roof and Wall Cladding, Z&C Purlins, Louvers, Ridge Vents, Sky Lights, Gutters, Flashings and Turbo Ventilators.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
            Using state-of-art design and manufacturing facility in Hyderabad, AVNYA team has dedicated professionals who deliver building project on time and within budget. The entire engineering process is automated through dedicated software and custom developed analysis. The design calculations are furnished with the design for validation. The computer backed design and estimation system ensures precise estimation and ensures delivery of all parts of the project site in a timely manner. This attention to detail helps to deliver the projects as per the agreement with the client.
          </p>
        </div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Vision Card */}
          <div 
            className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 sm:p-8 rounded-2xl hover-lift glow-border animate-slideInLeft relative overflow-hidden"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-amber-400">Vision</h3>
              <p className="text-sm sm:text-base text-gray-200 text-center leading-relaxed">
                To be India's premier Pre Engineered Building Solutions.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 sm:p-8 rounded-2xl hover-lift glow-border animate-scaleIn relative overflow-hidden"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full -ml-16 -mb-16"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-amber-400">Mission</h3>
              <p className="text-sm sm:text-base text-gray-200 text-center leading-relaxed">
                Our Mission is to cater our client's customized needs by setting new stands in design, management, productivity, quality and mastering the art of in-time completion.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div 
            className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 sm:p-8 rounded-2xl hover-lift glow-border animate-slideInRight relative overflow-hidden"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full -ml-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-amber-400">Values</h3>
              <div className="text-sm sm:text-base text-gray-200 text-center leading-relaxed space-y-2">
                <p className="font-semibold">Integrity</p>
                <p className="font-semibold">Committed Delivery</p>
                <p className="font-semibold">Continued Innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why PEB Section */}
        {/* <div className="mt-16 sm:mt-20 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center shimmer-text">Why PEB</h3>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;  










// const AboutSection = () => {
//   return (
//     <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           <div className="animate-fadeInLeft">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Us</h2>
//             <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
//               Avnya Smart Builds manufactures Pre-Engineered Buildings using a turnkey approach—from design to installation—ensuring timely delivery, quality, and budget-aligned solutions.
//             </p>
//             <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//               Our automated engineering process and dedicated software ensure accurate design, load validation, and efficient material estimation for seamless project delivery.
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 sm:p-8 rounded-xl animate-fadeInRight">
//             <div className="mb-6 sm:mb-8">
//               <h3 className="text-xl sm:text-2xl font-bold mb-2">Vision</h3>
//               <p className="text-sm sm:text-base">To be India's premier Pre-Engineered Building Solutions provider.</p>
//             </div>
//             <div className="mb-6 sm:mb-8">
//               <h3 className="text-xl sm:text-2xl font-bold mb-2">Mission</h3>
//               <p className="text-sm sm:text-base">Setting new standards in design, management, productivity, and quality while mastering on-time completion.</p>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-2xl font-bold mb-2">Values</h3>
//               <p className="text-sm sm:text-base">Integrity · Committed Delivery · Continued Innovation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;