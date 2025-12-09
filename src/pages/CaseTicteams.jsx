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
          alt="Ticteams Cover"
        />
      </div>

      {/* CONTENIDO */}
      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">

        {/* TITULO */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-600 text-xl mb-12">{t.subtitle}</p>

        {/* CONTEXTO */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.contexto_title}
          </h2>
          <p className="text-gray-700 text-lg">{t.contexto}</p>
        </section>

        {/* PROBLEMA */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">{t.prob_title}</h2>

          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700 text-lg">
            {t.problema.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* OBJETIVO DEL NEGOCIO */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">{t.biz_title}</h2>
          <p className="text-gray-700 text-lg">{t.objetivo}</p>
        </section>

        {/* OBJETIVOS UX/UI */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.ux_title}</h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.ux.map((uxItem, i) => (
              <li key={i}>{uxItem}</li>
            ))}
          </ul>
        </section>

        {/* PROCESO UX/UI */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.process_title}
          </h2>

          <ol className="list-decimal ml-6 space-y-3 text-gray-700 text-lg">
            {t.steps.map((step, i) => (
              <li key={i}>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        {/* ANTES Y DESPUES */}
        <section className="mb-20 space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">{t.before_after}</h2>

          {/* Inicio */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {lang === "es" ? "Página de Inicio" : "Homepage"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/inicio-tic.png" className="rounded-xl shadow" />
              <img src="/ticteams/inicio-newtic.png" className="rounded-xl shadow" />
            </div>
          </div>

          {/* Facturación */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {lang === "es" ? "Facturación Electrónica" : "Electronic Billing"}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/facturacion-electronica.png" className="rounded-xl shadow" />
              <img src="/ticteams/facturacion-electronica-new.png" className="rounded-xl shadow" />
            </div>
          </div>

          {/* Odoo */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Odoo ERP
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/odoo.png" className="rounded-xl shadow" />
              <img src="/ticteams/odoo-new.png" className="rounded-xl shadow" />
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.gallery_title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gallery.map((img, i) => (
              <img key={i} src={img} className="rounded-2xl shadow-md" />
            ))}
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {t.results_title}
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <a
          href="/#contact"
          className="px-8 py-4 bg-brand-accent text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition inline-block"
        >
          {t.cta}
        </a>
      </section>
    </>
  );
}
