import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function CaseTicteams() {
  const { lang } = useLanguage();
  const t = texts.cases.ticteams[lang];

  const gallery = [
    "/ticteams/inicio-newtic.png",
    "/ticteams/facturacion-electronica-new.png",
    "/ticteams/odoo-new.png",
    "/ticteams/ZenBook Duo 14.png",
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[380px] overflow-hidden bg-white">
        <img
          src="/ticteams/cover-ticteams.png"
          className="w-full h-full object-cover"
          alt="TicTeams cover"
        />
      </div>

      {/* CONTENIDO */}
      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">
        {/* TITULO */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-600 text-xl mb-12">{t.subtitle}</p>

        {/* CONTEXTO */}
        <section className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t.contexto_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.contexto}</p>
        </section>

        {/* PROBLEMA */}
        <section className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t.prob_title}</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700 text-lg">
            {t.problema.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* OBJETIVO DEL NEGOCIO */}
        <section className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t.biz_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.objetivo}</p>
        </section>

        {/* ROL Y ENFOQUE */}
        <section className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t.role_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.role}</p>
        </section>

        {/* OBJETIVOS UX/UI */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.ux_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.ux.map((uxItem, i) => (
              <li key={i}>{uxItem}</li>
            ))}
          </ul>
        </section>

        {/* PROCESO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.process_title}</h2>
          <ol className="list-decimal ml-6 space-y-3 text-gray-700 text-lg">
            {t.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* DECISIONES DE DISEÑO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.decisions_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.decisions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ANTES Y DESPUÉS */}
        <section className="mb-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{t.before_after}</h2>
            <p className="text-gray-700 text-lg mt-3 leading-8">{t.before_after_intro}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {lang === "es" ? "Página de inicio" : "Homepage"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="/ticteams/inicio-tic.png"
                className="rounded-xl shadow"
                alt="Antes página de inicio TicTeams"
              />
              <img
                src="/ticteams/inicio-newtic.png"
                className="rounded-xl shadow"
                alt="Después página de inicio TicTeams"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {lang === "es" ? "Facturación electrónica" : "Electronic Billing"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="/ticteams/facturacion-electronica.png"
                className="rounded-xl shadow"
                alt="Antes facturación electrónica"
              />
              <img
                src="/ticteams/facturacion-electronica-new.png"
                className="rounded-xl shadow"
                alt="Después facturación electrónica"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Odoo ERP</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="/ticteams/odoo.png"
                className="rounded-xl shadow"
                alt="Antes Odoo ERP"
              />
              <img
                src="/ticteams/odoo-new.png"
                className="rounded-xl shadow"
                alt="Después Odoo ERP"
              />
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.gallery_title}</h2>
          <p className="text-gray-700 text-lg mb-6 leading-8">{t.gallery_intro}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-2xl shadow-md"
                alt={`${t.title} screen ${i + 1}`}
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

      
    
      </section>
    </>
  );
}