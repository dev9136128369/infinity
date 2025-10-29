import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '', // Empty initially
    password: '', // Empty initially
    userType: 'user' // Default to user
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Pre-defined admin email from environment
  const ADMIN_EMAIL = 'support@infinityrealestate.estate';

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleUserTypeChange = (e) => {
    const userType = e.target.value;
    
    setFormData({
      ...formData,
      userType: userType
      // Don't auto-fill email when admin is selected
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation for admin
    if (formData.userType === 'admin' && formData.email !== ADMIN_EMAIL) {
      setError(`Only ${ADMIN_EMAIL} can login as admin`);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        console.log('Token saved:', data.token);

        if (data.user.userType === 'admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Quick fill buttons - Only show hints, don't prefill
//   const showAdminHint = () => {
//     alert(`Admin Login: Use ${ADMIN_EMAIL} as email address`);
//   };

  const clearForm = () => {
    setFormData({
      email: '',
      password: '',
      userType: 'user'
    });
  };

  return (
    <div className="login-container">
      <div className="login-glass">
        <div className="login-header">
          <div className="logo">
            <img src="/Images/infinity_logo.png" alt="Infinity Real Estate" />
            <h2>Infinity Real Estate</h2>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        {/* Quick Action Buttons */}
        <div className="quick-action-buttons">
          <button 
            type="button" 
            className="action-btn hint-btn"
            // onClick={showAdminHint}
          >
            Admin Login Hint
          </button>
          <button 
            type="button" 
            className="action-btn clear-btn"
            onClick={clearForm}
          >
            Clear Form
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="userType">Login As</label>
            <select 
              id="userType"
              name="userType" 
              value={formData.userType}
              onChange={handleUserTypeChange}
              className="form-select"
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={
                formData.userType === 'admin' 
                  ? "Enter admin email address" 
                  : "Enter your email"
              }
              required
              className="form-input"
            />
            {formData.userType === 'admin' && (
              <small className="email-note">
                Admin access restricted to specific email
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="form-input"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          <button 
            type="submit" 
            className={`login-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* <div className="login-info">
          <div className="info-box">
            <h4>Login Information:</h4>
            <p><strong>Admin:</strong> {ADMIN_EMAIL} / any-password</p>
            <p><strong>Users:</strong> Any email / any-password</p>
            <p><strong>Note:</strong> First-time users are auto-registered</p>
          </div>
        </div> */}
      </div>

      {/* Background Animation */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;