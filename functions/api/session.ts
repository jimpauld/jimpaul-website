import { issuePass, TURNSTILE_ACTION } from '../_lib/pass';

interface Env {
  TURNSTILE_SECRET: string;
  TURNSTILE_HOSTNAMES: string;
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'unsupported content type' }, { status: 415 });
  }

  let token: unknown;
  try {
    token = (await request.json<{ token?: unknown }>()).token;
  } catch {
    return Response.json({ error: 'bad json' }, { status: 400 });
  }

  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
    return Response.json({ error: 'token required' }, { status: 400 });
  }

  if (!env.TURNSTILE_SECRET) {
    return Response.json({ error: 'missing secret' }, { status: 500 });
  }

  const expectedHostnames = (env.TURNSTILE_HOSTNAMES ?? '')
    .split(',')
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);

  if (expectedHostnames.length === 0) {
    return Response.json({ error: 'missing hostnames' }, { status: 500 });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);

  let verdict: { success: boolean; action?: string; hostname?: string };
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      signal: controller.signal,
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') ?? '',
      }),
    });
    if (!response.ok) {
      return Response.json({ error: `verify http ${response.status}` }, { status: 502 });
    }
    verdict = await response.json();
  } catch {
    return Response.json({ error: 'verify unreachable' }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }

  if (
    verdict.success !== true ||
    verdict.action !== TURNSTILE_ACTION ||
    !expectedHostnames.includes((verdict.hostname ?? '').toLowerCase())
  ) {
    return Response.json({ error: 'challenge failed' }, { status: 403 });
  }

  return Response.json({ pass: await issuePass(env.TURNSTILE_SECRET) });
};
