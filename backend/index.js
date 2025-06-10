const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: ['http://localhost:3000', 'https://etss.co.ke'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.options('*', cors()); // enable preflight requests globally

app.use(express.json());

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Route to handle quote requests
app.post('/api/send-quote', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required' });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Exlent Touch Website" <${process.env.GMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: 'New Quote Request from Exlent Touch Website',
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    await transporter.sendMail({
      from: `"Exlent Touch Security Services" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Inquiry Has Been Received',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting Exlent Touch Security Services. We've received your quote request and our team will get in touch with you shortly.</p>
        <p>In the meantime, feel free to explore more about our services on our website.</p>
        <br>
        <p>Best regards,<br><strong>Exlent Touch Sales Team</strong></p>
      `
    });

    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.post('/api/send-inquiry', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ success: false, error: 'Missing required fields ' });
  }

  try {
    await transporter.sendMail({
      from: `"Exlent Touch Website" <${process.env.GMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: 'New Inquiry from website Contact Page',
      html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
      `
    });

    await transporter.sendMail({
      from: `"Exlent Touch Security Services" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'We have received your Inquiry',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Exlent Touch Security Services. We have received your message regarding <strong>${service}</strong> and our sales team will contact you shortly.</p>
        <br>
        <p>Best regards,<br><strong>Exlent Touch Sales Team</strong></p>
      `
    });

    res.status(200).json({ success: true, message: 'Inquiry sent successfully ' });
  } catch (error) {
    console.error('Inquiry email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email ' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
