import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Footer() {
  const { lang } = useLanguage();
  const t = texts.footer[lang];

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="text-3xl font-bold">
            Yer<span className="text-brand-accent">UX</span>
          </h3>
          <p className="text-white/60 mt-4 max-w-sm">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">{t.nav}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition">{texts.navbar[lang].services}</a></li>
              <li><a href="#proyectos" className="text-white/70 hover:text-white transition">{texts.navbar[lang].projects}</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition">{texts.navbar[lang].contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.contact}</h4>
            <ul className="space-y-3 text-white/70">
              <li>Panamá, PA</li>
              
              <a href="https://calendly.com/yeraldinespinosa/reunion-30-min">Agendar una reunión</a>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} YerUX. {t.rights}
      </div>
    </footer>
  );
}
