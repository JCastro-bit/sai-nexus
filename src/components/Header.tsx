import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Rastrear", href: "#rastrear" },
    { name: "Preguntas", href: "#preguntas" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
                  className="h-8 sm:h-10 w-auto"
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.nav 
            className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50"
            animate={{
              paddingLeft: isScrolled ? '12px' : '16px',
              paddingRight: isScrolled ? '12px' : '16px',
              paddingTop: isScrolled ? '8px' : '10px',
              paddingBottom: isScrolled ? '8px' : '10px',
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
                    animate={{ opacity: 1, width: 'auto', marginRight: 16 }}
                    exit={{ opacity: 0, width: 0, marginRight: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.img 
                      src="/logo/sai-nexus-isotipo-rojo.webp" 
                      alt="Sai Nexus" 
                      className="h-6 sm:h-8 w-auto"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium whitespace-nowrap"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-700 hover:text-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="w-5 h-5" />
                  ) : (
                    <Bars3Icon className="w-5 h-5" />
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    key="contact-btn-inside"
                    className="hidden sm:block"
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: 'auto', marginLeft: 16 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.button 
                      className="bg-red-600 hover:bg-black text-white font-medium py-1.5 px-3 sm:px-4 rounded-full transition-all text-xs sm:text-sm whitespace-nowrap"
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
                className="hidden sm:flex items-center space-x-3"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all font-medium text-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.div
                  className="pt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <button className="w-full bg-red-600 hover:bg-black text-white font-medium py-3 px-4 rounded-lg transition-all text-lg">
                    Contáctanos
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}