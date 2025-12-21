import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import img1 from '../../assets/project1.png';
import img2 from '../../assets/project2.png';
import img3 from '../../assets/project3.png';
import img4 from '../../assets/project4.png';
import img5 from '../../assets/project5.png';
import img6 from '../../assets/project6.png';

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [img4, img5, img6, img1, img2, img3];
  const captions = [
    'Kurnool',
    'Dhone',
    'Nandyala',
    'Kothur',
    'Kothakota',
    'Proddutur',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.section
      ref={ref}
      id="gallery"
      className="relative bg-gray-50 pt-24 overflow-hidden"
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={fadeIn}
    >
      {/* Slideshow Wrapper */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* CENTER TEXT — ALWAYS VISIBLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-transparent text-white px-4 sm:px-10 py-5 rounded-lg shadow-2xl backdrop-blur-md">
            <p className="text-lg sm:text-2xl md:text-3xl uppercase tracking-widest font-semibold text-center">
              Our Recent Projects
            </p>
          </div>
        </motion.div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-end">
          {/* Caption */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/95 px-8 py-4 shadow-xl"
          >
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              {captions[currentIndex]}
            </h3>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center bg-slate-900/95 px-6 py-3 shadow-lg gap-x-4">
            <button
              onClick={handlePrev}
              className="text-white hover:opacity-80 transition"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={handleNext}
              className="text-white hover:opacity-80 transition"
              aria-label="Next Slide"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
