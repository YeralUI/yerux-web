import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

 return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="text-3xl font-extrabold text-white">
          Yer<span className="text-brand-accent">UX</span>
        </a>

       <nav className="flex items-center gap-8">
        <a href="/" className="hover:opacity-80 transition">
          {texts.navbar[lang].home}
        </a>

        <a href="/#services" className="hover:opacity-80 transition">
          {texts.navbar[lang].services}
        </a>

        <a href="/#proyectos" className="hover:opacity-80 transition">
          {texts.navbar[lang].projects}
        </a>

        <a href="/#contact" className="hover:opacity-80 transition">
          {texts.navbar[lang].contact}
        </a>

        {/* Switch de idioma – sin tocar color base */}
        <button
          onClick={toggleLang}
          className="ml-4 px-3 py-1 border rounded-lg text-sm bg-transparent hover:bg-white/10 transition"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </nav>
      </div>
  </header>
  );
}
