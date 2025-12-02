export default function ModalGaleria({ open, onClose, images = [] }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center py-10 overflow-y-auto">
      
      <button 
        onClick={onClose}
        className="self-end mr-10 text-white text-2xl mb-6"
      >
        ✕ Cerrar
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {images.map((img, i) => (
          <img 
            key={i}
            src={img}
            className="rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
