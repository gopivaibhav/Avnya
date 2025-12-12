import React, { useState, useEffect, useRef } from 'react';

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const industries = [
    'Warehouses', 'Industrial Buildings', 'Godowns', 'Shopping Malls',
    'Supermarkets', 'Rice Mills', 'Oil Extraction Units', 'Stadiums',
    'Sports Complexes', 'Cold Storage', 'Aircraft Hangars', 'School Buildings', 'Showrooms'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer-border {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.5), inset 0 0 30px rgba(251, 191, 36, 0.2);
          }
        }

        @keyframes scale-bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out forwards;
          opacity: 0;
        }

        .industry-tag {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-tag::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(90deg, 
            rgba(251, 191, 36, 0) 0%,
            rgba(251, 191, 36, 0.8) 50%,
            rgba(251, 146, 60, 0.8) 50%,
            rgba(251, 146, 60, 0) 100%
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .industry-tag:hover::before {
          opacity: 1;
          animation: shimmer-border 1.5s linear infinite;
        }

        @keyframes smooth-lift {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-6px) scale(1.03);
  }
}

.industry-tag:hover {
  transform: translateY(-6px) scale(1.03);
  transition: all 0.4s ease;
  background: linear-gradient(135deg, rgb(251, 191, 36), rgb(251, 146, 60));
  box-shadow: 0 10px 25px rgba(251, 146, 60, 0.3);
}


        .bg-ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float-subtle 8s ease-in-out infinite;
        }

        .title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-border 3s linear infinite;
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          animation: expand-line 1s ease-out 0.5s forwards;
        }

        @keyframes expand-line {
          to {
            transform: translateX(-50%) scaleX(1);
          }
        }

        .tag-inner {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .industry-tag:hover .tag-inner {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-ambient absolute top-20 left-10 w-64 h-64 bg-amber-500" style={{ animationDelay: '0s' }}></div>
        <div className="bg-ambient absolute bottom-20 right-10 w-80 h-80 bg-orange-500" style={{ animationDelay: '2s' }}></div>
        <div className="bg-ambient absolute top-1/2 left-1/2 w-72 h-72 bg-amber-400" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isVisible ? 'animate-slideInFromLeft' : 'opacity-0'}`}>
            <span className="title-gradient">Industries We Serve</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-tag px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 rounded-full cursor-pointer text-sm sm:text-base backdrop-blur-sm ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              } ${hoveredIndex === index ? 'industry-tag-hovered' : ''}`}
              style={{ 
                animationDelay: `${index * 0.05 + 0.3}s`,
                background: hoveredIndex === index 
                  ? 'linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(251, 146, 60) 100%)'
                  : 'rgb(30, 41, 59)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="tag-inner">
                {industry}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className={`mt-12 flex justify-center gap-2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              style={{
                animation: 'float-subtle 2s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;