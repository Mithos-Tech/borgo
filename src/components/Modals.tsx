import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart, Calendar, Clock, User, Mail, Phone, Check, Bed, Bath, Maximize, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Property } from "../types";

// ==========================================
// PROPERTY DETAILS MODAL
// ==========================================
interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenScheduler: () => void;
}

export function PropertyDetailsModal({
  property,
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onOpenScheduler,
}: PropertyDetailsModalProps) {
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");

  if (!property) return null;
  const isFav = favorites.includes(property.id);

  const handleBookViewing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formName) return;

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setFormEmail("");
        setFormName("");
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 bottom-4 top-4 md:inset-x-12 md:bottom-12 md:top-12 lg:max-w-4xl lg:mx-auto bg-white rounded-[40px] shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row border border-zinc-100"
          >
            {/* Left Column: Visual Showcase */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full bg-zinc-900 overflow-hidden flex-shrink-0">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

              {/* Action Badge Overlays */}
              <div className="absolute top-6 left-6 z-10 flex gap-2">
                <span className="bg-brand-dark/80 backdrop-blur-md border border-white/15 text-white text-[9px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Exclusivo Borgo
                </span>
              </div>

              {/* Heart floating toggle */}
              <button
                onClick={() => onToggleFavorite(property.id)}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-dark hover:text-red-500 shadow-md transition-colors"
                title="Guardar en favoritos"
              >
                <Heart size={16} className={isFav ? "fill-red-500 text-red-500" : ""} />
              </button>

              {/* Property short summary */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-accent font-bold">
                  {property.location}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-1">
                  {property.title}
                </h3>
                <p className="font-mono text-xl font-bold text-brand-accent mt-2">
                  {property.price}
                </p>
              </div>
            </div>

            {/* Right Column: Spec Info & Viewing Booking Form */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
              
              {/* Header with close button */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-widest block font-bold">
                    Residencia de Lujo
                  </span>
                  <h4 className="font-serif text-xl font-bold text-brand-dark">Detalle de Propiedad</h4>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Specs Icons bar */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-150">
                <div className="flex flex-col items-center text-center space-y-1">
                  <Bed size={16} className="text-brand-accent" />
                  <span className="text-xs font-bold text-brand-dark">{property.beds} Hab</span>
                  <span className="text-[9px] text-zinc-400 font-mono uppercase">Dormitorios</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <Bath size={16} className="text-brand-accent" />
                  <span className="text-xs font-bold text-brand-dark">{property.baths} Baños</span>
                  <span className="text-[9px] text-zinc-400 font-mono uppercase">Completos</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <Maximize size={16} className="text-brand-accent" />
                  <span className="text-xs font-mono font-bold text-brand-dark">{property.size}</span>
                  <span className="text-[9px] text-zinc-400 font-mono uppercase">Superficie</span>
                </div>
              </div>

              {/* Overview text */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold block">Descripción General</span>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {property.description} Esta residencia inteligente cuenta con sistemas de automatización avanzados y climatización ecológica. Ha sido construida bajo rigurosas especificaciones de sostenibilidad con el fin de asegurar una habitabilidad óptima y un confort sublime de por vida.
                </p>
              </div>

              {/* Interactive Micro Lead capture */}
              <div className="pt-4 border-t border-zinc-100">
                {bookingSuccess ? (
                  <div className="bg-emerald-50 text-emerald-700 text-xs p-4 rounded-2xl flex items-start gap-2.5 border border-emerald-200 animate-fade-in">
                    <Check size={16} className="shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-bold">¡Solicitud de Visita Recibida!</p>
                      <p className="text-[11px] mt-0.5 leading-normal">Hemos bloqueado provisionalmente una cita guiada confidencial para ti. Te contactaremos enseguida.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookViewing} className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold block">
                      Solicitar Tour Privado Confidencial
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Tu Nombre"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="bg-zinc-50 border border-zinc-200 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-400"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Tu Correo"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="bg-zinc-50 border border-zinc-200 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-400"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        disabled={isBooking}
                        className="flex-1 bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75"
                      >
                        {isBooking ? (
                          <>
                            <Loader2 size={13} className="animate-spin" />
                            <span>Procesando...</span>
                          </>
                        ) : (
                          <>
                            <Calendar size={13} />
                            <span>Agendar Tour Privado</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenScheduler();
                        }}
                        className="border border-zinc-200 hover:border-brand-dark text-zinc-600 hover:text-brand-dark text-[11px] font-bold uppercase tracking-wider px-3 rounded-xl transition-colors"
                      >
                        Asesoría
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


// ==========================================
// APPOINTMENT SCHEDULER MODAL
// ==========================================
interface AppointmentSchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentSchedulerModal({
  isOpen,
  onClose,
}: AppointmentSchedulerModalProps) {
  const [selectedDate, setSelectedDate] = useState("2026-07-20");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10:00 - 11:30");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: ""
  });

  const dates = [
    { label: "Lunes 20 Jul", value: "2026-07-20" },
    { label: "Martes 21 Jul", value: "2026-07-21" },
    { label: "Miércoles 22 Jul", value: "2026-07-22" },
    { label: "Jueves 23 Jul", value: "2026-07-23" },
    { label: "Viernes 24 Jul", value: "2026-07-24" }
  ];

  const slots = [
    "09:00 - 10:30",
    "10:30 - 12:00",
    "12:00 - 13:30",
    "15:00 - 16:30",
    "16:30 - 18:00"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor rellene los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", phone: "", note: "" });
        onClose();
      }, 4000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl bg-white rounded-[40px] shadow-2xl z-50 overflow-hidden border border-zinc-100 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Calendar size={15} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Agendar Consulta Privada</h3>
                  <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Asesoría Inmobiliaria Exclusiva</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <Check size={32} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-2xl font-bold text-brand-dark">Cita Confirmada</h4>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      Tu reunión confidencial de asesoría con Borgo ha sido programada con éxito para el <span className="font-semibold text-brand-dark">{selectedDate}</span> a las <span className="font-semibold text-brand-dark">{selectedTimeSlot}</span>.
                    </p>
                    <div className="inline-flex items-center gap-1.5 bg-brand-beige/50 border border-brand-accent/20 px-3.5 py-1.5 rounded-xl text-[10px] text-zinc-600 font-mono mt-4">
                      <Sparkles size={11} className="text-brand-accent animate-pulse" />
                      <span>Se ha enviado un correo con la invitación</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-5">
                  
                  {/* Select Date Horizontal Scroller */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold block">
                      1. Selecciona una Fecha
                    </span>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                      {dates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setSelectedDate(d.value)}
                          className={`px-4 py-2.5 rounded-xl text-xs font-semibold shrink-0 transition-all border ${
                            selectedDate === d.value
                              ? "bg-brand-dark text-white border-brand-dark shadow-md"
                              : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time Grid */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold block">
                      2. Selecciona un Horario
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {slots.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedTimeSlot(s)}
                          className={`py-2 rounded-xl text-[11px] font-mono tracking-wide transition-all border flex items-center justify-center gap-1.5 ${
                            selectedTimeSlot === s
                              ? "bg-brand-accent/25 text-brand-dark border-brand-accent font-bold"
                              : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                          }`}
                        >
                          <Clock size={11} />
                          <span>{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Client Info inputs */}
                  <div className="space-y-3.5 pt-2 border-t border-zinc-100">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold block">
                      3. Datos de Contacto Confidenciales
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">Nombre Completo *</label>
                        <div className="relative">
                          <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-50 border border-zinc-200 text-xs pl-9 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">Correo Electrónico *</label>
                        <div className="relative">
                          <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-50 border border-zinc-200 text-xs pl-9 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">Teléfono Móvil *</label>
                        <div className="relative">
                          <Phone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ej: +34 600 000 000"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-50 border border-zinc-200 text-xs pl-9 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Note message */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">Notas Adicionales</label>
                      <textarea
                        name="note"
                        rows={2}
                        placeholder="Indique si prefiere llamada de voz, videollamada de Teams/Zoom, o consulta presencial..."
                        value={formData.note}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50 border border-zinc-200 text-xs px-4 py-2 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Confirmando Cita...</span>
                      </>
                    ) : (
                      <>
                        <Calendar size={13} />
                        <span>Confirmar Consulta de Lujo</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
