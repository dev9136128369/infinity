// const express = require("express");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { firstName, lastName, phone, email, propertyTypes, message } = req.body;

//   if (!firstName || !lastName || !phone || !email || !message) {
//     return res.status(400).json({ error: "All required fields must be filled." });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // ✅ receiving email
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><b>Name:</b> ${firstName} ${lastName}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Looking for:</b> ${propertyTypes && propertyTypes.length ? propertyTypes.join(", ") : "N/A"}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ success: true, message: "Your message has been sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ success: false, error: "Failed to send email. Please try again later." });
//   }
// });

// module.exports = router;


const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, propertyTypes, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Required fields are missing" 
      });
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission - Infinity Realestate",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Looking For:</strong> ${propertyTypes ? propertyTypes.join(", ") : 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully" });
    
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ 
      success: false, 
      error: "Server error. Try again later." 
    });
  }
});

// Handle OPTIONS requests for CORS preflight
router.options("/contact", (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});



module.exports = router;