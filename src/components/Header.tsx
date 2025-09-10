import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-4 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/logo/sai-nexus-logotipo-rojo-negro.webp" 
            alt="Sai Nexus Logo" 
            className="h-10 w-auto"
          />
        </motion.div>
        
        <motion.nav 
          className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="hidden md:flex items-center space-x-6">
            {["Nosotros", "Servicios", "Rastrear", "Preguntas"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.nav>
        
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className="bg-red-600 hover:bg-black text-white font-medium py-2 px-4 rounded-full transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}