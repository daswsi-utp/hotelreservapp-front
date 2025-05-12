import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Button from '../../components/common/Button';
import { users } from '../../data/roomsData';

const UsersPage = () => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    let filtered = users;
    
    // Filter by search term
    if (value) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toLowerCase().includes(value.toLowerCase())
      );
    }
    
    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(user => user.status === filter);
    }
    
    setFilteredUsers(filtered);
  };
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    let filtered = users;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (newFilter !== 'all') {
      filtered = filtered.filter(user => user.status === newFilter);
    }
    
    setFilteredUsers(filtered);
  };

  const usersStyles = {
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
    statusActive: {
      backgroundColor: 'rgba(5, 150, 105, 0.1)',
      color: '#05965A',
    },
    statusInactive: {
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
      <h1 style={usersStyles.pageTitle}>Registered Users</h1>
      
      <div style={usersStyles.topBar}>
        <div style={usersStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            style={usersStyles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div style={usersStyles.filtersContainer}>
          <button 
            style={{
              ...usersStyles.filterButton,
              ...(filter === 'all' ? usersStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            style={{
              ...usersStyles.filterButton,
              ...(filter === 'active' ? usersStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
          <button 
            style={{
              ...usersStyles.filterButton,
              ...(filter === 'inactive' ? usersStyles.activeFilterButton : {})
            }}
            onClick={() => handleFilterChange('inactive')}
          >
            Inactive
          </button>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={usersStyles.card}
      >
        {filteredUsers.length > 0 ? (
          <table style={usersStyles.table}>
            <thead>
              <tr>
                <th style={usersStyles.tableHeader}>ID</th>
                <th style={usersStyles.tableHeader}>Name</th>
                <th style={usersStyles.tableHeader}>Contact</th>
                <th style={usersStyles.tableHeader}>Join Date</th>
                <th style={usersStyles.tableHeader}>Bookings</th>
                <th style={usersStyles.tableHeader}>Total Spent</th>
                <th style={usersStyles.tableHeader}>Status</th>
                <th style={usersStyles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td style={usersStyles.tableCell}>#{user.id}</td>
                  <td style={usersStyles.tableCell}>{user.name}</td>
                  <td style={usersStyles.tableCell}>
                    <div>{user.email}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666666' }}>{user.phone}</div>
                  </td>
                  <td style={usersStyles.tableCell}>{format(user.joinDate, 'MMM dd, yyyy')}</td>
                  <td style={usersStyles.tableCell}>{user.bookingsCount}</td>
                  <td style={usersStyles.tableCell}>${user.totalSpent}</td>
                  <td style={usersStyles.tableCell}>
                    <span 
                      style={{
                        ...usersStyles.statusBadge,
                        ...(user.status === 'active' ? usersStyles.statusActive : usersStyles.statusInactive)
                      }}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td style={usersStyles.tableCell}>
                    <div style={usersStyles.actionButtonsContainer}>
                      <button 
                        style={{
                          ...usersStyles.actionButton,
                          borderColor: '#1E3A8A',
                          color: '#1E3A8A',
                        }}
                      >
                        View
                      </button>
                      <button 
                        style={{
                          ...usersStyles.actionButton,
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
          <div style={usersStyles.noResults}>
            No users found matching your criteria.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UsersPage;