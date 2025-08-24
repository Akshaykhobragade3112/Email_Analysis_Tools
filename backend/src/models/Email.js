const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    rawHeaders: { type: String, required: true },
    receivingChain: { type: [String], default: [] },
    espType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
