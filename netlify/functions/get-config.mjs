import { getStore } from '@netlify/blobs';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS });
  }

  try {
    const store = getStore({ name: 'site-data', consistency: 'strong' });
    const raw = await store.get('site-data', { type: 'json' }).catch(() => null);
    return Response.json(raw || {}, { headers: CORS });
  } catch (e) {
    console.error('get-config error:', e);
    return Response.json({ error: 'Server error' }, { status: 500, headers: CORS });
  }
};
