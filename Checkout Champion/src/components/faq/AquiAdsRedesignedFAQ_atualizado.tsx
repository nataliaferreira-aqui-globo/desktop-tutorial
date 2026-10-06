import React, { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowUpRight, ShieldCheck, Tv, Radio, Globe, Layers, UserCheck, CreditCard, Wand2, Clock, BarChart3, AlertTriangle, Building2, PhoneCall, Sparkles } from "lucide-react";

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
  tag?: string;
  highlight?: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  description: string;
  iconName: string;
  items: FAQItem[];
}

export const faqCategoriesData: FAQCategory[] = [
  {
    id: "elegibilidade-globo",
    label: "Elegibilidade e regras gerais",
    description: "Perfil de empresas atendidas e regras de blocklist comercial direta da Globo.",
    iconName: "ShieldCheck",
    items: [
      {
        id: "eleg-1",
        question: "Quem pode anunciar através do Aqui Ads?",
        answer: "A plataforma é desenhada especialmente para Pequenas e Médias Empresas (PME) que buscam contratar mídia de grande alcance (TV, Rádio e Digital) de forma simples, guiada, empacotada e sem as burocracias das compras tradicionais de mídia.",
        tag: "Pequenas e médias empresas",
        highlight: "Foco exclusivo em PMEs com contratação simplificada e ágil."
      },
      {
        id: "eleg-2",
        question: "Empresas que já possuem atendimento direto com a Globo podem comprar pelo Aqui Ads?",
        answer: "Não. Clientes que já são encarteirados diretamente pela Globo ou pela Editora Globo (ou seja, que constam na Blocklist de atendimento comercial direto da emissora) não estão elegíveis para contratação self-service pela plataforma Aqui ads.",
        tag: "Regra de blocklist"
      }
    ]
  },
  {
    id: "tv-globo",
    label: "TV aberta",
    description: "Pacotes fechados com CPM fixo, praças P0, formatos de horários e regras de vídeo.",
    iconName: "Tv",
    items: [
      {
        id: "tv-1",
        question: "Como funciona a veiculação na TV Aberta?",
        answer: "A contratação de TV aberta é baseada em pacotes fechados, vendido em pacotes fechados com entrega de impactos e audiência garantida com CPM fixo. A distribuição dos comerciais na grade é realizada automaticamente pelo algoritmo inteligente da Globo, garantindo a entrega do volume contratado de forma always-on.",
        tag: "TV Aberta - CPM fixo",
        highlight: "CPM fixo e audiência garantida com distribuição algorítmica."
      },
      {
        id: "tv-2",
        question: "O anunciante pode escolher o programa, horário ou dia exato da exibição?",
        answer: "Não. O modelo de compra simplificada troca o controle fino pela simplicidade, menor custo e previsibilidade garantida de entrega. Não é possível escolher programas específicos (como novelas do horário nobre ou futebol), datas exatas ou horários fixos. Os comerciais são veiculados de forma rotativa e estratégica ao longo da programação.",
        tag: "Modelo rotativo"
      },
      {
        id: "tv-3",
        question: "Quais praças estão disponíveis para compra de TV Aberta na fase P0?",
        answer: "Na fase inicial (P0), o anunciante pode contratar a veiculação no sinal Nacional (sinal único veiculado para todo o Brasil) ou nas praças regionais: São Paulo, Rio de Janeiro, Belo Horizonte, Distrito Federal e Recife.",
        tag: "Praças P0"
      },
      {
        id: "tv-4",
        question: "Qual é a duração permitida para uma campanha de TV?",
        answer: "As campanhas de TV Aberta no P0 têm duração de 11 a 28 dias, sendo configuráveis em ciclos fechados de 1 a 4 semanas de veiculação contínua.",
        tag: "Duração: 11 a 28 dias"
      },
      {
        id: "tv-5",
        question: "Quais são os formatos de pacotes disponíveis para a TV?",
        answer: "Os pacotes são configurados por 3 dimensões: 1) Faixa Horária: Sem Prime Time (Manhã, Tarde, Madrugada) ou Com Prime Time (Manhã, Tarde, Noite, Madrugada); 2) Dias da Semana: Todos os dias, Domingo a Quarta ou Quinta a Sábado; 3) Gênero: Dramaturgia & Variedades ou Esportes & Jornalismo.",
        tag: "Formatos de pacote"
      },
      {
        id: "tv-6",
        question: "Quantos criativos de vídeo podem ser enviados por campanha?",
        answer: "Cada campanha permite a inclusão de apenas 1 criativo de vídeo, que deve atender estritamente às especificações técnicas da Globo e passar por validação prévia da equipe de OPEC/Globo. É permitido concluir o pedido e enviar o arquivo de vídeo posteriormente.",
        tag: "1 vídeo por campanha"
      },
      {
        id: "tv-7",
        question: "Como é comprovada a exibição da campanha na TV?",
        answer: "A comprovação é feita de maneira 100% auditada diretamente no dashboard de resultados dentro da plataforma. Caso ocorra entrega abaixo do volume contratado (under-delivery), a compensação é feita automaticamente via inserções adicionais.",
        tag: "Compensação garantida"
      }
    ]
  },
  {
    id: "radio-globo",
    label: "Rádio (CBN, BH FM e Rádio Globo)",
    description: "Spot de 30s, modelos rotativo e determinado, perfis das emissoras.",
    iconName: "Radio",
    items: [
      {
        id: "rad-1",
        question: "Como funciona o processo de contratação para Rádio?",
        answer: "O anunciante preenche um formulário de interesse na plataforma Aqui Ads. Um executivo de contas entra em contato em até 12 horas úteis para prestar suporte consultivo e finalizar as configurações e gravação da campanha.",
        tag: "Contato em até 12h úteis"
      },
      {
        id: "rad-2",
        question: "Quais emissoras estão disponíveis e quais são seus perfis?",
        answer: "• Rádio CBN: Focada em notícias (all news), atingindo executivos, empresários e tomadores de decisão.\n• BH FM: Voltada para música e entretenimento em Minas Gerais.\n• Rádio Globo: Perfil popular e urbano com música, esportes e notícias.",
        tag: "Perfis de audiência"
      },
      {
        id: "rad-3",
        question: "Qual é o formato do anúncio de rádio aceito?",
        answer: "É aceito exclusivamente o Spot de 30 segundos (locução narrada com opção de trilha de fundo e efeitos sonoros profissionais). O formato jingle (música cantada) não é utilizado.",
        tag: "Spot de 30s narrado"
      },
      {
        id: "rad-4",
        question: "Quais são os modelos de veiculação e suas durações?",
        answer: "• Plano Rotativo: 7 dias (Segunda a Domingo), 21 inserções no total (3/dia), locução de locutor da rádio.\n• Plano Determinado: 5 dias (Segunda a Sexta), 15 inserções no total (3/dia) em programas específicos com locução do próprio apresentador.",
        tag: "Planos de 5 e 7 dias"
      },
      {
        id: "rad-5",
        question: "É possível alterar o texto do comercial após o envio?",
        answer: "Não. Uma vez enviado o texto-base e realizada a gravação do áudio no estúdio da rádio, não é possível fazer alterações no texto durante o período de veiculação.",
        tag: "Texto final após gravação"
      }
    ]
  },
  {
    id: "midia-digital",
    label: "Mídia digital (Editora Globo)",
    description: "Rede de portais (O Globo, TechTudo, Vogue), CPM de R$ 9,60 e formatos display.",
    iconName: "Globe",
    items: [
      {
        id: "dig-1",
        question: "Como funciona a veiculação nos portais digitais da Editora Globo?",
        answer: "Os anúncios são veiculados de forma distribuída em toda a rede digital da Editora Globo (incluindo O Globo, TechTudo, Vogue, Casa e Jardim, Época Negócios), operando sob CPM fixo de R$ 9,60.",
        tag: "CPM fixo R$ 9,60"
      },
      {
        id: "dig-2",
        question: "Quais formatos de anúncios digitais são aceitos na V1?",
        answer: "Nesta fase inicial (V1), são aceitos exclusivamente formatos de mídia display padrão IAB: Billboard, Maxiboard, Retângulo Médio e Half Page.",
        tag: "Mídia display"
      },
      {
        id: "dig-3",
        question: "Quais segmentações de público podem ser aplicadas no digital?",
        answer: "O anunciante pode filtrar por Região geográfica, Gênero, Interesses temáticos e Faixa etária com base na inteligência de dados dos portais Globo.",
        tag: "Segmentação inteligente"
      }
    ]
  },
  {
    id: "geral-plataforma",
    label: "Geral e sobre a plataforma",
    description: "O que é o Aqui ads, ecossistema Eletromidia e como fazer parte.",
    iconName: "Layers",
    items: [
      {
        id: "ger-1",
        question: "O que é o Aqui Ads?",
        answer: "O Aqui Ads é a plataforma autônoma da Eletromidia para micro, pequenos e médios anunciantes criarem, contratarem e gerenciarem campanhas de mídia out-of-home (OOH) com total facilidade, rapidez e sem intermediários.",
        tag: "Plataforma autônoma"
      },
      {
        id: "ger-2",
        question: "O que é a Eletromidia?",
        answer: "A Eletromidia é a maior empresa brasileira de mídia out-of-home (OOH), presente em mais de 80 cidades e impactando milhões de pessoas diariamente em elevadores, transportes, shoppings e ruas.",
        tag: "Líder em OOH"
      },
      {
        id: "ger-3",
        question: "Como trabalhar na Eletromidia?",
        answer: "Você pode acompanhar as vagas abertas e cadastrar seu currículo diretamente na nossa página oficial de carreiras na Gupy: eletromidia.gupy.io.",
        tag: "Carreiras"
      }
    ]
  },
  {
    id: "cadastro-acesso",
    label: "Cadastro e acesso",
    description: "Requisitos de elegibilidade, recuperação de senha e gestão de dados cadastrais.",
    iconName: "UserCheck",
    items: [
      {
        id: "cad-1",
        question: "Quem pode anunciar no Aqui Ads?",
        answer: "Pessoas físicas com 18 anos ou mais e pessoas jurídicas regularmente constituídas e com plena capacidade civil podem criar conta e veicular anúncios na plataforma.",
        tag: "Requisitos"
      },
      {
        id: "cad-2",
        question: "Como recuperar a senha do Aqui Ads?",
        answer: "Acesse aquiads.com.br, clique em 'Entrar', insira seu e-mail cadastrado e selecione a opção 'Esqueci minha senha'. Você receberá as instruções de redefinição no seu e-mail em instantes.",
        tag: "Segurança de acesso"
      },
      {
        id: "cad-3",
        question: "Como alterar ou excluir dados do cadastro?",
        answer: "O usuário é responsável pela veracidade e atualização de seus dados. Para alterações ou solicitações conforme a LGPD, basta entrar em contato através dos canais de suporte.",
        tag: "Privacidade & LGPD"
      }
    ]
  },
  {
    id: "contratacao-precos",
    label: "Contratação, preços e pagamento",
    description: "Valores OOH, parcelamentos, combos promocionais e desconto para condôminos.",
    iconName: "CreditCard",
    items: [
      {
        id: "pag-1",
        question: "Como fazer um pedido no Aqui Ads?",
        answer: "O processo é 100% digital: acesse aquiads.com.br, selecione os pontos desejados no mapa, escolha o período da campanha, adicione sua arte (ou use o gerador com IA gratuito) e realize o pagamento.",
        tag: "Fluxo simplificado"
      },
      {
        id: "pag-2",
        question: "Quanto custa anunciar no Aqui Ads?",
        answer: "O plano inicial em elevador residencial custa a partir de R$ 194,00 por 14 dias ou R$ 323,00 por 28 dias. Já comerciais, shoppings, aeroportos e transportes têm preços variados conforme o número de telas e alcance.",
        tag: "Preço acessível"
      },
      {
        id: "pag-3",
        question: "Existem combos promocionais?",
        answer: "Sim! Disponibilizamos combos de 4 e 12 semanas com descontos que podem chegar a 30% OFF em aquiads.com.br/combos.",
        tag: "Descontos de até 30%"
      },
      {
        id: "pag-4",
        question: "Condôminos têm desconto?",
        answer: "Sim! Moradores de edifícios que contam com telas ativas da Eletromidia possuem desconto exclusivo de condômino para anunciar no próprio prédio (limitado a 1 slot ativo por condômino).",
        tag: "Benefício exclusivo"
      },
      {
        id: "pag-5",
        question: "Quais são as formas de pagamento aceitas?",
        answer: "Aceitamos Pix (confirmação instantânea), Cartão de Crédito das principais bandeiras e Boleto Bancário.",
        tag: "Pagamento seguro"
      },
      {
        id: "pag-6",
        question: "Como funciona o parcelamento no cartão de crédito?",
        answer: "• Pedidos acima de R$ 2.000,00: em até 3x sem juros.\n• Campanhas de 12 semanas (3 meses): em até 3x sem juros.\n• Campanhas de 24 semanas (6 meses): em até 6x sem juros.",
        tag: "Parcelamento sem juros"
      },
      {
        id: "pag-7",
        question: "Onde aplicar cupom de desconto?",
        answer: "No carrinho de compras, antes de finalizar o pedido, insira seu código no campo 'Possui um cupom de desconto?' e clique em aplicar.",
        tag: "Cupons promocionais"
      }
    ]
  },
  {
    id: "criacao-ia",
    label: "Criação de mídia e uso de IA",
    description: "Formatos técnicos, IA generativa (Gemini/VEO 3) e serviço de produção de artes.",
    iconName: "Wand2",
    items: [
      {
        id: "ia-1",
        question: "Quais os formatos aceitos no Aqui Ads?",
        answer: "São aceitos vídeos em MP4 (h.264, sem áudio, até 20MB) e imagens em PNG ou JPG (alta resolução, até 5MB). Duração padrão: 10 segundos por exibição.",
        tag: "Especificação técnica"
      },
      {
        id: "ia-2",
        question: "Como funciona a criação de anúncios por Inteligência Artificial?",
        answer: "A plataforma oferece gratuitamente ferramentas de IA de ponta (Gemini e VEO 3) para criar títulos, textos e imagens de fundo sob medida sem custo adicional.",
        tag: "IA sem custo adicional"
      },
      {
        id: "ia-3",
        question: "Quais as regras da IA generativa?",
        answer: "É proibido remover marcas d'água de identificação de IA, gerar conteúdos enganosos, ofensivos ou utilizar dados confidenciais ou de terceiros sem autorização.",
        tag: "Termos de uso de IA"
      },
      {
        id: "ia-4",
        question: "Como funciona o Serviço de Produção de Criativos?",
        answer: "Com nosso time de designers: confirmação do briefing em até 12h úteis, V1 entregue em até 48h úteis, com até 2 rodadas de refação inclusas.",
        tag: "Design profissional"
      },
      {
        id: "ia-5",
        question: "Posso subir mais de uma mídia por compra?",
        answer: "É permitido enviar apenas 1 mídia por ambiente por compra. Para peças diferentes, basta realizar pedidos separados.",
        tag: "Regra de upload"
      }
    ]
  },
  {
    id: "veiculacao-prazos",
    label: "Veiculação, aprovação e prazos (OOH)",
    description: "Looping de exibição, prazos de moderação técnica e horários das telas.",
    iconName: "Clock",
    items: [
      {
        id: "veic-1",
        question: "Qual o tempo de duração e a frequência nas telas digitais?",
        answer: "Cada exibição possui 10 segundos de duração e é repetida a cada 3 minutos em média no loop contínuo das telas.",
        tag: "Alta frequência"
      },
      {
        id: "veic-2",
        question: "Qual o prazo de aprovação do anúncio?",
        answer: "A moderação técnica ocorre em até 72 horas úteis (segunda a sexta, das 09h às 18h). Assim que aprovado, entra no cronograma previsto.",
        tag: "Prazo de aprovação"
      },
      {
        id: "veic-3",
        question: "Quais os horários de veiculação das telas?",
        answer: "• Residenciais, ruas e aeroportos: 24h por dia, 7 dias por semana.\n• Comerciais: seg a sex, das 05h59 às 23h59.\n• Shoppings e transportes: acompanham o horário de funcionamento local.",
        tag: "Cobertura completa"
      },
      {
        id: "veic-4",
        question: "Como é a exibição em elevadores residenciais?",
        answer: "Nas telas de elevadores residenciais, o anúncio é exibido na área superior de destaque (800x600px), enquanto a inferior traz notícias e informes condominiais.",
        tag: "Formato residencial"
      }
    ]
  },
  {
    id: "gestao-comprovacao",
    label: "Gestão, alteração e comprovação",
    description: "Acompanhamento diário de métricas, troca de artes, renovação e checking.",
    iconName: "BarChart3",
    items: [
      {
        id: "gest-1",
        question: "Como acompanhar a veiculação da minha campanha?",
        answer: "Na aba 'Meus Anúncios', você acessa relatórios diários de alcance estimado, exibições acumuladas, impacto total e frequência média.",
        tag: "Métricas em tempo real"
      },
      {
        id: "gest-2",
        question: "Como trocar a arte de um anúncio ativo?",
        answer: "Em 'Meus Anúncios', clique no menu (...) e selecione 'Trocar Arte'. Após validação técnica, a atualização nas telas físicas ocorre em até 1 dia útil.",
        tag: "Flexibilidade"
      },
      {
        id: "gest-3",
        question: "A renovação da campanha é automática?",
        answer: "Não. A renovação não é automática. Para continuar anunciando, basta clicar em 'Renovar' antes ou após o término.",
        tag: "Controle total"
      },
      {
        id: "gest-4",
        question: "Como solicitar o checking (comprovação fotográfica)?",
        answer: "Envie um e-mail com o número do seu pedido para: aqui@eletromidia.com.br.",
        tag: "Comprovação auditada"
      },
      {
        id: "gest-5",
        question: "Posso visitar um prédio privado para ver o anúncio?",
        answer: "Não. O acesso a edifícios residenciais ou comerciais é exclusivo para moradores, condôminos e funcionários autorizados.",
        tag: "Segurança condominial"
      }
    ]
  },
  {
    id: "proibicoes-restricoes",
    label: "Proibições e restrições",
    description: "Diretrizes legais, conteúdos vetados e políticas de segurança editorial.",
    iconName: "AlertTriangle",
    items: [
      {
        id: "proib-1",
        question: "O que não pode ser anunciado?",
        answer: "Conforme a legislação e o CONAR, é proibido veicular conteúdos políticos/eleitorais, religiosos, eróticos/pornográficos, preconceituosos, atividades ilícitas, comércio de animais ou produtos nocivos à saúde (fumo/vapes).",
        tag: "Diretrizes do CONAR"
      },
      {
        id: "proib-2",
        question: "Anúncios em shoppings têm restrições específicas?",
        answer: "Sim. Em shoppings centers, não são aceitas veiculações que gerem conflito direto de interesse ou concorrência desleal com lojistas fixos do próprio shopping.",
        tag: "Política de shopping"
      },
      {
        id: "proib-3",
        question: "A Eletromidia realiza sorteios ou distribuição de prêmios?",
        answer: "Não. A Eletromidia e o Aqui Ads nunca realizam sorteios ou oferta de produtos de crédito. Desconfie de golpes com o nome da marca.",
        tag: "Alerta de segurança"
      }
    ]
  },
  {
    id: "painel-sindico",
    label: "Painel do síndico / condomínio",
    description: "Instalação de telas sem custo para o prédio, acesso e suporte predial.",
    iconName: "Building2",
    items: [
      {
        id: "sind-1",
        question: "Como acessar o sistema do síndico?",
        answer: "Síndicos e administradoras parceiras podem gerenciar comunicados acessando o portal: painel.eletromidia.com.br.",
        tag: "Portal exclusivo"
      },
      {
        id: "sind-2",
        question: "Como solicitar alteração de e-mail ou senha do síndico?",
        answer: "A recuperação pode ser feita no painel. Para troca de gestor do condomínio, envie e-mail para atendimento@eletromidia.com.br.",
        tag: "Suporte predial"
      },
      {
        id: "sind-3",
        question: "Como solicitar telas da Eletromidia para o meu condomínio?",
        answer: "A instalação de telas digitais em elevadores é totalmente sem custo para o condomínio! Solicite avaliação enviando e-mail para: contato@aqui.globo.",
        tag: "Custo zero para o prédio"
      }
    ]
  },
  {
    id: "canais-atendimento",
    label: "Canais de atendimento oficial",
    description: "Como falar com consultores, suporte técnico e horários de funcionamento.",
    iconName: "PhoneCall",
    items: [
      {
        id: "atend-1",
        question: "Quais são os canais oficiais de atendimento do Aqui Ads?",
        answer: "• WhatsApp oficial: (11) 5039-5212\n• E-mail institucional: contato@aqui.globo\n• Checking de campanhas: aqui@eletromidia.com.br\n• Horário de suporte: segunda a sexta, das 09h às 18h.",
        tag: "Canais verificados",
        highlight: "Atendimento consultivo direto por WhatsApp no (11) 5039-5212."
      }
    ]
  }
];

export const AquiAdsRedesignedFAQ_atualizado: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("geral-plataforma");
  const [openItems, setOpenItems] = useState<Record<string | number, boolean>>({
    "eleg-1": true,
    "tv-1": true,
    "ger-1": true,
    "atend-1": true
  });

  const activeCategory = faqCategoriesData.find((cat) => cat.id === activeCategoryId) || faqCategoriesData[0];

  const toggleItem = (id: string | number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAllInCategory = () => {
    const allOpen = activeCategory.items.every((item) => openItems[item.id]);
    const nextState = { ...openItems };
    activeCategory.items.forEach((item) => {
      nextState[item.id] = !allOpen;
    });
    setOpenItems(nextState);
  };

  const anyOpen = activeCategory.items.some((item) => openItems[item.id]);

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 sm:py-24 border-t border-slate-100 scroll-mt-20"
      aria-labelledby="faq-main-heading"
    >
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        
        {/* Header com Doodles */}
        <div className="relative mb-14 text-center">
          <div className="absolute -top-6 left-2 sm:left-12 lg:left-24 text-[#FF4F00] opacity-80 pointer-events-none select-none" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M24 4V44M4 24H44M10 10L38 38M10 38L38 10"/>
            </svg>
          </div>
          <div className="absolute -top-4 right-2 sm:right-12 lg:right-24 text-[#FF4F00] opacity-80 pointer-events-none select-none" aria-hidden="true">
            <svg width="46" height="46" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M25 8 C36 8 42 16 42 25 C42 34 34 42 25 42 C16 42 10 34 10 25 C10 18 16 14 22 14 C28 14 32 18 32 23 C32 28 28 31 24 31 C20 31 18 28 18 25"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF5F0] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#FF4F00] mb-3">
            <span>Perguntas Frequentes</span>
          </div>

          <h2 id="faq-main-heading" className="text-3xl font-bold tracking-tight text-[#282E38] sm:text-4xl lg:text-5xl font-['Rethink_Sans']">
            Ficou com alguma <span className="text-[#FF4F00]">dúvida?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#64748B] font-['Rethink_Sans']">
            Tire suas dúvidas sobre como anunciar no Aqui ads, prazos, formatos e métricas de impacto.
          </p>
        </div>

        {/* 2 Colunas */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-2.5">
              <div className="mb-1 px-1 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Tópicos de Ajuda</span>
                <span className="text-xs font-semibold text-slate-400">13 categorias</span>
              </div>

              <div className="flex flex-col gap-2 max-h-[580px] overflow-y-auto pr-1">
                {faqCategoriesData.map((category) => {
                  const isActive = category.id === activeCategoryId;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategoryId(category.id)}
                      className={`group flex items-center justify-between rounded-xl border-l-4 p-3.5 text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border-[#FF4F00] bg-[#FFF5F0] shadow-sm"
                          : "border-transparent bg-[#F9F9F9] hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isActive ? "bg-[#FF4F00] text-white" : "bg-slate-200 text-slate-700 group-hover:bg-slate-300"
                          }`}
                        >
                          <Layers className="h-4 w-4" />
                        </div>
                        <div className="truncate">
                          <span
                            className={`block text-xs sm:text-sm truncate ${
                              isActive ? "font-bold text-[#FF4F00]" : "font-medium text-[#282E38]"
                            }`}
                          >
                            {category.label}
                          </span>
                          <span className="text-[11px] text-[#64748B] block truncate">{category.description}</span>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                          isActive ? "bg-[#FF4F00] text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {category.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Card WhatsApp */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-[#F7F8F9] p-4 text-left">
                <div className="flex items-center gap-2 mb-2 text-[#282E38] font-bold text-sm">
                  <MessageCircle className="h-4 w-4 text-[#FF4F00]" />
                  <span>Atendimento Consultivo</span>
                </div>
                <p className="text-xs text-[#64748B] mb-3 leading-relaxed">
                  Precisa de uma proposta sob medida para sua marca ou agência? Fale agora no WhatsApp oficial.
                </p>
                <a
                  href="https://wa.me/551150395212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#282E38] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-black w-full shadow-xs"
                >
                  <span>(11) 5039-5212</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Acordeões */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#282E38]">{activeCategory.label}</h3>
                <p className="text-xs sm:text-sm text-[#64748B]">{activeCategory.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleAllInCategory}
                  className="text-xs font-semibold text-[#FF4F00] hover:text-[#E64500] cursor-pointer"
                >
                  {anyOpen ? "Recolher todas" : "Expandir todas"}
                </button>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {activeCategory.items.length} {activeCategory.items.length === 1 ? "pergunta" : "perguntas"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {activeCategory.items.map((item) => {
                const isOpen = !!openItems[item.id];
                return (
                  <div
                    key={item.id}
                    className={`accordion-card overflow-hidden transition-all duration-300 rounded-2xl ${
                      isOpen
                        ? "border-2 border-[#FF4F00] bg-white shadow-sm ring-1 ring-[#FF4F00]/20"
                        : "border border-slate-200/90 bg-[#F9F9F9] hover:border-slate-300 hover:bg-[#F5F5F7]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(item.id)}
                      className="group flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left focus:outline-none min-h-[56px] cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isOpen ? "bg-[#FFF5F0] text-[#FF4F00]" : "bg-white text-slate-400 border border-slate-200"
                          }`}
                        >
                          ?
                        </div>
                        <div>
                          <span
                            className={`faq-question-text text-[15px] sm:text-[17px] font-semibold leading-snug ${
                              isOpen ? "text-[#FF4F00]" : "text-[#282E38] group-hover:text-[#FF4F00]"
                            } transition-colors`}
                          >
                            {item.question}
                          </span>
                          {item.tag && (
                            <span className="inline-block ml-2 text-[10px] font-semibold text-[#FF4F00] bg-[#FFF5F0] px-2 py-0.5 rounded-md">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>

                      <div
                        className={`faq-icon-pill flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isOpen
                            ? "bg-[#FF4F00] text-white shadow-sm"
                            : "bg-slate-200 text-slate-600 group-hover:bg-[#FFF5F0] group-hover:text-[#FF4F00]"
                        } transition-all duration-200`}
                      >
                        {isOpen ? <Minus className="h-4 w-4 stroke-[2.5]" /> : <Plus className="h-4 w-4 stroke-[2.5]" />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                          <p className="text-[14px] leading-[1.65] text-[#475569] whitespace-pre-line">
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

            {/* Support Card */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F7F8F9] p-6 sm:p-7 text-left shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F0] text-[#FF4F00]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#282E38]">Ainda tem dúvidas?</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                      Fale com nossos especialistas em tempo real e receba uma recomendação sob medida para a sua campanha.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/551150395212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:bg-[#E64500] hover:shadow-lg focus:outline-none min-h-[44px]"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
