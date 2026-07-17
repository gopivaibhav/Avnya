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
          className="absolute inset-x-0 bottom-16 z-20 flex justify-center px-4 pointer-events-none sm:bottom-0"
        >
          <div className="max-w-[calc(100%-1.5rem)] bg-black/35 text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md sm:max-w-none sm:px-10 sm:py-5 sm:rounded-t-xl sm:rounded-b-none">
            <p className="text-sm uppercase tracking-[0.18em] font-semibold text-center sm:text-2xl md:text-3xl sm:tracking-[0.28em]">
              Our Recent Projects
            </p>
          </div>
        </motion.div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 z-30 w-full flex justify-between items-end">
          {/* Caption */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/95 px-4 py-3 shadow-xl sm:px-8 sm:py-4"
          >
            <h3 className="text-white text-base sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              {captions[currentIndex]}
            </h3>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center bg-slate-900/95 px-4 py-3 shadow-lg gap-x-3 sm:px-6 sm:gap-x-4">
            <button
              onClick={handlePrev}
              className="text-white hover:opacity-80 transition"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-xl sm:text-2xl" />
            </button>

            <button
              onClick={handleNext}
              className="text-white hover:opacity-80 transition"
              aria-label="Next Slide"
            >
              <FaChevronRight className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
