import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import axios from 'axios';
import Button from '../../components/common/Button';

const MessagesPage = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/messages', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // o adapta según tu auth
      }
    })
    .then(res => {
      setAllMessages(res.data);
      setFilteredMessages(res.data);
    })
    .catch(err => {
      console.error('Error fetching messages', err);
    });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    let filtered = allMessages;

    if (value) {
      filtered = filtered.filter(message => 
        message.name.toLowerCase().includes(value.toLowerCase()) ||
        message.email.toLowerCase().includes(value.toLowerCase()) ||
        message.subject.toLowerCase().includes(value.toLowerCase()) ||
        message.message.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (filter !== 'all') {
      const isRead = filter === 'read';
      filtered = filtered.filter(message => message.read === isRead);
    }

    setFilteredMessages(filtered);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    let filtered = allMessages;

    if (searchTerm) {
      filtered = filtered.filter(message => 
        message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (newFilter !== 'all') {
      const isRead = newFilter === 'read';
      filtered = filtered.filter(message => message.read === isRead);
    }

    setFilteredMessages(filtered);
  };

  const handleViewMessage = (message) => {
    message.read = true;
    setSelectedMessage(message);

    const updatedMessages = filteredMessages.map(m =>
      m.id === message.id ? { ...m, read: true } : m
    );
    setFilteredMessages(updatedMessages);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };

  const messagesStyles = {
    // ... tus estilos existentes ...
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
    messagesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '1fr 2fr',
      gap: '2rem',
    },
    messagesListCard: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
    },
    messagesList: {
      flex: 1,
      overflowY: 'auto',
    },
    messageItem: {
      padding: '1rem',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#ffffff',
    },
    unreadMessageItem: {
      backgroundColor: 'rgba(30, 58, 138, 0.05)',
      borderLeft: '4px solid #1E3A8A',
    },
    activeMessageItem: {
      backgroundColor: 'rgba(30, 58, 138, 0.1)',
    },
    messageHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.5rem',
    },
    messageName: {
      fontWeight: 600,
      fontSize: '1rem',
      color: '#333333',
    },
    messageDate: {
      fontSize: '0.8rem',
      color: '#666666',
    },
    messageSubject: {
      fontWeight: 600,
      marginBottom: '0.25rem',
      color: '#333333',
      fontSize: '0.95rem',
    },
    messagePreview: {
      color: '#666666',
      fontSize: '0.9rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    unreadBadge: {
      display: 'inline-block',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#1E3A8A',
      marginRight: '0.5rem',
    },
    messageDetailCard: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      padding: '2rem',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
    },
    messageDetailHeader: {
      marginBottom: '1.5rem',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid #f0f0f0',
    },
    messageDetailSubject: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '0.5rem',
    },
    messageDetailSender: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'baseline',
    },
    messageDetailName: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    messageDetailEmail: {
      color: '#666666',
      fontSize: '0.9rem',
    },
    messageDetailDate: {
      color: '#666666',
      fontSize: '0.9rem',
      marginLeft: 'auto',
    },
    messageDetailContent: {
      flex: 1,
      overflow: 'auto',
      lineHeight: 1.6,
      color: '#333333',
      fontSize: '0.95rem',
    },
    messageDetailFooter: {
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid #f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
    },
    noMessageSelected: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#666666',
      fontSize: '1.1rem',
      textAlign: 'center',
    },
    noMessageIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#e0e0e0',
    },
    noResults: {
      padding: '2rem',
      textAlign: 'center',
      color: '#666666',
    },
  };

  return (
    <div>
      <h1 style={messagesStyles.pageTitle}>Guest Messages</h1>

      <div style={messagesStyles.topBar}>
        <div style={messagesStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search messages..."
            style={messagesStyles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div style={messagesStyles.filtersContainer}>
          {['all', 'unread', 'read'].map((f) => (
            <button
              key={f}
              style={{
                ...messagesStyles.filterButton,
                ...(filter === f ? messagesStyles.activeFilterButton : {}),
              }}
              onClick={() => handleFilterChange(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={messagesStyles.messagesGrid}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={messagesStyles.messagesListCard}
        >
          {filteredMessages.length > 0 ? (
            <div style={messagesStyles.messagesList}>
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    ...messagesStyles.messageItem,
                    ...(message.read ? {} : messagesStyles.unreadMessageItem),
                    ...(selectedMessage?.id === message.id ? messagesStyles.activeMessageItem : {}),
                  }}
                  onClick={() => handleViewMessage(message)}
                >
                  <div style={messagesStyles.messageHeader}>
                    <div style={messagesStyles.messageName}>
                      {!message.read && <span style={messagesStyles.unreadBadge}></span>}
                      {message.name}
                    </div>
                    <div style={messagesStyles.messageDate}>
                      {format(new Date(message.date), 'MMM dd')}
                    </div>
                  </div>
                  <div style={messagesStyles.messageSubject}>{message.subject}</div>
                  <div style={messagesStyles.messagePreview}>{message.message}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={messagesStyles.noResults}>No messages found matching your criteria.</div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={messagesStyles.messageDetailCard}
        >
          {selectedMessage ? (
            <>
              <div style={messagesStyles.messageDetailHeader}>
                <h2 style={messagesStyles.messageDetailSubject}>{selectedMessage.subject}</h2>
                <div style={messagesStyles.messageDetailSender}>
                  <span style={messagesStyles.messageDetailName}>{selectedMessage.name}</span>
                  <span style={messagesStyles.messageDetailEmail}>&lt;{selectedMessage.email}&gt;</span>
                  <span style={messagesStyles.messageDetailDate}>
                    {format(new Date(selectedMessage.date), 'MMMM dd, yyyy')}
                  </span>
                </div>
              </div>

              <div style={messagesStyles.messageDetailContent}>
                <p>{selectedMessage.message}</p>
              </div>

              <div style={messagesStyles.messageDetailFooter}>
                <Button outline onClick={handleCloseMessage}>
                  Back to Messages
                </Button>
                <Button primary>Reply</Button>
              </div>
            </>
          ) : (
            <div style={messagesStyles.noMessageSelected}>
              <div style={messagesStyles.noMessageIcon}>✉️</div>
              <p>Select a message to view its details</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MessagesPage;
