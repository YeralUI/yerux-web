import { useLanguage } from "../context/LanguageContext";
import { texts } from "../texts";

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = texts.testimonials[lang];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          {t.title}
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-20">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-14">

          {t.list.map((item, i) => (
            <div key={i}>
              <div className="h-16 mb-2">
                <img src={item.logo} className="h-10 w-auto " />
              </div>

              <p className="text-lg italic text-gray-700 mb-2 font-serif">
                {item.text}
              </p>

              <div className="h-[2px] w-12 bg-brand-accent mb-6"></div>

              <h4 className="text-xl font-semibold">{item.name}</h4>
              <p className="text-gray-500">{item.role}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
