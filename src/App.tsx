import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Team from "./components/Team";
import PropertiesCarousel from "./components/PropertiesCarousel";
import PropertiesGrid from "./components/PropertiesGrid";
import Insights from "./components/Insights";
import FAQSection from "./components/FAQSection";
import GetStarted from "./components/GetStarted";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { PropertyDetailsModal, AppointmentSchedulerModal } from "./components/Modals";
import { Property } from "./types";
import { Bubble } from "@typebot.io/react";


// Import custom generated high-fidelity assets
import heroImage from "./assets/images/luxury_villa_hero_1784087638932.jpg";
const portraitImage = "https://res.cloudinary.com/chlgeobm/image/upload/v1784149558/experiencia_lsny1l.webp";
const nightImage = "https://res.cloudinary.com/chlgeobm/image/upload/v1784149566/cta_ztbuam.webp";

export default function App() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  // Initialize favorites from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("borgo_favorites");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse favorites from local storage", e);
      }
    }
  }, []);

  // Save favorites to LocalStorage whenever they change
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      localStorage.setItem("borgo_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const handleOpenDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProperty(null);
  };

  const handleOpenScheduler = () => {
    setIsSchedulerOpen(true);
  };

  const handleCloseScheduler = () => {
    setIsSchedulerOpen(false);
  };

  return (
    <div id="borgo-app-container" className="min-h-screen flex flex-col justify-between selection:bg-brand-accent selection:text-brand-dark">
      {/* 1. FLOATING NAVIGATION BAR */}
      <Header
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onOpenDetails={handleOpenDetails}
        onOpenScheduler={handleOpenScheduler}
      />

      {/* 2. HERO SECTION */}
      <Hero heroImage={heroImage} />

      {/* 3. EXPERIENCE EXCELLENCE SECTION */}
      <Experience portraitImage={portraitImage} />

      {/* 4. TEAM SECTION */}
      <Team onOpenScheduler={handleOpenScheduler} />

      {/* 5. PORTFOLIO CAROUSEL */}
      <PropertiesCarousel
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onOpenDetails={handleOpenDetails}
      />

      {/* 6. EXTENDED PROPERTIES GRID */}
      <PropertiesGrid
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onOpenDetails={handleOpenDetails}
      />

      {/* 7. CUSTOMER INSIGHTS / TESTIMONIALS */}
      <Insights />

      {/* 8. FAQ ACCORDION MENU */}
      <FAQSection />

      {/* 9. GET STARTED LUXURY SPLIT BANNER */}
      <GetStarted nightImage={nightImage} onOpenScheduler={handleOpenScheduler} />

      {/* 10. BOOKING & CONTACT LEAD CAPTURE */}
      <ContactSection />

      {/* 11. FOOTER */}
      <Footer />

      {/* ==========================================
          MODALS & FLYOUT DIALOGS (INTERACTIVE SURPRISES)
          ========================================== */}
      
      {/* Property Details Modal */}
      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onOpenScheduler={handleOpenScheduler}
      />

      {/* Appointment Scheduler Modal */}
      <AppointmentSchedulerModal
        isOpen={isSchedulerOpen}
        onClose={handleCloseScheduler}
      
        <Bubble
        typebot="borgo-bot-g72goqb"
        apiHost="https://typebot.io"
        theme={{ button: { backgroundColor: "#1D1D1D" } }}
        />
    </div>
  );
}
