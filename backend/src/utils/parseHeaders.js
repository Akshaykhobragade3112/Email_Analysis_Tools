
function normalizeNewlines(str = "") {
  return String(str)

    .replace(/\r\n/g, "\n")
    .replace(/\\r?\\n/g, "\n")
    .replace(/\r/g, "\n");
}

function unfoldHeaders(text = "") {
  const lines = text.split("\n");
  const out = [];
  for (const raw of lines) {
    const line = raw.replace(/\s+$/g, ""); 
    if (out.length && /^\s/.test(line)) {
      out[out.length - 1] += " " + line.trim();
    } else {
      out.push(line);
    }
  }
  return out;
}

function parseHeaders(rawHeaders = "") {
  const normalized = normalizeNewlines(rawHeaders);
  const unfolded = unfoldHeaders(normalized);

  const receivingChain = [];
  for (const line of unfolded) {
    const l = line.trim();
    if (l.toLowerCase().startsWith("received:")) {
      receivingChain.push(l);
    }
  }
  return receivingChain;
}

module.exports = parseHeaders;
