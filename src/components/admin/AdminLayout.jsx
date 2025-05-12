import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import React from 'react';

const AdminLayout = () => {
  const { currentUser, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (!currentUser || !isAdmin) {
      navigate('/login');
    }
  }, [currentUser, isAdmin, navigate]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const adminLayoutStyles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
    },
    sidebar: {
      position: isMobile ? 'fixed' : 'relative',
      width: '250px',
      height: '100vh',
      zIndex: 1000,
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#1E3A8A',
    },
    main: {
      flex: 1,
      transition: 'all 0.3s ease',
      width: '100%',
    },
    content: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    menuButton: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginRight: '1rem',
      color: '#1E3A8A',
    },
    headerTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1E3A8A',
      margin: 0,
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      display: isMobile && isSidebarOpen ? 'block' : 'none',
    },
  };

  return (
    <div style={adminLayoutStyles.container}>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
              style={adminLayoutStyles.sidebar}
            >
              <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </motion.div>
            {isMobile && (
              <div 
                style={adminLayoutStyles.overlay} 
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
          </>
        )}
      </AnimatePresence>

      <div style={adminLayoutStyles.main}>
        <header style={adminLayoutStyles.header}>
          <button 
            onClick={toggleSidebar} 
            style={adminLayoutStyles.menuButton}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <h1 style={adminLayoutStyles.headerTitle}>Hotel Paradise Admin</h1>
        </header>

        <main style={adminLayoutStyles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
