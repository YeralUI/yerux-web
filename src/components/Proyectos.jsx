import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Proyectos() {
  const { lang } = useLanguage();
  const t = texts.projects[lang];

  const projectMeta = [
    {
      link: "/case-sabores",
      image: "/sabores/mockup.jpeg",
    },
    
    {
      link: "/case-monix",
      image: "/Mockuuups Free iPhone mockup on a wooden desk in sunlight.jpeg",
    },
    {
      link: "/case-ticteams",
      image: "/ticteams/ZenBook-Duo.png",
    },
  ];

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
          {t.list.map((p, index) => {
            const meta = projectMeta[index];

            return (
              <a
                key={index}
                href={meta.link}
                className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={meta.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-sm font-medium bg-white/80 backdrop-blur-md text-gray-800">
                    {p.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-brand-dark">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-4 text-brand-accent font-semibold group-hover:underline flex items-center gap-1">
                    {t.view_case}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}