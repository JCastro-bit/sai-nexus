import { motion } from "motion/react";

interface FeaturedService {
  title: string;
  image: string;
  categories: string[];
}

const featuredServices: FeaturedService[] = [
  {
    title: "Optimización de Rutas Inteligentes",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    categories: ["Tecnología", "Eficiencia", "Ahorro"]
  },
  {
    title: "Protocolos de Seguridad Avanzados",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", 
    categories: ["Seguridad", "Cumplimiento", "Protección"]
  },
  {
    title: "Gestión de Cadena de Suministro",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
    categories: ["Logística", "Optimización", "Control"]
  },
  {
    title: "Reportes Financieros Automatizados",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    categories: ["Finanzas", "Automatización", "Análisis"]
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredServices.map((service, index) => (
          <motion.div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900"
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div 
              className="absolute inset-0 bg-black/40"
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                className="w-8 h-8 bg-red-600/20 backdrop-blur-sm rounded-full border border-red-500/30"
              />
              
              <div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15 + 0.4
                  }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.15 + 0.6
                  }}
                >
                  {service.categories.map((category, catIndex) => (
                    <motion.span 
                      key={catIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.15 + 0.7 + catIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-gray-300 text-sm font-medium">
                        {category}
                      </span>
                      {catIndex < service.categories.length - 1 && (
                        <span className="text-gray-500 mx-2">/</span>
                      )}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}