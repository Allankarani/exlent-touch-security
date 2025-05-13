const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // your Gmail email
    pass: process.env.GMAIL_PASS    // app password
  }
});

// Route to handle quote requests
app.post('/api/send-quote', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required' });
  }

  try {
    // Email to Exlent Touch (internal alert)
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

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Exlent Touch Security Services" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'We Received Your Quote Request',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Exlent Touch Security Services. We've received your quote request and our team will get in touch with you shortly.</p>
        <p>In the meantime, feel free to explore more about our services on our website.</p>
        <br>
        <p>Best regards,<br><strong>Exlent Touch Security Team</strong></p>
      `
    });

    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
