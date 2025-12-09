import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Proyectos() {
  const { lang } = useLanguage();
  const t = texts.projects[lang];

  // Mantengo tus rutas correctas
  const links = ["/case-sabores", "/case-ticteams", "/case-"];

  return (
    <section id="proyectos" className="py-36 bg-brand-dark2">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          {t.title}
        </h2>

        <p className="text-white text-center max-w-2xl mx-auto mt-4 mb-20">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        
          {t.list.map((p, index) => (
            <a
              key={index}
              href={links[index]}
              className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={
                    index === 1
                      ? "/ticteams/ZenBook Duo 14.png"
                      : index === 0
                      ? "/sabores/mockuuups-free-ipad-pro-mockup-on-textured-fabric-and-wooden-surface copy.jpeg"
                      : "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600"
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-sm font-medium bg-white/80 backdrop-blur-md text-gray-800">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-brand-dark">{p.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{p.desc}</p>

                <div className="mt-4 text-brand-accent font-semibold group-hover:underline flex items-center gap-1">
                  {t.view_case}
                </div>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
// Note: Make sure to adjust the image paths and links as per your project structure.