const BASE_URL = process.env['NEXT_PUBLIC_API_URL'] ?? 'http://localhost:3000';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, token?: string) =>
    request<T>(path, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
  post: <T>(path: string, body: unknown, token?: string) =>
    request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
};
