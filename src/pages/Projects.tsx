import React from 'react';
import mainImage from '../assets/building.jpg';
import im1 from '../assets/agri.png';
import im2 from '../assets/amish.png';
import im3 from '../assets/harsha.png';
import im4 from '../assets/kamson.png';
import im5 from '../assets/meil.png';
import im6 from '../assets/tbsr.png';
import im7 from '../assets/amara.png';
import im8 from '../assets/drillmec.png';
import im9 from '../assets/metrochem.png';

// Import project images
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project6.png';

// Import steel brand logos
import jswLogo from '../assets/jsw.png';
import tataLogo from '../assets/tata.png';
import sailLogo from '../assets/sail.png';
import amnsLogo from '../assets/amnsnew.png';  
import aplLogo from '../assets/apollo.png';

const ProjectsSection = () => {
  const clients = [
    { name: 'AgriSol', logo: im1 },
    { name: 'Harsha Toyota', logo: im3 },
    { name: 'Kamson Hygiene Care', logo: im4 },
    { name: 'TBSR Engineers', logo: im6 },
    { name: 'Amara Raja', logo: im7 },
    { name: 'Drilmec', logo: im8 },
    { name: 'Metrochem', logo: im9 },
    { name: 'Amish Cropsciences', logo: im2 },
    { name: 'MEIL', logo: im5 }
  ];

  const recentProjects = [
    { id: 1, image: project1, title: 'Industrial Complex - Phase 1', description: 'Steel fabrication and installation' },
    { id: 2, image: project2, title: 'Commercial Building', description: 'Structural steel framework' },
    { id: 3, image: project3, title: 'Warehouse Facility', description: 'Complete steel structure' },
    { id: 4, image: project4, title: 'Manufacturing Plant', description: 'Heavy-duty steel construction' }
  ];

  const steelBrands = [
    { name: 'JSW', logo: jswLogo },
    { name: 'Tata Steel', logo: tataLogo },
    { name: 'SAIL', logo: sailLogo },
    { name: 'AM/NS India', logo: amnsLogo },
    { name: 'APL Apollo', logo: aplLogo }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900 overflow-hidden">
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .image-zoom-container {
          overflow: hidden;
          position: relative;
        }

        .image-zoom-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .image-zoom-container:hover::before {
          opacity: 1;
        }

        .image-zoom {
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .image-zoom-container:hover .image-zoom {
          transform: scale(1.15) rotate(2deg);
        }

        .glow-on-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .glow-on-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
          transition: box-shadow 0.3s ease;
          pointer-events: none;
        }

        .glow-on-hover:hover::after {
          box-shadow: 0 0 20px 5px rgba(251, 191, 36, 0.5);
        }

        .slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-400 mb-12 sm:mb-16 mt-10 animate-fadeInUp">
          Projects & Clients
        </h2>
        
        {/* Key Clients Section */}
        <div className="mb-16 sm:mb-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Key Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-amber-50 p-2 sm:p-2 rounded-lg text-center hover-lift glow-on-hover animate-fadeInUp"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-32 h-32 sm:w-44 sm:h-32 flex items-center justify-center overflow-hidden rounded-2xl image-zoom-container">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain image-zoom"
                    />
                  </div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base mb-4">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Basic Technical Parameters Section */}
        <div className="mb-16 sm:mb-20 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Basic Technical Parameters</h3>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl hover-lift glow-on-hover image-zoom-container">
              <img 
                src={mainImage} 
                alt="Basic Technical Parameters" 
                className="w-full h-auto object-cover image-zoom"
              />
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="mb-16 sm:mb-20 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden hover-lift glow-on-hover ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden image-zoom-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm sm:text-base">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steel Brands Section */}
        <div className="bg-slate-100 p-6 sm:p-10 lg:p-12 rounded-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-900">Premium Steel Brands We Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {steelBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover-lift glow-on-hover animate-scaleIn"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="w-full h-20 sm:h-24 flex items-center justify-center image-zoom-container">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain image-zoom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;



// import React from 'react';
// import mainImage from '../assets/building.jpg';
// import im1 from '../assets/agri.png';
// import im2 from '../assets/amish.png';
// import im3 from '../assets/harsha.png';
// import im4 from '../assets/kamson.png';
// import im5 from '../assets/meil.png';
// import im6 from '../assets/tbsr.png';
// import im7 from '../assets/amara.png';
// import im8 from '../assets/drillmec.png';
// import im9 from '../assets/metrochem.png';

// // Import project images
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project3.png';
// import project4 from '../assets/project6.png';

// // Import steel brand logos

// import jswLogo from '../assets/jsw.png';
// import tataLogo from '../assets/tata.png';
// import sailLogo from '../assets/sail.png';
// import amnsLogo from '../assets/amnsnew.png';  
// import aplLogo from '../assets/apollo.png';

// const ProjectsSection = () => {
//   const clients = [
//     { name: 'AgriSol', logo: im1 },
//     { name: 'Harsha Toyota', logo: im3 },
//     { name: 'Kamson Hygiene Care', logo: im4 },
//     { name: 'TBSR Engineers', logo: im6 },
//     { name: 'Amara Raja', logo: im7 },
//     { name: 'Drilmec', logo: im8 },
//     { name: 'Metrochem', logo: im9 },
//     { name: 'Amish Cropsciences', logo: im2 },
//     { name: 'MEIL', logo: im5 }
//   ];

//   const recentProjects = [
//     { id: 1, image: project1, title: 'Industrial Complex - Phase 1', description: 'Steel fabrication and installation' },
//     { id: 2, image: project2, title: 'Commercial Building', description: 'Structural steel framework' },
//     { id: 3, image: project3, title: 'Warehouse Facility', description: 'Complete steel structure' },
//     { id: 4, image: project4, title: 'Manufacturing Plant', description: 'Heavy-duty steel construction' }
//   ];

//   const steelBrands = [
//     { name: 'JSW', logo: jswLogo },
//     { name: 'Tata Steel', logo: tataLogo },
//     { name: 'SAIL', logo: sailLogo },
//     { name: 'AM/NS India', logo: amnsLogo },
//     { name: 'APL Apollo', logo: aplLogo }
//   ];

//   return (
//     <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-400 mb-12 sm:mb-16 mt-10">
//           Projects & Clients
//         </h2>
        
//         {/* Key Clients Section */}
//         <div className="mb-16 sm:mb-20">
//           <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Key Clients</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-slate-50 to-amber-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   <div className="w-32 h-32 sm:w-44 sm:h-32 flex items-center justify-center overflow-hidden rounded-2xl">
//                     <img 
//                       src={client.logo} 
//                       alt={`${client.name} logo`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <p className="font-semibold text-slate-900 text-sm sm:text-base mb-4">{client.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Projects Section */}
//         <div className="mb-16 sm:mb-20">
//           <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Recent Projects</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//             {recentProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-4 sm:p-6">
//                   <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">{project.title}</h4>
//                   <p className="text-slate-300 text-sm sm:text-base">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Steel Brands Section */}
//         <div className="bg-slate-100 p-6 sm:p-10 lg:p-12 rounded-xl">
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-900">Premium Steel Brands We Use</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
//             {steelBrands.map((brand, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//               >
//                 <div className="w-full h-20 sm:h-24 flex items-center object-fit justify-center">
//                   <img 
//                     src={brand.logo} 
//                     alt={`${brand.name} logo`}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;








// import React from 'react';
// import mainImage from '../assets/building.jpg';
// import im1 from '../assets/agri.png';
// import im2 from '../assets/amish.png';
// import im3 from '../assets/harsha.png';
// import im4 from '../assets/kamson.png';
// import im5 from '../assets/meil.png';
// import im6 from '../assets/tbsr.png';
// import im7 from '../assets/amara.png';
// import im8 from '../assets/drillmec.png';
// import im9 from '../assets/metrochem.png';

// // Import project images
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';
// import project3 from '../assets/project3.png';
// import project4 from '../assets/project6.png';

// const ProjectsSection = () => {
//   const clients = [
//     { name: 'AgriSol', logo: im1 },
//     { name: 'Harsha Toyota', logo: im3 },
//     { name: 'Kamson Hygiene Care', logo: im4 },
//     { name: 'TBSR Engineers', logo: im6 },
//     { name: 'Amara Raja', logo: im7 },
//     { name: 'Drilmec', logo: im8 },
//     { name: 'Metrochem', logo: im9 },
//     { name: 'Amish Cropsciences', logo: im2 },
//     { name: 'MEIL', logo: im5 }
//   ];

//   const recentProjects = [
//     { id: 1, image: project1, title: 'Industrial Complex - Phase 1', description: 'Steel fabrication and installation' },
//     { id: 2, image: project2, title: 'Commercial Building', description: 'Structural steel framework' },
//     { id: 3, image: project3, title: 'Warehouse Facility', description: 'Complete steel structure' },
//     { id: 4, image: project4, title: 'Manufacturing Plant', description: 'Heavy-duty steel construction' }
//   ];

//   const steelBrands = ['JSW', 'Tata Steel', 'SAIL', 'AM/NS India', 'APL Apollo'];

//   return (
//     <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-400 mb-12 sm:mb-16 mt-10">
//           Projects & Clients
//         </h2>
        
//         {/* Key Clients Section */}
//         <div className="mb-16 sm:mb-20">
//           <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Key Clients</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-slate-50 to-amber-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   <div className="w-32 h-32 sm:w-44 sm:h-32 flex items-center justify-center overflow-hidden rounded-2xl">
//                     <img 
//                       src={client.logo} 
//                       alt={`${client.name} logo`}
//                       className="w-full h-full object-fit"
//                     />
//                   </div>
//                 {/* <p className="font-semibold text-slate-900 text-sm sm:text-base mb-4">{client.name}</p> */}
//                 </div>
//               </div>
//             ))}
//           </div>  
//         </div>

//         {/* Recent Projects Section */}
//         <div className="mb-16 sm:mb-20">
//           <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 text-center">Our Recent Projects</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//             {recentProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-4 sm:p-6">
//                   <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">{project.title}</h4>
//                   <p className="text-slate-300 text-sm sm:text-base">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Steel Brands Section */}
//         <div className="bg-slate-100 p-6 sm:p-10 lg:p-12 rounded-xl">
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-900">Premium Steel Brands We Use</h3>
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
//             {steelBrands.map((brand, index) => (
//               <div
//                 key={index}
//                 className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-base sm:text-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 text-white"
//               >
//                 {brand}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;




