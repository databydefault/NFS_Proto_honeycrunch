export function cleanDocumentText(value) {
  return String(value || "").replace(/https?:\/\/\S+/gi, " ").replace(/\n{3,}/g, "\n\n").trim();
}

export function chunkDocument(text, maxChars = 4200) {
  const source = cleanDocumentText(text);
  if (!source) return [];
  const chunks = [];
  for (let i = 0; i < source.length; i += maxChars) {
    const part = source.slice(i, i + maxChars).trim();
    if (part) chunks.push({ id: chunks.length + 1, text: part });
  }
  return chunks;
}

export function retrieveChunks(chunks, query, limit = 8) {
  const terms = String(query || "").toLowerCase().split(/\s+/).filter(t => t.length >= 3);
  return chunks.map(chunk => {
    const hay = chunk.text.toLowerCase();
    let score = 0;
    for (const term of terms) if (hay.includes(term)) score += 1;
    return { ...chunk, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

export function buildEvidence(context, prompt) {
  const chunks = chunkDocument(context);
  const selected = retrieveChunks(chunks, prompt);
  const usable = selected.length ? selected : chunks.slice(0, 6);
  return {
    chunks,
    selected: usable,
    text: usable.map(x => "[SOURCE CHUNK " + x.id + "]\n" + x.text).join("\n\n")
  };
}
