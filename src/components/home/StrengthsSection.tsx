import React from "react";
import { Award, Building2, ChevronRight, Target, Wrench } from "lucide-react";

const StrengthsSection = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  const strengths = [
    { icon: <Building2 className="w-6 h-6" />, title: 'Advanced Facility', desc: 'State-of-the-art design & manufacturing in Hyderabad' },
    { icon: <Target className="w-6 h-6" />, title: 'Computer-Backed Design', desc: 'Precise estimation & validation systems' },
    { icon: <Award className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'Coordinated execution with zero delays' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Cost-Effective', desc: 'Customizable PEB solutions within budget' },
    { icon: <ChevronRight className="w-6 h-6" />, title: 'Premium Steel', desc: 'JSW, Tata Steel, SAIL, Apollo brands' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 sm:mb-16 opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
          Our Strengths
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-br from-slate-50 to-amber-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl">
                  <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                    {strength.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  {strength.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 transform group-hover:translate-x-1 transition-all duration-300 delay-75">
                  {strength.desc}
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default StrengthsSection;