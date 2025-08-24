const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const emailRoutes = require("./src/routes/emailRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Email Analyzer Backend Running...");
});

app.use("/api/emails", emailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
