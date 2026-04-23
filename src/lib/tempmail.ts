const API_BASE = "https://api.mail.tm";

export interface TempAccount {
  id: string;
  address: string;
  token: string;
}

export interface TempMessage {
  id: string;
  from: { address: string; name: string };
  subject: string;
  intro: string;
  text: string;
  html: string[];
  createdAt: string;
  seen: boolean;
}

async function getRandomDomain(): Promise<string> {
  const res = await fetch(`${API_BASE}/domains`);
  const data = await res.json();
  const domains = data["hydra:member"] || data;
  if (!domains.length) throw new Error("No domains available");
  return domains[0].domain;
}

function randomString(len: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export async function createAccount(): Promise<TempAccount> {
  const domain = await getRandomDomain();
  const address = `${randomString(10)}@${domain}`;
  const password = randomString(16);

  const createRes = await fetch(`${API_BASE}/accounts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, password }),
  });

  if (!createRes.ok) throw new Error("Failed to create account");
  const account = await createRes.json();

  const tokenRes = await fetch(`${API_BASE}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, password }),
  });

  if (!tokenRes.ok) throw new Error("Failed to get token");
  const tokenData = await tokenRes.json();

  return { id: account.id, address, token: tokenData.token };
}

export async function fetchMessages(token: string): Promise<TempMessage[]> {
  const res = await fetch(`${API_BASE}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch messages");
  const data = await res.json();
  return data["hydra:member"] || [];
}

export async function fetchMessage(token: string, id: string): Promise<TempMessage> {
  const res = await fetch(`${API_BASE}/messages/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch message");
  return res.json();
}
