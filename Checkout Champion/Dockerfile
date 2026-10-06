# Dockerfile ultra-rápido e compatível com redes corporativas
FROM node:20-alpine

WORKDIR /app

# Copia todos os arquivos do projeto
COPY . .

# Expõe a porta do protótipo
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

# Executa diretamente o servidor nativo Node.js (sem downloads externos nem erros de TLS)
CMD ["node", "server.js"]
