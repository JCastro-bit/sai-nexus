import { useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "motion/react";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Transporte Terrestre',
    description: 'Servicios de transporte especializados con rutas optimizadas y seguimiento en tiempo real para garantizar la entrega puntual de tu mercancía.'
  },
  {
    number: '02',
    title: 'Almacenamiento y Distribución',
    description: 'Instalaciones modernas con sistemas de gestión avanzados para el almacenaje seguro y distribución eficiente de productos.'
  },
  {
    number: '03',
    title: 'Cadena de Suministro',
    description: 'Optimización integral de procesos logísticos para maximizar la eficiencia y reducir costos en toda la cadena de suministro.'
  },
  {
    number: '04',
    title: 'Rastreo y Monitoreo',
    description: 'Tecnología de punta para el seguimiento en tiempo real de envíos con alertas automáticas y reportes detallados de estado.'
  },
  {
    number: '05',
    title: 'Consultoría Logística',
    description: 'Análisis especializado y recomendaciones estratégicas para mejorar procesos y reducir tiempos de entrega.'
  },
  {
    number: '06',
    title: 'Carga Especializada',
    description: 'Manejo de mercancías que requieren cuidados especiales, incluyendo productos frágiles, peligrosos o de alto valor.'
  }
];

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceNumber: string) => {
    setExpandedService(expandedService === serviceNumber ? null : serviceNumber);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2 
        className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-16 leading-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nuestros Servicios<br />
        Logísticos
      </motion.h2>
      
      <div className="space-y-0">
        {services.map((service, index) => (
          <motion.div 
            key={service.number}
            className="group cursor-pointer"
            onClick={() => toggleService(service.number)}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ x: 10 }}
          >
            <div className="py-8 border-b border-gray-300 hover:border-gray-500 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12">
                  <motion.span 
                    className="text-lg font-medium text-gray-500 min-w-[3rem]"
                    whileHover={{ scale: 1.2, color: "#dc2626" }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.number}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ 
                    rotate: expandedService === service.number ? 90 : 0,
                    scale: expandedService === service.number ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ArrowUpRightIcon 
                    className={`w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors duration-300`}
                  />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {expandedService === service.number && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="ml-16 mt-4"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-gray-600 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}