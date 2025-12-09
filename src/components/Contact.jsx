import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Contact() {
  const { lang } = useLanguage();
  const t = texts.contact[lang];

  return (
    <section id="contact" className="py-32 bg-brand-light2">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          {t.title}
        </h2>

        <p className="text-gray-600 text-center max-w-xl mx-auto mt-4 mb-14">
          {t.subtitle}
        </p>

        {/* FORMULARIO */}
        <form 
          action="https://formsubmit.co/yeraldinshaik@gmail.com"
          method="POST"
          className="grid gap-6 max-w-3xl mx-auto bg-brand-dark2 p-8 rounded-2xl shadow-lg "
        >
          {/* Evitar SPAM */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`${window.location.origin}/#contact`} />

          <div>
            <label className="block text-white mb-2">{t.name}</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <div>
            <label className="block text-white mb-2">{t.email}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <div>
            <label className="block text-white mb-2">{t.message}</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border text-gray-700 border-gray-300 focus:ring-2 focus:ring-brand-accent text-brand-dark2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand-accent text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            {t.cta}
          </button>
        </form>

      </div>
    </section>
  );
}
