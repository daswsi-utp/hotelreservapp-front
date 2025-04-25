import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomForm from '../components/rooms/RoomForm';
import { Room } from '../types/room';
import { useRooms } from '../hooks/useRooms';

const NewRoom: React.FC = () => {
  const navigate = useNavigate();
  const { addRoom } = useRooms();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (roomData: Omit<Room, 'id'>) => {
    try {
      setIsSubmitting(true);
      await addRoom(roomData);
      navigate('/rooms');
    } catch (error) {
      console.error('Failed to create room:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Add New Room</h1>
        <p className="mt-1 text-sm text-gray-600">Create a new room in the hotel inventory.</p>
      </div>
      
      <RoomForm 
        onSubmit={handleSubmit}
        isLoading={isSubmitting}
      />
    </div>
  );
};

export default NewRoom;