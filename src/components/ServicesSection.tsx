import { useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

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
      <h2 className="text-5xl md:text-6xl font-black text-center text-gray-900 mb-16 leading-tight">
        Nuestros Servicios<br />
        Logísticos
      </h2>
      
      <div className="space-y-0">
        {services.map((service) => (
          <div key={service.number} className="group cursor-pointer" onClick={() => toggleService(service.number)}>
            <div className="py-8 border-b border-gray-300 hover:border-gray-500 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12">
                  <span className="text-lg font-medium text-gray-500 min-w-[3rem]">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <ArrowUpRightIcon 
                  className={`w-6 h-6 text-gray-400 group-hover:text-red-600 transition-all duration-300 ${
                    expandedService === service.number 
                      ? 'transform rotate-90 text-red-600' 
                      : 'group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1'
                  }`} 
                />
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedService === service.number ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-16">
                  <p className="text-gray-600 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}