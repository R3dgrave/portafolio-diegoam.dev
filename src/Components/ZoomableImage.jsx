import React, { useState, useRef } from "react";

const ZoomableImage = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isZoomed || !imageContainerRef.current) return;

    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const backgroundSize = 250; // Nivel de zoom
    const backgroundPositionX = (mouseX / width) * 100;
    const backgroundPositionY = (mouseY / height) * 100;

    setMousePosition({
      x: backgroundPositionX,
      y: backgroundPositionY
    });
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Contenedor principal para el zoom */}
      <div
        className={`relative overflow-hidden cursor-crosshair ${className}`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
        ref={imageContainerRef}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-transform duration-300"
        />
        {isZoomed && (
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: '200%',
              backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
              transition: 'background-position 0.1s linear',
            }}
          />
        )}
      </div>

      {/* Modal de pantalla completa */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" 
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            <img src={src} alt={alt} className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-xl" />
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white text-4xl font-bold leading-none"
              aria-label="Cerrar"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomableImage;