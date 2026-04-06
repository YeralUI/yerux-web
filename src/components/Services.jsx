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

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          {lang === "es"
            ? "Cómo trabajo"
            : "Approach"}
        </h2>

        <p className="text-gray-700 text-center mt-4 mb-10 max-w-2xl mx-auto text-lg">
          {lang === "es"
            ? "Diseño moderno, visual y optimizado para aplicaciones y sistemas digitales."
            : "Modern, visual and optimized design for apps and digital systems."}
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
          {data.map((srv, i) => (
            <div
              key={i}
              className="relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl border border-white/60 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {icons[srv.icon]}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {srv.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {srv.desc}
              </p>

              <div className="w-10 h-[3px] bg-blue-500 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
