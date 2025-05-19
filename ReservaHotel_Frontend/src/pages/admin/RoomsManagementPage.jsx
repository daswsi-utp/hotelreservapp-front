import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import RoomCard from '../../components/common/RoomCard';
import { rooms } from '../../data/roomsData';

const RoomsManagementPage = () => {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    let filtered = rooms;
    
    // Filter by search term
    if (value) {
      filtered = filtered.filter(room => 
        room.name.toLowerCase().includes(value.toLowerCase()) ||
        room.type.toLowerCase().includes(value.toLowerCase())
      );
    }
    
    // Filter by status
    if (filter !== 'all') {
      if (filter === 'available') {
        filtered = filtered.filter(room => room.available);
      } else if (filter === 'unavailable') {
        filtered = filtered.filter(room => !room.available);
      } else if (filter === 'featured') {
        filtered = filtered.filter(room => room.featured);
      }
    }
    
    setFilteredRooms(filtered);
  };
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    let filtered = rooms;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(room => 
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (newFilter !== 'all') {
      if (newFilter === 'available') {
        filtered = filtered.filter(room => room.available);
      } else if (newFilter === 'unavailable') {
        filtered = filtered.filter(room => !room.available);
      } else if (newFilter === 'featured') {
        filtered = filtered.filter(room => room.featured);
      }
    }
    
    setFilteredRooms(filtered);
  };

  const roomsManagementStyles = {
    pageTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2rem',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flex: 1,
    },
    searchInput: {
      flex: 1,
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
      maxWidth: '400px',
    },
    filtersContainer: {
      display: 'flex',
      gap: '0.5rem',
    },
    filterButton: {
      backgroundColor: 'transparent',
      border: '1px solid #1E3A8A',
      color: '#1E3A8A',
      padding: '0.5rem 1rem',
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
    <div>
      <div style={roomsManagementStyles.topBar}>
        <h1 style={roomsManagementStyles.pageTitle}>Rooms Management</h1>
        
        <Button primary as={Link} to="/admin/rooms/add">
          Add New Room
        </Button>
      </div>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
      }}>
        <div style={roomsManagementStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search rooms..."
            style={roomsManagementStyles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div style={roomsManagementStyles.filtersContainer}>
          <button 
            style={{
              ...roomsManagementStyles.filterButton,
              ...(filter === 'all' ? roomsManagementStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            style={{
              ...roomsManagementStyles.filterButton,
              ...(filter === 'available' ? roomsManagementStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('available')}
          >
            Available
          </button>
          <button 
            style={{
              ...roomsManagementStyles.filterButton,
              ...(filter === 'unavailable' ? roomsManagementStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('unavailable')}
          >
            Unavailable
          </button>
          <button 
            style={{
              ...roomsManagementStyles.filterButton,
              ...(filter === 'featured' ? roomsManagementStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('featured')}
          >
            Featured
          </button>
        </div>
      </div>
      
      {filteredRooms.length > 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={roomsManagementStyles.roomsGrid}
        >
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} isAdmin={true} />
          ))}
        </motion.div>
      ) : (
        <div style={roomsManagementStyles.noResults}>
          <p>No rooms found matching your criteria. Please try different filters.</p>
        </div>
      )}
    </div>
  );
};

export default RoomsManagementPage;