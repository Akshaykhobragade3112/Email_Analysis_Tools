const express = require("express");
const { submitEmail, fetchEmails } = require("../controllers/emailController");
const router = express.Router();

router.post("/", submitEmail);
router.get("/", fetchEmails);

module.exports = router;
