import React from "react";
import { Sparkles, ArrowRight, CheckCircle2, Percent } from "lucide-react";

export const CombosSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#282E38] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          {/* Subtle decorative circles */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FF4F00]/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4F00]/20 px-4 py-1 text-xs font-bold text-[#FF4F00] border border-[#FF4F00]/30 mb-4">
                <Percent className="h-3.5 w-3.5" />
                <span>OPORTUNIDADE EXCLUSIVA</span>
              </div>

              <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight leading-tight">
                Combos Promocionais
              </h2>

              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                Aproveite descontos de <span className="font-bold text-[#FF4F00]">até 30%</span> em pacotes multicanais prontos para você anunciar.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-400 max-w-xl">
                Junte a força do impacto na rotina do OOH com a credibilidade e alcance da TV e do digital Globo. Potencialize seu ROI com um pacote feito sob medida.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-[#FF4F00]" />
                  <span>Elevadores + Portais Globo</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-[#FF4F00]" />
                  <span>TV Globo + Mídia de Rua</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-[#FF4F00]" />
                  <span>Globoplay + Rádios</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#hero-search"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-[#E64500] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>ver combos</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative flex flex-col items-center">
                <img
                  src="https://aquiads.com.br/_astro/ilustra-combos.5c9cb372.png"
                  alt="Ilustração Combos Promocionais"
                  className="max-h-[260px] sm:max-h-[320px] w-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback visual illustration
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className = "flex flex-col items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-8 text-center";
                      fallback.innerHTML = `
                        <div class="text-5xl font-black text-[#FF4F00]">-30%</div>
                        <div class="text-sm font-bold text-white mt-2">MULTICANAL GLOBO + OOH</div>
                        <div class="text-xs text-slate-400 mt-1">Pacotes inteligentes com máxima economia</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
