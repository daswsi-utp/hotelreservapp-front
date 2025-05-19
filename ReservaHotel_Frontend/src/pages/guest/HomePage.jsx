import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RoomCard from '../../components/common/RoomCard';
import Button from '../../components/common/Button';
import { rooms } from '../../data/roomsData';
import React from 'react';


const HomePage = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  
  useEffect(() => {
    // Get featured rooms
    const featured = rooms.filter(room => room.featured).slice(0, 3);
    setFeaturedRooms(featured);
  }, []);

  const homeStyles = {
    hero: {
      height: '100vh',
      minHeight: '600px',
      backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      textAlign: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '800px',
      padding: '0 1rem',
    },
    heroBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(212, 175, 55, 0.9)',
      color: '#1E3A8A',
      padding: '0.4rem 1rem',
      borderRadius: '30px',
      fontWeight: 600,
      marginBottom: '1.5rem',
      fontSize: '0.9rem',
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
      },
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      fontWeight: 400,
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem',
      lineHeight: 1.5,
    },
    heroButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      '@media (max-width: 576px)': {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    section: {
      padding: '5rem 1rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeading: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '1rem',
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: '#666666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.5,
    },
    featuredRooms: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    viewAllLink: {
      display: 'block',
      textAlign: 'center',
      marginTop: '2rem',
    },
    amenitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
    },
    amenityCard: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
    },
    amenityIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#D4AF37',
    },
    amenityTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '0.5rem',
    },
    amenityDescription: {
      fontSize: '0.9rem',
      color: '#666666',
      lineHeight: 1.5,
    },
    testimonialSection: {
      backgroundColor: '#f9f9f9',
    },
    testimonialsContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    },
    testimonialQuote: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontStyle: 'italic',
      color: '#1E3A8A',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    testimonialAvatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      marginRight: '1rem',
      objectFit: 'cover',
    },
    testimonialInfo: {
      textAlign: 'left',
    },
    testimonialName: {
      fontWeight: 600,
      marginBottom: '0.25rem',
    },
    testimonialTitle: {
      fontSize: '0.875rem',
      color: '#666666',
    },
    ctaSection: {
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
      textAlign: 'center',
      padding: '4rem 1rem',
    },
    ctaTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
    },
    ctaDescription: {
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto 2rem',
      lineHeight: 1.5,
    },
  };

  return (
    <>
      <Header />
      
      <main>
        <section style={homeStyles.hero}>
          <div style={homeStyles.overlay}></div>
          <div style={homeStyles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={homeStyles.heroBadge}>Luxury Redefined</div>
              <h1 style={homeStyles.heroTitle}>Experience Paradise on Earth</h1>
              <p style={homeStyles.heroSubtitle}>
                Indulge in luxury, comfort, and exceptional service at Hotel Paradise. 
                Your dream vacation begins here.
              </p>
              <div style={homeStyles.heroButtons}>
                <Button primary large as={Link} to="/rooms">
                  Explore Rooms
                </Button>
                <Button outline large as={Link} to="/booking">
                  Book Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section style={{...homeStyles.section, backgroundColor: '#f9f9f9'}}>
          <div style={homeStyles.container}>
            <div style={homeStyles.sectionHeading}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={homeStyles.sectionTitle}
              >
                Featured Accommodations
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                style={homeStyles.sectionSubtitle}
              >
                Discover our handpicked selection of luxurious rooms and suites designed for your ultimate comfort.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={homeStyles.featuredRooms}
            >
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={homeStyles.viewAllLink}
            >
              <Button secondary as={Link} to="/rooms">
                View All Rooms
              </Button>
            </motion.div>
          </div>
        </section>
        
        <section style={homeStyles.section}>
          <div style={homeStyles.container}>
            <div style={homeStyles.sectionHeading}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={homeStyles.sectionTitle}
              >
                Luxury Amenities
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                style={homeStyles.sectionSubtitle}
              >
                Enjoy our wide range of premium amenities designed to elevate your stay.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={homeStyles.amenitiesGrid}
            >
              <motion.div 
                whileHover={{ translateY: -10 }}
                style={homeStyles.amenityCard}
              >
                <div style={homeStyles.amenityIcon}>🍲</div>
                <h3 style={homeStyles.amenityTitle}>Gourmet Dining</h3>
                <p style={homeStyles.amenityDescription}>
                  Experience exceptional culinary delights at our award-winning restaurants offering diverse international cuisines.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ translateY: -10 }}
                style={homeStyles.amenityCard}
              >
                <div style={homeStyles.amenityIcon}>💆</div>
                <h3 style={homeStyles.amenityTitle}>Luxury Spa</h3>
                <p style={homeStyles.amenityDescription}>
                  Rejuvenate your mind and body with our spa treatments designed to provide the ultimate relaxation experience.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ translateY: -10 }}
                style={homeStyles.amenityCard}
              >
                <div style={homeStyles.amenityIcon}>🏊</div>
                <h3 style={homeStyles.amenityTitle}>Infinity Pool</h3>
                <p style={homeStyles.amenityDescription}>
                  Take a dip in our stunning infinity pool with breathtaking ocean views, perfect for unwinding.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ translateY: -10 }}
                style={homeStyles.amenityCard}
              >
                <div style={homeStyles.amenityIcon}>🏋️</div>
                <h3 style={homeStyles.amenityTitle}>Fitness Center</h3>
                <p style={homeStyles.amenityDescription}>
                  Stay active in our state-of-the-art fitness center equipped with modern exercise equipment.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section style={{...homeStyles.section, ...homeStyles.testimonialSection}}>
          <div style={homeStyles.container}>
            <div style={homeStyles.sectionHeading}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={homeStyles.sectionTitle}
              >
                What Our Guests Say
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={homeStyles.testimonialsContainer}
            >
              <p style={homeStyles.testimonialQuote}>
                "Our stay at Hotel Paradise was absolutely magical. The service was impeccable, 
                the accommodations luxurious, and the views breathtaking. It was truly the vacation of a lifetime."
              </p>
              
              <div style={homeStyles.testimonialAuthor}>
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="James Wilson" 
                  style={homeStyles.testimonialAvatar} 
                />
                <div style={homeStyles.testimonialInfo}>
                  <p style={homeStyles.testimonialName}>James Wilson</p>
                  <p style={homeStyles.testimonialTitle}>Executive Director, New York</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section style={homeStyles.ctaSection}>
          <div style={homeStyles.container}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={homeStyles.ctaTitle}
            >
              Ready to Experience Paradise?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={homeStyles.ctaDescription}
            >
              Book your stay today and indulge in luxury, comfort, and unforgettable experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button primary large as={Link} to="/booking">
                Book Your Stay Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;