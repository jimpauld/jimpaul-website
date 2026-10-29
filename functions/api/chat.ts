import { isValidPass } from '../_lib/pass';

interface Env {
  N8N_CHAT_WEBHOOK: string;
  TURNSTILE_SECRET: string;
}

const MAX_BODY_BYTES = 4096;

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'unsupported content type' }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: 'payload too large' }, { status: 413 });
  }

  let payload: { metadata?: Record<string, unknown> } & Record<string, unknown>;
  try {
    payload = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'bad json' }, { status: 400 });
  }

  const pass = payload?.metadata?.demoPass;
  if (!(await isValidPass(pass, env.TURNSTILE_SECRET))) {
    return Response.json({ error: 'session expired' }, { status: 403 });
  }

  if (payload.metadata) {
    delete payload.metadata.demoPass;
  }

  const upstream = await fetch(env.N8N_CHAT_WEBHOOK, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'https://jimpaul.net',
    },
    body: JSON.stringify(payload),
  });

  const contentType = upstream.headers.get('content-type') ?? '';

  if (!upstream.ok || !contentType.includes('application/json')) {
    return Response.json(
      {
        output:
          'The demo receptionist is offline right now. Please try again in a few minutes.',
      },
      { status: 200, headers: { 'x-demo-degraded': '1' } },
    );
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: { 'content-type': contentType },
  });
};
