import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';


const RoomCard = ({ room, isAdmin = false }) => {
  const cardStyles = {
    card: {
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    imageContainer: {
      position: 'relative',
      height: '220px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    featured: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#D4AF37',
      color: '#ffffff',
      padding: '0.25rem 0.75rem',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 600,
      zIndex: 10,
    },
    content: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    name: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '0.5rem',
    },
    type: {
      fontSize: '0.875rem',
      color: '#666666',
      marginBottom: '1rem',
    },
    amenities: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    amenity: {
      backgroundColor: '#f0f0f0',
      color: '#333333',
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.75rem',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'baseline',
      marginTop: 'auto',
      marginBottom: '1rem',
    },
    price: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#D4AF37',
    },
    priceText: {
      fontSize: '0.875rem',
      color: '#666666',
      marginLeft: '0.5rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '0.75rem',
    },
    viewDetailsButton: {
      backgroundColor: 'transparent',
      color: '#1E3A8A',
      border: '1px solid #1E3A8A',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      textAlign: 'center',
      textDecoration: 'none',
    },
    bookNowButton: {
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      textAlign: 'center',
      textDecoration: 'none',
    },
    editButton: {
      backgroundColor: '#D4AF37',
      color: '#1E3A8A',
      border: 'none',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      textAlign: 'center',
      textDecoration: 'none',
    },
  };

  return (
    <motion.div
      whileHover={{ 
        translateY: -5,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
      }}
      style={cardStyles.card}
    >
      <div style={cardStyles.imageContainer}>
        <img 
          src={room.images[0]} 
          alt={room.name} 
          style={cardStyles.image} 
        />
        {room.featured && (
          <div style={cardStyles.featured}>Featured</div>
        )}
      </div>
      
      <div style={cardStyles.content}>
        <h3 style={cardStyles.name}>{room.name}</h3>
        <p style={cardStyles.type}>{room.type} Room</p>
        
        <div style={cardStyles.amenities}>
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} style={cardStyles.amenity}>{amenity}</span>
          ))}
          {room.amenities.length > 3 && (
            <span style={cardStyles.amenity}>+{room.amenities.length - 3} more</span>
          )}
        </div>
        
        <div style={cardStyles.priceContainer}>
          <span style={cardStyles.price}>${room.price}</span>
          <span style={cardStyles.priceText}>per night</span>
        </div>
        
        <div style={cardStyles.buttonContainer}>
          {isAdmin ? (
            <Link to={`/admin/rooms/edit/${room.id}`} style={cardStyles.editButton}>
              Edit Room
            </Link>
          ) : (
            <>
              <Link to={`/rooms/${room.id}`} style={cardStyles.viewDetailsButton}>
                View Details
              </Link>
              <Link to={`/booking/${room.id}`} style={cardStyles.bookNowButton}>
                Book Now
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;