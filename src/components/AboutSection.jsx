// src/components/AboutSection.jsx
import React from "react";
import { texts } from "../texts";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();           // 👈 USAR lang, NO language
  const currentLang = lang || "es";

  const t = texts.about?.[currentLang];

  if (!t) {
    console.log("❌ No hay textos para ABOUT en idioma:", currentLang, texts.about);
    return null;
  }

  const whatsappNumber = "50760745606";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  return (
    <section
      id="about"
      className="bg-brand-light3 text-brand-dark py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
        {/* Texto */}
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-dark">
            {t.sectionLabel}
          </p>

          <h2 className="text-4xl md:text-4xl font-bold text-brand-dark">
          {t.title}
        </h2>

        <p className="text-brand-dark text-center max-w-2xl mx-auto mt-4 mb-20">
          {t.subtitle}
        </p>
          <p className="text-sm sm:text-base text-brand-dark leading-relaxed">
            {t.p2}
          </p>
          <p className="text-sm sm:text-base text-brand-dark leading-relaxed">
            {t.p3}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-accent hover:bg-blue-500 rounded-xl text-md shadow-lg transition text-white"
            >
              {t.ctaWhatsapp}
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            </a>
          </div>
        </div>

        {/* Bloque lateral */}
        <div className="w-80 bg-brand-light border border-brand-soft rounded-full p-1 space-y-1 shadow-lg mx-auto">
            <img className="rounded-full" src="../../public/5.png" alt="" />
        </div>
      </div>
    </section>
  );
}
