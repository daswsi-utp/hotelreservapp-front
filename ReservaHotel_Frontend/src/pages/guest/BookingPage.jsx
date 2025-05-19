import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import { rooms } from '../../data/roomsData';

const BookingPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  
  useEffect(() => {
    // Get available rooms
    const available = rooms.filter(room => room.available);
    setAvailableRooms(available);
    
    // If roomId is provided, set it as selected room
    if (roomId) {
      const room = rooms.find(r => r.id === parseInt(roomId));
      if (room) {
        setSelectedRoom(room);
      }
    }
  }, [roomId]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  const calculateTotalNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * calculateTotalNights();
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedRoom) {
      alert('Please select a room to continue.');
      return;
    }
    
    if (currentStep === 2) {
      if (!guestName || !guestEmail) {
        alert('Please fill in your name and email to continue.');
        return;
      }
      
      // Generate booking reference
      const reference = `BP-${Date.now().toString().substr(-6)}`;
      setBookingReference(reference);
      setBookingComplete(true);
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const bookingStyles = {
    container: {
      maxWidth: '1200px',
      margin: '6rem auto 3rem',
      padding: '0 1rem',
    },
    bookingHeader: {
      marginBottom: '2rem',
      textAlign: 'center',
    },
    pageTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '1rem',
    },
    pageSubtitle: {
      fontSize: '1.1rem',
      color: '#666666',
      maxWidth: '600px',
      margin: '0 auto',
    },
    stepsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '3rem',
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '120px',
    },
    stepNumber: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      marginBottom: '0.5rem',
      zIndex: 2,
    },
    activeStepNumber: {
      backgroundColor: '#1E3A8A',
      color: '#ffffff',
    },
    completedStepNumber: {
      backgroundColor: '#D4AF37',
      color: '#ffffff',
    },
    stepConnector: {
      width: '80px',
      height: '2px',
      backgroundColor: '#f0f0f0',
      position: 'relative',
      top: '-22px',
      left: '60px',
      zIndex: 1,
    },
    activeStepConnector: {
      backgroundColor: '#1E3A8A',
    },
    stepLabel: {
      fontSize: '0.9rem',
      color: '#666666',
      textAlign: 'center',
    },
    activeStepLabel: {
      fontWeight: 600,
      color: '#1E3A8A',
    },
    bookingContent: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 992px)': {
        gridTemplateColumns: '2fr 1fr',
      },
    },
    roomSelection: {
      marginBottom: '2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
    },
    cardTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
    },
    datePickerContainer: {
      marginBottom: '2rem',
    },
    customDatePickerStyles: {
      fontFamily: "'Montserrat', sans-serif",
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      width: '100%',
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
    formTextarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem',
      minHeight: '120px',
      resize: 'vertical',
    },
    roomCard: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '1.5rem',
    },
    roomCardImage: {
      height: '200px',
      objectFit: 'cover',
    },
    roomCardContent: {
      padding: '1.5rem',
    },
    roomCardTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '0.5rem',
    },
    roomCardType: {
      fontSize: '0.9rem',
      color: '#666666',
      marginBottom: '1rem',
    },
    roomCardPrice: {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: '1rem',
    },
    roomCardPriceValue: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#D4AF37',
    },
    roomCardPriceText: {
      fontSize: '0.9rem',
      color: '#666666',
      marginLeft: '0.5rem',
    },
    selectedRoomCard: {
      border: '2px solid #D4AF37',
    },
    bookingSummary: {
      position: 'sticky',
      top: '100px',
    },
    summaryList: {
      marginBottom: '1.5rem',
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '0.95rem',
    },
    summaryTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 0',
      marginTop: '1rem',
      borderTop: '2px solid #f0f0f0',
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
    },
    confirmationContainer: {
      textAlign: 'center',
      paddingBottom: '3rem',
    },
    confirmationIcon: {
      fontSize: '4rem',
      color: '#D4AF37',
      marginBottom: '1.5rem',
    },
    confirmationTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '1rem',
    },
    confirmationMessage: {
      fontSize: '1.1rem',
      color: '#333333',
      maxWidth: '600px',
      margin: '0 auto 2rem',
      lineHeight: 1.5,
    },
    referenceContainer: {
      backgroundColor: '#f9f9f9',
      padding: '1.5rem',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '0 auto 2rem',
    },
    referenceLabel: {
      fontSize: '0.9rem',
      color: '#666666',
      marginBottom: '0.5rem',
    },
    referenceNumber: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#1E3A8A',
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
        <div style={bookingStyles.container}>
          <div style={bookingStyles.bookingHeader}>
            <h1 style={bookingStyles.pageTitle}>Book Your Stay</h1>
            <p style={bookingStyles.pageSubtitle}>
              Complete the booking process to secure your perfect getaway at Hotel Paradise.
            </p>
          </div>
          
          {!bookingComplete && (
            <div style={bookingStyles.stepsContainer}>
              <div style={bookingStyles.step}>
                <div 
                  style={{
                    ...bookingStyles.stepNumber,
                    ...(currentStep >= 1 ? bookingStyles.activeStepNumber : {}),
                    ...(currentStep > 1 ? bookingStyles.completedStepNumber : {})
                  }}
                >
                  {currentStep > 1 ? '✓' : 1}
                </div>
                <div 
                  style={{
                    ...bookingStyles.stepLabel,
                    ...(currentStep >= 1 ? bookingStyles.activeStepLabel : {})
                  }}
                >
                  Select Room
                </div>
              </div>
              
              <div style={{
                ...bookingStyles.stepConnector,
                ...(currentStep > 1 ? bookingStyles.activeStepConnector : {})
              }}></div>
              
              <div style={bookingStyles.step}>
                <div 
                  style={{
                    ...bookingStyles.stepNumber,
                    ...(currentStep >= 2 ? bookingStyles.activeStepNumber : {}),
                    ...(currentStep > 2 ? bookingStyles.completedStepNumber : {})
                  }}
                >
                  {currentStep > 2 ? '✓' : 2}
                </div>
                <div 
                  style={{
                    ...bookingStyles.stepLabel,
                    ...(currentStep >= 2 ? bookingStyles.activeStepLabel : {})
                  }}
                >
                  Guest Details
                </div>
              </div>
              
              <div style={{
                ...bookingStyles.stepConnector,
                ...(currentStep > 2 ? bookingStyles.activeStepConnector : {})
              }}></div>
              
              <div style={bookingStyles.step}>
                <div 
                  style={{
                    ...bookingStyles.stepNumber,
                    ...(currentStep >= 3 ? bookingStyles.activeStepNumber : {})
                  }}
                >
                  3
                </div>
                <div 
                  style={{
                    ...bookingStyles.stepLabel,
                    ...(currentStep >= 3 ? bookingStyles.activeStepLabel : {})
                  }}
                >
                  Confirmation
                </div>
              </div>
            </div>
          )}
          
          {!bookingComplete ? (
            <div style={{
              ...bookingStyles.bookingContent,
              gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '2fr 1fr'
            }}>
              <div>
                {currentStep === 1 && (
                  <>
                    <div style={bookingStyles.card}>
                      <h2 style={bookingStyles.cardTitle}>Select Your Stay Dates</h2>
                      
                      <div style={bookingStyles.datePickerContainer}>
                        <DatePicker
                          selected={checkInDate}
                          onChange={handleDateChange}
                          startDate={checkInDate}
                          endDate={checkOutDate}
                          selectsRange
                          inline
                          minDate={new Date()}
                        />
                      </div>
                      
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={bookingStyles.formGroup}>
                          <label style={bookingStyles.formLabel}>Adults</label>
                          <select 
                            style={bookingStyles.formSelect}
                            value={adults}
                            onChange={(e) => setAdults(parseInt(e.target.value))}
                          >
                            {[1, 2, 3, 4, 5].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div style={bookingStyles.formGroup}>
                          <label style={bookingStyles.formLabel}>Children</label>
                          <select 
                            style={bookingStyles.formSelect}
                            value={children}
                            onChange={(e) => setChildren(parseInt(e.target.value))}
                          >
                            {[0, 1, 2, 3, 4].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div style={bookingStyles.roomSelection}>
                      <h2 style={bookingStyles.cardTitle}>Select a Room</h2>
                      
                      {availableRooms.map(room => (
                        <motion.div 
                          key={room.id}
                          whileHover={{ translateY: -5 }}
                          onClick={() => handleRoomSelect(room)}
                          style={{
                            ...bookingStyles.roomCard,
                            ...(selectedRoom?.id === room.id ? bookingStyles.selectedRoomCard : {}),
                            cursor: 'pointer',
                          }}
                        >
                          <img 
                            src={room.images[0]} 
                            alt={room.name} 
                            style={bookingStyles.roomCardImage} 
                          />
                          
                          <div style={bookingStyles.roomCardContent}>
                            <h3 style={bookingStyles.roomCardTitle}>{room.name}</h3>
                            <p style={bookingStyles.roomCardType}>{room.type} Room • Max {room.capacity} guests</p>
                            
                            <div style={bookingStyles.roomCardPrice}>
                              <span style={bookingStyles.roomCardPriceValue}>${room.price}</span>
                              <span style={bookingStyles.roomCardPriceText}>per night</span>
                            </div>
                            
                            <Button 
                              primary={selectedRoom?.id === room.id}
                              outline={selectedRoom?.id !== room.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRoomSelect(room);
                              }}
                            >
                              {selectedRoom?.id === room.id ? 'Selected' : 'Select Room'}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
                
                {currentStep === 2 && (
                  <div style={bookingStyles.card}>
                    <h2 style={bookingStyles.cardTitle}>Guest Information</h2>
                    
                    <div style={bookingStyles.formGroup}>
                      <label style={bookingStyles.formLabel}>Full Name *</label>
                      <input 
                        type="text" 
                        style={bookingStyles.formInput}
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div style={bookingStyles.formGroup}>
                      <label style={bookingStyles.formLabel}>Email Address *</label>
                      <input 
                        type="email" 
                        style={bookingStyles.formInput}
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div style={bookingStyles.formGroup}>
                      <label style={bookingStyles.formLabel}>Phone Number</label>
                      <input 
                        type="tel" 
                        style={bookingStyles.formInput}
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                      />
                    </div>
                    
                    <div style={bookingStyles.formGroup}>
                      <label style={bookingStyles.formLabel}>Special Requests</label>
                      <textarea 
                        style={bookingStyles.formTextarea}
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Let us know if you have any special requirements or preferences."
                      ></textarea>
                    </div>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div style={bookingStyles.card}>
                    <h2 style={bookingStyles.cardTitle}>Booking Summary</h2>
                    
                    <div style={bookingStyles.summaryList}>
                      <div style={bookingStyles.summaryItem}>
                        <span>Room:</span>
                        <span>{selectedRoom?.name}</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Check-in:</span>
                        <span>{checkInDate.toLocaleDateString()}</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Check-out:</span>
                        <span>{checkOutDate.toLocaleDateString()}</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Guests:</span>
                        <span>{adults} adults, {children} children</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Duration:</span>
                        <span>{calculateTotalNights()} nights</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Nightly Rate:</span>
                        <span>${selectedRoom?.price}</span>
                      </div>
                    </div>
                    
                    <div style={bookingStyles.summaryTotal}>
                      <span>Total:</span>
                      <span>${calculateTotalPrice()}</span>
                    </div>
                    
                    <div style={bookingStyles.formGroup}>
                      <h3 style={{ ...bookingStyles.cardTitle, fontSize: '1.25rem', marginTop: '2rem' }}>
                        Guest Information
                      </h3>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Name:</span>
                        <span>{guestName}</span>
                      </div>
                      
                      <div style={bookingStyles.summaryItem}>
                        <span>Email:</span>
                        <span>{guestEmail}</span>
                      </div>
                      
                      {guestPhone && (
                        <div style={bookingStyles.summaryItem}>
                          <span>Phone:</span>
                          <span>{guestPhone}</span>
                        </div>
                      )}
                    </div>
                    
                    {specialRequests && (
                      <div style={bookingStyles.formGroup}>
                        <h3 style={{ ...bookingStyles.cardTitle, fontSize: '1.25rem', marginTop: '2rem' }}>
                          Special Requests
                        </h3>
                        <p style={{ lineHeight: 1.5 }}>{specialRequests}</p>
                      </div>
                    )}
                  </div>
                )}
                
                <div style={bookingStyles.buttonContainer}>
                  {currentStep > 1 && (
                    <Button outline onClick={handlePrevStep}>
                      Back
                    </Button>
                  )}
                  
                  <Button 
                    primary 
                    onClick={handleNextStep}
                    style={{ marginLeft: currentStep > 1 ? 'auto' : 0 }}
                  >
                    {currentStep === 3 ? 'Confirm Booking' : 'Continue'}
                  </Button>
                </div>
              </div>
              
              <div style={bookingStyles.bookingSummary}>
                <div style={bookingStyles.card}>
                  <h2 style={bookingStyles.cardTitle}>Booking Summary</h2>
                  
                  {selectedRoom ? (
                    <>
                      <div style={bookingStyles.summaryList}>
                        <div style={bookingStyles.summaryItem}>
                          <span>Room:</span>
                          <span>{selectedRoom.name}</span>
                        </div>
                        
                        <div style={bookingStyles.summaryItem}>
                          <span>Check-in:</span>
                          <span>{checkInDate.toLocaleDateString()}</span>
                        </div>
                        
                        <div style={bookingStyles.summaryItem}>
                          <span>Check-out:</span>
                          <span>{checkOutDate.toLocaleDateString()}</span>
                        </div>
                        
                        <div style={bookingStyles.summaryItem}>
                          <span>Nights:</span>
                          <span>{calculateTotalNights()}</span>
                        </div>
                        
                        <div style={bookingStyles.summaryItem}>
                          <span>Guests:</span>
                          <span>{adults} adults, {children} children</span>
                        </div>
                      </div>
                      
                      <div style={bookingStyles.summaryTotal}>
                        <span>Total:</span>
                        <span>${calculateTotalPrice()}</span>
                      </div>
                    </>
                  ) : (
                    <p style={{ color: '#666666' }}>
                      Please select a room to view the booking summary.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div style={bookingStyles.confirmationContainer}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                style={bookingStyles.confirmationIcon}
              >
                ✓
              </motion.div>
              
              <h2 style={bookingStyles.confirmationTitle}>
                Booking Confirmed!
              </h2>
              
              <p style={bookingStyles.confirmationMessage}>
                Thank you for choosing Hotel Paradise. Your booking has been confirmed and a confirmation email has been sent to <strong>{guestEmail}</strong>. We look forward to welcoming you on <strong>{checkInDate.toLocaleDateString()}</strong>.
              </p>
              
              <div style={bookingStyles.referenceContainer}>
                <p style={bookingStyles.referenceLabel}>Booking Reference:</p>
                <p style={bookingStyles.referenceNumber}>{bookingReference}</p>
              </div>
              
              <Button primary large as="a" href="/">
                Return to Homepage
              </Button>
            </div>
          )}
        </div>
      </motion.div>
      
      <Footer />
    </>
  );
};

export default BookingPage;