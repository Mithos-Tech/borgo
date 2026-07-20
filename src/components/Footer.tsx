import React from "react";
import { Linkedin, Instagram, Twitter, Heart, Shield, Landmark } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12 z-10 relative">
        
        {/* Top footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <img 
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1784506413/logo_m8vu0c.svg" 
                alt="Borgo Logo" 
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold tracking-wider">
                Borgo
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              La inmobiliaria premium que redefiniendo el estándar de habitabilidad. Fusionamos la arquitectura contemporánea de autor con integraciones de hogar inteligente para forjar experiencias residenciales sublimes.
            </p>
            
            <div className="flex gap-4 text-zinc-500">
              <a href="#" className="hover:text-brand-accent transition-colors" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors" title="Twitter/X">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navegación */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-wider text-brand-accent font-bold">Navegación</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Catalogo</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testmonio</a></li>
              <li><a href="#preguntas" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Propiedades */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-wider text-brand-accent font-bold">Residencias</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Casa Familiar</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Villa Costera</a></li>
              <li><a href="#catalogo-grid" className="hover:text-white transition-colors">Penthouse Urbano</a></li>
              <li><a href="#catalogo-grid" className="hover:text-white transition-colors">Fincas Históricas</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Colección Off-Market</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Respaldo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-wider text-brand-accent font-bold">Legal & Respaldo</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acuerdos de Confidencialidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Condiciones Generales de Contrato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cumplimiento Normativo (AML)</a></li>
            </ul>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[9px] text-zinc-400 font-mono uppercase">
                <Shield size={12} className="text-brand-accent" />
                <span>Transacciones 100% Seguras</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-500 gap-4">
          <p className="tracking-wide">
            © 2026 Borgo by <span className="text-[#d4b26f] font-medium hover:text-white transition-colors duration-300">Inspyrio Studio</span>. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}