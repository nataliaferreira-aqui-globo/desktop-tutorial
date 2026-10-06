// Mixpanel API Helper Script
// Connected to project: Aqui Ads (ID: 3387295)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const USER = process.env.MIXPANEL_SERVICE_ACCOUNT_USER || 'antigravity.4782ef.mp-service-account';
const SECRET = process.env.MIXPANEL_SERVICE_ACCOUNT_SECRET || 'aQLdbAdm19zbOrF79FK9kPepy1l5S4DP';
const PROJECT_ID = process.env.MIXPANEL_PROJECT_ID || '3387295';

const authHeader = 'Basic ' + Buffer.from(`${USER}:${SECRET}`).toString('base64');

async function mixpanelQuery(path, options = {}) {
  const separator = path.includes('?') ? '&' : '?';
  const url = `https://mixpanel.com/api/${path}${separator}project_id=${PROJECT_ID}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': authHeader,
      ...options.headers
    },
    ...options
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Mixpanel API error (${res.status}): ${errorText}`);
  }
  return await res.json();
}

async function listEvents() {
  return await mixpanelQuery('query/events/names');
}

async function getTopEvents(type = 'general') {
  return await mixpanelQuery(`query/events/top?type=${type}`);
}

async function listFunnels() {
  return await mixpanelQuery('query/funnels/list');
}

async function getFunnel(funnelId) {
  return await mixpanelQuery(`query/funnels?funnel_id=${funnelId}`);
}

async function getEventProperties(eventName) {
  return await mixpanelQuery(`query/events/properties/top?event=${encodeURIComponent(eventName)}`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help') {
    console.log(`
Mixpanel Helper (Projeto: Aqui Ads - ID: ${PROJECT_ID})
Uso:
  node tools/mixpanel.js events                 # Lista todos os nomes de eventos
  node tools/mixpanel.js top                    # Lista os eventos mais frequentes
  node tools/mixpanel.js funnels                # Lista os funis cadastrados
  node tools/mixpanel.js funnel <funnelId>      # Detalhes e conversão de um funil
  node tools/mixpanel.js props <eventName>      # Propriedades mais comuns de um evento
    `);
    return;
  }

  try {
    if (command === 'events') {
      const events = await listEvents();
      console.log(JSON.stringify(events, null, 2));
    } else if (command === 'top') {
      const top = await getTopEvents();
      console.log(JSON.stringify(top, null, 2));
    } else if (command === 'funnels') {
      const funnels = await listFunnels();
      console.log(JSON.stringify(funnels, null, 2));
    } else if (command === 'funnel') {
      const funnelId = args[1];
      if (!funnelId) {
        console.error('Erro: informe o funnelId.');
        process.exit(1);
      }
      const data = await getFunnel(funnelId);
      console.log(JSON.stringify(data, null, 2));
    } else if (command === 'props') {
      const eventName = args[1];
      if (!eventName) {
        console.error('Erro: informe o nome do evento.');
        process.exit(1);
      }
      const data = await getEventProperties(eventName);
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.error(`Comando desconhecido: ${command}`);
    }
  } catch (err) {
    console.error(`Erro:`, err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  mixpanelQuery,
  listEvents,
  getTopEvents,
  listFunnels,
  getFunnel,
  getEventProperties
};
