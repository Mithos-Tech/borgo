import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, Heart, ArrowRight } from "lucide-react";
import { Property } from "../types";
import { carouselProperties } from "../data/properties";

interface PropertiesCarouselProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (property: Property) => void;
}

export default function PropertiesCarousel({
  favorites,
  onToggleFavorite,
  onOpenDetails,
}: PropertiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselProperties.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselProperties.length) % carouselProperties.length);
  };

  const currentProperty = carouselProperties[currentIndex];

  return (
    <section id="catalogo" className="py-24 px-4 md:px-8 bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Carousel Header split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div className="space-y-3">
            <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold">
              Selección de Autor
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tight">
              Encuentra la Casa <br /> de tus Sueños Hoy
            </h2>
          </div>
          <div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-md md:ml-auto">
              Explora nuestra selecta e innovadora colección de propiedades ubicadas en los destinos residenciales más codiciados del planeta. Ofrecemos diseños a medida integrados con automatización de punta.
            </p>
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-150 rounded-[40px] p-6 md:p-8 shadow-xl"
            >
              {/* Left Column: Image with Hover Actions */}
              <div className="lg:col-span-7 relative group rounded-[30px] overflow-hidden aspect-[16/10] bg-zinc-100">
                {/* Available Badge */}
                {currentProperty.tag && (
                  <div className="absolute top-4 left-4 z-20 bg-brand-dark/80 backdrop-blur-md border border-white/15 text-white text-[9px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                    {currentProperty.tag}
                  </div>
                )}

                {/* Heart/Favorite Toggle */}
                <button
                  onClick={() => onToggleFavorite(currentProperty.id)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-brand-dark shadow-md hover:text-red-500 transition-colors group"
                  title="Guardar como favorito"
                >
                  <Heart
                    size={16}
                    className={`${
                      favorites.includes(currentProperty.id)
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-zinc-600 group-hover:scale-110"
                    } transition-transform duration-300`}
                  />
                </button>

                {/* Property Main Image */}
                <img
                  src={currentProperty.image}
                  alt={currentProperty.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Column: Information details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-4">
                
                {/* Location & Title */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold">
                    {currentProperty.location}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-dark font-bold hover:text-brand-accent transition-colors">
                    {currentProperty.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-brand-accent mt-2" />
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {currentProperty.description}
                </p>

                {/* Grid features (beds, baths, size) */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-100">
                  <div className="flex items-center gap-2 text-zinc-600">
                    <Bed size={15} className="text-brand-accent" />
                    <span className="text-xs font-medium">{currentProperty.beds} Dorms</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600">
                    <Bath size={15} className="text-brand-accent" />
                    <span className="text-xs font-medium">{currentProperty.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600">
                    <Maximize size={15} className="text-brand-accent" />
                    <span className="text-xs font-mono font-medium">{currentProperty.size}</span>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold">Valoración</span>
                    <p className="font-mono text-2xl font-bold text-brand-dark">{currentProperty.price}</p>
                  </div>

                  <button
                    onClick={() => onOpenDetails(currentProperty)}
                    className="flex items-center gap-2 bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Ver Detalle</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows and Dots */}
          <div className="flex items-center justify-between mt-8">
            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {carouselProperties.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-brand-accent" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  title={`Ver diapositiva ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-zinc-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white flex items-center justify-center text-zinc-600 transition-all duration-300"
                title="Propiedad Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-zinc-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white flex items-center justify-center text-zinc-600 transition-all duration-300"
                title="Siguiente Propiedad"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
