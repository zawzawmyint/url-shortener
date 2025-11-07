export async function createShortenUrl(url: string) {
  const res = await fetch("/api/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}

export async function deleteShortenUrl(shortCode: string) {
  const res = await fetch(`/api/shorten/${shortCode}`, {
    method: "DELETE",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function updateShortenUrl(shortCode: string, longUrl: string) {
  const res = await fetch(`/api/shorten/${shortCode}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
}
