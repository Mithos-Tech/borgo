import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight, Award } from "lucide-react";
import { teamMembers } from "../data/team";

interface TeamProps {
  onOpenScheduler: () => void;
}

export default function Team({ onOpenScheduler }: TeamProps) {
  return (
    <section id="equipo" className="py-24 px-4 md:px-8 bg-brand-dark text-white relative overflow-hidden">
      {/* Background visual cues */}
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: 3 Team Cards */}
        <div className="lg:col-span-8 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-brand-gray/40 border border-white/5 rounded-[30px] p-4 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-350 relative overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Specialization Badge */}
                {member.specialty && (
                  <div className="absolute bottom-3 left-3 bg-brand-dark/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest text-brand-accent">
                    {member.specialty}
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <div className="space-y-1 px-1">
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-zinc-400 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Quick action overlay */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5 px-1">
                <button
                  onClick={onOpenScheduler}
                  className="text-[10px] font-mono tracking-widest uppercase text-brand-accent hover:text-white transition-colors flex items-center gap-1"
                >
                  <Phone size={10} />
                  <span>Contactar</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Text & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 order-1 lg:order-2 space-y-6"
        >
          <div className="space-y-3">
            <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center gap-1.5">
              <Award size={12} />
              Nuestros Expertos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-white">
              Conoce a Nuestro <br className="hidden md:block" /> Equipo de Expertos
            </h2>
            <div className="w-12 h-0.5 bg-brand-accent mt-4" />
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Nuestro equipo de profesionales altamente experimentados y selectos está comprometido en guiarte paso a paso. Ofrecemos total privacidad y confidencialidad para ayudarte a asegurar tu residencia de ensueño o inversión perfecta.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenScheduler}
              className="inline-flex items-center gap-3 bg-white text-brand-dark hover:bg-brand-accent px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>Agendar Consulta</span>
              <span className="w-5 h-5 rounded-full bg-brand-dark text-white flex items-center justify-center">
                <ArrowUpRight size={10} />
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
