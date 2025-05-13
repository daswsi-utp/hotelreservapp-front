import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';

const AddRoomPage = () => {
  const browse = useNavigate();
  const [name, setName] = useState('');
  const [type, setType] = useState('Estándar');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState(2);
  const [size, setSize] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [amenityInput, setAmenityInput] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [featured, setFeatured] = useState(false);
  const [available, setAvailable] = useState(true);

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
    // Validación simple
    if (!name || !type || !description || !price || !size || imageUrls.filter(url => url).length === 0) {
      alert('Por favor, rellene todos los campos obligatorios.');
      return;
    }

    // Para fines de demostración, simplemente vuelva a la administración de salas
    alert('¡Habitación añadida correctamente!');
    browse('/admin/rooms');
  };

  const addRoomStyles = {
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
      <h1 style={addRoomStyles.pageTitle}>Agregar nueva sala</h1>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={addRoomStyles.card}>
        <form onSubmit={handleSubmit}>
          <div style={addRoomStyles.formGrid}>
            <div style={addRoomStyles.formGroup}>
              <label style={addRoomStyles.formLabel}>Nombre de la sala *</label>
              <input type="text" style={addRoomStyles.formInput} value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div style={addRoomStyles.formGroup}>
              <label style={addRoomStyles.formLabel}>Tipo de sala *</label>
              <select style={addRoomStyles.formSelect} value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="Estándar">Estándar</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <div style={addRoomStyles.formGroup}>
              <label style={addRoomStyles.formLabel}>Precio por noche ($) *</label>
              <input type="number" style={addRoomStyles.formInput} value={price} onChange={(e) => setPrice(e.target.value)} min="0" required />
            </div>
            <div style={addRoomStyles.formGroup}>
              <label style={addRoomStyles.formLabel}>Capacidad (Huéspedes) *</label>
              <select style={addRoomStyles.formSelect} value={capacity} onChange={(e) => setCapacity(parseInt(e.target.value))} required>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div style={addRoomStyles.formGroup}>
              <label style={addRoomStyles.formLabel}>Tamaño de la habitación (m²) *</label>
              <input type="number" style={addRoomStyles.formInput} value={size} onChange={(e) => setSize(e.target.value)} min="0" required />
            </div>
            <div style={addRoomStyles.formGroup}>
              <div style={addRoomStyles.formCheckboxContainer}>
                <input type="checkbox" id="destacado" style={addRoomStyles.formCheckbox} checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                <label htmlFor="destacado">Habitación destacada</label>
              </div>
              <div style={addRoomStyles.formCheckboxContainer}>
                <input type="checkbox" id="disponible" style={addRoomStyles.formCheckbox} checked={available} onChange={(e) => setAvailable(e.target.checked)} />
                <label htmlFor="disponible">Disponible para reservar</label>
              </div>
            </div>
          </div>
          <div style={addRoomStyles.formGroup}>
            <label style={addRoomStyles.formLabel}>Descripción *</label>
            <textarea style={addRoomStyles.formTextarea} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          <div style={addRoomStyles.formGroup}>
            <label style={addRoomStyles.formLabel}>Servicios</label>
            <div style={addRoomStyles.amenitiesList}>
              {amenities.map((amenity, index) => (
                <div key={index} style={addRoomStyles.amenityTag}>
                  <span>{amenity}</span>
                  <span style={addRoomStyles.amenityRemove} onClick={() => handleRemoveAmenity(index)}> × </span>
                </div>
              ))}
            </div>
            <div style={addRoomStyles.amenityInputContainer}>
              <input type="text" style={{...addRoomStyles.formInput, flex: 1}} value={amenityInput} onChange={(e) => setAmenityInput(e.target.value)} placeholder="Añadir amenidad (p. ej., WiFi, Aire acondicionado)" />
              <Button outline onClick={handleAddAmenity} type="button"> Añadir </Button>
            </div>
          </div>
          <div style={addRoomStyles.formGroup}>
            <label style={addRoomStyles.formLabel}>Imágenes *</label>
            {imageUrls.map((url, index) => (
              <div key={index} style={addRoomStyles.imageInputContainer}>
                <input type="text" style={{...addRoomStyles.formInput, flex: 1}} value={url} onChange={(e) => handleImageChange(index, e.target.value)} placeholder="Ingresar URL de la imagen" required />
                {imageUrls.length > 1 && (
                  <span style={addRoomStyles.imageRemove} onClick={() => handleRemoveImage(index)}> × </span>
                )}
              </div>
            ))}
            <Button outline onClick={handleAddImage} type="button" style={{ marginTop: '0.5rem' }}> Agregar otra imagen </Button>
          </div>
          <div style={addRoomStyles.buttonContainer}>
            <Button outline onClick={() => browse('/admin/rooms')} type="button"> Cancelar </Button>
            <Button primary type="submit"> Guardar sala </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddRoomPage;
