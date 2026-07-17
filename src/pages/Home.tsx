// import { ReactNode, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import HeroSection from "@/components/home/HeroSection"
// import IndustriesSection from "@/components/home/IndustriesSection"
// import OffersSection from "@/components/home/OffersSection"
// import ServicesSection from "@/components/home/ServicesSection"
// import StrengthsSection from "@/components/home/StrengthsSection"


// interface ScrollRevealProps {
//   children: ReactNode;
//   delay?: number;
// }

// // Wrapper component for scroll animations
// const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setIsVisible(true);
//           }, delay);
//         }
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the element is visible
//         rootMargin: '0px 0px -100px 0px' // Start animation slightly before element comes into view
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [delay]);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-1000 ease-out ${
//         isVisible
//           ? 'opacity-100 translate-y-0'
//           : 'opacity-0 translate-y-16'
//       }`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// const FireServicesBanner = () => {
//   return (
//     <section className="bg-slate-950 px-4 py-14 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 p-[1px] shadow-[0_24px_60px_-28px_rgba(234,88,12,0.55)]">
//           <div className="relative overflow-hidden rounded-[27px] bg-slate-950 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.18),transparent_28%)] pointer-events-none" />
//             <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//               <div className="max-w-3xl">
//                 <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
//                   Fire Protection
//                 </p>
//                 <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
//                   Explore our complete fire safety and firefighting services.
//                 </h2>
//                 <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
//                   From fire alarms and hydrant systems to extinguishers,
//                   sprinklers, suppression, and life-safety equipment, we now
//                   have a dedicated fire services section for visitors to browse.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   to="/fire-service"
//                   className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-100"
//                 >
//                   View Fire Services
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
//                 >
//                   Talk To Our Team
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Home = () => {
//   return (
//     <div className="font-sans">
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
        
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-fadeInLeft {
//           animation: fadeInLeft 0.8s ease-out forwards;
//         }
        
//         .animate-fadeInRight {
//           animation: fadeInRight 0.8s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float 6s ease-in-out infinite 3s;
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
        
//         html {
//           scroll-behavior: smooth;
//         }
        
//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 10px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #1e293b;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #f59e0b, #ea580c);
//           border-radius: 5px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #d97706, #c2410c);
//         }
//       `}</style>
      
//       {/* Hero section loads immediately */}
//       <HeroSection />
      
//       {/* Other sections reveal on scroll */}
//       <ScrollReveal>
//         <OffersSection />
//       </ScrollReveal>

//       <ScrollReveal delay={100}>
//         <FireServicesBanner />
//       </ScrollReveal>
      
//       <ScrollReveal delay={100}>
//         <IndustriesSection />
//       </ScrollReveal>
      
//       <ScrollReveal delay={100}>
//         <StrengthsSection />
//       </ScrollReveal>
      
//       <ScrollReveal delay={100}>
//         <ServicesSection />
//       </ScrollReveal>
//     </div>
//   )
// }

// export default Home

import { ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from "@/components/home/HeroSection"
import IndustriesSection from "@/components/home/IndustriesSection"
import OffersSection from "@/components/home/OffersSection"
import ServicesSection from "@/components/home/ServicesSection"
import StrengthsSection from "@/components/home/StrengthsSection"


interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

// Wrapper component for scroll animations
const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before element comes into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FireServicesBanner = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/fire-service"
          className="group block overflow-hidden rounded-[28px] bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 p-[1px] shadow-[0_24px_60px_-30px_rgba(234,88,12,0.55)] transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="relative overflow-hidden rounded-[27px] bg-slate-950 px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.18),transparent_28%)] pointer-events-none" />
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                  Fire Services
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Complete fire safety, firefighting, and protection solutions.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Explore our dedicated fire services section for alarms,
                  hydrants, extinguishers, sprinklers, suppression systems, and
                  more.
                </p>
              </div>

              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition-transform duration-300 group-hover:translate-x-1">
                Explore Now
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-sans">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #d97706, #c2410c);
        }
      `}</style>
      
      {/* Hero section loads immediately */}
      <HeroSection />
      
      {/* Other sections reveal on scroll */}
      <ScrollReveal>
        <FireServicesBanner />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <OffersSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <IndustriesSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <StrengthsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <ServicesSection />
      </ScrollReveal>
    </div>
  )
}

export default Home
