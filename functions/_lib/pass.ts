export const PASS_TTL_MS = 2 * 60 * 60 * 1000;

export const TURNSTILE_ACTION = 'receptionist';

async function sign(value: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(mac))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function issuePass(secret: string): Promise<string> {
  const expiry = String(Date.now() + PASS_TTL_MS);
  return `${expiry}.${await sign(expiry, secret)}`;
}

export async function isValidPass(pass: unknown, secret: string): Promise<boolean> {
  if (typeof pass !== 'string') return false;
  const [expiry, mac] = pass.split('.');
  if (!expiry || !mac) return false;
  if (!/^\d+$/.test(expiry)) return false;
  if (Number(expiry) < Date.now()) return false;
  const expected = await sign(expiry, secret);
  if (expected.length !== mac.length) return false;
  let mismatch = 0;
  for (let index = 0; index < expected.length; index += 1) {
    mismatch |= expected.charCodeAt(index) ^ mac.charCodeAt(index);
  }
  return mismatch === 0;
}
