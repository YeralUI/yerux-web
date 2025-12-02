import { 
  FiSmartphone, 
  FiLayers, 
  FiRefreshCw, 
  FiSettings, 
  FiBarChart2 
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiSmartphone size={50} />,
      title: "Diseño UX/UI de Apps",
      desc: "Flujos, arquitectura y UI moderna para apps móviles iOS & Android.",
    },
    {
      icon: <FiLayers size={50} />,
      title: "Dashboards & Web Apps",
      desc: "Sistemas empresariales, fintech, cooperativas y plataformas internas.",
    },
    {
      icon: <FiRefreshCw size={50} />,
      title: "Rediseño Profesional",
      desc: "Modernización completa: estética, accesibilidad, consistencia y patrones actuales.",
    },
    {
      icon: <FiSettings size={50} />,
      title: "Design Systems",
      desc: "Tokens, componentes, biblioteca visual y guidelines para equipos escalables.",
    },
    {
      icon: <FiBarChart2 size={50} />,
      title: "Optimización UX",
      desc: "Auditorías, heurísticas, research y recomendaciones basadas en datos.",
    },
  ];

  return (
    <section id="services" className="relative py-36 bg-white">

      {/* Fondo gradiente gigante */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[180px] -top-20 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[160px] bottom-0 -right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900">
          Servicios UX/UI para tu producto
        </h2>
        <p className="text-gray-700 text-center mt-4 mb-20 max-w-2xl mx-auto text-lg">
          Diseño moderno, visual y optimizado para aplicaciones, plataformas y sistemas digitales.
        </p>

        {/* GRID DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {services.map((srv, i) => (
            <div 
              key={i}
              className="
                relative p-10 rounded-3xl 
                bg-white backdrop-blur-md 
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                border border-white/60
                transition-all duration-500 hover:-translate-y-2
              "
            >

              {/* ICONO */}
              <div className="
                text-blue-600 mb-6 
                group-hover:scale-110 transition-transform duration-300
              ">
                {srv.icon}
              </div>

              {/* TITULO */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {srv.title}
              </h3>

              {/* DESCRIPCION */}
              <p className="text-gray-600 leading-relaxed text-base">
                {srv.desc}
              </p>

              {/* LINEA DECORATIVA */}
              <div className="
                w-20 h-[3px] 
                bg-blue-500 mt-6 
                rounded-full
                transition-all duration-500 group-hover:w-32
              "></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
