import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Bed, Bath, Maximize, Heart, ArrowUpRight, Grid, LayoutList } from "lucide-react";
import { Property } from "../types";
import { gridProperties } from "../data/properties";

interface PropertiesGridProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (property: Property) => void;
}

export default function PropertiesGrid({
  favorites,
  onToggleFavorite,
  onOpenDetails,
}: PropertiesGridProps) {
  const [showAll, setShowAll] = useState(false);

  // Determine which properties to render
  const visibleProperties = showAll ? gridProperties : gridProperties.slice(0, 4);

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };

  return (
    <section id="catalogo-grid" className="py-24 px-4 md:px-8 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title and Intro */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center justify-center gap-2">
            <Grid size={12} />
            Catálogo Exclusivo
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tight">
            Descubre Propiedades de Borgo
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Residencias seleccionadas a mano donde el lujo supremo, el diseño de vanguardia y el máximo confort se unen de manera indivisible.
          </p>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-2" />
        </div>

        {/* Properties Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {visibleProperties.map((prop) => {
            const isFav = favorites.includes(prop.id);
            return (
              <motion.div
                key={prop.id}
                variants={itemVariants}
                className="group bg-[#fbfbfa] rounded-[30px] border border-zinc-200 overflow-hidden hover:border-brand-accent/45 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-350 flex flex-col justify-between"
              >
                {/* Photo & Favorite overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  {/* Heart button */}
                  <button
                    onClick={() => onToggleFavorite(prop.id)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-brand-dark shadow-md hover:text-red-500 transition-colors"
                    title={isFav ? "Quitar de favoritos" : "Guardar como favorito"}
                  >
                    <Heart
                      size={14}
                      className={`${isFav ? "fill-red-500 text-red-500 scale-110" : "text-zinc-600"} transition-all`}
                    />
                  </button>

                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info and stats */}
                <div className="p-6 md:p-8 space-y-4">
                  {/* Title and Location */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                        {prop.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <MapPin size={12} className="text-zinc-400 shrink-0" />
                        <span className="text-[11px] font-medium tracking-wide">{prop.location}</span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-right">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">Precio</span>
                      <span className="font-mono text-lg font-bold text-brand-dark">{prop.price}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                    {prop.description}
                  </p>

                  {/* Icon details line */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-zinc-150/70 text-zinc-600">
                    <div className="flex items-center gap-1.5">
                      <Bed size={13} className="text-brand-accent" />
                      <span className="text-[11px] font-medium">{prop.beds} Dorms</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={13} className="text-brand-accent" />
                      <span className="text-[11px] font-medium">{prop.baths} Baños</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize size={13} className="text-brand-accent" />
                      <span className="text-[11px] font-mono font-medium">{prop.size}</span>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-2 flex justify-between items-center">
                    <button
                      onClick={() => onOpenDetails(prop)}
                      className="text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-accent transition-colors flex items-center gap-1.5"
                    >
                      <span>Ver Detalles</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Centered Trigger Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            {showAll ? (
              <>
                <LayoutList size={14} />
                <span>Ver Menos Propiedades</span>
              </>
            ) : (
              <>
                <Grid size={14} />
                <span>Ver Todas las Propiedades</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
