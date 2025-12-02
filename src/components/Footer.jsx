export default function Footer() {
  return (
    <footer className="bg-[#0E1A33] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Marca */}
        <div>
          <h3 className="text-3xl font-bold">
            Yer<span className="text-blue-400">UX</span>
          </h3>
          <p className="text-white/60 mt-4 max-w-sm">
            Diseño UX/UI profesional para apps móviles, dashboards, fintech, 
            plataformas digitales y sistemas empresariales.
          </p>
        </div>

        {/* Enlaces */}
        <div className="grid grid-cols-2 gap-8">

          <div>
            <h4 className="font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition">Servicios</a></li>
              <li><a href="#proyectos" className="text-white/70 hover:text-white transition">Proyectos</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition">Clientes</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/70">
              <li>Panamá, PA</li>
              <li>Correo: contacto@yerux.com</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} YerUX. Todos los derechos reservados.
      </div>
    </footer>
  );
}
