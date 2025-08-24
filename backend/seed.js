const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Email = require("./src/models/Email");
const parseHeaders = require("./src/utils/parseHeaders");
const detectESP = require("./src/utils/detectESP");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected for seeding");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const seedEmails = async () => {
  await connectDB();

  // Sample raw headers
  const sampleHeaders = [
    {
      subject: "Test Gmail Email",
      rawHeaders:
        "Received: from mail.gmail.com (mail.gmail.com. [74.125.200.27])\nReceived: by mx.example.com\nFrom: user@gmail.com\nTo: test@example.com\nSubject: Test Gmail Email",
    },
    {
      subject: "Test Outlook Email",
      rawHeaders:
        "Received: from outlook.com (outlook.com. [40.92.0.1])\nReceived: by mx.example.com\nFrom: user@outlook.com\nTo: test@example.com\nSubject: Test Outlook Email",
    },
    {
      subject: "Test Amazon SES Email",
      rawHeaders:
        "Received: from amazonses.com (amazonses.com. [54.240.27.1])\nReceived: by mx.example.com\nFrom: user@amazonses.com\nTo: test@example.com\nSubject: Test Amazon SES Email",
    },
  ];

  try {
    // Clear existing records
    await Email.deleteMany();
    console.log("Old data cleared");

    // Insert new ones
    for (const header of sampleHeaders) {
      const receivingChain = parseHeaders(header.rawHeaders);
      const espType = detectESP(header.rawHeaders);

      const email = new Email({
        subject: header.subject,
        rawHeaders: header.rawHeaders,
        receivingChain,
        espType,
      });

      await email.save();
      console.log(`Inserted: ${header.subject} (${espType})`);
    }

    console.log("Seeding complete!");
    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedEmails();
