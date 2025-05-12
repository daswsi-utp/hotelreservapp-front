import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';
import { rooms } from '../../data/roomsData';

const EditRoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState(2);
  const [size, setSize] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [amenityInput, setAmenityInput] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [featured, setFeatured] = useState(false);
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get room data
    const roomData = rooms.find(r => r.id === parseInt(id));
    if (roomData) {
      setName(roomData.name);
      setType(roomData.type);
      setDescription(roomData.description);
      setPrice(roomData.price.toString());
      setCapacity(roomData.capacity);
      setSize(roomData.size.toString());
      setAmenities(roomData.amenities);
      setImageUrls(roomData.images);
      setFeatured(roomData.featured);
      setAvailable(roomData.available);
    }
    setLoading(false);
  }, [id]);
  
  const handleAddImage = () => {
    setImageUrls([...imageUrls, '']);
  };
  
  const handleRemoveImage = (index) => {
    const newUrls = [...imageUrls];
    newUrls.splice(index, 1);
    setImageUrls(newUrls);
  };
  
  const handleImageChange = (index, value) => {
    const newUrls = [...imageUrls];
    newUrls[index] = value;
    setImageUrls(newUrls);
  };
  
  const handleAddAmenity = () => {
    if (amenityInput.trim() !== '') {
      setAmenities([...amenities, amenityInput.trim()]);
      setAmenityInput('');
    }
  };
  
  const handleRemoveAmenity = (index) => {
    const newAmenities = [...amenities];
    newAmenities.splice(index, 1);
    setAmenities(newAmenities);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !type || !description || !price || !size || imageUrls.filter(url => url).length === 0) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // For demo purposes, just navigate back to rooms management
    alert('Room updated successfully!');
    navigate('/admin/rooms');
  };
  
  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  const editRoomStyles = {
    pageTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    formLabel: {
      display: 'block',
      fontSize: '0.95rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
      color: '#333333',
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
    },
    formTextarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
      minHeight: '120px',
      resize: 'vertical',
    },
    formSelect: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 0.75rem center',
      backgroundSize: '1rem',
    },
    formCheckboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
    },
    formCheckbox: {
      width: '18px',
      height: '18px',
    },
    amenitiesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    amenityTag: {
      backgroundColor: '#f0f0f0',
      padding: '0.25rem 0.75rem',
      borderRadius: '4px',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    amenityRemove: {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#666666',
    },
    amenityInputContainer: {
      display: 'flex',
      gap: '0.5rem',
    },
    imageInputContainer: {
      marginBottom: '1rem',
      display: 'flex',
      gap: '0.5rem',
    },
    imageRemove: {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#666666',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
    },
  };

  return (
    <div>
      <h1 style={editRoomStyles.pageTitle}>Edit Room</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={editRoomStyles.card}
      >
        <form onSubmit={handleSubmit}>
          <div style={editRoomStyles.formGrid}>
            <div style={editRoomStyles.formGroup}>
              <label style={editRoomStyles.formLabel}>Room Name *</label>
              <input 
                type="text" 
                style={editRoomStyles.formInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div style={editRoomStyles.formGroup}>
              <label style={editRoomStyles.formLabel}>Room Type *</label>
              <select 
                style={editRoomStyles.formSelect}
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            
            <div style={editRoomStyles.formGroup}>
              <label style={editRoomStyles.formLabel}>Price per Night ($) *</label>
              <input 
                type="number" 
                style={editRoomStyles.formInput}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                required
              />
            </div>
            
            <div style={editRoomStyles.formGroup}>
              <label style={editRoomStyles.formLabel}>Capacity (Guests) *</label>
              <select 
                style={editRoomStyles.formSelect}
                value={capacity}
                onChange={(e) => setCapacity(parseInt(e.target.value))}
                required
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <div style={editRoomStyles.formGroup}>
              <label style={editRoomStyles.formLabel}>Room Size (m²) *</label>
              <input 
                type="number" 
                style={editRoomStyles.formInput}
                value={size}
                onChange={(e) => setSize(e.target.value)}
                min="0"
                required
              />
            </div>
            
            <div style={editRoomStyles.formGroup}>
              <div style={editRoomStyles.formCheckboxContainer}>
                <input 
                  type="checkbox" 
                  id="featured"
                  style={editRoomStyles.formCheckbox}
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                />
                <label htmlFor="featured">Featured Room</label>
              </div>
              
              <div style={editRoomStyles.formCheckboxContainer}>
                <input 
                  type="checkbox" 
                  id="available"
                  style={editRoomStyles.formCheckbox}
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
                <label htmlFor="available">Available for Booking</label>
              </div>
            </div>
          </div>
          
          <div style={editRoomStyles.formGroup}>
            <label style={editRoomStyles.formLabel}>Description *</label>
            <textarea 
              style={editRoomStyles.formTextarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          
          <div style={editRoomStyles.formGroup}>
            <label style={editRoomStyles.formLabel}>Amenities</label>
            
            <div style={editRoomStyles.amenitiesList}>
              {amenities.map((amenity, index) => (
                <div key={index} style={editRoomStyles.amenityTag}>
                  <span>{amenity}</span>
                  <span 
                    style={editRoomStyles.amenityRemove}
                    onClick={() => handleRemoveAmenity(index)}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
            
            <div style={editRoomStyles.amenityInputContainer}>
              <input 
                type="text" 
                style={{...editRoomStyles.formInput, flex: 1}}
                value={amenityInput}
                onChange={(e) => setAmenityInput(e.target.value)}
                placeholder="Add amenity (e.g., WiFi, Air conditioning)"
              />
              <Button 
                outline
                onClick={handleAddAmenity}
                type="button"
              >
                Add
              </Button>
            </div>
          </div>
          
          <div style={editRoomStyles.formGroup}>
            <label style={editRoomStyles.formLabel}>Images *</label>
            
            {imageUrls.map((url, index) => (
              <div key={index} style={editRoomStyles.imageInputContainer}>
                <input 
                  type="text" 
                  style={{...editRoomStyles.formInput, flex: 1}}
                  value={url}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  placeholder="Enter image URL"
                  required
                />
                {imageUrls.length > 1 && (
                  <span 
                    style={editRoomStyles.imageRemove}
                    onClick={() => handleRemoveImage(index)}
                  >
                    ×
                  </span>
                )}
              </div>
            ))}
            
            <Button 
              outline
              onClick={handleAddImage}
              type="button"
              style={{ marginTop: '0.5rem' }}
            >
              Add Another Image
            </Button>
          </div>
          
          <div style={editRoomStyles.buttonContainer}>
            <Button 
              outline
              onClick={() => navigate('/admin/rooms')}
              type="button"
            >
              Cancel
            </Button>
            
            <Button 
              primary
              type="submit"
            >
              Update Room
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditRoomPage;