import { motion } from 'framer-motion';
import React from 'react';


const StatCard = ({ title, value, icon, color }) => {
  const cardStyles = {
    card: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      overflow: 'hidden',
      position: 'relative',
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: `${color}20`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
    content: {
      flex: 1,
    },
    title: {
      color: '#666666',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
    },
    value: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.75rem',
      fontWeight: 700,
      color: color,
    },
    decoration: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: `${color}10`,
      transform: 'translate(30%, -30%)',
      zIndex: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
      style={cardStyles.card}
    >
      <div style={cardStyles.iconContainer}>
        <span>{icon}</span>
      </div>
      <div style={cardStyles.content}>
        <div style={cardStyles.title}>{title}</div>
        <div style={cardStyles.value}>{value}</div>
      </div>
      <div style={cardStyles.decoration}></div>
    </motion.div>
  );
};

export default StatCard;