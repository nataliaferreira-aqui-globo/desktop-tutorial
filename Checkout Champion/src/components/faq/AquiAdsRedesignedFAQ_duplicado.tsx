import React, { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowUpRight, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

interface FAQCategory {
  id: string;
  label: string;
  description: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "geral",
    label: "Geral & Plataforma",
    description: "Tudo o que você precisa saber sobre como funciona a plataforma Aqui ads.",
    items: [
      {
        id: "faq-1",
        question: "O que é o Aqui ads?",
        answer:
          "O Aqui ads é a plataforma oficial e 100% digital da Globo para contratação simplificada de mídia. Com ela, empresas de todos os portes e agências podem planejar, simular e veicular anúncios em TV Globo, Globoplay, portais digitais (como g1 e GE), rádios e milhares de telas de mídia exterior (OOH) espalhadas por todo o Brasil, com total autonomia e relatórios auditados.",
        highlight: "Plataforma self-service com alcance Globo e inteligência de dados.",
      },
      {
        id: "faq-2",
        question: "Como faço para anunciar?",
        answer:
          "Anunciar é muito simples e leva menos de 5 minutos: 1) Crie sua conta gratuita na plataforma; 2) Escolha onde deseja aparecer (OOH, TV, Digital ou Rádio); 3) Defina sua região, raio de alcance e orçamento; 4) Faça upload do seu criativo (arte ou vídeo) ou solicite nosso suporte de produção; 5) Conclua o pagamento via Pix, Cartão ou Boleto. Sua campanha entra no ar após rápida moderação técnica.",
        highlight: "Fluxo 100% digital, sem burocracia e com início rápido.",
      },
      {
        id: "faq-3",
        question: "Como eu acompanho os resultados da minha campanha?",
        answer:
          "Você tem acesso a um painel analítico em tempo real dentro do Aqui ads. Nele, você acompanha métricas detalhadas de impressões entregues, veiculações comprovadas por geolocalização e fotos das telas em OOH, além de relatórios auditados de audiência na TV e métricas de cliques e engajamento no digital.",
        highlight: "Métricas transparentes e comprovante fotográfico de veiculação.",
      },
    ],
  },
  {
    id: "canais",
    label: "Canais & Onde Anunciar",
    description: "Formatos disponíveis: OOH, TV Globo, Streaming, Portais e Rádio.",
    items: [
      {
        id: "faq-4",
        question: "Onde posso anunciar?",
        answer:
          "Você pode anunciar em um ecossistema multicanal completo: mais de 86 mil telas de OOH (elevadores residenciais e comerciais, shoppings, academias, estações de metrô e abrigos de ônibus), intervalos comerciais da TV Globo e Globoplay, grandes portais jornalísticos e verticais de conteúdo (g1, ge, gshow, Valor Econômico, TechTudo, Casa e Jardim), além das principais rádios do país (CBN, Rádio Globo e BH FM).",
        highlight: "Mais de 86 mil telas e os veículos com maior credibilidade do Brasil.",
      },
      {
        id: "faq-5",
        question: "Qual a diferença de anunciar em Globo ou em OOH (Mídia Exterior)?",
        answer:
          "A TV Globo e o Globoplay entregam alcance massivo, alto impacto audiovisual e máxima credibilidade editorial, ideais para construção instantânea de autoridade e lembrança de marca. Já a Mídia Exterior (OOH) acompanha a rotina diária do consumidor nos trajetos de moradia, trabalho e compras, garantindo alta frequência de repetição e proximidade geográfica com o ponto de venda. A combinação dos dois (multicanal) amplifica comprovadamente o ROI em até 3x.",
        highlight: "Globo para impacto e autoridade; OOH para frequência na rotina.",
      },
      {
        id: "faq-6",
        question: "Posso anunciar minha marca fora da minha cidade ou em uma rua específica, perto de mim?",
        answer:
          "Sim! O Aqui ads possui inteligência de hipersegmentação geográfica. Você pode selecionar um raio de poucos metros ou quarteirões ao redor do seu estabelecimento comercial, escolher edifícios residenciais ou comerciais específicos, bairros estratégicos, ou expandir para múltiplos municípios e estados de todo o território nacional.",
        highlight: "Hipersegmentação por rua, bairro, edifício ou abrangência nacional.",
      },
      {
        id: "faq-7",
        question: "O que é Mídia Programática?",
        answer:
          "Mídia Programática é a tecnologia que automatiza a compra e a exibição de anúncios publicitários com base em dados inteligentes de perfil e contexto. Em vez de comprar espaços genéricos, o sistema veicula o anúncio ideal para o perfil de público selecionado no momento em que ele está navegando nos portais Globo ou visualizando uma tela conectada, maximizando a eficiência de cada real investido.",
        highlight: "Compra inteligente baseada em dados reais de comportamento e contexto.",
      },
    ],
  },
  {
    id: "agencias",
    label: "Agências & Parceiros",
    description: "Condições e vantagens exclusivas para agências de publicidade e parceiros.",
    items: [
      {
        id: "faq-8",
        question:
          "O que é a plataforma agência da Aqui ads? Onde me cadastro para me tornar um parceiro oficial? E qual comissionamento irei receber?",
        answer:
          "O Aqui ads para Agências é um ambiente dedicado para agências de publicidade, profissionais de mídia e consultores gerenciarem múltiplas contas de clientes com condições comerciais exclusivas. Você pode se cadastrar gratuitamente na aba 'Agências' do portal. Como parceiro oficial, sua agência conta com comissionamento garantido (BV padrão de mercado sobre o valor investido), atendimento consultivo de especialistas Globo, condições de faturamento flexíveis e relatórios white-label para apresentar diretamente aos seus clientes.",
        highlight: "BV de mercado, atendimento prioritário e gestão centralizada de clientes.",
      },
    ],
  },
];

export const AquiAdsRedesignedFAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("geral");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true, // First item opened by default for immediate affordance
  });

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const currentCategory =
    faqData.find((cat) => cat.id === activeCategory) || faqData[0];

  return (
    <section
      id="faq"
      aria-labelledby="faq-main-heading"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Decorative Background Accents */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-slate-100 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* LEVEL 1 & 2: Header with Decorative Doodles & Typography Hierarchy       */}
        {/* ========================================================================= */}
        <header className="relative mx-auto mb-12 max-w-3xl text-center md:mb-16">
          {/* Top-Left Outline Doodle: Hand-drawn Speech Bubble Spark */}
          <div
            className="pointer-events-none absolute -left-4 -top-8 hidden select-none md:block lg:-left-12 lg:-top-10"
            aria-hidden="true"
          >
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-12deg] text-[#FF4F00] opacity-80"
            >
              <path
                d="M14 26C14 17.1634 21.1634 10 30 10H42C50.8366 10 58 17.1634 58 26C58 34.8366 50.8366 42 42 42H28L18 52V41.4C15.5 37.8 14 32.5 14 26Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 23L34 27M40 23L38 27"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 14L6 11M60 14L64 11M54 48L58 52"
                stroke="#64748B"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Top-Right Outline Doodle: Hand-drawn Question Light Swirl */}
          <div
            className="pointer-events-none absolute -right-4 -top-8 hidden select-none md:block lg:-right-12 lg:-top-10"
            aria-hidden="true"
          >
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[12deg] text-[#FF4F00] opacity-80"
            >
              <path
                d="M26 22C26.5 16.5 32 14 36.5 15C41 16 43.5 20 41.5 24.5C39.5 29 34 31 34 36"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="34" cy="44" r="2.2" fill="currentColor" />
              <path
                d="M52 18L54 22L58 24L54 26L52 30L50 26L46 24L50 22L52 18Z"
                fill="#FF4F00"
                fillOpacity="0.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Section Badge */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F0] px-3.5 py-1 text-xs font-bold tracking-wide text-[#FF4F00]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CENTRAL DE DÚVIDAS</span>
          </div>

          {/* H2 Title (Level 1) */}
          <h2
            id="faq-main-heading"
            className="text-[30px] font-extrabold tracking-tight text-[#282E38] sm:text-[36px] lg:text-[42px]"
          >
            Perguntas <span className="text-[#FF4F00]">Frequentes</span>
          </h2>

          {/* Subtitle (Level 2) - Max 60ch length for optimal readability */}
          <p className="mx-auto mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-[#64748B] sm:text-[18px]">
            Tire todas as suas dúvidas sobre canais de mídia, investimento, formatos e como colocar sua marca na rotina de milhões de brasileiros.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* MOBILE CATEGORY SELECTOR (Pill Tabs with Horizontal Scroll)               */}
        {/* ========================================================================= */}
        <div className="mb-8 block lg:hidden">
          <div
            role="tablist"
            aria-label="Categorias de FAQ"
            className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {faqData.map((category) => {
              const isSelected = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  id={`tab-${category.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${category.id}`}
                  tabIndex={0}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF4F00] focus:ring-offset-2 min-h-[44px] min-w-[44px] select-none ${
                    isSelected
                      ? "bg-[#FF4F00] text-white shadow-md shadow-orange-500/20"
                      : "bg-[#F7F8F9] text-[#475569] hover:bg-slate-200/80 hover:text-[#0F172A]"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                      isSelected
                        ? "bg-white/25 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {category.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN 2-COLUMN RESPONSIVE LAYOUT (Desktop >= 1024px: 30% / 70%)            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN (Desktop): Sticky Categories Navigation (~30% / 4 cols)  */}
          {/* --------------------------------------------------------------------- */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200/70 bg-[#F9F9F9] p-4 shadow-sm">
              <div className="mb-3 px-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Navegue por tópicos
                </span>
              </div>

              <nav
                role="tablist"
                aria-label="Categorias de perguntas frequentes"
                className="flex flex-col gap-1.5"
              >
                {faqData.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      id={`tab-desktop-${category.id}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${category.id}`}
                      tabIndex={0}
                      onClick={() => setActiveCategory(category.id)}
                      className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF4F00] ${
                        isActive
                          ? "border-l-4 border-[#FF4F00] bg-white font-bold text-[#FF4F00] shadow-sm pl-3.5"
                          : "border-l-4 border-transparent text-[#475569] font-medium hover:bg-white/60 hover:text-[#0F172A]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[15px]">{category.label}</span>
                      </div>
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                          isActive
                            ? "bg-[#FFF5F0] text-[#FF4F00]"
                            : "bg-slate-200/70 text-slate-600 group-hover:bg-slate-200"
                        }`}
                      >
                        {category.items.length}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick tip box */}
              <div className="mt-6 rounded-xl border border-orange-200/50 bg-gradient-to-br from-[#FFF5F0] to-orange-50/40 p-3.5 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF4F00]">
                  <HelpCircle className="h-4 w-4" />
                  <span>Dica de Navegação</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                  Clique nas perguntas ao lado para visualizar respostas detalhadas e exemplos práticos de veiculação.
                </p>
              </div>
            </div>
          </aside>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Accordion Questions & Answers + Support Card (70% / 8c) */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-8">
            <div
              id={`panel-${currentCategory.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentCategory.id}`}
              className="flex flex-col gap-4"
            >
              {/* Category Header Badge & Info */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#282E38]">
                    {currentCategory.label}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    {currentCategory.description}
                  </p>
                </div>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {currentCategory.items.length} {currentCategory.items.length === 1 ? "pergunta" : "perguntas"}
                </span>
              </div>

              {/* Accordion Item List */}
              <div className="flex flex-col gap-3.5">
                {currentCategory.items.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`overflow-hidden transition-all duration-300 rounded-2xl ${
                        isOpen
                          ? "border-2 border-[#FF4F00] bg-white shadow-[0_4px_24px_rgba(255,79,0,0.08)]"
                          : "border border-slate-200/90 bg-[#F9F9F9] hover:border-slate-300 hover:bg-[#F5F5F7]"
                      }`}
                    >
                      {/* Accordion Trigger / Header */}
                      <button
                        type="button"
                        id={`faq-trigger-${item.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        onClick={() => toggleItem(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleItem(item.id);
                          }
                        }}
                        className="group flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4F00] min-h-[56px] select-none cursor-pointer"
                      >
                        <span
                          className={`text-[16px] sm:text-[18px] font-semibold leading-snug transition-colors duration-200 ${
                            isOpen ? "text-[#FF4F00]" : "text-[#282E38] group-hover:text-[#FF4F00]"
                          }`}
                        >
                          {item.question}
                        </span>

                        {/* Interactive Toggle Icon (+ or -) with WCAG Target Size */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                            isOpen
                              ? "bg-[#FF4F00] text-white shadow-sm"
                              : "bg-slate-200/80 text-slate-600 group-hover:bg-[#FFF5F0] group-hover:text-[#FF4F00]"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <Minus className="h-5 w-5 stroke-[2.5]" />
                          ) : (
                            <Plus className="h-5 w-5 stroke-[2.5]" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content with Smooth Transition */}
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${item.id}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                            <p className="text-[15px] leading-[1.65] text-[#475569]">
                              {item.answer}
                            </p>

                            {item.highlight && (
                              <div className="mt-3.5 inline-flex items-center gap-2 rounded-lg bg-[#FFF5F0] px-3 py-1.5 text-xs font-semibold text-[#FF4F00]">
                                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                                <span>{item.highlight}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* =================================================================== */}
              {/* HEURISTIC #6: Persistent Support Card ("Ainda tem dúvidas?")       */}
              {/* =================================================================== */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#F7F8F9] p-6 sm:p-7 text-left shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F0] text-[#FF4F00]">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-[#282E38]">
                        Ainda tem dúvidas?
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                        Fale com nossos especialistas em tempo real e receba uma recomendação sob medida para a sua campanha.
                      </p>
                    </div>
                  </div>

                  {/* Direct WhatsApp Call to Action */}
                  <a
                    href="https://wa.me/551150395212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:bg-[#E64500] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F00] focus:ring-offset-2 min-h-[44px]"
                  >
                    <span>Falar no WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
