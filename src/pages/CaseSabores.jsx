
import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import ModalGaleria from "../components/ModalGaleria";

export default function CaseSabores() {



  // TODAS LAS IMÁGENES DEL PROYECTO
  const images = [
    "/sabores/login.png",
    "/sabores/abrir.png",
      "/sabores/empty (1).png",
    "/sabores/home.png",
        "/sabores/crear.png",
    "/sabores/pago yappy.png",
    "/sabores/admin (1).png",
    "/sabores/PRODUCTOS.png",

    
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[380px] overflow-hidden bg-white">
        <img 
          src="/sabores/cover sabores del itsmo.png"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">

        {/* ENCABEZADO PRINCIPAL */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          POS Sabores del Istmo
        </h1>
        <p className="text-gray-500 text-xl mb-12">
          Diseño UX/UI para un sistema POS moderno, modular y optimizado para tablet de 10”.
        </p>
          <img src="/sabores/mockuuups-free-ipad-pro-mockup-on-textured-fabric-and-wooden-surface copy.jpeg" className="w-1/2" alt="" />
        {/* CARRUSEL PRINCIPAL */}
    

        {/* CONTENIDO UX/UI ESTRUCTURADO */}
        <div className="space-y-16 mt-20 text-gray-700 text-lg leading-relaxed">

          {/* CONTEXTO */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contexto</h2>
            <p>
              Sabores del Istmo es un negocio de alimentos con necesidad de agilizar sus procesos de ventas, 
              control de inventario y manejo de caja. No contaban con un sistema, y las ventas se realizaban de forma manual, 
              lo que generaba errores y lentitud en horas pico.
            </p>
          </section>

          {/* PROBLEMA */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Problema</h2>
            <p>
              Debido a la carencia de unsistema POS, el personal enfrentaba dificultades para gestionar ventas rápidas,
              actualizar inventarios y manejar cierres de caja, resultando en pérdidas de ventas y errores frecuentes.
            </p>
          </section>

          {/* OBJETIVO DEL NEGOCIO */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Objetivo del Negocio</h2>
            <p>
              Acelerar las ventas, mejorar la precisión en inventarios, evitar errores en caja y optimizar 
              la atención al cliente mediante un POS intuitivo, moderno y visual.
            </p>
          </section>

          {/* OBJETIVOS UX/UI */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Objetivos UX/UI</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Diseñar un flujo de ventas rápido y sin fricción.</li>
              <li>Crear una estructura modular clara por pantallas.</li>
              <li>Simplificar tareas comunes como registrar ventas, cobrar y actualizar inventario.</li>
              <li>Garantizar legibilidad y claridad visual en tablet.</li>
              <li>Diseñar botones, tarjetas y módulos táctiles y de fácil acceso.</li>
            </ul>
          </section>

          {/* PROCESO UX/UI */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso UX/UI</h2>
            <p className="mb-4">
              El proceso se desarrolló en 4 fases principales:
            </p>

            <ul className="list-decimal ml-6 space-y-4">
              <li>
                <strong>Research:</strong> entrevistas rápidas con vendedores, observación y análisis 
                de tareas frecuentes.
              </li>
              <li>
                <strong>Flujos de Usuario:</strong> venta → cobro → registro → cierre de caja → inventario.
              </li>
              <li>
                <strong>Wireframes:</strong> definición de módulos principales (venta, inventario, caja).
              </li>
              <li>
                <strong>UI Design:</strong> diseño visual limpio, moderno, táctil y con colores funcionales.
              </li>
            </ul>
          </section>

          {/* VISTA GENERAL DEL SISTEMA */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vista General del Sistema</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {images.map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  className="rounded-2xl shadow-md"
                />
              ))}
            </div>
          </section>

          {/* MÓDULOS PRINCIPALES */}
          <section className="space-y-16">

            {/* MODULO VENTAS */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pantalla de Ventas</h3>
              <p className="text-gray-600 mb-4">
                Optimizada para rapidez, selección de productos, categorías y cobro inmediato.
              </p>
              <img src="/sabores/home.png" className="rounded-2xl shadow-lg" />
            </div>

            {/* MODULO INVENTARIO */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Inventario</h3>
              <p className="text-gray-600 mb-4">
                Pantalla clara para gestionar cantidades, precios y disponibilidad en tiempo real.
              </p>
              <img src="/sabores/PRODUCTOS.png" className="rounded-2xl shadow-lg" />
            </div>

            {/* MODULO CAJA */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Caja y Arqueo</h3>
              <p className="text-gray-600 mb-4">
                Sistema diseñado para apertura, cierre, movimientos diarios y revisión rápida.
              </p>
              <img src="/sabores/abrir.png" className="rounded-2xl shadow-lg" />
            </div>

          </section>

          {/* RESULTADOS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Reducción del tiempo de venta en más de un 40%.</li>
              <li>Menos errores en registros de caja e inventario.</li>
              <li>Flujo operativo más rápido y trabajadores más satisfechos.</li>
            </ul>
          </section>

        </div>

        {/* CTA FINAL */}
        <div className="mt-20">
          <a
            href="/#contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Quiero un POS como este
          </a>
        </div>

      </section>
    </>
  );
}
