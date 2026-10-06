import React from "react";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1B1B1B] text-white pt-16 pb-12">
      <div className="mx-auto max-w-[1333px] px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Logo, Platform info & Payments */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://aquiads.com.br/_astro/logo-aqui-ads.f9282b14.svg"
                alt="Aqui ads"
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center gap-1 font-black text-2xl tracking-tighter">
                      <span class="text-white">aqui</span>
                      <span class="text-[#FF4F00]">ads</span>
                    </div>
                  `;
                }}
              />
              <span className="text-xs font-semibold text-slate-400">
                uma plataforma <span className="font-bold text-white">Globo</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 max-w-md">
              Democratizando a publicidade multicanal de alto impacto para empresas de todos os portes em todo o território nacional.
            </p>
          </div>

          {/* Accepted payment methods */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Formas de pagamento seguras
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                PIX
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                Visa
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                Mastercard
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                Elo
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                Amex
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                Boleto Bancário
              </span>
            </div>
          </div>
        </div>

        {/* Middle Tier: Navigation Columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-6 border-b border-white/10">
          {/* Column 1: Explorar */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Explorar</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#ambientes" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#ambientes" className="hover:text-white transition-colors">Formatos de Mídia</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Para Quem É</a></li>
              <li><a href="#hero-search" className="hover:text-white transition-colors">Simulador de Custos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Blog Aqui Ads</a></li>
            </ul>
          </div>

          {/* Column 2: Ajuda */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Ajuda</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="https://wa.me/551150395212" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fale com Especialista</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Especificações</a></li>
            </ul>
          </div>

          {/* Column 3: OOH */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Mídia OOH</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Elevadores Residenciais</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Elevadores Comerciais</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Faria Lima & Itaim Bibi</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Metrô & Transporte</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Academias Smart Fit</span></li>
            </ul>
          </div>

          {/* Column 4: Globo TV & Digital */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Produtos Globo</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">TV Globo</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Globoplay</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">g1 Notícias</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">ge Esportes</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Valor Econômico</span></li>
            </ul>
          </div>

          {/* Column 5: Rádio & Revistas */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Rádio & Editoras</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">CBN</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Rádio Globo</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">BH FM</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Auto Esporte</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Casa e Jardim</span></li>
            </ul>
          </div>

          {/* Column 6: Atendimento Humano */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Quer uma ajuda?</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href="https://wa.me/551150395212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#FF4F00]" />
                <span>(11) 5039-5212</span>
              </a>
              <a
                href="mailto:contato@aqui.globo"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#FF4F00]" />
                <span>contato@aqui.globo</span>
              </a>
            </div>

            <div className="mt-6">
              <h5 className="text-xs font-semibold text-slate-300 mb-2">Redes Oficiais</h5>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <a href="https://www.linkedin.com/company/aqui-ads/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                <a href="https://www.instagram.com/aqui_ads/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="https://www.youtube.com/@Aqui_ads" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© Copyright 2026 GLOBO COMUNICACAO E PARTICIPACOES S/A | CNPJ: 27.865.757/0096-65</p>
            <p className="mt-1">R. Evandro Carlos de Andrade, 160 - 3º Andar, Vila Cordeiro - São Paulo, SP, 04583-115</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="/checkout" className="text-slate-400 hover:text-[#FF4F00] transition-colors font-medium">Ir para Checkout</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
