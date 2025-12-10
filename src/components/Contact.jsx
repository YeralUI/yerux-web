// src/components/Contact.jsx
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Contact() {
  const { lang } = useLanguage();
  const t = texts.contact[lang];

  return (
    <section id="contact" className="py-32 bg-brand-light2">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark">
          {t.title}
        </h2>

        <p className="text-brand-dark/80 text-center max-w-xl mx-auto mt-4 mb-14 text-lg">
          {t.subtitle}
        </p>

        {/* FORM CARD */}
        <form
          action="https://formsubmit.co/yeraldinshaik@gmail.com"
          method="POST"
          className="grid gap-6 max-w-3xl mx-auto bg-brand-dark2 p-8 rounded-2xl shadow-xl border border-brand-dark/20"
        >
          {/* Hidden anti-spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/#contact`}
          />

          {/* NAME */}
          <div>
            <label className="block text-brand-light3 mb-2 font-medium">
              {t.name}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-brand-dark 
                         focus:ring-2 focus:ring-brand-accent outline-none"
              placeholder={t.placeholderName}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-brand-light3 mb-2 font-medium">
              {t.email}
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-brand-dark 
                         focus:ring-2 focus:ring-brand-accent outline-none"
              placeholder={t.placeholderEmail}
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-brand-light3 mb-2 font-medium">
              {t.message}
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-brand-dark 
                         focus:ring-2 focus:ring-brand-accent outline-none resize-none"
              placeholder={t.placeholderMessage}
            ></textarea>
          </div>

          {/* CTA BUTTON */}
          <button
            type="submit"
            className="w-full py-4 bg-brand-accent text-white rounded-xl text-lg font-semibold 
                       hover:bg-blue-700 transition shadow-lg"
          >
            {t.cta}
          </button>

          {/* Mini disclaimer / conversion helper */}
          <p className="text-center text-xs text-brand-light3/80 mt-2">
            {t.disclaimer}
          </p>
        </form>
      </div>
    </section>
  );
}
