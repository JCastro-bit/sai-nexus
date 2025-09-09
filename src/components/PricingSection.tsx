import { CheckIcon } from '@heroicons/react/24/outline';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Básico",
    price: "$2,500",
    period: "/mes",
    description: "Ideal para pequeñas empresas con necesidades logísticas básicas y envíos regulares.",
    features: [
      "TRANSPORTE TERRESTRE",
      "RASTREO BÁSICO",
      "SOPORTE 8X5",
      "HASTA 50 ENVÍOS/MES",
      "REPORTES MENSUALES"
    ]
  },
  {
    name: "Empresarial",
    price: "$7,500",
    period: "/mes",
    description: "Perfecto para medianas empresas que requieren soluciones logísticas integrales y flexibles.",
    features: [
      "TODOS LOS SERVICIOS BÁSICOS",
      "ALMACENAMIENTO INCLUIDO",
      "RASTREO EN TIEMPO REAL",
      "SOPORTE 24/7",
      "ENVÍOS ILIMITADOS",
      "CONSULTORÍA ESPECIALIZADA"
    ],
    highlighted: true
  },
  {
    name: "Corporativo",
    price: "$15,000",
    period: "/mes",
    description: "Solución completa para grandes corporaciones con operaciones logísticas complejas a nivel nacional.",
    features: [
      "TODOS LOS SERVICIOS ANTERIORES",
      "GESTIÓN CADENA COMPLETA",
      "CARGA ESPECIALIZADA",
      "GERENTE DEDICADO",
      "SLA GARANTIZADO",
      "INTEGRACIÓN SISTEMAS"
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
          Planes de Servicio
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Soluciones logísticas adaptadas a las necesidades de tu empresa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index}
            className={`relative rounded-2xl p-8 ${
              plan.highlighted 
                ? 'bg-black text-white border-2 border-red-600 scale-105' 
                : 'bg-gray-50 text-gray-900'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  MÁS POPULAR
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-lg ml-1 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <CheckIcon className={`w-5 h-5 ${plan.highlighted ? 'text-red-400' : 'text-green-500'}`} />
                  <span className={`text-sm font-medium ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button 
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.highlighted
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-black hover:bg-red-600 text-white'
              }`}
            >
              ELEGIR ESTE PLAN
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}