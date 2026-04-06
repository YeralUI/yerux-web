import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function CaseMonix() {
  const { lang } = useLanguage();
const t = texts?.cases?.monix?.[lang];


if (!t) {
  return <div className="p-10">Monix no está cargado en texts.cases</div>;
}

  const flowScreens = [
    {
      title: lang === "es" ? "Inicio de sesión" : "Login",
      src: "/monixlogin.png",
    },
    {
      title: lang === "es" ? "Dashboard principal" : "Main dashboard",
      src: "/monix-dashboard.png",
    },
    {
      title: lang === "es" ? "Acción rápida" : "Quick action",
      src: "/monix-quick-action.png",
    },
    
    {
      title: lang === "es" ? "Registro de gasto" : "Expense form",
      src: "/monix-expense-form.png",
    },
    {
      title: lang === "es" ? "Escaneo de recibo" : "Receipt scan",
      src: "/Captura de factura.png",
    },
    {
      title: lang === "es" ? "Recibo detectado" : "Receipt detected",
      src: "/monix-receipt-detected.png",
    },
    {
      title: lang === "es" ? "Formulario autocompletado" : "Autofilled form",
      src: "/monix-autofilled-form.png",
    },
    

    {
      title: lang === "es" ? "Dashboard actualizado" : "Updated dashboard",
      src: "/monix-dashboard-updated.png.png",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="w-full h-[380px] overflow-hidden bg-white">
        <img
          src="/splash screen.png"
          className="w-full h-full object-cover"
          alt="Monix case study cover"
        />
      </div>

      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-600 text-xl mb-12">{t.subtitle}</p>

        <section className="space-y-4 mb-16">
          <h2 className="text-2xl font-bold text-gray-900">{t.context_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.context}</p>
        </section>


        <section className="space-y-4 mb-16">
          <h2 className="text-2xl font-bold text-gray-900">{t.product_goal_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.product_goal}</p>
        </section>

        <section className="space-y-4 mb-16">
          <h2 className="text-2xl font-bold text-gray-900">{t.role_title}</h2>
          <p className="text-gray-700 text-lg leading-8">{t.role}</p>
        </section>


        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.decisions_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.decisions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.flow_title}</h2>
          <p className="text-gray-700 text-lg mb-8 leading-8">{t.flow_intro}</p>

          <div className="grid md:grid-cols-3 gap-10">
            {flowScreens.map((screen, i) => (
              <div key={i} className="space-y-3">
                <div className="" >
                    <p className="text-base font-semibold text-gray-700 pb-2">{screen.title}</p>
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="w-80 rounded-2xl object-contain bg-white border border-gray-300 shadow-lg "
                  />
                </div>

              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.results_title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {t.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        
      </section>
    </>
  );
}