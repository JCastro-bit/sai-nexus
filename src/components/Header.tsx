import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Nosotros", "Servicios", "Rastrear", "Preguntas"];

  return (
    <motion.header 
      className="fixed top-4 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`relative flex items-center ${isScrolled ? 'justify-center' : 'justify-between'}`}>
        <AnimatePresence>
          {!isScrolled && (
            <motion.div 
              key="logo-full"
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo/sai-nexus-logotipo-rojo-negro.webp" 
                alt="Sai Nexus Logo" 
                className="h-10 w-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.nav 
          className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50"
          animate={{
            paddingLeft: isScrolled ? '16px' : '24px',
            paddingRight: isScrolled ? '16px' : '24px',
            paddingTop: isScrolled ? '10px' : '12px',
            paddingBottom: isScrolled ? '10px' : '12px',
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-center">
            <AnimatePresence>
              {isScrolled && (
                <motion.div 
                  key="logo-iso"
                  className="flex items-center"
                  initial={{ opacity: 0, width: 0, marginRight: 0 }}
                  animate={{ opacity: 1, width: 'auto', marginRight: 24 }}
                  exit={{ opacity: 0, width: 0, marginRight: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.img 
                    src="/logo/sai-nexus-isotipo-rojo.webp" 
                    alt="Sai Nexus" 
                    className="h-8 w-auto"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium whitespace-nowrap"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  key="contact-btn-inside"
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: 'auto', marginLeft: 24 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.button 
                    className="bg-red-600 hover:bg-black text-white font-medium py-1.5 px-4 rounded-full transition-all text-sm whitespace-nowrap"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contáctanos
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
        
        <AnimatePresence>
          {!isScrolled && (
            <motion.div 
              key="contact-btn-outside"
              className="flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.button 
                className="bg-red-600 hover:bg-black text-white font-medium py-2 px-4 rounded-full transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctanos
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}