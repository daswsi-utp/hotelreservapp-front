import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  
  // If already logged in, redirect to appropriate page
  if (currentUser) {
    if (currentUser.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }
    
    const success = login(email, password);
    
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid email or password. For demo, use admin@hotelparadise.com / admin123');
      setIsLoading(false);
    }
  };

  const loginStyles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      zIndex: 2,
    },
    logoContainer: {
      marginBottom: '2rem',
      textAlign: 'center',
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#D4AF37',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoIcon: {
      marginRight: '0.5rem',
      fontSize: '2.5rem',
    },
    tagline: {
      fontSize: '1.1rem',
      color: '#ffffff',
    },
    formCard: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    formLabel: {
      display: 'block',
      fontSize: '0.95rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
      color: '#333333',
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
    },
    forgotPassword: {
      fontSize: '0.9rem',
      color: '#1E3A8A',
      textDecoration: 'none',
      display: 'block',
      textAlign: 'right',
      marginTop: '0.5rem',
    },
    errorMessage: {
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      color: '#dc2626',
      padding: '0.75rem',
      borderRadius: '4px',
      fontSize: '0.9rem',
      marginBottom: '1.5rem',
    },
    loginButton: {
      width: '100%',
      marginTop: '1rem',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '1.5rem 0',
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      backgroundColor: '#e0e0e0',
    },
    dividerText: {
      padding: '0 1rem',
      color: '#666666',
      fontSize: '0.9rem',
    },
    demoAccount: {
      textAlign: 'center',
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
    },
    demoTitle: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: '#333333',
      marginBottom: '0.5rem',
    },
    demoCredentials: {
      fontSize: '0.85rem',
      color: '#666666',
    },
  };

  return (
    <>
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={loginStyles.container}
      >
        <div style={loginStyles.overlay}></div>
        
        <div style={loginStyles.formContainer}>
          <div style={loginStyles.logoContainer}>
            <div style={loginStyles.logo}>
              <span style={loginStyles.logoIcon}>✦</span> Hotel Paradise
            </div>
            <div style={loginStyles.tagline}>Experience luxury like never before</div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={loginStyles.formCard}
          >
            <h1 style={loginStyles.formTitle}>Admin Login</h1>
            
            {error && (
              <div style={loginStyles.errorMessage}>
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={loginStyles.formGroup}>
                <label style={loginStyles.formLabel}>Email Address</label>
                <input 
                  type="email" 
                  style={loginStyles.formInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div style={loginStyles.formGroup}>
                <label style={loginStyles.formLabel}>Password</label>
                <input 
                  type="password" 
                  style={loginStyles.formInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <a href="#" style={loginStyles.forgotPassword}>Forgot Password?</a>
              </div>
              
              <Button 
                primary 
                full 
                large 
                type="submit" 
                disabled={isLoading}
                style={loginStyles.loginButton}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            
            <div style={loginStyles.demoAccount}>
              <div style={loginStyles.demoTitle}>Demo Admin Account</div>
              <div style={loginStyles.demoCredentials}>
                Email: admin@hotelparadise.com<br />
                Password: admin123
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </>
  );
};

export default LoginPage;