import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[100svh] bg-gradient-to-br from-gray-900 via-primary to-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828"
          alt="Paint Background"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/80 to-secondary/80"></div>
      </div>

      {/* Animated Paint Drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="animate-paint-drop absolute hidden sm:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `paint-drop ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.2)`,
                borderRadius: '50%',
                width: `${Math.random() * (window.innerWidth > 768 ? 100 : 50) + 50}px`,
                height: `${Math.random() * (window.innerWidth > 768 ? 100 : 50) + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[100svh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Transform Your Space
            <span className="block text-accent animate-pulse mt-2">With Premium Paints</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Discover our exceptional range of premium quality paints and coatings
            for your perfect finish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-white font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span>Explore Products</span>
              <svg
                className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero; 