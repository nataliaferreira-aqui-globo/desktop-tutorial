import React, { useState } from "react";
import { Sparkles, User, Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string>("ooh");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mediaTypes = [
    {
      id: "ooh",
      label: "OOH",
      iconUrl: "https://aquiads.com.br/images/header/ooh.svg",
    },
    {
      id: "digital",
      label: "Digital",
      iconUrl: "https://aquiads.com.br/images/header/digital.svg",
    },
    {
      id: "tv",
      label: "TV",
      iconUrl: "https://aquiads.com.br/images/header/tv.svg",
    },
    {
      id: "radio",
      label: "Rádio",
      iconUrl: "https://aquiads.com.br/images/header/radio.svg",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://aquiads.com.br/_astro/logo-aqui-ads.f9282b14.svg"
              alt="Logotipo Aqui ads"
              className="h-7 w-auto object-contain sm:h-8"
              onError={(e) => {
                // Inline SVG fallback if CDN is blocked
                const target = e.currentTarget;
                target.style.display = "none";
                target.parentElement!.innerHTML = `
                  <div class="flex items-center gap-1 font-extrabold text-2xl tracking-tighter">
                    <span class="text-[#282E38]">aqui</span>
                    <span class="text-[#FF4F00]">ads</span>
                    <span class="text-xs font-semibold text-slate-400 ml-1">Globo</span>
                  </div>
                `;
              }}
            />
          </a>
        </div>

        {/* Center: Media Mode Toggle (OOH, Digital, TV, Rádio) */}
        <nav
          aria-label="Selecionar tipo de mídia"
          className="hidden md:flex items-center gap-8 lg:gap-12"
        >
          {mediaTypes.map((media) => {
            const isSelected = selectedMedia === media.id;
            return (
              <button
                key={media.id}
                type="button"
                onClick={() => setSelectedMedia(media.id)}
                className={`group flex items-center gap-2.5 py-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? "border-b-2 border-[#FF4F00] text-[#0A0A0A] font-bold"
                    : "border-b-2 border-transparent text-[#8E8477] font-medium hover:text-[#282E38]"
                }`}
              >
                <div className="flex h-6 w-6 items-center justify-center">
                  <img
                    src={media.iconUrl}
                    alt={media.label}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[15px]">{media.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Nav CTA Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Assistente de Anúncios */}
          <a
            href="#hero-search"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-purple-50/70 px-3.5 py-1.5 text-xs font-bold text-[#695CFF] transition-all hover:bg-purple-100/70"
          >
            <span>Assistente de anúncios</span>
            <Sparkles className="h-3.5 w-3.5 fill-[#695CFF]/20" />
          </a>

          {/* Entrar Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#282E38] shadow-sm transition-all hover:border-[#FF4F00] hover:text-[#FF4F00] focus:outline-none focus:ring-2 focus:ring-[#FF4F00] min-h-[40px] cursor-pointer"
          >
            <User className="h-4 w-4" />
            <span>Entrar</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white p-4 shadow-lg md:hidden">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Formatos de Mídia
          </div>
          <div className="grid grid-cols-2 gap-2">
            {mediaTypes.map((media) => (
              <button
                key={media.id}
                onClick={() => {
                  setSelectedMedia(media.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2.5 rounded-xl p-3 text-sm font-semibold transition-all ${
                  selectedMedia === media.id
                    ? "bg-[#FFF5F0] text-[#FF4F00] border border-orange-200"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <img
                  src={media.iconUrl}
                  alt={media.label}
                  className="h-5 w-5 object-contain"
                />
                <span>{media.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-3">
            <a
              href="https://wa.me/551150395212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF4F00] py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20"
            >
              <span>Fale com especialista</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
