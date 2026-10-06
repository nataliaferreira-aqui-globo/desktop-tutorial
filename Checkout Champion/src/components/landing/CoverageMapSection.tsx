import React from "react";
import { MapPin, Globe2, ArrowRight, Tv, Check } from "lucide-react";

export const CoverageMapSection: React.FC = () => {
  const regions = [
    { name: "São Paulo & Grande SP", screens: "+35.000 telas", status: "Alta Densidade" },
    { name: "Rio de Janeiro & Região", screens: "+18.000 telas", status: "Alta Densidade" },
    { name: "Belo Horizonte & Minas", screens: "+12.000 telas", status: "Cobertura Completa" },
    { name: "Sul (Porto Alegre, Curitiba, Foz)", screens: "+11.000 telas", status: "Cobertura Completa" },
    { name: "Nordeste (Salvador, Recife, Fortaleza)", screens: "+10.000 telas", status: "Cobertura Completa" },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text & Stats (6 cols) */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF4F00]">
              ABRANGÊNCIA NACIONAL
            </span>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#282E38] sm:text-[40px] lg:text-[46px] leading-tight">
              Sua marca vista em todo o Brasil{" "}
              <span className="text-[#FF4F00]">e online também</span>
            </h2>

            <p className="mt-4 text-[16px] leading-relaxed text-[#465161] sm:text-[18px]">
              TV, telas na rua, elevadores e mídia digital trabalhando juntos para conectar sua marca à rotina diária do seu público-alvo em qualquer capital ou município do país.
            </p>

            <div className="mt-6 space-y-3">
              {regions.map((reg, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-[#FF4F00]" />
                    <span className="text-sm font-semibold text-[#282E38]">
                      {reg.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FF4F00]">
                      {reg.screens}
                    </span>
                    <span className="hidden sm:inline-block rounded-md bg-green-50 px-2 py-0.5 text-[11px] font-bold text-green-700">
                      {reg.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#hero-search"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#282E38] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#FF4F00] min-h-[44px]"
              >
                <span>quero anunciar</span>
                <ArrowRight className="h-4 w-4 text-[#FF4F00]" />
              </a>
            </div>
          </div>

          {/* Right Map Graphic / Preview (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
              {/* Map Illustration or SVG graphic */}
              <div className="flex flex-col items-center">
                <div className="relative h-[320px] w-full flex items-center justify-center">
                  <img
                    src="https://aquiads.com.br/_astro/ilustracao-mapa1.0d43ce16.webp"
                    alt="Mapa de Cobertura do Brasil"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Floating Metric Badges */}
                  <div className="absolute top-4 left-4 rounded-xl bg-[#282E38] px-3.5 py-2 text-white shadow-lg">
                    <div className="text-[11px] font-medium text-slate-300">Cobertura OOH</div>
                    <div className="text-sm font-black text-[#FF4F00]">+86.000 Telas</div>
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-xl bg-[#282E38] px-3.5 py-2 text-white shadow-lg">
                    <div className="text-[11px] font-medium text-slate-300">Portais & TV</div>
                    <div className="text-sm font-black text-white">100% Território Nacional</div>
                  </div>
                </div>

                <div className="mt-4 flex w-full justify-around border-t border-slate-100 pt-4 text-center">
                  <div>
                    <div className="text-lg font-black text-[#282E38]">27</div>
                    <div className="text-xs text-slate-500 font-medium">Estados e DF</div>
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#FF4F00]">100M+</div>
                    <div className="text-xs text-slate-500 font-medium">Impactos diários</div>
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#282E38]">24/7</div>
                    <div className="text-xs text-slate-500 font-medium">Monitoramento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
