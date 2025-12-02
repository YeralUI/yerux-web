export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="text-3xl font-extrabold text-white">
          Yer<span className="text-brand-accent">UX</span>
        </a>

        <nav className="hidden md:flex gap-10 text-white/80 font-medium">
          <a href="#services" className="hover:text-white transition">Servicios</a>
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <a href="#testimonials" className="hover:text-white transition">Clientes</a>
          <a href="#contact" className="hover:text-white transition">Contacto</a>
        </nav>

        <a 
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-brand-accent hover:bg-blue-500 text-white rounded-xl shadow-lg transition-all"
        >
          Cotizar proyecto
        </a>

      </div>
    </header>
  );
}
