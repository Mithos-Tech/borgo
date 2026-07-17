import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Phone, Menu, X, Linkedin, Instagram, Twitter, Trash2, Calendar } from "lucide-react";
import { Property } from "../types";
import { carouselProperties, gridProperties } from "../data/properties";

interface HeaderProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (property: Property) => void;
  onOpenScheduler: () => void;
}

export default function Header({
  favorites,
  onToggleFavorite,
  onOpenDetails,
  onOpenScheduler,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavPanelOpen, setIsFavPanelOpen] = useState(false);

  // Monitor scroll to make header background solid or translucent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combine properties to find favorited items
  const allProperties = [...carouselProperties, ...gridProperties];
  const favoritedProperties = allProperties.filter((p) => favorites.includes(p.id));

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Catalogo", href: "#catalogo" },
    { label: "Testmonio", href: "#testimonios" },
    { label: "FAQs", href: "#preguntas" },
  ];

  return (
    <>
      {/* Topmost floating header wrapper */}
      <header
        id="navbar-header"
        className={`fixed ${isScrolled ? "opacity-0 pointer-events-none -translate-y-8" : "opacity-100 translate-y-0"} top-6 md:top-8 left-0 right-0 z-50 transition-all duration-500 px-9 sm:px-12 md:px-16 lg:px-8 bg-transparent py-4`}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <img 
              src="https://res.cloudinary.com/chlgeobm/image/upload/v1784142865/borgo_logo_vh3fit.svg" 
              alt="Borgo Logo" 
              className="w-8 h-8 object-contain transition-transform group-hover:scale-110 duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white transition-colors group-hover:text-[#d4b26f]">
              Borgo
            </span>
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, idx) => {
              const isActive = idx === 0; // Highlight first as "Home" equivalent
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-md hover:bg-zinc-100"
                      : "bg-black/30 backdrop-blur-sm border border-white/15 text-zinc-200 hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Area Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Contacto Highlighted Button */}
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-[#d4b26f] text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(212,178,111,0.25)] border border-[#d4b26f] hover:border-white"
            >
              <span>Contacto</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu (Framer-style sophisticated floating card) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-4 right-4 z-50 bg-black/95 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] lg:hidden max-w-md mx-auto"
          >
            {/* Absolute Close Button in the top right corner */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all duration-300"
              aria-label="Cerrar menú"
            >
              <X size={14} />
            </button>

            {/* Logo, Brand Stacked in the center */}
            <div className="flex flex-col items-center text-center pt-2">
              {/* Logo icon */}
              <img 
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1784142865/borgo_logo_vh3fit.svg" 
                alt="Borgo Logo" 
                className="w-10 h-10 object-contain mb-2 select-none"
                referrerPolicy="no-referrer"
              />

              {/* Brand Name */}
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                Borgo
              </span>
            </div>

            {/* Navigation buttons stacked vertically in the center */}
            <div className="mt-5 border-t border-white/10 pt-4 flex flex-col items-center gap-2">
              <nav className="flex flex-col items-center gap-2 w-full">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-[12px] font-light tracking-[0.14em] uppercase text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Highlighted Contact Button */}
              <div className="w-full mt-4 border-t border-white/10 pt-4">
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#d4b26f] text-black py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-[0_4px_15px_rgba(212,178,111,0.2)]"
                >
                  Contacto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Favorites Drawer Panel */}
      <AnimatePresence>
        {isFavPanelOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFavPanelOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-brand-dark text-white z-50 shadow-2xl flex flex-col h-full border-l border-white/10"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="text-brand-accent fill-brand-accent" size={20} />
                  <h3 className="font-serif text-xl font-bold">Mis Favoritos</h3>
                  <span className="bg-white/15 px-2.5 py-0.5 rounded-full text-xs font-sans font-bold">
                    {favoritedProperties.length}
                  </span>
                </div>
                <button
                  onClick={() => setIsFavPanelOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {favoritedProperties.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 text-zinc-400">
                    <Heart size={48} className="text-zinc-600 stroke-1" />
                    <div>
                      <p className="font-medium text-white">Tu lista de favoritos está vacía</p>
                      <p className="text-xs max-w-xs mt-1">
                        Explora nuestras propiedades y presiona el ícono del corazón para guardarlas aquí.
                      </p>
                    </div>
                  </div>
                ) : (
                  favoritedProperties.map((prop) => (
                    <div
                      key={prop.id}
                      className="bg-brand-gray/50 rounded-xl p-3 border border-white/5 flex gap-4 hover:border-brand-accent/35 transition-all group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif font-medium text-sm truncate text-white group-hover:text-brand-accent transition-colors">
                            {prop.title}
                          </h4>
                          <p className="text-xs text-zinc-400 truncate">{prop.location}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-mono text-brand-accent text-sm font-semibold">
                            {prop.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setIsFavPanelOpen(false);
                                onOpenDetails(prop);
                              }}
                              className="text-[10px] bg-white/10 hover:bg-brand-accent hover:text-brand-dark text-white px-2.5 py-1 rounded-full font-medium transition-colors"
                            >
                              Ver
                            </button>
                            <button
                              onClick={() => onToggleFavorite(prop.id)}
                              className="p-1.5 rounded-full bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors"
                              title="Eliminar de favoritos"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {favoritedProperties.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-brand-gray/30 space-y-4">
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>Total Seleccionadas:</span>
                    <span className="text-white font-semibold">{favoritedProperties.length} propiedades</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsFavPanelOpen(false);
                      onOpenScheduler();
                    }}
                    className="w-full bg-brand-accent text-brand-dark py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    Agendar Visitas Privadas
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
