import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, Plus, Minus, Info } from "lucide-react";
import { faqsData } from "../data/faqs";

export default function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>("f1");
  const [selectedCategory, setSelectedCategory] = useState<string>("Compra de Propiedades");

  // Extract unique categories
  const categories = ["Compra de Propiedades", "Servicios Borgo", "Financiamiento", "Garantía de Calidad"];

  // Filter FAQs based on category
  const filteredFaqs = faqsData.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="preguntas" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Intro */}
        <div className="text-center space-y-3">
          <span className="text-[10px] text-brand-accent uppercase tracking-widest font-mono font-bold flex items-center justify-center gap-1.5">
            <HelpCircle size={12} />
            Resolviendo tus Dudas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-md mx-auto">
            Todo lo que necesitas saber sobre el proceso de selección, la tecnología integrada y el respaldo legal exclusivo de Borgo.
          </p>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-2" />
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-brand-beige/30 rounded-2xl border border-zinc-150 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                // Open first item of the new category by default
                const items = faqsData.filter((faq) => faq.category === cat);
                if (items.length > 0) {
                  setActiveId(items[0].id);
                } else {
                  setActiveId(null);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-brand-dark text-white shadow-md"
                  : "text-zinc-600 hover:bg-brand-beige/50 hover:text-brand-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions List with Fixed Height to Prevent Shifting layout below */}
        <div className="h-[340px] xs:h-[300px] sm:h-[285px] md:h-[265px] overflow-y-auto pr-1 md:pr-2 scroll-smooth">
          <div className="space-y-4 pb-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq) => {
                const isOpen = activeId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-brand-accent bg-brand-beige/10"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    {/* Trigger Header */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    >
                      <span className="font-serif font-bold text-sm md:text-base text-brand-dark">
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-brand-dark text-white rotate-180" : "bg-zinc-100 text-zinc-500"
                        }`}
                      >
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </span>
                    </button>

                    {/* Body Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-5 md:p-6 pt-0 border-t border-zinc-100 text-xs md:text-sm text-zinc-500 leading-relaxed space-y-2">
                            <p>{faq.answer}</p>
                            <div className="flex items-center gap-1.5 text-[10px] text-brand-accent font-mono uppercase mt-2 font-semibold">
                              <Info size={11} />
                              <span>Categoría: {faq.category}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
