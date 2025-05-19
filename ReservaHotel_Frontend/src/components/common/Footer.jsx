import { Link } from 'react-router-dom';
import React from 'react';


const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
      padding: '3rem 0 2rem',
      fontFamily: "'Montserrat', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    logo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#D4AF37',
      marginBottom: '1rem',
      display: 'block',
    },
    description: {
      fontSize: '0.9rem',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '1.5rem',
    },
    heading: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '1.2rem',
      color: '#D4AF37',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    link: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.8rem',
      transition: 'color 0.3s ease',
      ":hover": {
        color: '#D4AF37',
      },
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    contactIcon: {
      marginRight: '0.5rem',
      fontSize: '1rem',
      marginTop: '0.2rem',
    },
    contactText: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.4',
    },
    bottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    copyright: {
      fontSize: '0.85rem',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      ":hover": {
        backgroundColor: '#D4AF37',
        color: '#1E3A8A',
      },
    },
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <div style={footerStyles.grid}>
          <div>
            <span style={footerStyles.logo}>
              ✦ Hotel Paradise
            </span>
            <p style={footerStyles.description}>
              Experience luxury and comfort in our exquisite hotel, offering stunning views and unparalleled service for an unforgettable stay.
            </p>
          </div>
          
          <div>
            <h3 style={footerStyles.heading}>Quick Links</h3>
            <ul style={footerStyles.linkList}>
              <li><Link to="/" style={footerStyles.link}>Home</Link></li>
              <li><Link to="/rooms" style={footerStyles.link}>Our Rooms</Link></li>
              <li><Link to="/booking" style={footerStyles.link}>Book Now</Link></li>
              <li><a href="#" style={footerStyles.link}>About Us</a></li>
              <li><a href="#" style={footerStyles.link}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={footerStyles.heading}>Contact Us</h3>
            <div style={footerStyles.contactItem}>
              <span style={footerStyles.contactIcon}>📍</span>
              <span style={footerStyles.contactText}>123 Paradise Lane, Beachfront Avenue, Tropical Island</span>
            </div>
            <div style={footerStyles.contactItem}>
              <span style={footerStyles.contactIcon}>📞</span>
              <span style={footerStyles.contactText}>+1 (555) 123-4567</span>
            </div>
            <div style={footerStyles.contactItem}>
              <span style={footerStyles.contactIcon}>✉️</span>
              <span style={footerStyles.contactText}>info@hotelparadise.com</span>
            </div>
          </div>
          
          <div>
            <h3 style={footerStyles.heading}>Newsletter</h3>
            <p style={footerStyles.description}>
              Subscribe to our newsletter for special deals, exclusive offers, and updates.
            </p>
            <div style={{
              display: 'flex',
              marginBottom: '1rem',
            }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: 'none',
                  borderRadius: '4px 0 0 4px',
                  fontSize: '0.9rem',
                }}
              />
              <button style={{
                backgroundColor: '#D4AF37',
                color: '#1E3A8A',
                border: 'none',
                padding: '0 1rem',
                borderRadius: '0 4px 4px 0',
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div style={footerStyles.bottom}>
          <div style={footerStyles.copyright}>
            © {new Date().getFullYear()} Hotel Paradise. All rights reserved.
          </div>
          
          <div style={footerStyles.socialLinks}>
            <a href="#" style={footerStyles.socialIcon}>f</a>
            <a href="#" style={footerStyles.socialIcon}>in</a>
            <a href="#" style={footerStyles.socialIcon}>𝕏</a>
            <a href="#" style={footerStyles.socialIcon}>IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;