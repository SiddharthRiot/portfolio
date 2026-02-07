const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// .env check
if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error("❌ MAIL_USER or MAIL_PASS missing in .env");
}

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// mail transporter with verification
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, // Gmail App Password
  },
});

// verify transporter once at startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail transporter error:", error);
  } else {
    console.log("✅ Mail server ready");
  }
});

// contact route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("📩 Mail sent from:", email);

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Mail error:", error);
    res.status(500).json({
      success: false,
      message: "Mail failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});