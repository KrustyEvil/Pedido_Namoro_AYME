const fotos = [
  { src: "fotos/foto1.jpg", alt: "Nosso primeiro encontro" }, // Removi a barra inicial
  { src: "fotos/foto2.jpg", alt: "Momento especial" },
  { src: "fotos/foto3.jpg", alt: "Aventura juntos" },
];

function Galeria() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-rose-600">Nossos Melhores Momentos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fotos.map((foto, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img 
              src={foto.src} 
              alt={foto.alt}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy" // Adicionei lazy loading
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">{foto.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;