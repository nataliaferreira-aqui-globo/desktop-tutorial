import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      author: "Guilherme",
      company: "Athena Candy Shop",
      quote:
        "A experiência está sendo muito positiva! Onde a campanha foi veiculada nas telas, notamos crescimento de 23% no faturamento da loja.",
      highlight: "+23% de faturamento",
    },
    {
      author: "Camile",
      company: "Casari Imóveis",
      quote:
        "Foi incrível pra visibilidade da marca e bastante satisfatório com retorno imediato de leads qualificados interessados em imóveis na região.",
      highlight: "Retorno imediato de leads",
    },
    {
      author: "Raul",
      company: "Trade La Guapa",
      quote:
        "O impacto do OOH é gigantesco. Optamos por anunciar onde nosso público passa todos os dias e a presença de marca cresceu exponencialmente.",
      highlight: "Alta lembrança de marca",
    },
    {
      author: "Beatriz",
      company: "Restaurante Trio",
      quote:
        "Muitos clientes novos relatam que conheceram o restaurante diretamente através dos anúncios nos elevadores dos prédios vizinhos.",
      highlight: "Novos clientes locais",
    },
    {
      author: "Sidinei Roman",
      company: "Churrascaria Bovinu’S Lapa",
      quote:
        "Após as campanhas de telas, percebemos um aumento claro no movimento do almoço e do rodízio. Uma parceria prática e de grande resultado.",
      highlight: "Aumento de fluxo no salão",
    },
  ];

  return (
    <section className="w-full bg-[#F7F8F9] py-16 md:py-24">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4F00]">
            Histórias de Sucesso
          </span>
          <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#282E38] sm:text-[40px] lg:text-[48px]">
            Quem anuncia recomenda!
          </h2>
          <p className="mt-3 max-w-xl text-[16px] text-[#465161] sm:text-[18px]">
            Nada melhor do que a opinião de quem usa, confia e comprova os resultados do Aqui ads.
          </p>
        </div>

        {/* Carousel / Cards List */}
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex w-[310px] sm:w-[350px] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200/70"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[#282E38]">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="font-bold text-[#282E38] text-[16px]">
                  {t.author}
                </div>
                <div className="text-xs font-semibold text-[#64748B]">
                  {t.company}
                </div>
                <div className="mt-2 inline-flex items-center rounded-md bg-orange-50 px-2 py-0.5 text-xs font-bold text-[#FF4F00]">
                  {t.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simular Campanha CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#hero-search"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#E64500] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F00] min-h-[44px]"
          >
            <span>simular minha campanha</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
