export default function Proyectos() {
  const proyectos = [
    {
      title: "POS Sabores del Istmo",
      desc: "Sistema POS para ventas rápidas, control de inventario y caja, optimizado para tablet.",
      image:
        "/sabores/mockuuups-free-ipad-pro-mockup-on-textured-fabric-and-wooden-surface copy.jpeg",
      tag: "Web App · POS",
      link: "/case-sabores",
    },
    {
      title: "Página web Ticteams ",
      desc: "Diseño UX/UI para plataforma web de gestión de equipos deportivos y torneos.",
      image:
        "ticteams/ZenBook Duo 14.png",
      tag: "Web · Technology",
      link: "/case-ticteams",
    },
    {
      title: "App Móvil",
      desc: "Rediseño UX/UI centrado en accesibilidad, claridad y experiencia de usuario.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600",
      tag: "Shop · Mobile App",
      link: "/case-",
    },
  ];

  return (
    <section id="proyectos" className="py-36 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Proyectos Destacados
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-20">
          Selección de casos reales diseñados para empresas, cooperativas y
          negocios que buscan elevar su producto digital.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {proyectos.map((p, index) => (
            <a
              key={index}
              href={p.link}
              className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative  h-56 overflow-hidden">
                <img
                  src={p.image}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-500 group-hover:scale-105
                  "
                />

                {/* Tag */}
                <span
                  className="
                    absolute bottom-3 left-3 
                    px-3 py-1 rounded-full
                    text-sm font-medium 
                    bg-white/80 backdrop-blur-md
                    text-gray-800
                  "
                >
                  {p.tag}
                </span>
              </div>

              {/* Información */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-4 text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                  Ver caso de estudio →
                </div>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
