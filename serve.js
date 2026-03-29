const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8092;
const DIR = __dirname;
const DATA_FILE = path.join(DIR, 'config.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin2026';
const MAX_BODY = 5 * 1024 * 1024;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY) { reject(new Error('Too large')); req.destroy(); }
      body += chunk;
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function loadData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch { return {}; }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };

  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }

  // API: get-config
  if (url.pathname === '/api/get-config' && req.method === 'GET') {
    const data = loadData();
    res.writeHead(200, { ...cors, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
  }

  // API: save-config
  if (url.pathname === '/api/save-config' && req.method === 'POST') {
    const body = JSON.parse(await readBody(req));
    if (body.password !== ADMIN_PASSWORD) {
      res.writeHead(401, { ...cors, 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'No autorizado' }));
    }
    const payload = { config: body.config };
    const current = loadData();
    if (current.projects) payload.projects = current.projects;
    if (body.projects) payload.projects = body.projects;
    fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2));
    res.writeHead(200, { ...cors, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true }));
  }

  // Static files
  let filePath = path.join(DIR, url.pathname === '/' ? 'index.html' : url.pathname);
  if (!fs.existsSync(filePath)) { res.writeHead(404); return res.end('Not found'); }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
