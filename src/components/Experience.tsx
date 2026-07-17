import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, HelpCircle, Award, Star, ThumbsUp } from "lucide-react";

interface ExperienceProps {
  portraitImage: string;
}

export default function Experience({ portraitImage }: ExperienceProps) {
  // Overlapping client avatars
  const avatars = [
    "https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_01_w5bpyn.webp",
    "https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_02_pggvrr.webp",
    "https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_03_rsr6cq.webp",
    "https://res.cloudinary.com/chlgeobm/image/upload/v1784149522/avatar_04_galka5.webp",
    "https://res.cloudinary.com/chlgeobm/image/upload/v1784149522/avatar_05_xtsosj.webp",
  ];

  const partners = [
    { name: "Polymoth", logo: "⬡" },
    { name: "Boltshift", logo: "⚡" },
    { name: "Quotient", logo: "❖" },
    { name: "Spherule", logo: "❂" },
  ];

  return (
    <section id="experiencia" className="py-24 px-4 md:px-8 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold">
            Excelencia Garantizada
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tight">
            Experiencia de Excelencia <br className="hidden md:block" /> En Bienes Raíces
          </h2>
          <div className="w-16 h-0.5 bg-brand-accent mx-auto mt-4" />
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Partners */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-brand-dark leading-snug">
                Tu socio de confianza para encontrar el hogar perfecto
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                En <span className="font-semibold text-brand-dark">Borgo Real Estate</span>, creemos que comprar o vender una propiedad exclusiva debe ser una experiencia emocionante, refinada y libre de estrés. Nos encargamos de cada detalle para que disfrutes del viaje.
              </p>
            </div>

            <a
              href="#equipo"
              className="inline-flex items-center gap-2 bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>Sobre Nosotros</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Our Partners */}
            <div className="pt-6 border-t border-zinc-200 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold">
                Nuestros Socios:
              </span>
              <div className="flex flex-wrap items-center gap-6">
                {partners.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-zinc-400 hover:text-brand-dark transition-colors" title={p.name}>
                    <span className="font-serif font-bold text-base text-brand-accent">{p.logo}</span>
                    <span className="font-display text-xs font-semibold uppercase tracking-wider">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait Highlight Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border border-zinc-100 group premium-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={portraitImage}
                alt="Arquitectura exclusiva de Borgo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Key Features & Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-10"
          >
            {/* Feature 1 */}
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300 shrink-0">
                <Award size={18} />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-semibold text-base text-brand-dark group-hover:text-brand-accent transition-colors">
                  Asesoramiento de Expertos
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Nuestros agentes altamente especializados ofrecen asesoramiento profesional personalizado e inteligencia de mercado confidencial para cada cliente.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300 shrink-0">
                <ThumbsUp size={18} />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-semibold text-base text-brand-dark group-hover:text-brand-accent transition-colors">
                  Amplia Selección de Propiedades
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Desde fincas residenciales históricas hasta villas futuristas y penthouses inteligentes, seleccionamos únicamente activos del más alto calibre.
                </p>
              </div>
            </div>

            {/* Review Badge Card */}
            <div className="bg-brand-beige/40 rounded-3xl p-6 border border-brand-accent/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700">Valoraciones de Clientes</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={14} className="fill-current" />
                  <span className="text-xs font-bold text-zinc-800">4.9</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-3 overflow-hidden">
                  {avatars.map((av, index) => (
                    <img
                      key={index}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={av}
                      alt="Avatar de cliente"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="inline-block h-8 w-8 rounded-full bg-brand-dark text-white ring-2 ring-white flex items-center justify-center text-[9px] font-bold">
                    6K+
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xs font-bold text-brand-dark">Respaldo Global</p>
                  <p className="text-[10px] text-zinc-500 leading-tight">Clientes sumamente complacidos alrededor del mundo.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
