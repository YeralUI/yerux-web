import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";
import Navbar from "../components/Navbar";

export default function CaseSabores() {
  const { lang } = useLanguage();
  const t = texts.cases.sabores[lang];

 const images = [
    "/sabores/login.png",
    "/sabores/abrir.png",
    "/sabores/home.png",
    "/sabores/pago-yappy.png",
    "/sabores/admin.png",
    "/sabores/productos.png",
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[380px] bg-white overflow-hidden">
        <img
          src="/sabores/cover-sabores.png"
          alt="POS Sabores del Istmo"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">
        <h1 className="text-5xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-xl text-gray-600 mt-2 mb-14">{t.subtitle}</p>

        {/* CONTEXTO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.ctx_title}</h2>
          <p className="text-lg text-gray-700 leading-8">{t.contexto}</p>
        </section>

        {/* PROBLEMA */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.prob_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.problema.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* OBJETIVO DEL NEGOCIO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.biz_title}</h2>
          <p className="text-lg text-gray-700 leading-8">{t.objetivo}</p>
        </section>

        {/* ROL */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.role_title}</h2>
          <p className="text-lg text-gray-700 leading-8">{t.role}</p>
        </section>

        {/* PROCESO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.process_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.process.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* DECISIONES DE DISEÑO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.decisions_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.decisions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* OBJETIVOS UX/UI */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.ux_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.ux.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* GALERÍA */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.gallery_title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-8">{t.gallery_intro}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${t.title} screen ${i + 1}`}
                className="rounded-2xl shadow-md"
              />
            ))}
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.results_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        {/* CIERRE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.closing_title}</h2>
          <p className="text-lg text-gray-700 leading-8">{t.closing}</p>
        </section>

    
      </section>
    </>
  );
}