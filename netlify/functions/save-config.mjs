import { getStore } from '@netlify/blobs';

const ADMIN_PW = process.env.ADMIN_PASSWORD || 'admin2026';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS });
  }

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS });
  }

  try {
    const body = await req.json();

    if (body.password !== ADMIN_PW) {
      return Response.json({ error: 'No autorizado' }, { status: 401, headers: CORS });
    }

    const store = getStore({ name: 'site-data', consistency: 'strong' });
    const payload = { config: body.config };

    // Preserve projects if they exist in current data
    const current = await store.get('site-data', { type: 'json' }).catch(() => null);
    if (current?.projects) {
      payload.projects = current.projects;
    }
    if (body.projects) {
      payload.projects = body.projects;
    }

    await store.set('site-data', JSON.stringify(payload));
    return Response.json({ ok: true }, { headers: CORS });
  } catch (e) {
    console.error('save-config error:', e);
    return Response.json({ error: 'Server error' }, { status: 500, headers: CORS });
  }
};
