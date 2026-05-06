const path = require("path");
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

const requiredFields = [
  "full_name",
  "work_email",
  "company_name",
  "country",
  "project_type",
  "project_description",
];

const hasSmtpConfig = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    if (!hasSmtpConfig) {
      return res.status(500).json({
        error: "SMTP is not configured. Add SMTP_* variables in your .env file.",
      });
    }

    const data = req.body || {};
    const missingField = requiredFields.find((field) => !String(data[field] || "").trim());
    if (missingField) {
      return res.status(400).json({ error: `Missing required field: ${missingField}` });
    }

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${data.full_name}</p>
      <p><strong>Work Email:</strong> ${data.work_email}</p>
      <p><strong>Company Name:</strong> ${data.company_name}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Project Type:</strong> ${data.project_type}</p>
      <p><strong>Budget Range:</strong> ${data.budget_range || "Not provided"}</p>
      <p><strong>Timeline:</strong> ${data.timeline || "Not provided"}</p>
      <p><strong>How did you hear about us?:</strong> ${data.how_did_you_hear_about_us || "Not provided"}</p>
      <p><strong>Project Description:</strong></p>
      <p>${String(data.project_description).replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "sales@ddplabs.org",
      replyTo: data.work_email,
      subject: `New project inquiry from ${data.full_name}`,
      html: emailHtml,
      text: [
        "New Contact Form Submission",
        `Full Name: ${data.full_name}`,
        `Work Email: ${data.work_email}`,
        `Company Name: ${data.company_name}`,
        `Country: ${data.country}`,
        `Project Type: ${data.project_type}`,
        `Budget Range: ${data.budget_range || "Not provided"}`,
        `Timeline: ${data.timeline || "Not provided"}`,
        `How did you hear about us?: ${data.how_did_you_hear_about_us || "Not provided"}`,
        "Project Description:",
        data.project_description,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({ error: "Failed to send submission" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "remixed-69686c48.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
