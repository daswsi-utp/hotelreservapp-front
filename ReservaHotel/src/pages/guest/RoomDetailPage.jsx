import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import { rooms } from '../../data/roomsData';

const RoomDetailPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  
  useEffect(() => {
    // Fetch room data
    const roomData = rooms.find(r => r.id === parseInt(id));
    if (roomData) {
      setRoom(roomData);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div style={{ padding: '5rem', textAlign: 'center' }}>Loading...</div>;
  }
  
  if (!room) {
    return (
      <div style={{ padding: '5rem', textAlign: 'center' }}>
        <h2>Room not found</h2>
        <p>The room you're looking for doesn't exist.</p>
        <Link to="/rooms">Back to Rooms</Link>
      </div>
    );
  }

  const roomDetailStyles = {
    container: {
      maxWidth: '1200px',
      margin: '6rem auto 3rem',
      padding: '0 1rem',
    },
    breadcrumbs: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem',
      fontSize: '0.9rem',
    },
    breadcrumbLink: {
      color: '#666666',
      textDecoration: 'none',
    },
    breadcrumbSeparator: {
      margin: '0 0.5rem',
    },
    breadcrumbActive: {
      fontWeight: 600,
      color: '#1E3A8A',
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 992px)': {
        gridTemplateColumns: '2fr 1fr',
      },
    },
    galleryContainer: {
      marginBottom: '2rem',
    },
    mainImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
      cursor: 'pointer',
    },
    thumbnailsContainer: {
      display: 'flex',
      gap: '0.5rem',
      overflowX: 'auto',
      padding: '0.5rem 0',
    },
    thumbnail: {
      width: '80px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '4px',
      cursor: 'pointer',
      opacity: 0.7,
      transition: 'all 0.3s ease',
    },
    activeThumbnail: {
      opacity: 1,
      border: '2px solid #D4AF37',
    },
    roomInfo: {
      marginBottom: '2rem',
    },
    roomName: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '0.5rem',
    },
    roomType: {
      fontSize: '1.1rem',
      color: '#666666',
      marginBottom: '1rem',
    },
    description: {
      lineHeight: 1.6,
      color: '#333333',
      marginBottom: '2rem',
    },
    detailsContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
    },
    detailsTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
    },
    detailsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '1rem',
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    detailIcon: {
      fontSize: '1.1rem',
      color: '#D4AF37',
    },
    detailText: {
      fontSize: '0.95rem',
      color: '#333333',
    },
    amenitiesContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
    },
    amenitiesList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '1rem',
    },
    amenityItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    amenityIcon: {
      fontSize: '1.1rem',
      color: '#D4AF37',
    },
    amenityText: {
      fontSize: '0.95rem',
      color: '#333333',
    },
    bookingContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: '100px',
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: '1.5rem',
    },
    price: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#D4AF37',
    },
    priceText: {
      fontSize: '1rem',
      color: '#666666',
      marginLeft: '0.5rem',
    },
    bookingInfo: {
      marginBottom: '1.5rem',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.75rem',
      fontSize: '0.95rem',
      color: '#333333',
    },
    infoIcon: {
      fontSize: '1.1rem',
      color: '#1E3A8A',
    },
    bookButton: {
      width: '100%',
      marginBottom: '0.5rem',
    },
    imageViewer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
    },
    imageViewerContent: {
      maxWidth: '90%',
      maxHeight: '90%',
      position: 'relative',
    },
    imageViewerImage: {
      maxWidth: '100%',
      maxHeight: '90vh',
      objectFit: 'contain',
    },
    imageViewerClose: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '2rem',
      cursor: 'pointer',
    },
    imageViewerNav: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
    },
    imageViewerButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      cursor: 'pointer',
      margin: '0 1rem',
    },
  };

  return (
    <>
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={roomDetailStyles.container}>
          <div style={roomDetailStyles.breadcrumbs}>
            <Link to="/" style={roomDetailStyles.breadcrumbLink}>Home</Link>
            <span style={roomDetailStyles.breadcrumbSeparator}>/</span>
            <Link to="/rooms" style={roomDetailStyles.breadcrumbLink}>Rooms</Link>
            <span style={roomDetailStyles.breadcrumbSeparator}>/</span>
            <span style={roomDetailStyles.breadcrumbActive}>{room.name}</span>
          </div>
          
          <div style={{
            ...roomDetailStyles.contentGrid,
            gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '2fr 1fr'
          }}>
            <div>
              <div style={roomDetailStyles.galleryContainer}>
                <img 
                  src={room.images[activeImageIndex]} 
                  alt={room.name} 
                  style={roomDetailStyles.mainImage}
                  onClick={() => setIsImageViewerOpen(true)}
                />
                
                <div style={roomDetailStyles.thumbnailsContainer}>
                  {room.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${room.name} - view ${index + 1}`}
                      style={{
                        ...roomDetailStyles.thumbnail,
                        ...(index === activeImageIndex ? roomDetailStyles.activeThumbnail : {})
                      }}
                      onClick={() => setActiveImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              
              <div style={roomDetailStyles.roomInfo}>
                <h1 style={roomDetailStyles.roomName}>{room.name}</h1>
                <p style={roomDetailStyles.roomType}>{room.type} Room</p>
                <p style={roomDetailStyles.description}>{room.description}</p>
              </div>
              
              <div style={roomDetailStyles.detailsContainer}>
                <h2 style={roomDetailStyles.detailsTitle}>Room Details</h2>
                
                <div style={roomDetailStyles.detailsList}>
                  <div style={roomDetailStyles.detailItem}>
                    <span style={roomDetailStyles.detailIcon}>👥</span>
                    <span style={roomDetailStyles.detailText}>Capacity: {room.capacity} persons</span>
                  </div>
                  <div style={roomDetailStyles.detailItem}>
                    <span style={roomDetailStyles.detailIcon}>📏</span>
                    <span style={roomDetailStyles.detailText}>Size: {room.size} m²</span>
                  </div>
                  <div style={roomDetailStyles.detailItem}>
                    <span style={roomDetailStyles.detailIcon}>💰</span>
                    <span style={roomDetailStyles.detailText}>Price: ${room.price}/night</span>
                  </div>
                  <div style={roomDetailStyles.detailItem}>
                    <span style={roomDetailStyles.detailIcon}>✓</span>
                    <span style={roomDetailStyles.detailText}>Availability: {room.available ? 'Available' : 'Booked'}</span>
                  </div>
                </div>
              </div>
              
              <div style={roomDetailStyles.amenitiesContainer}>
                <h2 style={roomDetailStyles.detailsTitle}>Amenities</h2>
                
                <div style={roomDetailStyles.amenitiesList}>
                  {room.amenities.map((amenity, index) => (
                    <div key={index} style={roomDetailStyles.amenityItem}>
                      <span style={roomDetailStyles.amenityIcon}>✓</span>
                      <span style={roomDetailStyles.amenityText}>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div style={roomDetailStyles.bookingContainer}>
                <div style={roomDetailStyles.priceContainer}>
                  <span style={roomDetailStyles.price}>${room.price}</span>
                  <span style={roomDetailStyles.priceText}>per night</span>
                </div>
                
                <div style={roomDetailStyles.bookingInfo}>
                  <div style={roomDetailStyles.infoItem}>
                    <span style={roomDetailStyles.infoIcon}>👥</span>
                    <span>Max {room.capacity} guests</span>
                  </div>
                  <div style={roomDetailStyles.infoItem}>
                    <span style={roomDetailStyles.infoIcon}>🏠</span>
                    <span>{room.size} m² room size</span>
                  </div>
                  <div style={roomDetailStyles.infoItem}>
                    <span style={roomDetailStyles.infoIcon}>📅</span>
                    <span>Free cancellation up to 48 hours before check-in</span>
                  </div>
                </div>
                
                <Button 
                  primary 
                  full 
                  large 
                  as={Link} 
                  to={`/booking/${room.id}`} 
                  style={roomDetailStyles.bookButton}
                >
                  Book Now
                </Button>
                
                <p style={{ fontSize: '0.85rem', color: '#666666', textAlign: 'center' }}>
                  No prepayment needed - pay at the property
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {isImageViewerOpen && (
        <div style={roomDetailStyles.imageViewer}>
          <button 
            style={roomDetailStyles.imageViewerClose}
            onClick={() => setIsImageViewerOpen(false)}
          >
            ✕
          </button>
          
          <div style={roomDetailStyles.imageViewerContent}>
            <img 
              src={room.images[activeImageIndex]} 
              alt={room.name} 
              style={roomDetailStyles.imageViewerImage} 
            />
            
            <div style={roomDetailStyles.imageViewerNav}>
              <button 
                style={roomDetailStyles.imageViewerButton}
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1))}
              >
                ‹
              </button>
              <button 
                style={roomDetailStyles.imageViewerButton}
                onClick={() => setActiveImageIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1))}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default RoomDetailPage;