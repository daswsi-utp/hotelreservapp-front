import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import React from 'react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const headerStyles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? '#1E3A8A' : 'transparent',
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      padding: isScrolled ? '0.5rem 2rem' : '1rem 2rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.8rem',
      fontWeight: 700,
      color: isScrolled ? '#D4AF37' : '#ffffff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    logoIcon: {
      marginRight: '0.5rem',
      fontSize: '2rem',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
    },
    navItems: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    navItem: {
      margin: '0 1rem',
    },
    navLink: {
      fontFamily: "'Montserrat', sans-serif",
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: 500,
      padding: '0.5rem',
      transition: 'all 0.3s ease',
      opacity: 0.9,
      ":hover": {
        opacity: 1,
        color: '#D4AF37',
      },
    },
    activeLink: {
      color: '#D4AF37',
      fontWeight: 600,
      opacity: 1,
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '70vw',
      backgroundColor: '#1E3A8A',
      zIndex: 1100,
      padding: '2rem',
      boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
    },
    mobileMenuClose: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    mobileNavItems: {
      listStyle: 'none',
      padding: 0,
      marginTop: '3rem',
    },
    mobileNavItem: {
      marginBottom: '1.5rem',
    },
    mobileNavLink: {
      fontFamily: "'Montserrat', sans-serif",
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 500,
      display: 'block',
      padding: '0.5rem 0',
    },
    authButtons: {
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    loginButton: {
      background: 'transparent',
      border: '1px solid #ffffff',
      color: '#ffffff',
      padding: '0.5rem 1.5rem',
      borderRadius: '4px',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      marginLeft: '1rem',
      ":hover": {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
    adminButton: {
      background: '#D4AF37',
      border: 'none',
      color: '#1E3A8A',
      padding: '0.5rem 1.5rem',
      borderRadius: '4px',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      marginLeft: '1rem',
      ":hover": {
        backgroundColor: '#C09B2A',
      },
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1050,
    },
  };

  // Only show the header on guest pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div style={headerStyles.container}>
      <header style={headerStyles.header}>
        <Link to="/" style={headerStyles.logo}>
          <span style={headerStyles.logoIcon}>✦</span> Hotel Paradise
        </Link>
        
        <nav style={headerStyles.nav}>
          <ul style={{
            ...headerStyles.navItems,
            display: window.innerWidth > 768 ? 'flex' : 'none'
          }}>
            <li style={headerStyles.navItem}>
              <Link 
                to="/" 
                style={{
                  ...headerStyles.navLink,
                  ...(location.pathname === '/' ? headerStyles.activeLink : {})
                }}
              >
                Home
              </Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link 
                to="/rooms" 
                style={{
                  ...headerStyles.navLink, 
                  ...(location.pathname.startsWith('/rooms') ? headerStyles.activeLink : {})
                }}
              >
                Rooms
              </Link>
            </li>
            <li style={headerStyles.navItem}>
              <Link 
                to="/booking" 
                style={{
                  ...headerStyles.navLink,
                  ...(location.pathname.startsWith('/booking') ? headerStyles.activeLink : {})
                }}
              >
                Book Now
              </Link>
            </li>
          </ul>
          
          <div style={{
            ...headerStyles.authButtons,
            display: window.innerWidth > 768 ? 'flex' : 'none'
          }}>
            {currentUser ? (
              <>
                {currentUser.role === 'admin' && (
                  <Link to="/admin" style={headerStyles.adminButton}>
                    Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} style={headerStyles.loginButton}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" style={headerStyles.loginButton}>
                Login
              </Link>
            )}
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            style={{
              ...headerStyles.mobileMenuButton,
              display: window.innerWidth <= 768 ? 'block' : 'none'
            }}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div style={headerStyles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            style={headerStyles.mobileMenu}
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              style={headerStyles.mobileMenuClose}
            >
              ✕
            </button>
            
            <ul style={headerStyles.mobileNavItems}>
              <li style={headerStyles.mobileNavItem}>
                <Link 
                  to="/" 
                  style={headerStyles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li style={headerStyles.mobileNavItem}>
                <Link 
                  to="/rooms" 
                  style={headerStyles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Rooms
                </Link>
              </li>
              <li style={headerStyles.mobileNavItem}>
                <Link 
                  to="/booking" 
                  style={headerStyles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </li>
              
              {currentUser ? (
                <>
                  {currentUser.role === 'admin' && (
                    <li style={headerStyles.mobileNavItem}>
                      <Link 
                        to="/admin" 
                        style={headerStyles.mobileNavLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                  <li style={headerStyles.mobileNavItem}>
                    <a 
                      href="#" 
                      style={headerStyles.mobileNavLink}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li style={headerStyles.mobileNavItem}>
                  <Link 
                    to="/login" 
                    style={headerStyles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;