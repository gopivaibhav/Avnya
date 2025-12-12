import { Award, Building2, ChevronRight, Target, Wrench } from "lucide-react";

const StrengthsSection = () => {
  const strengths = [
    { icon: <Building2 className="w-6 h-6" />, title: 'Advanced Facility', desc: 'State-of-the-art design & manufacturing in Hyderabad' },
    { icon: <Target className="w-6 h-6" />, title: 'Computer-Backed Design', desc: 'Precise estimation & validation systems' },
    { icon: <Award className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'Coordinated execution with zero delays' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Cost-Effective', desc: 'Customizable PEB solutions within budget' },
    { icon: <ChevronRight className="w-6 h-6" />, title: 'Premium Steel', desc: 'JSW, Tata Steel, SAIL, Apollo brands' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 sm:mb-16">Our Strengths</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 text-white">
                {strength.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{strength.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{strength.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;