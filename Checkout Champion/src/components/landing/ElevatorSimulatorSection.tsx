import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export const ElevatorSimulatorSection: React.FC = () => {
  return (
    <>
      {/* 1. SEÇÃO SIMULADOR / ELEVADOR */}
      <section className="w-full bg-[#F7F8F9] py-16 sm:py-20">
        <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Imagem Oficial do Elevador à Esquerda */}
            <div className="relative w-full max-w-[500px] lg:w-1/2 overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://aquiads.com.br/images/home/09-2026/elevador.webp"
                alt="Exemplo de anúncio em tela de elevador"
                className="h-[440px] w-full object-cover object-top"
              />
            </div>

            {/* Conteúdo e Passos à Direita */}
            <div className="w-full lg:w-1/2 flex flex-col text-left">
              <h2 className="text-[26px] sm:text-[34px] font-bold leading-tight text-[#282E38]">
                O poder dos maiores canais de mídia do país na mão do seu negócio.
              </h2>
              <p className="mt-3 text-[15px] sm:text-[17px] text-[#465161]">
                Escolha onde sua marca vai aparecer, anuncie com facilidade e acompanhe resultados de forma simples.
              </p>

              {/* Lista de Passos */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="border-l-4 border-[#FF4F00] bg-white p-4 rounded-r-xl shadow-xs">
                  <h4 className="text-base font-bold text-[#282E38]">
                    1. Escolha entre OOH ou Produtos Globo
                  </h4>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Selecione os pacotes ideais para o seu objetivo entre TV Globo, mídias digitais, telas nas ruas e elevadores da cidade.
                  </p>
                </div>

                <div className="border-l-4 border-slate-300 bg-white/60 p-4 rounded-r-xl">
                  <h4 className="text-base font-semibold text-slate-700">
                    2. Defina onde sua marca vai aparecer
                  </h4>
                </div>

                <div className="border-l-4 border-slate-300 bg-white/60 p-4 rounded-r-xl">
                  <h4 className="text-base font-semibold text-slate-700">
                    3. Crie a arte do anúncio em poucos passos
                  </h4>
                </div>

                <div className="border-l-4 border-slate-300 bg-white/60 p-4 rounded-r-xl">
                  <h4 className="text-base font-semibold text-slate-700">
                    4. Acompanhe seus resultados em tempo real
                  </h4>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/551150395212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-[#FF4F00] bg-white px-6 py-3 text-sm font-bold text-[#FF4F00] hover:bg-orange-50 transition-all cursor-pointer"
                >
                  falar com especialista
                </a>
                <a
                  href="#hero-search"
                  className="rounded-lg bg-[#FF4F00] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#E64500] transition-all cursor-pointer"
                >
                  quero anunciar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANNER LARANJA WHATSAPP */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="mx-auto max-w-[1333px] rounded-2xl p-8 sm:p-10 text-center shadow-lg"
          style={{
            background:
              "linear-gradient(194deg, #FF9400 0%, #FF4B00 29.81%, #FF4B00 64.9%, #FF212A 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Precisa de ajuda?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg text-white/95">
            Fale com nossos especialistas. Atendimento disponível por WhatsApp.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/551150395212"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3D3D3D] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-all"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              <span>falar com especialista</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
