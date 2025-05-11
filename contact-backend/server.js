const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, interestedIn, comments} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry about ${interestedIn} || 'a service'}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Interested In: ${interestedIn}
                Comments: ${comments}
            `,
        });
        res.status(200).json({ message: 'Inquiry sent successfully!' });

 }  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending inquiry.'});
 }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));