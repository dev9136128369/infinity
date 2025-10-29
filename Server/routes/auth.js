const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Environment variable for admin email
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'support@infinityrealestate.estate';

// Universal Login with Admin Validation
router.post('/login', async (req, res) => {
  try {
    const { email, password, userType = 'user', adminEmail } = req.body;

    console.log('Login attempt:', { email, userType });

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Admin validation
    if (userType === 'admin') {
      if (email !== ADMIN_EMAIL) {
        return res.status(403).json({ 
          message: `Only ${ADMIN_EMAIL} can login as admin` 
        });
      }
    }

    // Find existing user or create new one
    let user = await User.findOne({ email });

    if (!user) {
      // Auto-create new user
      console.log('Creating new user for:', email);
      
      // For admin, set specific properties
      const isAdmin = email === ADMIN_EMAIL;
      
      user = new User({
        name: isAdmin ? 'Infinity Admin' : email.split('@')[0],
        email: email,
        password: password,
        userType: isAdmin ? 'admin' : userType // Force admin type for admin email
      });

      await user.save();
      console.log('New user created successfully');
    } else {
      // Check password for existing user
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Special handling for admin email
      if (email === ADMIN_EMAIL) {
        user.userType = 'admin'; // Always set as admin for this email
      } else if (userType !== user.userType) {
        user.userType = userType;
      }
      
      await user.save();
    }

    // Record login
    await user.recordLogin();

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        userType: user.userType 
      },
      process.env.JWT_SECRET || 'infinity-secret-key',
      { expiresIn: '30d' }
    );

    // Save login history
    await saveLoginHistory(user._id, req);

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        loginCount: user.loginCount,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error during login' 
    });
  }
});

// Save login history function
async function saveLoginHistory(userId, req) {
  try {
    const loginHistory = {
      userId: userId,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      loginTime: new Date()
    };

    console.log('Login history saved:', loginHistory);
    
  } catch (error) {
    console.error('Error saving login history:', error);
  }
}

module.exports = router;