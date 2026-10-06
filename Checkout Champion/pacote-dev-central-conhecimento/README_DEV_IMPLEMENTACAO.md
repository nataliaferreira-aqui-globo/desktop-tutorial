# 📦 Pacote de Implementação: Central de Conhecimento, FAQ & Materiais — Aqui Ads

> **Versão Oficial:** 2026.1
> **Status:** Aprovado e pronto para implementação em produção.
> **Arquivos incluídos neste pacote:**
> - `index.html` / `central-conhecimento-aquiads.html`: Protótipo HTML standalone 100% responsivo e funcional.
> - `dados-conhecimento-faq.json`: Base de dados estruturada em JSON contendo FAQ (14 categorias), materiais ricos, banco relacional de termos de busca e tópicos rápidos.
> - `CentralConhecimentoAquiAds.tsx`: Componente React/TypeScript pronto para consumo com Tailwind CSS.
> - `assets/`: Banners em PNG original de alta resolução e WebP 100% Lossless.

---

## 🎨 1. Design System & Tokens Visuais

| Token | Valor Hex / Tailwind | Aplicação |
|---|---|---|
| **Laranja Institucional Primário** | `#FF4F00` / `#EA4432` | Destaques, badges principais, botões de ação e ícones de busca. |
| **Gradiente Mobile Hero (Liso)** | `linear-gradient(135deg, #F37719 0%, #F15A22 50%, #EA4432 100%)` | Fundo oficial no mobile (< 640px), idêntico às outras telas do Aqui Ads. |
| **Dark Navy Desktop Hero** | `#0F172A` | Fundo escuro premium na seção Hero para desktop (>= 640px). |
| **Texto Títulos** | `#1B1B1B` / `#282E38` | Headings, perguntas e títulos de cards com alto contraste WCAG. |
| **Texto Corpo** | `#64748B` / `#475569` | Respostas, descrições secundárias e datas. |
| **Bordas & Divisórias** | `#E2E8F0` / `#F1F5F9` | Cards, acordeões e separadores. |
| **Background da Página** | `#F7F8F9` | Fundo neutro suave para contraste com os cards brancos (`#FFFFFF`). |

---

## 📱 2. Regras Críticas de Comportamento Responsivo do Hero

1. **Mobile (< 640px / < sm):**
   - **A foto do banner NÃO DEVE aparecer** (`hidden sm:block`). Imagens horizontais em telas estreitas sofrem estiramento vertical e cortes indesejados.
   - O fundo deve ser o **gradiente laranja liso oficial do Aqui Ads**:
     `background: linear-gradient(135deg, #F37719 0%, #F15A22 50%, #EA4432 100%)`.
   - Textos e pílulas em branco puro (`#FFFFFF`) para garantir contraste e legibilidade imediata.
   - Botão de ação *'Explorar perguntas frequentes'* com fundo branco e texto em laranja escuro (`#EA4432`).

2. **Desktop (>= 640px / sm: e acima):**
   - Fundo escuro `#0F172A`.
   - Banner fotográfico posicionado à direita (`object-cover object-[right_center]`) utilizando o asset **100% Lossless** (`banner-hero-aquiads.webp` ou `banner-hero-aquiads.png`).
   - Gradiente de proteção suave à esquerda para garantir leitura nítida do texto sem cobrir o totem de rua nem a modelo.

---

## ⚖️ 3. Regras de Negócio e Governança de Conteúdo

1. **Prazos de Aprovação de Criativos:**
   - **OOH, Rádio e TV:** Aprovação em até **72 horas úteis**.
   - **Globo — Mídia Digital:** Aprovação em até **72 horas úteis** (unificado para consistência de comunicação).
2. **Troca de Criativo em Campanha Ativa:**
   - Realizada em *'Meus Anúncios'*, no ícone de três pontinhos da campanha ativa. Válido para OOH, TV, rádio e mídias digitais. Validação técnica em até 2 dias úteis.
3. **Categoria de Pagamentos (Ordem Rigorosa):**
   - A categoria de pagamentos não deve ter novas categorias criadas para notas fiscais. Seguir a ordem exata das subseções:
     1. Investimentos mínimos
     2. Formas de pagamento (Stone, Itaú Checkout, Pagar.me e Pix com validade de 24h)
     3. Parcelamento (Até 3x sem juros; 24 semanas até 6x sem juros)
     4. Cupons
     5. Notas fiscais e faturamento (Notas de OOH ficam em 'Faturamento'; sem duplicações)
     6. Pagamento de rádio
4. **Relatório de Veiculação (Checking):**
   - TV, OOH, digital e portais Globo: disponível na aba *'Meus Anúncios'*.
5. **Terminologias Internas Proibidas:**
   - É **estritamente proibida** qualquer menção ao termo interno *'Globo Impacto'*. Use sempre **'TV aberta'** ou **'TV Globo'**.
6. **Materiais Ricos (Downloads Automáticos):**
   - Os botões 'Baixar' devem disparar o download direto do PDF via atributo `download` apontando para o CDN da Eletromidia:
     - Mídia Kit Aqui Ads: `https://cdn.eletromidia.com.br/seahorse/repositorio/smb/Aqui_ads_Pitch_Pocket_2026.pdf`
     - E-book Dia das Crianças: `https://cdn.eletromidia.com.br/seahorse/repositorio/smb/Aqui_Ads_Ebook_Dia_das_Criancas_CRM_2026.pdf`

---

## 🔍 4. Banco Relacional de Busca e Sinônimos

O arquivo `dados-conhecimento-faq.json` inclui a chave `relationalSearchDatabase` com 14 tópicos indexados por palavras-chave populares e sinônimos de usuários:
- Exemplo: buscas por *'preço'*, *'quanto custa'*, *'boleto'*, *'pix'* mapeiam instantaneamente para a categoria **Contratação — preços e pagamento**.
- Buscas por *'comercial na tv'*, *'novela'*, *'jornal nacional'* mapeiam para **TV aberta**.
- Buscas por *'locução'*, *'spot'*, *'cbn'* mapeiam para **Rádio**.
- Buscas por *'síndico'*, *'prédio'*, *'elevador'* mapeiam para **Painel do síndico**.

---

## 🚀 5. Como Executar e Integrar

### Opção A: Protótipo Standalone (HTML/JS Puro)
Basta abrir `index.html` em qualquer navegador ou servidor estático (Nginx, Apache, S3, Vercel). O arquivo contém tudo embutido e pronto para uso.

### Opção B: Aplicação React / Next.js / Vite
1. Copie `dados-conhecimento-faq.json` para sua pasta de dados/assets (`src/data/`).
2. Copie os banners da pasta `assets/` para a pasta pública do seu projeto (`public/assets/`).
3. Importe o componente `CentralConhecimentoAquiAds.tsx` ou use os componentes internos do seu Design System.

---
*Dúvidas de design ou de negócio podem ser alinhadas com o time de Produto Aqui Ads.*