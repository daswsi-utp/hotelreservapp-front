import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  ArcElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import StatCard from '../../components/admin/StatCard';
import { rooms, bookings, users } from '../../data/roomsData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const [totalRooms, setTotalRooms] = useState(0);
  const [occupiedRooms, setOccupiedRooms] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0);
  const [revenueData, setRevenueData] = useState(null);
  const [roomTypesData, setRoomTypesData] = useState(null);
  const [recentBookings, setRecentBookings] = useState([]);
  
  useEffect(() => {
    // Calculate dashboard statistics
    setTotalRooms(rooms.length);
    setOccupiedRooms(bookings.filter(b => b.status === 'confirmed').length);
    setTotalRevenue(bookings.reduce((total, booking) => total + booking.totalPrice, 0));
    setTotalGuests(users.length);
    
    // Set recent bookings
    setRecentBookings(bookings
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5)
    );
    
    // Prepare revenue chart data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyRevenue = Array(12).fill(0);
    
    bookings.forEach(booking => {
      const month = booking.createdAt.getMonth();
      monthlyRevenue[month] += booking.totalPrice;
    });
    
    setRevenueData({
      labels: months,
      datasets: [
        {
          label: 'Revenue',
          data: monthlyRevenue,
          fill: false,
          borderColor: '#1E3A8A',
          backgroundColor: 'rgba(30, 58, 138, 0.2)',
          tension: 0.4,
        },
      ],
    });
    
    // Prepare room types chart data
    const roomTypes = {};
    rooms.forEach(room => {
      if (roomTypes[room.type]) {
        roomTypes[room.type]++;
      } else {
        roomTypes[room.type] = 1;
      }
    });
    
    setRoomTypesData({
      labels: Object.keys(roomTypes),
      datasets: [
        {
          data: Object.values(roomTypes),
          backgroundColor: ['#1E3A8A', '#D4AF37', '#3B82F6'],
          borderColor: '#ffffff',
          borderWidth: 2,
        },
      ],
    });
  }, []);

  const dashboardStyles = {
    pageTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1E3A8A',
      marginBottom: '2rem',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      marginBottom: '2rem',
    },
    cardTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1E3A8A',
      marginBottom: '1.5rem',
    },
    chartsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      marginBottom: '2rem',
      '@media (min-width: 992px)': {
        gridTemplateColumns: '2fr 1fr',
      },
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f9f9f9',
      textAlign: 'left',
      padding: '1rem',
      fontWeight: 600,
      color: '#333333',
      borderBottom: '1px solid #e0e0e0',
    },
    tableCell: {
      padding: '1rem',
      borderBottom: '1px solid #e0e0e0',
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
  };

  return (
    <div>
      <h1 style={dashboardStyles.pageTitle}>Dashboard</h1>
      
      <div style={dashboardStyles.statsGrid}>
        <StatCard 
          title="Total Rooms" 
          value={totalRooms}
          icon="🏨"
          color="#1E3A8A"
        />
        
        <StatCard 
          title="Occupied Rooms" 
          value={`${occupiedRooms} (${Math.round((occupiedRooms / totalRooms) * 100)}%)`}
          icon="🔑"
          color="#05965A"
        />
        
        <StatCard 
          title="Total Revenue" 
          value={`$${totalRevenue.toLocaleString()}`}
          icon="💰"
          color="#D4AF37"
        />
        
        <StatCard 
          title="Total Guests" 
          value={totalGuests}
          icon="👥"
          color="#F59E0B"
        />
      </div>
      
      <div style={{
        ...dashboardStyles.chartsGrid,
        gridTemplateColumns: window.innerWidth < 992 ? '1fr' : '2fr 1fr'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={dashboardStyles.card}
        >
          <h2 style={dashboardStyles.cardTitle}>Revenue Overview</h2>
          {revenueData && <Line data={revenueData} />}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={dashboardStyles.card}
        >
          <h2 style={dashboardStyles.cardTitle}>Room Types</h2>
          {roomTypesData && (
            <div style={{ padding: '1rem', maxWidth: '300px', margin: '0 auto' }}>
              <Doughnut data={roomTypesData} />
            </div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={dashboardStyles.card}
      >
        <h2 style={dashboardStyles.cardTitle}>Recent Bookings</h2>
        
        <table style={dashboardStyles.table}>
          <thead>
            <tr>
              <th style={dashboardStyles.tableHeader}>Booking ID</th>
              <th style={dashboardStyles.tableHeader}>Guest</th>
              <th style={dashboardStyles.tableHeader}>Room</th>
              <th style={dashboardStyles.tableHeader}>Check-in</th>
              <th style={dashboardStyles.tableHeader}>Check-out</th>
              <th style={dashboardStyles.tableHeader}>Amount</th>
              <th style={dashboardStyles.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking) => (
              <tr key={booking.id}>
                <td style={dashboardStyles.tableCell}>#{booking.id}</td>
                <td style={dashboardStyles.tableCell}>{booking.guestName}</td>
                <td style={dashboardStyles.tableCell}>{booking.roomName}</td>
                <td style={dashboardStyles.tableCell}>{booking.checkIn.toLocaleDateString()}</td>
                <td style={dashboardStyles.tableCell}>{booking.checkOut.toLocaleDateString()}</td>
                <td style={dashboardStyles.tableCell}>${booking.totalPrice}</td>
                <td style={dashboardStyles.tableCell}>
                  <span 
                    style={{
                      ...dashboardStyles.statusBadge,
                      ...(booking.status === 'confirmed' ? dashboardStyles.statusConfirmed : 
                         booking.status === 'pending' ? dashboardStyles.statusPending :
                         dashboardStyles.statusCancelled)
                    }}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default DashboardPage;