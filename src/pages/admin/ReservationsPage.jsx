import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Button from '../../components/common/Button';
import { bookings } from '../../data/roomsData';

const ReservationsPage = () => {
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    let filtered = bookings;
    
    // Filter by search term
    if (value) {
      filtered = filtered.filter(booking => 
        booking.guestName.toLowerCase().includes(value.toLowerCase()) ||
        booking.guestEmail.toLowerCase().includes(value.toLowerCase()) ||
        booking.roomName.toLowerCase().includes(value.toLowerCase())
      );
    }
    
    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(booking => booking.status === filter);
    }
    
    setFilteredBookings(filtered);
  };
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    let filtered = bookings;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(booking => 
        booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.guestEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.roomName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (newFilter !== 'all') {
      filtered = filtered.filter(booking => booking.status === newFilter);
    }
    
    setFilteredBookings(filtered);
  };

  const reservationsStyles = {
    pageTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '2rem',
    },
    topBar: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      flexWrap: 'wrap',
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
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '800px',
    },
    tableHeader: {
      backgroundColor: '#f9f9f9',
      padding: '1rem',
      textAlign: 'left',
      fontSize: '0.95rem',
      fontWeight: 600,
      color: '#333333',
      borderBottom: '1px solid #e0e0e0',
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '0.95rem',
      color: '#333333',
    },
    statusBadge: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '30px',
      fontSize: '0.75rem',
      fontWeight: 600,
    },
    statusConfirmed: {
      backgroundColor: 'rgba(5, 150, 105, 0.1)',
      color: '#05965A',
    },
    statusPending: {
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      color: '#F59E0B',
    },
    statusCancelled: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#EF4444',
    },
    actionButtonsContainer: {
      display: 'flex',
      gap: '0.5rem',
    },
    actionButton: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.8rem',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    noResults: {
      padding: '2rem',
      textAlign: 'center',
      color: '#666666',
    },
  };

  return (
    <div>
      <h1 style={reservationsStyles.pageTitle}>Reservations</h1>
      
      <div style={reservationsStyles.topBar}>
        <div style={reservationsStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search by guest, email, or room..."
            style={reservationsStyles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div style={reservationsStyles.filtersContainer}>
          <button 
            style={{
              ...reservationsStyles.filterButton,
              ...(filter === 'all' ? reservationsStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            style={{
              ...reservationsStyles.filterButton,
              ...(filter === 'confirmed' ? reservationsStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('confirmed')}
          >
            Confirmed
          </button>
          <button 
            style={{
              ...reservationsStyles.filterButton,
              ...(filter === 'pending' ? reservationsStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('pending')}
          >
            Pending
          </button>
          <button 
            style={{
              ...reservationsStyles.filterButton,
              ...(filter === 'cancelled' ? reservationsStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('cancelled')}
          >
            Cancelled
          </button>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={reservationsStyles.card}
      >
        {filteredBookings.length > 0 ? (
          <table style={reservationsStyles.table}>
            <thead>
              <tr>
                <th style={reservationsStyles.tableHeader}>ID</th>
                <th style={reservationsStyles.tableHeader}>Guest</th>
                <th style={reservationsStyles.tableHeader}>Room</th>
                <th style={reservationsStyles.tableHeader}>Check-in</th>
                <th style={reservationsStyles.tableHeader}>Check-out</th>
                <th style={reservationsStyles.tableHeader}>Total</th>
                <th style={reservationsStyles.tableHeader}>Status</th>
                <th style={reservationsStyles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td style={reservationsStyles.tableCell}>#{booking.id}</td>
                  <td style={reservationsStyles.tableCell}>
                    <div>{booking.guestName}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{booking.guestEmail}</div>
                  </td>
                  <td style={reservationsStyles.tableCell}>{booking.roomName}</td>
                  <td style={reservationsStyles.tableCell}>{format(booking.checkIn, 'MMM dd, yyyy')}</td>
                  <td style={reservationsStyles.tableCell}>{format(booking.checkOut, 'MMM dd, yyyy')}</td>
                  <td style={reservationsStyles.tableCell}>${booking.totalPrice}</td>
                  <td style={reservationsStyles.tableCell}>
                    <span 
                      style={{
                        ...reservationsStyles.statusBadge,
                        ...(booking.status === 'confirmed' ? reservationsStyles.statusConfirmed : 
                           booking.status === 'pending' ? reservationsStyles.statusPending :
                           reservationsStyles.statusCancelled)
                      }}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td style={reservationsStyles.tableCell}>
                    <div style={reservationsStyles.actionButtonsContainer}>
                      <button 
                        style={{
                          ...reservationsStyles.actionButton,
                          borderColor: '#1E3A8A',
                          color: '#1E3A8A',
                        }}
                      >
                        View
                      </button>
                      <button 
                        style={{
                          ...reservationsStyles.actionButton,
                          borderColor: '#05965A',
                          color: '#05965A',
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={reservationsStyles.noResults}>
            No reservations found matching your criteria.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ReservationsPage;