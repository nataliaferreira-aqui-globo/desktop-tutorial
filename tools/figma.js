// Figma API Helper Script
// Automatically handles SSL corporate certificates and Figma REST API
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN || 'figd_RfZU5BXStMCTtDjNBUr6E_dOppqdOFoi5MoekOVA';

function parseUrl(input) {
  if (!input.startsWith('http')) {
    return { fileKey: input, nodeId: null };
  }
  const url = new URL(input);
  const parts = url.pathname.split('/');
  // URL formats: /file/:key/... or /design/:key/...
  const keyIndex = parts.findIndex(p => p === 'file' || p === 'design');
  const fileKey = keyIndex !== -1 ? parts[keyIndex + 1] : parts[2];
  
  // nodeId is often in query string as node-id=1-2 or 1%3A2
  let nodeId = url.searchParams.get('node-id');
  if (nodeId) {
    nodeId = nodeId.replace('-', ':');
  }
  return { fileKey, nodeId };
}

async function figmaFetch(endpoint) {
  const url = `https://api.figma.com/v1/${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN
    }
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Figma API error (${res.status}): ${errorText}`);
  }
  return await res.json();
}

async function getFileInfo(fileKey) {
  const data = await figmaFetch(`files/${fileKey}?depth=2`);
  const pages = data.document.children.map(p => ({
    id: p.id,
    name: p.name,
    frames: (p.children || []).map(f => ({
      id: f.id,
      name: f.name,
      type: f.type
    }))
  }));
  return {
    name: data.name,
    lastModified: data.lastModified,
    thumbnailUrl: data.thumbnailUrl,
    pages
  };
}

async function getNode(fileKey, nodeId) {
  return await figmaFetch(`files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`);
}

async function exportImage(fileKey, nodeId, format = 'png', scale = 2) {
  const data = await figmaFetch(`images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=${format}&scale=${scale}`);
  const imageUrl = data.images[nodeId];
  if (!imageUrl) {
    throw new Error(`Could not get image render for node ${nodeId}`);
  }
  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());
  return buffer;
}

// CLI handler
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help') {
    console.log(`
Uso:
  node tools/figma.js info <FigmaURL ou FileKey>
  node tools/figma.js node <FigmaURL ou FileKey> [nodeId]
  node tools/figma.js export <FigmaURL ou FileKey> <nodeId> <outputFile> [format: png|svg] [scale]
    `);
    return;
  }

  const target = args[1];
  if (!target) {
    console.error('Erro: informe a URL do Figma ou o FileKey.');
    process.exit(1);
  }

  const { fileKey, nodeId: urlNodeId } = parseUrl(target);

  try {
    if (command === 'info') {
      const info = await getFileInfo(fileKey);
      console.log(JSON.stringify(info, null, 2));
    } else if (command === 'node') {
      const targetNodeId = args[2] || urlNodeId;
      if (!targetNodeId) {
        console.error('Erro: informe o nodeId (ou passe uma URL que já contenha node-id).');
        process.exit(1);
      }
      const data = await getNode(fileKey, targetNodeId);
      console.log(JSON.stringify(data, null, 2));
    } else if (command === 'export') {
      const targetNodeId = args[2] || urlNodeId;
      const outputFile = args[3];
      const format = args[4] || 'png';
      const scale = args[5] || 2;

      if (!targetNodeId || !outputFile) {
        console.error('Erro: informe nodeId e o caminho do arquivo de saída (ex: output.png).');
        process.exit(1);
      }

      const imgBuffer = await exportImage(fileKey, targetNodeId, format, scale);
      fs.mkdirSync(path.dirname(path.resolve(outputFile)), { recursive: true });
      fs.writeFileSync(outputFile, imgBuffer);
      console.log(`Exportado com sucesso para: ${outputFile}`);
    } else {
      console.error(`Comando desconhecido: ${command}`);
    }
  } catch (err) {
    console.error(`Erro na execução:`, err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseUrl, figmaFetch, getFileInfo, getNode, exportImage };
