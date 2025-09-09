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
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div />
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {service.categories.map((category, catIndex) => (
                    <span key={catIndex}>
                      <span className="text-gray-300 text-sm font-medium">
                        {category}
                      </span>
                      {catIndex < service.categories.length - 1 && (
                        <span className="text-gray-500 mx-2">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}