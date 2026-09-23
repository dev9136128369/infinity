// middleware/auth.js - Updated with better debugging
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    console.log('=== AUTH MIDDLEWARE TRIGGERED ===');
    console.log('Headers:', req.headers);
    
    const authHeader = req.header('Authorization');
    console.log('Authorization Header:', authHeader);
    
    if (!authHeader) {
      console.log(' No Authorization header found');
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.replace('Bearer ', '');
    console.log('Token received:', token);

    if (!token) {
      console.log(' No token found after Bearer');
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'infinity-secret-key');
    console.log(' Token decoded successfully:', decoded);
    
    // Check if user is admin
    if (decoded.userType !== 'admin') {
      console.log(' User is not admin');
      return res.status(403).json({ message: 'Admin access required' });
    }

    req.user = decoded;
    console.log(' Authentication successful');
    next();
    
  } catch (error) {
    console.log(' Token verification failed:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    } else {
      return res.status(401).json({ message: 'Token verification failed' });
    }
  }
};

module.exports = auth;