import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import React from 'react';


const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const sidebarStyles = {
    sidebar: {
      width: '250px',
      height: '100%',
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#D4AF37',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    logoIcon: {
      marginRight: '0.5rem',
      fontSize: '1.5rem',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.25rem',
      cursor: 'pointer',
      display: 'block',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    navigation: {
      flex: 1,
      padding: '1rem 0',
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '0.95rem',
      fontWeight: 500,
      position: 'relative',
    },
    activeNavItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      borderLeft: '4px solid #D4AF37',
    },
    navIcon: {
      fontSize: '1.25rem',
      marginRight: '0.75rem',
      width: '20px',
      display: 'inline-block',
      textAlign: 'center',
    },
    navText: {
      fontFamily: "'Montserrat', sans-serif",
    },
    footer: {
      padding: '1rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    logoutButton: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.95rem',
      fontWeight: 500,
    },
    logoutIcon: {
      fontSize: '1.25rem',
      marginRight: '0.75rem',
    },
    divider: {
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      margin: '0.5rem 0',
    },
    sectionTitle: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 0.5)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: '1.5rem 0 0.5rem 1.5rem',
    },
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div style={sidebarStyles.sidebar}>
      <div style={sidebarStyles.header}>
        <Link to="/" style={sidebarStyles.logo}>
          <span style={sidebarStyles.logoIcon}>✦</span> Paradise
        </Link>
        <button 
          onClick={onClose} 
          style={{
            ...sidebarStyles.closeButton,
            display: window.innerWidth < 768 ? 'block' : 'none'
          }}
          aria-label="Close Sidebar"
        >
          ✕
        </button>
      </div>
      
      <nav style={sidebarStyles.navigation}>
        <div style={sidebarStyles.sectionTitle}>Overview</div>
        
        <Link 
          to="/admin" 
          style={{
            ...sidebarStyles.navItem,
            ...(isActive('/admin') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>📊</span>
          <span style={sidebarStyles.navText}>Dashboard</span>
        </Link>
        
        <div style={sidebarStyles.sectionTitle}>Management</div>
        
        <Link 
          to="/admin/rooms" 
          style={{
            ...sidebarStyles.navItem,
            ...(location.pathname.includes('/admin/rooms') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>🏠</span>
          <span style={sidebarStyles.navText}>Rooms</span>
        </Link>
        
        <Link 
          to="/admin/reservations" 
          style={{
            ...sidebarStyles.navItem,
            ...(isActive('/admin/reservations') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>📅</span>
          <span style={sidebarStyles.navText}>Reservations</span>
        </Link>
        
        <Link 
          to="/admin/users" 
          style={{
            ...sidebarStyles.navItem,
            ...(isActive('/admin/users') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>👤</span>
          <span style={sidebarStyles.navText}>Users</span>
        </Link>
        
        <div style={sidebarStyles.sectionTitle}>Communications</div>
        
        <Link 
          to="/admin/messages" 
          style={{
            ...sidebarStyles.navItem,
            ...(isActive('/admin/messages') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>✉️</span>
          <span style={sidebarStyles.navText}>Messages</span>
        </Link>
        
        <div style={sidebarStyles.sectionTitle}>Marketing</div>
        
        <Link 
          to="/admin/promotions" 
          style={{
            ...sidebarStyles.navItem,
            ...(isActive('/admin/promotions') ? sidebarStyles.activeNavItem : {})
          }}
        >
          <span style={sidebarStyles.navIcon}>🏷️</span>
          <span style={sidebarStyles.navText}>Promotions</span>
        </Link>
      </nav>
      
      <div style={sidebarStyles.footer}>
        <motion.button 
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          style={sidebarStyles.logoutButton}
          onClick={handleLogout}
        >
          <span style={sidebarStyles.logoutIcon}>🚪</span>
          <span>Logout</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Sidebar;