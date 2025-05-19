// MessagesPage.jsx
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
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get('http://localhost:8080/api/messages', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => {
        setAllMessages(res.data);
        setFilteredMessages(filterMessages(res.data, searchTerm, filter));
      })
      .catch(err => {
        console.error('Error fetching messages', err);
      });
  };

  const safeIncludes = (field, term) =>
    (field ?? '').toLowerCase().includes(term.toLowerCase());

  const filterMessages = (messages, searchTerm, filter) => {
    let filtered = messages;

    if (searchTerm) {
      filtered = filtered.filter(message =>
        safeIncludes(message.name, searchTerm) ||
        safeIncludes(message.email, searchTerm) ||
        safeIncludes(message.content, searchTerm) ||
        safeIncludes(message.subject, searchTerm)
      );
    }

    if (filter !== 'all') {
      const isRead = filter === 'read';
      filtered = filtered.filter(message => message.read === isRead);
    }

    return filtered;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredMessages(filterMessages(allMessages, value, filter));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setFilteredMessages(filterMessages(allMessages, searchTerm, newFilter));
  };

  const handleViewMessage = async (message) => {
    if (!message.read) {
      try {
        // Cambio aquí: PUT y ruta correcta para marcar como leído
        await axios.put(`http://localhost:8080/api/messages/${message.id}/read`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const updatedMessages = allMessages.map(m =>
          m.id === message.id ? { ...m, read: true } : m
        );
        setAllMessages(updatedMessages);
        setFilteredMessages(filterMessages(updatedMessages, searchTerm, filter));
      } catch (err) {
        console.error('Error marking message as read', err);
      }
    }

    setSelectedMessage({ ...message, read: true });
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };

  return (
    <div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '2rem' }}>Guest Messages</h1>

      {/* Filtro + búsqueda */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search messages..."
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '0.95rem', maxWidth: '400px' }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['all', 'unread', 'read'].map((f) => (
            <button
              key={f}
              style={{
                backgroundColor: filter === f ? '#1E3A8A' : 'transparent',
                border: '1px solid #1E3A8A',
                color: filter === f ? '#ffffff' : '#1E3A8A',
                padding: '0.5rem 1rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
              onClick={() => handleFilterChange(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '1fr 2fr',
        gap: '2rem',
      }}>
        {/* Lista de mensajes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {filteredMessages.length > 0 ? (
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    padding: '1rem',
                    borderBottom: '1px solid #f0f0f0',
                    cursor: 'pointer',
                    backgroundColor: selectedMessage?.id === message.id
                      ? 'rgba(30, 58, 138, 0.1)'
                      : (!message.read ? 'rgba(30, 58, 138, 0.05)' : '#ffffff'),
                    borderLeft: !message.read ? '4px solid #1E3A8A' : 'none',
                  }}
                  onClick={() => handleViewMessage(message)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem', color: '#333' }}>
                      {!message.read && <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#1E3A8A',
                        marginRight: '0.5rem',
                      }}></span>}
                      {message.name ?? '(No name)'}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                      {message.sentDate ? format(new Date(message.sentDate), 'MMM dd') : 'Unknown'}
                    </div>
                  </div>

                  <div style={{
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    color: '#1E3A8A',
                    marginBottom: '0.3rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {message.subject ?? '(No subject)'}
                  </div>

                  <div style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {message.content ?? '(No content)'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>No messages found.</div>
          )}
        </motion.div>

        {/* Panel derecho de detalle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            padding: '2rem',
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {selectedMessage ? (
            <>
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                <h2>{selectedMessage.name ?? '(No name)'}</h2>
                <h3 style={{ color: '#1E3A8A', fontWeight: '600', marginTop: '0.2rem', marginBottom: '1rem' }}>
                  {selectedMessage.subject ?? '(No subject)'}
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>{selectedMessage.name ?? 'Unknown sender'}</span>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>
                    &lt;{selectedMessage.email ?? 'unknown@email.com'}&gt;
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem', marginLeft: 'auto' }}>
                    {selectedMessage.sentDate
                      ? format(new Date(selectedMessage.sentDate), 'MMMM dd, yyyy')
                      : 'Unknown date'}
                  </span>
                </div>
              </div>

              <div style={{
                flex: 1,
                overflowY: 'auto',
                whiteSpace: 'pre-wrap',
                fontSize: '1rem',
                color: '#333',
              }}>
                {selectedMessage.content ?? '(No content)'}
              </div>

              <Button
                variant="secondary"
                style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
                onClick={handleCloseMessage}
              >
                Close Message
              </Button>
            </>
          ) : (
            <div style={{ margin: 'auto', color: '#666' }}>Select a message to view details</div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MessagesPage;
