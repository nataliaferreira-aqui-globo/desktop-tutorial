import React from "react";
import { BookOpen, Clock, ArrowUpRight } from "lucide-react";

export const BlogSection: React.FC = () => {
  const articles = [
    {
      title: "O que é Mídia Exterior (OOH) e como ela revoluciona as vendas do comércio local",
      category: "Estratégia OOH",
      readTime: "4 min de leitura",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80",
      description: "Entenda por que estar presente nos elevadores e ruas do seu bairro gera muito mais confiança e presença na mente do cliente.",
    },
    {
      title: "Mídia Programática sem mistérios: compre audiência qualificada com precisão",
      category: "Digital & Dados",
      readTime: "5 min de leitura",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      description: "Como a tecnologia do Aqui ads seleciona os melhores momentos e portais Globo para exibir seu anúncio sem desperdício de verba.",
    },
    {
      title: "TV Globo + Telas Digitais: o poder da estratégia multicanal para pequenos negócios",
      category: "Multicanal",
      readTime: "6 min de leitura",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
      description: "Veja como a combinação de comerciais de TV e telas residenciais amplifica em até 3x a conversão de novos clientes.",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF4F00]">
            BLOG & CONTEÚDO
          </span>
          <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#282E38] sm:text-[40px] lg:text-[46px]">
            Tudo o que você precisa saber
          </h2>
          <p className="mt-3 max-w-xl text-[16px] text-[#465161] sm:text-[18px]">
            Dicas, tendências e guias práticos de publicidade e mídia para acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-lg bg-black/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                  {art.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-[17px] font-bold leading-snug text-[#282E38] group-hover:text-[#FF4F00] transition-colors">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {art.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#FF4F00]">
                  <span>Ler artigo completo</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
