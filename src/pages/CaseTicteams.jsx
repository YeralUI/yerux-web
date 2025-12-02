import Navbar from "../components/Navbar";

export default function CaseTicteams() {

  const gallery = [
    "/ticteams/inicio-newtic.png",
    "/ticteams/facturacion-electronica-new.png",
    "/ticteams/odoo-new.png",
    "/ticteams/ZenBook Duo 14.png",
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="w-full h-[380px] overflow-hidden bg-white">
        <img 
          src="/ticteams/cover-ticteams.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 max-w-6xl mx-auto px-6 bg-white">

        {/* TITULO */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Rediseño UX/UI para TicTeams Panamá
        </h1>

        <p className="text-gray-500 text-xl mb-12">
          Transformación visual y funcional del ecosistema digital de servicios 
          tecnológicos de TicTeams, incluyendo su portal principal, páginas de servicios, 
          módulos de facturación electrónica y Odoo ERP.
        </p>

        {/* ====================================================== */}
        {/* CONTEXTO */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">Contexto</h2>
          <p className="text-gray-700 text-lg">
            TicTeams Panamá ofrece soluciones tecnológicas como Odoo ERP, Facturación 
            Electrónica y servicios corporativos. Su página web anterior presentaba 
            inconsistencias visuales, falta de estructura clara y un diseño poco alineado 
            a un estándar profesional tecnológico.
          </p>
          <p className="text-gray-700 text-lg">
            La experiencia del usuario no comunicaba confianza, modernidad ni claridad 
            sobre los servicios ofrecidos.
          </p>
        </section>

        {/* ====================================================== */}
        {/* PROBLEMA */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">Problema</h2>

          <p className="text-gray-700 text-lg">El sitio web anterior presentaba diversos problemas:</p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Diseño desactualizado y poco profesional.</li>
            <li>Estilos mezclados sin identidad visual consistente.</li>
            <li>Información incompleta o desordenada.</li>
            <li>Secciones duplicadas o poco claras.</li>
            <li>Falta de comunicación visual del valor de cada servicio.</li>
          </ul>

          <p className="mt-4 text-gray-700 text-lg">
            El reto fue rediseñar la identidad visual y mejorar la claridad del mensaje, 
            reforzando la confianza de los clientes potenciales.
          </p>
        </section>

        {/* ====================================================== */}
        {/* OBJETIVO DEL NEGOCIO */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20">
          <h2 className="text-3xl font-bold text-gray-900">Objetivo del Negocio</h2>

          <p className="text-gray-700 text-lg">
            Posicionar a TicTeams como una empresa tecnológica moderna y confiable, con 
            un sitio web claro, consistente y atractivo para clientes corporativos.
          </p>

          <p className="text-gray-700 text-lg">
            Además, mejorar el entendimiento de los servicios ofrecidos: Odoo ERP, 
            Facturación Electrónica, servicios cloud y consultoría.
          </p>
        </section>

        {/* ====================================================== */}
        {/* OBJETIVOS UX/UI */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20 ">
          <h2 className="text-3xl font-bold text-gray-900">Objetivos UX/UI</h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Crear una identidad visual limpia y profesional.</li>
            <li>Organizar la estructura del sitio para facilitar la navegación.</li>
            <li>Rediseñar secciones clave para mejorar la comprensión del usuario.</li>
            <li>Presentar los servicios de forma más visual y moderna.</li>
            <li>Aumentar credibilidad mediante una interfaz coherente.</li>
          </ul>
        </section>

        {/* ====================================================== */}
        {/* PROCESO UX/UI */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900">Proceso UX/UI</h2>

          <ul className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Análisis del sitio actual:</strong> evaluación de la estructura previa.
            </li>
            <li>
              <strong>Definición de arquitectura:</strong> reordenación de secciones y jerarquía de contenido.
            </li>
            <li>
              <strong>Wireframes:</strong> creación de propuestas para mejorar navegación y claridad.
            </li>
            <li>
              <strong>UI Design:</strong> desarrollo de nueva identidad visual, iconografía y estructura.
            </li>
            <li>
              <strong>Validación:</strong> revisión final del diseño y coherencia estética.
            </li>
          </ul>
        </section>

        {/* ====================================================== */}
        {/* ANTES Y DESPUÉS */}
        {/* ====================================================== */}
        <section className="mb-20 space-y-10">
          <h2 className="text-3xl font-bold text-gray-900">Antes y Después</h2>

          {/* Inicio */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Página de Inicio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/inicio-tic.png" className="rounded-xl shadow" />
              <img src="/ticteams/inicio-newtic.png" className="rounded-xl shadow" />
            </div>
          </div>

          {/* Facturación */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Facturación Electrónica</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/facturacion-electronica.png" className="rounded-xl shadow" />
              <img src="/ticteams/facturacion-electronica-new.png" className="rounded-xl shadow" />
            </div>
          </div>

          {/* Odoo */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Odoo ERP</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/ticteams/odoo.png" className="rounded-xl shadow" />
              <img src="/ticteams/odoo-new.png" className="rounded-xl shadow" />
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* GALERÍA FINAL */}
        {/* ====================================================== */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vista General del Rediseño</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gallery.map((img, i) => (
              <img key={i} src={img} className="rounded-2xl shadow-md" />
            ))}
          </div>
        </section>

        {/* ====================================================== */}
        {/* RESULTADOS */}
        {/* ====================================================== */}
        <section className="space-y-4 mb-20 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900">Resultados</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Mayor coherencia visual en todo el ecosistema digital.</li>
            <li>Incremento en claridad para entender los servicios.</li>
            <li>Identidad visual más profesional y tecnológica.</li>
            <li>Mejor posicionamiento y confianza para clientes corporativos.</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-20">
          <a
            href="/#contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Quiero un rediseño como este
          </a>
        </div>

      </section>
    </>
  );
}
