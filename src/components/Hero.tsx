import React from "react";
import { motion } from "motion/react";

interface HeroProps {
  heroImage: string; // Kept for prop compatibility
}

export default function Hero({ heroImage }: HeroProps) {
  return (
    <section className="w-full bg-white px-4 pt-4 pb-0 md:px-8 md:pt-6">
      <div
        id="inicio"
        className="relative w-full h-[98vh] md:h-[112vh] min-h-[720px] md:min-h-[960px] rounded-[16px] md:rounded-[48px] overflow-hidden bg-zinc-950 flex flex-col justify-between shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] select-none"
      >
        {/* ========================================================
            LAYER 1 (BOTTOM): BACKGROUND LANDSCAPE IMAGES
            ======================================================== */}
        {/* Desktop Background */}
        <img
          src="https://res.cloudinary.com/chlgeobm/image/upload/v1784135140/bk_desktop_y4iq5r.webp"
          alt="Fondo de Lujo Borgo"
          className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          referrerPolicy="no-referrer"
        />
        {/* Responsive Background */}
        <img
          src="https://res.cloudinary.com/chlgeobm/image/upload/v1784135140/bk_responsive_bi4t9l.webp"
          alt="Fondo de Lujo Borgo"
          className="block md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Overlay to match shadow and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none z-[1]" />

        {/* ========================================================
            LAYER 2 (MIDDLE): PRESENTATION BRANDING TEXT
            ======================================================== */}
        <div className="absolute inset-x-0 top-[29%] xs:top-[27%] sm:top-[23%] md:top-[14%] lg:top-[11%] xl:top-[9%] flex justify-center pointer-events-none z-10 select-none text-center px-4">
          <h1 className="font-serif text-[17vw] xs:text-[16vw] sm:text-[14vw] md:text-[11vw] font-bold leading-none tracking-[0.18em] text-white/95 uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] pl-[0.18em]">
            BORGO
          </h1>
        </div>

        {/* ========================================================
            LAYER 3 (TOP): FOREGROUND CUTOUT PNG (OVERLAPS THE MIDDLE TEXT)
            ======================================================== */}
        {/* Desktop Foreground Cutout */}
        <img
          src="https://res.cloudinary.com/chlgeobm/image/upload/v1784135140/bk_desktop_superior_v1f54l.webp"
          alt="Estructura de Lujo Borgo"
          className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-20"
          referrerPolicy="no-referrer"
        />
        {/* Responsive Foreground Cutout */}
        <img
          src="https://res.cloudinary.com/chlgeobm/image/upload/v1784135140/bk_responsive_superior_hgghfn.webp"
          alt="Estructura de Lujo Borgo"
          className="block md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-20"
          referrerPolicy="no-referrer"
        />

        {/* ========================================================
            LAYER 4 (FOREGROUND): TEXT CONTENT & FLOATING WIDGETS (ON TOP OF CUTOUT)
            ======================================================== */}
        {/* Bottom Left Branding Text Info */}
        <div className="absolute bottom-24 left-6 md:bottom-28 md:left-12 z-30 max-w-xs sm:max-w-sm md:max-w-md text-left">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-zinc-300 block mb-2 drop-shadow-md">
            DESDE 2026
          </span>
          <h2 className="font-sans text-sm xs:text-base sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-[1.15] text-white tracking-wide uppercase drop-shadow-lg">
            REDEFINE TU VIDA <br />
            CON DOMÓTICA DE <br />
            ULTRA LUJO
          </h2>
          <p className="text-[9px] md:text-[11px] text-zinc-300 mt-3 font-light max-w-xs leading-relaxed drop-shadow-md">
            Creamos simplicidad, seguridad y confort absoluto a través de la innovación inteligente.
          </p>
        </div>

        {/* Top Right Tag Info */}
        <div className="absolute top-24 right-6 md:top-32 md:right-12 z-30 text-right select-none hidden sm:block">
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-200 leading-relaxed drop-shadow-md">
            Adéntrate en el <br />
            futuro del <br />
            buen vivir
          </p>
        </div>

        {/* Bottom Right Overlay Info */}
        <div className="absolute bottom-24 right-6 md:bottom-28 md:right-12 z-30 text-right hidden sm:block">
          <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Bienvenido a la residencia del mañana
          </span>
        </div>

        {/* Floating Glassmorphic Stats Widget 1: 5.9K+ (Sophisticated Staggered Position) */}
        <div className="hidden md:block absolute right-24 lg:right-32 top-[34%] z-30 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-5 rounded-[20px] max-w-[210px] shadow-[0_24px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] text-left hover:scale-[1.02] hover:bg-white/[0.05] transition-all duration-300">
          <h4 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-none">5.9K+</h4>
          <p className="text-[9px] md:text-[11px] text-zinc-300 mt-2 font-light leading-normal">
            Hogares inteligentes integrados con éxito a nivel global.
          </p>
        </div>

        {/* Floating Glassmorphic Stats Widget 2: 10K+ (Sophisticated Staggered Position) */}
        <div className="hidden md:block absolute right-12 lg:right-16 top-[54%] z-30 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-5 rounded-[20px] max-w-[210px] shadow-[0_24px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] text-left hover:scale-[1.02] hover:bg-white/[0.05] transition-all duration-300">
          <h4 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-none">10K+</h4>
          <p className="text-[9px] md:text-[11px] text-zinc-300 mt-2 font-light leading-normal">
            Sistemas inteligentes activos y seguros las 24 horas.
          </p>
        </div>

        {/* Center Action CTA Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <motion.a
            href="#experiencia"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-white text-zinc-950 hover:bg-[#d4b26f] px-6 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl"
          >
            <span>DESCUBRE MÁS</span>
            <span className="w-6.5 h-6.5 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-current" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
