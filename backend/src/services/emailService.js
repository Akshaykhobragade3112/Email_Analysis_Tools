const Email = require("../models/Email");
const parseHeaders = require("../utils/parseHeaders");
const detectESP = require("../utils/detectESP");

async function processEmail(subject, rawHeaders) {
  const receivingChain = parseHeaders(rawHeaders);
  const espType = detectESP(rawHeaders);

  const email = new Email({
    subject,
    rawHeaders,
    receivingChain,
    espType,
  });

  await email.save();
  return email;
}

async function getEmails() {
  return await Email.find().sort({ createdAt: -1 });
}

module.exports = { processEmail, getEmails };
