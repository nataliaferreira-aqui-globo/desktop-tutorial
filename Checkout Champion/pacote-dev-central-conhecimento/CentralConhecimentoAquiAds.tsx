import React, { useState, useMemo } from 'react';
import knowledgeData from './dados-conhecimento-faq.json';

export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  size: string;
  date: string;
  pages: string;
  desc: string;
  badge: string;
  gradient: string;
  icon: string;
  fileUrl: string;
  pendingDev?: boolean;
}

export interface FAQItem {
  id: number;
  q: string;
  a: string;
  tag: string;
  open?: boolean;
}

export interface FAQCategory {
  id: string;
  title: string;
  desc: string;
  items: FAQItem[];
}

export const CentralConhecimentoAquiAds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState(knowledgeData.categoriesData[0]?.id || '');
  const [openQuestionIds, setOpenQuestionIds] = useState<Record<number, boolean>>({ 101: true });

  const toggleQuestion = (id: number) => {
    setOpenQuestionIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeCategory = useMemo(() => {
    return knowledgeData.categoriesData.find(c => c.id === activeCategoryId) || knowledgeData.categoriesData[0];
  }, [activeCategoryId]);

  return (
    <div className="w-full bg-[#F7F8F9] min-h-screen text-[#1B1B1B] font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden text-white min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center bg-gradient-to-br from-[#F37719] via-[#F15A22] to-[#EA4432] sm:bg-[#0F172A]">
        {/* Banner Desktop Lossless */}
        <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="/assets/banner-hero-aquiads.webp" 
            alt="Aqui Ads Hero Banner" 
            className="h-full w-full object-cover object-[right_center] opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] from-20% via-[#0F172A]/70 via-45% to-transparent to-75%" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1333px] w-full px-4 sm:px-6 lg:px-8 pt-7 pb-16 sm:py-12 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 sm:bg-white/15 px-3.5 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md border border-white/30 sm:border-white/20 shadow-xs mb-4 sm:mb-6">
            <span className="flex h-2 w-2 rounded-full bg-white sm:bg-[#FF4F00] animate-pulse" />
            <span className="text-xs font-bold tracking-wide text-white">Pra quem pensa grande</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[115%] text-white">
            Central de ajuda e <span className="text-white sm:text-[#FF4F00]">conhecimento</span>
          </h1>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-white/95 sm:text-slate-100 leading-relaxed max-w-2xl font-normal">
            Explore as possibilidades do Aqui Ads: tudo o que você precisa saber para anunciar em TV, rádios, telas de OOH e portais digitais.
          </p>
        </div>
      </section>

      {/* 2. BARRA DE BUSCA */}
      <section className="relative -mt-8 sm:-mt-7 z-20 mx-auto max-w-[1333px] px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-3.5 sm:p-6 shadow-xl border border-slate-200">
          <input 
            type="text" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar dúvidas, artigos ou materiais..." 
            className="h-12 sm:h-14 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm sm:text-base text-[#1B1B1B] focus:border-[#FF4F00] focus:bg-white focus:outline-none"
          />
        </div>
      </section>

      {/* 3. MATERIAIS RICOS */}
      <section className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B1B1B]">Materiais e Mídia Kits Oficiais</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Conheça o Aqui Ads a fundo com nossos materiais.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {knowledgeData.materialsData.map(mat => (
            <div key={mat.id} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#FF4F00] uppercase tracking-wider">{mat.badge}</span>
                <h3 className="text-base font-bold text-[#1B1B1B] mt-1">{mat.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{mat.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 leading-none">
                  <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span>{mat.date} • {mat.pages}</span>
                </span>
                <a 
                  href={mat.fileUrl} 
                  download={mat.title} 
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF4F00] hover:bg-[#E64500] text-white px-3.5 py-1.5 font-bold shadow-md shadow-orange-500/20 text-xs"
                >
                  Baixar ({mat.size})
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DE PERGUNTAS FREQUENTES (FAQ) */}
      <section className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navegação de Categorias */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 space-y-1.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Categorias</h3>
            {knowledgeData.categoriesData.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between ${
                  activeCategoryId === cat.id 
                    ? 'bg-[#FF4F00] text-white shadow-md shadow-orange-500/20' 
                    : 'bg-white hover:bg-slate-100 text-[#282E38] border border-slate-200'
                }`}
              >
                <span>{cat.title}</span>
                <span className="text-xs opacity-75">{cat.items.length}</span>
              </button>
            ))}
          </div>

          {/* Acordeões de Perguntas */}
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-xl font-extrabold text-[#1B1B1B] mb-4">{activeCategory?.title}</h2>
            {activeCategory?.items.map(item => {
              const isOpen = !!openQuestionIds[item.id];
              return (
                <div key={item.id} className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all">
                  <button 
                    onClick={() => toggleQuestion(item.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-[#1B1B1B] hover:text-[#FF4F00]"
                  >
                    <span>{item.q}</span>
                    <span className="text-lg text-slate-400 shrink-0">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div 
                      className="px-4 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CentralConhecimentoAquiAds;