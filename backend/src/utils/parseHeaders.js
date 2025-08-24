// Handles literal "\n" sequences, Windows CRLF, and folded header lines
function normalizeNewlines(str = "") {
  return String(str)
    // real CRLF -> \n
    .replace(/\r\n/g, "\n")
    // literal backslash-n (from JSON / copied samples) -> \n
    .replace(/\\r?\\n/g, "\n")
    // stray \r -> \n
    .replace(/\r/g, "\n");
}

// RFC 5322 header unfolding: lines that start with whitespace
// are continuations of the previous header line.
function unfoldHeaders(text = "") {
  const lines = text.split("\n");
  const out = [];
  for (const raw of lines) {
    const line = raw.replace(/\s+$/g, ""); // trim right
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
