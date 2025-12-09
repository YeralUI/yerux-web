import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

import {
  FiSmartphone,
  FiLayers,
  FiRefreshCw,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

const icons = {
  FiSmartphone: <FiSmartphone size={50} />,
  FiLayers: <FiLayers size={50} />,
  FiRefreshCw: <FiRefreshCw size={50} />,
  FiSettings: <FiSettings size={50} />,
  FiBarChart2: <FiBarChart2 size={50} />,
};

export default function Services() {
  const { lang } = useLanguage();
  const data = texts.services[lang];

  return (
    <section id="services" className="relative py-36 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900">
          {lang === "es"
            ? "Servicios UX/UI para tu producto"
            : "UX/UI Services for your product"}
        </h2>

        <p className="text-gray-700 text-center mt-4 mb-20 max-w-2xl mx-auto text-lg">
          {lang === "es"
            ? "Diseño moderno, visual y optimizado para aplicaciones y sistemas digitales."
            : "Modern, visual and optimized design for apps and digital systems."}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {data.map((srv, i) => (
            <div
              key={i}
              className="relative p-10 rounded-3xl bg-white shadow-lg hover:shadow-xl border border-white/60 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                {icons[srv.icon]}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {srv.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {srv.desc}
              </p>

              <div className="w-20 h-[3px] bg-blue-500 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
