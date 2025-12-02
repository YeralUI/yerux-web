import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "/logos/unibank.png",
      name: "Unibank",
      role: "Gerencia de Innovación",
      text: "“El trabajo fue excepcional. Su diseño UX/UI permitió mejorar la claridad operativa y reducir tiempos de procesamiento. Profesionalismo total.”",
    },
    {
      logo: "/logos/coopeve.png",
      name: "Coopeve",
      role: "Transformación Digital",
      text: "“Gracias al rediseño logramos una experiencia más intuitiva para nuestros usuarios y mayor adopción móvil. Excelente visión y ejecución.”",
    },
    {
      logo: "/logos/regeneration.png",
      name: "Regeneration Clinic",
      role: "CEO",
      text: "“Una web moderna, clara y funcional. Ahora transmitimos confianza y profesionalismo. Súper recomendada.”",
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Lo que dicen mis clientes
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-20">
          Colaboraciones con empresas, fintechs, cooperativas y clínicas que confiaron en mi trabajo.
        </p>

        {/* TESTIMONIALS GRID + EDITORIAL STYLE */}
        <div className="grid md:grid-cols-3 gap-14">

          {testimonials.map((t, i) => (
            <div key={i} className="relative">

              {/* Logo */}
              <div className="h-20 flex items-center justify-start mb-6">
                <img 
                  src={t.logo} 
                  alt={t.name} 
                  className="h-full w-auto object-contain opacity-80"
                />
              </div>

              {/* Text - Editorial Serif */}
              <p className="text-lg leading-relaxed text-gray-700 font-serif italic mb-6">
                {t.text}
              </p>

              {/* Divider */}
              <div className="h-[2px] w-12 bg-brand-accent mb-6"></div>

              {/* Name */}
              <h4 className="text-xl font-semibold text-gray-900">
                {t.name}
              </h4>
              <p className="text-gray-500">{t.role}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
