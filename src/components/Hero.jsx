// src/components/Hero.jsx
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";
import { useState, useEffect } from "react";

export default function Hero() {
  const { lang } = useLanguage();
  const t = texts.hero[lang];

  // Lista de imágenes que deben rotar
  const images = [
    "../../hero/preview-1.png",
    "../../hero/preview-2.png",
    "../../hero/preview-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ROTACIÓN AUTOMÁTICA CADA 4 SEGUNDOS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-40 pb-32 bg-brand-grad overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-accent/25 blur-3xl rounded-full absolute -top-40 -right-40"></div>
        <div className="w-[450px] h-[450px] bg-blue-400/20 blur-3xl rounded-full absolute bottom-0 left-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT SECTION */}
        <div className="text-center md:text-left">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm tracking-wide backdrop-blur-lg shadow-md border border-white/20">
            UX/UI Designer • Web & App
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t.title}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="#contact"
              className="px-10 py-4 bg-brand-accent hover:bg-blue-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {t.cta_primary}
            </a>

            <a
              href="#proyectos"
              className="px-10 py-4 bg-white/10 border border-white/30 text-white text-lg font-semibold rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              {t.cta_secondary}
            </a>
          </div>
        </div>

        {/* RIGHT — AUTO ROTATING PREVIEW */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[360px] md:w-[420px] lg:w-[460px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-5 relative overflow-hidden">

            {/* Browser Top Bar */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            {/* ROTATING IMAGE */}
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt="UI Preview"
              className="
                rounded-xl shadow-xl border border-white/10
                fade-transition
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
