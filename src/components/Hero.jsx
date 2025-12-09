import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Hero() {
  const { lang } = useLanguage();
  const t = texts.hero[lang];

  return (
    <section className="w-full pt-48 pb-32 bg-brand-grad relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="w-[600px] h-[600px] bg-brand-accent/30 blur-3xl rounded-full absolute -top-40 -right-40"></div>
        <div className="w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full absolute bottom-0 left-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          {t.title}
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
          {t.subtitle}
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a 
            href="#contact"
            className="px-8 py-3 bg-brand-accent hover:bg-blue-500 rounded-xl text-lg shadow-lg transition text-white"
          >
            {t.cta_primary}
          </a>

          <a 
            href="#proyectos"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-lg backdrop-blur-md transition text-white"
          >
            {t.cta_secondary}
          </a>
        </div>

      </div>
    </section>
  );
}
