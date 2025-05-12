import React from 'react'
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Context
import { AuthProvider } from './context/AuthContext'

// Guest Pages
import HomePage from './pages/guest/HomePage'
import RoomsPage from './pages/guest/RoomsPage'
import RoomDetailPage from './pages/guest/RoomDetailPage'
import BookingPage from './pages/guest/BookingPage'
import LoginPage from './pages/LoginPage'

// Admin Pages
import AdminLayout from './components/admin/AdminLayout'
import DashboardPage from './pages/admin/DashboardPage'
import RoomsManagementPage from './pages/admin/RoomsManagementPage'
import AddRoomPage from './pages/admin/AddRoomPage'
import EditRoomPage from './pages/admin/EditRoomPage'
import ReservationsPage from './pages/admin/ReservationsPage'
import UsersPage from './pages/admin/UsersPage'
import MessagesPage from './pages/admin/MessagesPage'
import PromotionsPage from './pages/admin/PromotionsPage'

function App() {
  const location = useLocation()

  return (
    <AuthProvider>
      <div style={{
        fontFamily: "'Montserrat', sans-serif",
        color: '#333333',
        minHeight: '100vh',
      }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Guest Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetailPage />} />
            <Route path="/booking/:roomId?" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="rooms" element={<RoomsManagementPage />} />
              <Route path="rooms/add" element={<AddRoomPage />} />
              <Route path="rooms/edit/:id" element={<EditRoomPage />} />
              <Route path="reservations" element={<ReservationsPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="promotions" element={<PromotionsPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </AuthProvider>
  )
}

export default App