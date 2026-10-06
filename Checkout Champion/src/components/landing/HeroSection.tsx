import React, { useState } from "react";
import { Search, MapPin, MessageCircle } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const heroCards = [
    {
      id: "digital",
      title: "Portais Globo",
      desc: "Anuncie nos portais da Globo e alcance milhões de pessoas todos os dias.",
      img: "https://aquiads.com.br/images/home/08-2026/digital.webp",
      logos: [
        "https://aquiads.com.br/images/logos/globo/logo-g1.svg",
        "https://aquiads.com.br/images/logos/globo/ge-logo.svg",
        "https://aquiads.com.br/images/logos/globo/logo-gshow.svg",
      ],
      btnText: "Clique e conheça",
      action: "#ambientes",
    },
    {
      id: "ooh",
      title: "Alcance nas ruas",
      desc: "Sua empresa no elevador e nos painéis urbanos de maior fluxo da cidade.",
      img: "https://aquiads.com.br/images/home/08-2026/ooh.webp",
      logos: [
        "https://aquiads.com.br/images/logos/ooh/mubs.svg",
        "https://aquiads.com.br/images/logos/ooh/aeroporto.svg",
        "https://aquiads.com.br/images/logos/ooh/academia.svg",
      ],
      btnText: "Tenho interesse",
      action: "#ambientes",
    },
    {
      id: "tv",
      title: "Direto na telona",
      desc: "Coloque sua marca na grade da Globo e converse com o Brasil inteiro.",
      img: "https://aquiads.com.br/images/home/08-2026/tv.webp",
      logos: [
        "https://aquiads.com.br/images/logos/globo/tv-globo.svg",
        "https://aquiads.com.br/images/logos/globo/jn.svg",
        "https://aquiads.com.br/images/logos/globo/fantastico.svg",
      ],
      btnText: "Saiba mais",
      action: "#ambientes",
    },
    {
      id: "radio",
      title: "Rádios Globo",
      desc: "Sua marca na programação da CBN, Rádio Globo e BH FM.",
      img: "https://aquiads.com.br/images/home/08-2026/radio.webp",
      logos: [
        "https://aquiads.com.br/images/logos/globo/bh-fm.svg",
        "https://aquiads.com.br/images/logos/globo/radio-globo.svg",
        "https://aquiads.com.br/images/logos/globo/cbn.svg",
      ],
      btnText: "Quero contratar",
      action: "#ambientes",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda: Texto + Input de Endereço + WhatsApp */}
          <div className="lg:col-span-5 flex flex-col text-left pt-2">
            <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold leading-[108%] tracking-tight text-[#1B1B1B]">
              Anuncie na <span className="text-[#FF4F00]">Globo</span> e em{" "}
              <span className="text-[#FF4F00]">OOH</span> pelo Aqui ads
            </h1>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-[150%] text-[#465161]">
              Da TV de casa às telas da rua, passando pelos maiores sites do Brasil.
            </p>

            {/* Input de Busca de Endereço */}
            <div className="mt-8 w-full max-w-[420px]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("ambientes");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex h-[52px] w-full items-center justify-between rounded-xl border border-slate-300 bg-white p-1.5 shadow-xs focus-within:border-[#FF4F00] focus-within:ring-2 focus-within:ring-orange-500/20 transition-all"
              >
                <div className="flex flex-1 items-center gap-2.5 px-3">
                  <MapPin className="h-5 w-5 text-[#FF4F00] shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="insira um endereço, bairro ou cidade"
                    className="w-full text-sm text-[#282E38] placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-[#FF4F00] text-white hover:bg-[#E64500] transition-colors cursor-pointer"
                  aria-label="Buscar"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>

              {/* Divisor "ou" */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-slate-200" />
                <span className="text-xs text-slate-400 font-medium">ou</span>
                <div className="h-[1px] flex-1 bg-slate-200" />
              </div>

              {/* Botão Falar com Especialista */}
              <a
                href="https://wa.me/551150395212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[42px] w-full items-center justify-center gap-2 rounded-lg border border-[#282E38] bg-white text-xs font-bold text-[#282E38] hover:bg-slate-50 transition-colors shadow-xs"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>falar com especialista</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: 4 Cards Verticais Ilustrados */}
          <div className="lg:col-span-7 w-full overflow-x-auto pb-4 pt-1">
            <div className="flex items-center gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4">
              {heroCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative h-[420px] w-[230px] sm:w-[250px] lg:w-auto shrink-0 overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left">
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-1 text-xs text-slate-200 line-clamp-2">
                      {card.desc}
                    </p>

                    {/* Logos */}
                    <div className="mt-3 flex items-center gap-2">
                      {card.logos.map((logo, idx) => (
                        <img
                          key={idx}
                          src={logo}
                          alt="logo"
                          className="h-6 w-6 rounded-full bg-white/20 p-0.5 object-contain"
                        />
                      ))}
                    </div>

                    <a
                      href={card.action}
                      className="mt-4 flex h-[32px] w-full items-center justify-center rounded-lg border border-white/60 bg-white/20 text-xs font-bold text-white backdrop-blur-xs group-hover:bg-[#FF4F00] group-hover:border-[#FF4F00] transition-all"
                    >
                      {card.btnText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
