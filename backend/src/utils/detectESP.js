function norm(s = "") {
  return String(s).toLowerCase();
}

function detectESP(headers = "") {
  const h = norm(headers);

  const checks = [
    { name: "Gmail", patterns: ["gmail.com", "google.com", "smtp.gmail.com", "x-gm-message-state", "x-google-dkim-signature"] },
    { name: "Outlook/Microsoft 365", patterns: ["outlook.com", "hotmail.com", "protection.outlook.com", "onmicrosoft.com", "x-ms-exchange", "outlook.office365.com"] },
    { name: "Amazon SES", patterns: ["amazonses.com", "ses.amazonaws.com", "smtp-out.amazonses.com", "amazon ses"] },
    { name: "Zoho", patterns: ["zoho.com", "zohomail"] },
    { name: "Yahoo", patterns: ["yahoo.com", "x-yahoo"] },
    { name: "SendGrid", patterns: ["sendgrid.net", "x-sg-id", "x-sg-eid"] },
    { name: "Mailgun", patterns: ["mailgun.org", "x-mailgun"] },
    { name: "Postmark", patterns: ["postmarkapp.com", "x-postmark"] },
    { name: "SparkPost", patterns: ["sparkpostmail.com", "x-msys"] },
  ];

  for (const { name, patterns } of checks) {
    if (patterns.some((p) => h.includes(p))) return name;
  }

  const fromMatch =
    h.match(/from:\s*.*?<[^@>\s]+@([^>\s]+)>/i) ||
    h.match(/from:\s*[^<\s]+@([^>\s]+)/i) ||
    h.match(/return-path:\s*<[^@>\s]+@([^>\s]+)>/i);

  if (fromMatch) {
    const domain = fromMatch[1] || "";
    if (domain.includes("gmail.")) return "Gmail";
    if (domain.includes("outlook.") || domain.includes("hotmail.") || domain.includes("live.")) return "Outlook/Microsoft 365";
    if (domain.includes("yahoo.")) return "Yahoo";
    if (domain.includes("zoho.")) return "Zoho";
  }

  return "Unknown";
}

module.exports = detectESP;
