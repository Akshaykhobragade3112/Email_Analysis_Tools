const { processEmail, getEmails } = require("../services/emailService");

const submitEmail = async (req, res, next) => {
  try {
    const { subject, rawHeaders } = req.body;
    if (!subject || !rawHeaders) {
      return res.status(400).json({ message: "Subject and rawHeaders are required" });
    }

    const email = await processEmail(subject, rawHeaders);
    res.status(201).json(email);
  } catch (error) {
    next(error);
  }
};

const fetchEmails = async (req, res, next) => {
  try {
    const emails = await getEmails();
    res.json(emails);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitEmail, fetchEmails };
