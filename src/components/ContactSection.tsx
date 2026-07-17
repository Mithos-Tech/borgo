import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Sparkles, MapPin, Phone, HelpCircle, Check, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "$1,000,000 - $2,500,000",
    propertyType: "Villa de Lujo",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor completa los campos requeridos (Nombre, Correo y Teléfono)");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate real API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "$1,000,000 - $2,500,000",
        propertyType: "Villa de Lujo",
        message: ""
      });
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    // Simulate newsletter subscription
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <section id="contacto" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Intro */}
        <div className="text-center space-y-3">
          <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center justify-center gap-1.5">
            <Mail size={12} />
            Canales de Comunicación
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tight">
            Conéctate Con Nosotros
          </h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-2" />
        </div>

        {/* Form and info row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Newsletter Subscription */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-brand-dark">
                ¿Listo para encontrar tu próxima propiedad excepcional?
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                Envíanos tus especificaciones de inversión o agenda una cita presencial en nuestras oficinas centrales de Madrid o Beverly Hills. Estaremos encantados de asistirte con absoluta discreción.
              </p>
            </div>

            {/* Quick Contact Specs */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-brand-beige flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin size={15} />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-brand-dark">Oficinas Centrales (España)</p>
                  <p className="text-zinc-500">Paseo de la Castellana 95, Madrid, España</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-brand-beige flex items-center justify-center text-brand-accent shrink-0">
                  <Phone size={15} />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-brand-dark">Asistencia Directa</p>
                  <p className="text-zinc-500">+34 919 949 2066 | info@borgo.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="bg-brand-beige/30 border border-brand-accent/20 rounded-3xl p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-brand-accent font-bold flex items-center gap-1">
                  <Sparkles size={11} />
                  Colección Privada
                </span>
                <h4 className="font-serif text-lg font-bold text-brand-dark">Suscripción Off-Market</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Recibe listados confidenciales antes de que salgan de forma masiva al mercado inmobiliario de lujo.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl flex-1 focus:outline-none focus:border-brand-accent placeholder-zinc-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300"
                >
                  Unirse
                </button>
              </form>

              {newsletterSuccess && (
                <div className="bg-emerald-50 text-emerald-700 text-[11px] p-2 rounded-lg flex items-center gap-1.5 border border-emerald-200 animate-fade-in">
                  <Check size={12} />
                  <span>¡Inscrito exitosamente a la lista Off-Market!</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: High fidelity lead form */}
          <div className="lg:col-span-7 bg-[#fbfbfa] border border-zinc-200 rounded-[40px] p-6 md:p-8 shadow-md">
            
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                  <Check size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-brand-dark">Solicitud Registrada</h3>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                    Muchas gracias por tu confianza. Uno de nuestros Directores Asociados de Borgo analizará tu solicitud y se pondrá en contacto contigo de forma privada en las próximas 12 horas.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h4 className="font-serif text-xl font-bold text-brand-dark pb-2 border-b border-zinc-100">
                  Solicitud de Asesoría Directa
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Ej. carlos@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                      Teléfono Móvil *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Ej. +34 600 000 000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300"
                      required
                    />
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                      Rango de Presupuesto
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent text-zinc-700"
                    >
                      <option>$500,000 - $1,000,000</option>
                      <option>$1,000,000 - $2,500,000</option>
                      <option>$2,500,000 - $5,000,000</option>
                      <option>$5,000,000+</option>
                    </select>
                  </div>

                  {/* Property Type Selector */}
                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                      Tipo de Propiedad
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent text-zinc-700"
                    >
                      <option>Villa de Lujo</option>
                      <option>Apartamento Penthouse</option>
                      <option>Finca / Mansión</option>
                      <option>Tecnología Inteligente / Domótica</option>
                    </select>
                  </div>
                </div>

                {/* Custom Specifications Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold block">
                    Especificaciones Adicionales (Opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Cuéntanos más sobre la propiedad de tus sueños, cantidad de habitaciones o integraciones tecnológicas requeridas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 text-xs px-4 py-2.5 rounded-xl focus:outline-none focus:border-brand-accent placeholder-zinc-300 resize-none"
                  />
                </div>

                {/* Form Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark hover:bg-brand-accent hover:text-brand-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Procesando Solicitud Confidencial...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>Enviar Solicitud Confidencial</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
