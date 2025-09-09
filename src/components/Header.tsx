export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SN</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">
              Nosotros
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">
              Servicios
            </a>
            <a href="#track" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">
              Rastrear
            </a>
            <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium">
              Preguntas
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-red-600 hover:bg-black text-white font-medium py-2 px-4 rounded-full transition-all text-sm">
              Contáctanos
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}