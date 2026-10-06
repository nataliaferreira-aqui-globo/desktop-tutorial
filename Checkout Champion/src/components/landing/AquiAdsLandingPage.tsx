import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { EnvironmentsSection } from "./EnvironmentsSection";
import { ElevatorSimulatorSection } from "./ElevatorSimulatorSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CombosSection } from "./CombosSection";
import { CoverageMapSection } from "./CoverageMapSection";
import { BlogSection } from "./BlogSection";
import { AquiAdsRedesignedFAQ } from "../faq/AquiAdsRedesignedFAQ";
import { Footer } from "./Footer";
import { ArrowDown } from "lucide-react";

export const AquiAdsLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#282E38] selection:bg-[#FF4F00] selection:text-white font-sans antialiased">
      {/* Botão flutuante para rolagem rápida até a FAQ */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#faq"
          className="flex items-center gap-2 rounded-full bg-[#FF4F00] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:bg-[#E64500] hover:scale-105 active:scale-95 cursor-pointer"
          title="Rolar diretamente para a seção de FAQ redesenhada"
        >
          <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
          <span>Ver Nova FAQ</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      {/* 1. Header Oficial Aqui ads com Seletores de Mídia */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Section Oficial com Busca e 4 Cards Verticais Ilustrados */}
        <HeroSection />

        {/* 3. Seção Ambientes: "Esteja onde a atenção do seu público já está." */}
        <EnvironmentsSection />

        {/* 4. Seção Simulador / Elevador e Banner Laranja WhatsApp */}
        <ElevatorSimulatorSection />

        {/* 5. Seção Depoimentos Reais: "Quem anuncia recomenda!" */}
        <TestimonialsSection />

        {/* 6. Seção Combos Promocionais (-30% OFF) */}
        <CombosSection />

        {/* 7. Seção Cobertura Brasil (+123 mil telas, 100% território) */}
        <CoverageMapSection />

        {/* 8. Seção Blog: "Tudo o que você precisa saber" */}
        <BlogSection />

        {/* 9. NOVA SEÇÃO DE FAQ REDESENHADA (Substituição Exclusiva da Antiga FAQ) */}
        <AquiAdsRedesignedFAQ />
      </main>

      {/* 10. Footer Oficial Grupo Globo */}
      <Footer />
    </div>
  );
};
