import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star, Award } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Insights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Intro */}
        <div className="text-center space-y-3">
          <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center justify-center gap-1.5">
            <Award size={12} />
            Opinión de los Compradores
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight tracking-tight">
            Nuestros Clientes Confían en Borgo
          </h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-2" />
        </div>

        {/* Testimonial Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-zinc-150 rounded-[40px] p-6 md:p-10 shadow-xl relative">
          
          {/* Left Column: Overlaid Property Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[30px] overflow-hidden bg-zinc-100 group">
            {/* Stars overlay badge */}
            <div className="absolute top-4 left-4 z-20 bg-brand-dark/90 backdrop-blur-md border border-white/10 text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-[11px] font-mono font-bold">{currentTestimonial.rating.toFixed(1)} / 5.0</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={currentTestimonial.image}
                alt="Propiedad Adquirida"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            
            {/* Property Bought Tag */}
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <p className="text-[9px] uppercase tracking-wider font-mono text-brand-accent">Hogar Adquirido</p>
              <p className="text-sm font-serif font-bold mt-0.5">{currentTestimonial.propertyPurchased}</p>
            </div>
          </div>

          {/* Right Column: Review quote text */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8 lg:pl-6">
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Quote size={20} className="fill-current" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="font-serif italic text-lg md:text-2xl text-brand-dark leading-relaxed">
                    "{currentTestimonial.review}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author details card */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-brand-accent/20">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-dark">{currentTestimonial.name}</h4>
                  <p className="text-xs text-zinc-500 font-medium">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Spherule/Company badge logo */}
              <div className="flex items-center gap-2 bg-brand-beige/40 px-3.5 py-1.5 rounded-full border border-zinc-200">
                <span className="text-brand-accent text-xs font-bold">❂</span>
                <span className="font-display font-semibold text-[10px] tracking-wider uppercase text-zinc-600">
                  {currentTestimonial.companyName}
                </span>
              </div>
            </div>

            {/* Arrows navigation footer */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-zinc-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white flex items-center justify-center text-zinc-600 transition-all duration-300"
                title="Reseña Anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-zinc-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white flex items-center justify-center text-zinc-600 transition-all duration-300"
                title="Siguiente Reseña"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
