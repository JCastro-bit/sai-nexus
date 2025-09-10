import { useState } from 'react';
import { motion } from "motion/react";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const trackingPoints = [
  { x: '15%', y: '25%', delay: 0.2 },
  { x: '35%', y: '15%', delay: 0.4 },
  { x: '55%', y: '30%', delay: 0.6 },
  { x: '75%', y: '20%', delay: 0.8 },
  { x: '85%', y: '45%', delay: 1.0 },
  { x: '25%', y: '60%', delay: 1.2 },
  { x: '45%', y: '75%', delay: 1.4 },
];

export default function TrackingSection() {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      console.log('Tracking:', trackingId);
    }
  };

  return (
    <section id="rastrear" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Globe Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("/img/sai-nexus-earth-map.svg")`
          }}
        />
      </motion.div>

      {/* Tracking Points */}
      {trackingPoints.map((point, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
          style={{ left: point.x, top: point.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: point.delay,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.svg 
            className="w-6 h-6 text-gray-700"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            initial={{ rotate: -180, opacity: 0.3 }}
            animate={{ 
              rotate: 0, 
              opacity: [0.3, 1, 0.3] 
            }}
            transition={{ 
              rotate: { duration: 0.5, delay: point.delay + 0.2 },
              opacity: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: point.delay + 1
              }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </motion.svg>
          
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-full"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: point.delay + 1
            }}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-flex items-center text-red-500 text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            TRACKING
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-12 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Track Your Package
          </motion.h2>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="relative max-w-lg mx-auto"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Type tracking ID"
                className="w-full bg-transparent border-2 border-gray-600 rounded-full px-8 py-4 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors text-lg"
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-600 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}