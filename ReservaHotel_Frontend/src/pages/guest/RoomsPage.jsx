import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RoomCard from '../../components/common/RoomCard';
import { rooms } from '../../data/roomsData';

const RoomsPage = () => {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  useEffect(() => {
    // Apply filters
    let filtered = [...rooms];
    
    // Filter by type
    if (activeFilter !== 'all') {
      filtered = filtered.filter(room => room.type.toLowerCase() === activeFilter.toLowerCase());
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(room => 
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(room => room.price >= priceRange[0] && room.price <= priceRange[1]);
    
    setFilteredRooms(filtered);
  }, [activeFilter, searchTerm, priceRange]);

  const roomsPageStyles = {
    header: {
      backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    headerContent: {
      textAlign: 'center',
      color: '#ffffff',
      position: 'relative',
      zIndex: 1,
      padding: '0 1rem',
    },
    headerTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    headerSubtitle: {
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.5,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1rem',
    },
    filtersContainer: {
      marginBottom: '3rem',
      padding: '1.5rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    filtersTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
    },
    filtersRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    filterButton: {
      backgroundColor: 'transparent',
      border: '1px solid #1E3A8A',
      color: '#1E3A8A',
      padding: '0.5rem 1.5rem',
      borderRadius: '30px',
      fontSize: '0.9rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeFilterButton: {
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
    },
    searchInput: {
      flex: 1,
      minWidth: '200px',
      padding: '0.75rem 1rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.9rem',
    },
    priceRangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    priceRangeValue: {
      fontSize: '0.9rem',
      color: '#666666',
      minWidth: '100px',
    },
    priceSlider: {
      flex: 1,
      height: '2px',
      backgroundColor: '#e0e0e0',
      position: 'relative',
      borderRadius: '2px',
    },
    roomsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
    },
    noResults: {
      textAlign: 'center',
      padding: '3rem 0',
      color: '#666666',
      fontSize: '1.1rem',
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
        <div style={roomsPageStyles.header}>
          <div style={roomsPageStyles.overlay}></div>
          <div style={roomsPageStyles.headerContent}>
            <h1 style={roomsPageStyles.headerTitle}>Our Rooms & Suites</h1>
            <p style={roomsPageStyles.headerSubtitle}>
              Discover a variety of luxurious accommodations designed for your comfort and relaxation.
            </p>
          </div>
        </div>
        
        <div style={roomsPageStyles.container}>
          <div style={roomsPageStyles.filtersContainer}>
            <h2 style={roomsPageStyles.filtersTitle}>Filter Rooms</h2>
            
            <div style={roomsPageStyles.filtersRow}>
              <button 
                style={{
                  ...roomsPageStyles.filterButton,
                  ...(activeFilter === 'all' ? roomsPageStyles.activeFilterButton : {})
                }}
                onClick={() => setActiveFilter('all')}
              >
                All Rooms
              </button>
              <button 
                style={{
                  ...roomsPageStyles.filterButton,
                  ...(activeFilter === 'standard' ? roomsPageStyles.activeFilterButton : {})
                }}
                onClick={() => setActiveFilter('standard')}
              >
                Standard
              </button>
              <button 
                style={{
                  ...roomsPageStyles.filterButton,
                  ...(activeFilter === 'deluxe' ? roomsPageStyles.activeFilterButton : {})
                }}
                onClick={() => setActiveFilter('deluxe')}
              >
                Deluxe
              </button>
              <button 
                style={{
                  ...roomsPageStyles.filterButton,
                  ...(activeFilter === 'suite' ? roomsPageStyles.activeFilterButton : {})
                }}
                onClick={() => setActiveFilter('suite')}
              >
                Suites
              </button>
            </div>
            
            <div style={roomsPageStyles.filtersRow}>
              <input
                type="text"
                placeholder="Search by name or description..."
                style={roomsPageStyles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div style={roomsPageStyles.filtersRow}>
              <div style={roomsPageStyles.priceRangeContainer}>
                <span style={roomsPageStyles.priceRangeValue}>
                  Price: ${priceRange[0]} - ${priceRange[1]}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  style={{ flex: 1 }}
                />
              </div>
            </div>
          </div>
          
          {filteredRooms.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={roomsPageStyles.roomsGrid}
            >
              {filteredRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </motion.div>
          ) : (
            <div style={roomsPageStyles.noResults}>
              <p>No rooms found matching your criteria. Please try different filters.</p>
            </div>
          )}
        </div>
      </motion.div>
      
      <Footer />
    </>
  );
};

export default RoomsPage;