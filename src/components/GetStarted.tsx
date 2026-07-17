import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Shield, Calendar, Sparkles } from "lucide-react";

interface GetStartedProps {
  nightImage: string;
  onOpenScheduler: () => void;
}

export default function GetStarted({ nightImage, onOpenScheduler }: GetStartedProps) {
  const benefits = [
    "Asesoramiento financiero de banca privada integral.",
    "Acceso prioritario a listados exclusivos Off-Market.",
    "Personalización total de domótica inteligente previa a la entrega.",
    "Soporte post-venta premium para traslados y mudanza."
  ];

  return (
    <section id="empezar" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-[40px] overflow-hidden bg-brand-dark border border-white/5 shadow-2xl">
          
          {/* Left Block: Image Cover with Starry Pool reflection */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[550px] group bg-zinc-900">
            {/* Soft decorative night fog */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-brand-dark/80 lg:to-transparent z-10 pointer-events-none" />
            <img
              src={nightImage}
              alt="Villa nocturna inteligente Borgo"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Visual overlay with tagline */}
            <div className="absolute bottom-6 left-6 z-20 text-white max-w-sm hidden sm:block">
              <span className="text-[9px] uppercase font-mono tracking-widest text-brand-accent font-bold flex items-center gap-1.5 mb-1">
                <Sparkles size={11} className="animate-pulse" />
                Vivienda Sensorial
              </span>
              <p className="font-serif text-xl font-bold leading-tight">
                "La luz, el sonido y el confort se rigen bajo tu mandato absoluto."
              </p>
            </div>
          </div>

          {/* Right Block: Pitch & Interactive CTA Button */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between space-y-8 relative">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
            
            {/* Top header copy */}
            <div className="space-y-4">
              <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center gap-1.5">
                <Shield size={12} />
                Inversión de Por Vida
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight">
                Comienza tu viaje hacia un nuevo hogar con Borgo
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                Agenda hoy mismo una consultoría privada de bienes raíces con uno de nuestros directores senior. Descubre cómo elevar tu experiencia de vida de manera definitiva.
              </p>
            </div>

            {/* List benefits check */}
            <div className="space-y-3 pt-2">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 leading-tight">{b}</span>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenScheduler}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <span>Agendar Cita de Consulta</span>
                <span className="w-5 h-5 rounded-full bg-brand-dark text-white flex items-center justify-center">
                  <Calendar size={11} />
                </span>
              </button>

              <a
                href="tel:+349199492066"
                className="text-xs font-mono font-semibold tracking-wider text-zinc-300 hover:text-brand-accent transition-colors py-2"
              >
                O LLAMAR: +34 919 949 2066
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
