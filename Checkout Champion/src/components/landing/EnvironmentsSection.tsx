import React from "react";
import { Building2, Tv, Globe, Radio, Sparkles, CheckCircle2 } from "lucide-react";

export const EnvironmentsSection: React.FC = () => {
  const cards = [
    {
      id: "ooh",
      badge: "OOH",
      badgeClass: "bg-[#FFE4D8] text-[#FF4F00]",
      title: "Mídia fora de casa",
      subtitle: "Sua marca na rotina do público.",
      description:
        "Conecte-se à rotina do cliente em shoppings, elevadores, academias e pontos de ônibus. São mais de 86 mil telas pelo país para você anunciar.",
      footer: "Pontos de mídia em sua região a partir de R$65,32 por 1 semana.",
      icon: Building2,
      illustration: (
        <div className="flex h-12 items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-bold text-[#FF4F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF4F00]" />
            Elevadores
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-bold text-[#FF4F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF4F00]" />
            Shoppings
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-bold text-[#FF4F00]">
            <span className="h-2 w-2 rounded-full bg-[#FF4F00]" />
            Ruas
          </div>
        </div>
      ),
    },
    {
      id: "tv",
      badge: "TV e Streaming",
      badgeClass: "bg-[#D8E8FF] text-[#0066FF]",
      title: "TV Globo e Globoplay",
      subtitle: "Um Brasil de audiência para sua marca",
      description:
        "Apareça nos comerciais de TV e no streaming e impacte milhões de brasileiros. É do plim ao play.",
      footer: "Distribuição automática e segura para sua marca.",
      icon: Tv,
      illustration: (
        <div className="flex h-12 items-center gap-3">
          <img
            src="https://aquiads.com.br/_astro/logo-globoplay.00b8278e.svg"
            alt="Globoplay"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <img
            src="https://aquiads.com.br/_astro/logo-tv-globo.e7f7fb9b.svg"
            alt="TV Globo"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ),
    },
    {
      id: "digital",
      badge: "Digital",
      badgeClass: "bg-[#D8E8FF] text-[#0066FF]",
      title: "Portais e revistas digitais",
      subtitle: "Credibilidade das grandes marcas",
      description:
        "Anuncie em poucos cliques nos grandes portais e revistas digitais do país com audiência qualificada.",
      footer: "Mais de 21 marcas exclusivas com resultados mensuráveis na plataforma.",
      icon: Globe,
      illustration: (
        <div className="flex h-12 items-center gap-2 overflow-hidden">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-xs p-1 border border-slate-100">
            <img
              src="https://aquiads.com.br/_astro/valor-economico.998a8f9a.svg"
              alt="Valor Econômico"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-xs p-1 border border-slate-100">
            <img
              src="https://aquiads.com.br/_astro/logo-g1.f4c171f5.svg"
              alt="g1"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-xs p-1 border border-slate-100 text-[10px] font-bold text-[#FF4F00]">
            GE
          </span>
          <span className="inline-flex h-9 items-center justify-center rounded-full bg-slate-100 px-2 text-[11px] font-bold text-slate-600">
            +17 marcas
          </span>
        </div>
      ),
    },
    {
      id: "radio",
      badge: "Rádio",
      badgeClass: "bg-[#D8E8FF] text-[#0066FF]",
      title: "Rádio",
      subtitle: "A voz da sua marca no ar.",
      description:
        "Fale com 1,2 milhão de ouvintes diariamente na CBN, Rádio Globo e BH FM em formato de 30 segundos.",
      footer: "Sem anúncio pronto? A gravação é por nossa conta.",
      icon: Radio,
      illustration: (
        <div className="flex h-12 items-center gap-2">
          <span className="inline-flex h-9 items-center justify-center rounded-lg bg-red-600 px-2.5 text-xs font-black text-white">
            CBN
          </span>
          <span className="inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-2.5 text-xs font-black text-white">
            RÁDIO GLOBO
          </span>
          <span className="inline-flex h-9 items-center justify-center rounded-lg bg-amber-500 px-2 text-xs font-bold text-white">
            BH FM
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="ambientes" className="w-full bg-[#FBFDFF] py-16 md:py-24">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#282E38] sm:text-[34px] lg:text-[44px]">
            Esteja <span className="text-[#FF4F00]">onde a atenção</span> do seu público{" "}
            <span className="text-[#FF4F00]">já está.</span>
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-relaxed text-[#465161] sm:text-[18px]">
            Da sua região aos principais conteúdos do país, escolha onde sua marca deve aparecer.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-orange-200"
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-4 text-[18px] font-extrabold text-[#282E38]">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#FF4F00]">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#465161] flex-1">
                  {card.description}
                </p>

                {/* Media Logos / Preview Area */}
                <div className="mt-5 border-t border-slate-100 pt-4">
                  {card.illustration}
                </div>

                {/* Footer Highlight */}
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <p className="text-xs leading-normal text-[#6B7481]">
                    {card.footer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
