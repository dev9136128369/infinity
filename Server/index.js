
// server/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");
const stickyRoutes = require("./routes/stickyRoutes");
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
// CORS Configuration
app.use(cors({
  origin: "https://www.infinityrealestate.estate", 
  credentials: true
}));

app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/realestate';

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/adminRoutes');

// Routes
app.use("/api", contactRoutes);
app.use("/api/sticky", stickyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Test route
app.get('/api/admin/test', (req, res) => {
  res.json({ message: 'Admin API is working!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
    }
  }
  
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
