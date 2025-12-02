export default function Contact() {
  return (
    <section id="contact" className="py-36 bg-brand-light">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Hablemos de tu proyecto
        </h2>
        <p className="text-gray-600 text-center mt-4 mb-16 max-w-2xl mx-auto">
          Si buscas un diseño profesional para tu app, dashboard o plataforma digital, 
          completa el formulario y te responderé con una propuesta personalizada.
        </p>

        {/* FORM */}
        <div className="bg-gray-50 p-10 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200">
          <form className="grid gap-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Nombre"
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <input 
                type="email" 
                placeholder="Correo"
                className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            <input 
              type="text" 
              placeholder="Empresa o marca (opcional)"
              className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />

            <textarea 
              rows="5"
              placeholder="Cuéntame sobre tu proyecto"
              className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            ></textarea>

            <button
              className="
                w-full p-4 bg-blue-600 text-white 
                text-lg font-semibold rounded-xl 
                hover:bg-blue-700 transition shadow-lg
              "
            >
              Enviar mensaje
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
