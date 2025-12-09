import React from "react";

const WhatsAppFloatingButton = () => {
  const number = "50760000000"; // tu número aquí
  const message = encodeURIComponent(
    "Hola, vi tu portafolio y quiero más información sobre tus servicios de UX/UI ✨"
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
};

export default WhatsAppFloatingButton;
