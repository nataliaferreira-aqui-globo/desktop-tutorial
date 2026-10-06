# Guia Rápido: Como Visualizar o Protótipo no Docker

Para visualizar a landing page do **Aqui ads** com a **nova seção de FAQ redesenhada**, siga qualquer um dos métodos abaixo:

---

### Método 1: Pelo Docker Desktop (Interface Gráfica)
1. Abra o **Docker Desktop**.
2. Abra a pasta do projeto no seu explorador de arquivos:
   `c:\Users\natalia.ferreira\Documents\Página de pagamento projeto\Checkout Champion`
3. Dê um duplo clique no arquivo **`docker-start.bat`**.
4. Assim que o container subir, abra no seu navegador:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

### Método 2: Pelo Terminal / PowerShell / Prompt de Comando
No diretório do projeto, execute:

```bash
docker compose up --build
```

Ou, se preferir usar comandos Docker diretos:

```bash
# 1. Construir a imagem
docker build -t aquiads-prototype .

# 2. Rodar o container
docker run -p 3000:3000 aquiads-prototype
```

Em seguida, acesse no seu navegador:
👉 **`http://localhost:3000`**

---

### O que você verá no protótipo:
- **Landing Page Completa do Aqui ads clonada e polida:**
  - **Header oficial** com logotipo, seletor de mídia (OOH, Digital, TV, Rádio) e "Assistente de anúncios".
  - **Hero Section** com simulador de endereços e métricas nacionais (+86 mil telas, 100M+ impactos).
  - **Seção de Ambientes** com cards para OOH, TV Globo, Portais Digitais e Rádios.
  - **Depoimentos Reais** com avaliações de clientes e botão "simular minha campanha".
  - **Combos Promocionais** com descontos de até 30% em mídia integrada.
  - **Mapa de Cobertura Brasil** com detalhamento regional e presença nacional.
  - **Artigos do Blog** informativos sobre OOH, programática e multicanal.
  - **NOVA SEÇÃO DE FAQ REDESENHADA (Substituição Exclusiva):**
    - **Heurística #1:** Categoria ativa com barra vertical e texto em laranja da marca (`#FF4F00`). Acordeão aberto com fundo branco, contorno laranja `#FF4F00` e ícone que alterna de `+` para `−`.
    - **Heurística #4:** Padrão universal de acordeão com transições suaves (300ms ease).
    - **Heurística #6:** Card persistente de suporte inferior ("Ainda tem dúvidas?") com botão direto de WhatsApp.
    - **WCAG 2.1 AA:** Alvos de toque >= 44x44px, contraste elevado e navegação 100% por teclado (`Tab`, `Enter`, `Espaço`).
    - **Doodles Ilustrativos:** Desenhos à mão nos cantos superiores do cabeçalho da seção.
    - **Todas as 3 Categorias e 8 Perguntas Estratégicas** completas com respostas ricas em português.
  - **Footer Institucional Completo** com selo Globo, bandeiras de pagamento e redes sociais.
