import { motion } from 'framer-motion';
import React from 'react';


const Button = ({ 
  children, 
  primary = false, 
  secondary = false,
  outline = false,
  full = false,
  small = false,
  large = false,
  onClick,
  type = 'button',
  disabled = false,
  style = {}
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      padding: small ? '0.5rem 1rem' : large ? '1rem 2rem' : '0.75rem 1.5rem',
      fontSize: small ? '0.875rem' : large ? '1.125rem' : '1rem',
      width: full ? '100%' : 'auto',
      opacity: disabled ? 0.6 : 1,
    };

    if (primary) {
      return {
        ...baseStyle,
        backgroundColor: '#D4AF37',
        color: '#1E3A8A',
        border: 'none',
        ':hover': {
          backgroundColor: '#C09B2A',
        },
      };
    } else if (secondary) {
      return {
        ...baseStyle,
        backgroundColor: '#1E3A8A',
        color: '#ffffff',
        border: 'none',
        ':hover': {
          backgroundColor: '#15296B',
        },
      };
    } else if (outline) {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        color: primary ? '#D4AF37' : secondary ? '#1E3A8A' : '#333333',
        border: `1px solid ${primary ? '#D4AF37' : secondary ? '#1E3A8A' : '#333333'}`,
        ':hover': {
          backgroundColor: primary ? 'rgba(212, 175, 55, 0.1)' : secondary ? 'rgba(30, 58, 138, 0.1)' : 'rgba(51, 51, 51, 0.1)',
        },
      };
    } else {
      return {
        ...baseStyle,
        backgroundColor: '#f5f5f5',
        color: '#333333',
        border: 'none',
        ':hover': {
          backgroundColor: '#e5e5e5',
        },
      };
    }
  };

  const buttonStyle = {
    ...getButtonStyle(),
    ...style,
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </motion.button>
  );
};

export default Button;