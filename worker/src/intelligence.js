const NOISE_PATTERNS = [
  /^\s*page\s+\d+(?:\s+of\s+\d+)?\s*$/i,
  /^\s*\d+\s*$/i,
  /^\s*copyright\b/i,
  /^\s*all rights reserved\b/i,
  /^\s*table of contents\s*$/i,
  /^\s*contents\s*$/i,
  /^\s*https?:\/\//i
];

export function cleanDocumentText(value) {
  let text = String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, " ")
    .replace(/https?:\/\/\S+/gi, " ")
    .replace(/\bwww\.[^\s]+/gi, " ");

  const lines = text
    .split("\n")
    .map(line => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .filter(line => !NOISE_PATTERNS.some(pattern => pattern.test(line)));

  const counts = new Map();
  for (const line of lines) {
    const key = line.toLowerCase();
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const deduped = lines.filter(line => {
    const key = line.toLowerCase();
    return counts.get(key) < 4 || line.length > 160;
  });

  return deduped.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function chunkDocument(text, maxChars = 4200, overlap = 500) {
  const source = cleanDocumentText(text);
  if (!source) return [];

  const paragraphs = source
    .split(/\n{2,}/)
    .map(x => x.trim())
    .filter(Boolean);

  const chunks = [];
  let buffer = "";

  const push = () => {
    const value = buffer.trim();
    if (value) {
      chunks.push({
        id: chunks.length + 1,
        text: value
      });
    }
  };

  for (const paragraph of paragraphs) {
    if (!buffer) {
      buffer = paragraph;
      continue;
    }

    if ((buffer + "\n\n" + paragraph).length <= maxChars) {
      buffer += "\n\n" + paragraph;
      continue;
    }

    push();

    const tail = buffer.slice(Math.max(0, buffer.length - overlap)).trim();
    buffer = tail ? tail + "\n\n" + paragraph : paragraph;

    if (buffer.length > maxChars) {
      push();
      buffer = "";
    }
  }

  push();
  return chunks;
}

function normaliseTerms(query) {
  return String(query || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}%.-]+/gu, " ")
    .split(/\s+/)
    .filter(term => term.length >= 3);
}

export function retrieveChunks(chunks, query, limit = 8) {
  const terms = normaliseTerms(query);
  const phrase = String(query || "").trim().toLowerCase();

  if (!terms.length) return chunks.slice(0, limit);

  return chunks
    .map(chunk => {
      const hay = chunk.text.toLowerCase();
      let score = 0;

      if (phrase.length >= 8 && hay.includes(phrase)) score += 12;

      for (const term of terms) {
        const matches = hay.split(term).length - 1;
        if (matches > 0) score += Math.min(matches, 4);
        if (hay.startsWith(term) || hay.includes("\n" + term)) score += 1;
      }

      return { ...chunk, score };
    })
    .filter(chunk => chunk.score > 0)
    .sort((a, b) => b.score - a.score || a.id - b.id)
    .slice(0, limit);
}

export function buildEvidence(context, prompt, limit = 8) {
  const chunks = chunkDocument(context);
  const selected = retrieveChunks(chunks, prompt, limit);
  const usable = selected.length ? selected : chunks.slice(0, Math.min(limit, chunks.length));

  return {
    chunks,
    selected: usable,
    text: usable
      .map(chunk => "[SOURCE CHUNK " + chunk.id + "]\n" + chunk.text)
      .join("\n\n")
  };
}

export function verifyEvidence(answer, selectedChunks) {
  const ids = new Set(selectedChunks.map(chunk => String(chunk.id)));
  const cited = [...String(answer || "").matchAll(/\[SOURCE CHUNK\s+(\d+)\]/gi)]
    .map(match => match[1]);

  const invalid = cited.filter(id => !ids.has(id));

  return {
    required: selectedChunks.length > 0,
    cited_chunk_ids: [...new Set(cited)],
    invalid_citations: [...new Set(invalid)],
    grounded: selectedChunks.length === 0 || (cited.length > 0 && invalid.length === 0)
  };
}
