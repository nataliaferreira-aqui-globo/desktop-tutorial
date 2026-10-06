const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

const server = http.createServer((req, res) => {
  // CORS & encoding
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  let cleanUrl = req.url.split("?")[0];
  let filePath;

  if (cleanUrl === "/" || cleanUrl === "/faq" || cleanUrl === "/index.html") {
    filePath = path.join(__dirname, "prototipo-aquiads-faq.html");
  } else if (cleanUrl === "/conhecimento" || cleanUrl === "/ajuda" || cleanUrl === "/central") {
    filePath = path.join(__dirname, "prototipo-central-conhecimento.html");
  } else {
    filePath = path.join(__dirname, cleanUrl);
  }

  // Fallback if file doesn't exist
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(__dirname, "prototipo-aquiads-faq.html");
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "text/html; charset=utf-8";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Erro interno ao carregar protótipo: " + err.message);
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(PORT, HOST, () => {
  console.log("===============================================================");
  console.log("  PROTÓTIPO AQUI ADS PRONTO NO DOCKER!");
  console.log(`  Abra no seu navegador: http://localhost:${PORT}`);
  console.log("===============================================================");
});
