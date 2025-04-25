import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RoomForm from '../components/rooms/RoomForm';
import { Room } from '../types/room';
import { useRooms } from '../hooks/useRooms';

const EditRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { rooms, updateRoom } = useRooms();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    if (id) {
      const foundRoom = rooms.find(r => r.id === id);
      if (foundRoom) {
        setRoom(foundRoom);
      } else {
        // Room not found
        navigate('/rooms', { replace: true });
      }
    }
    setIsLoading(false);
  }, [id, rooms, navigate]);

  const handleSubmit = async (roomData: Omit<Room, 'id'>) => {
    if (!id) return;
    
    try {
      setIsSubmitting(true);
      await updateRoom(id, roomData);
      navigate('/rooms');
    } catch (error) {
      console.error('Failed to update room:', error);
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading room data...</p>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="bg-error-50 text-error-700 p-4 rounded-md">
        <h2 className="text-lg font-medium">Room Not Found</h2>
        <p className="mt-1">The room you are trying to edit doesn't exist.</p>
        <button 
          onClick={() => navigate('/rooms')}
          className="mt-3 btn btn-outline"
        >
          Back to Room Management
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Room</h1>
        <p className="mt-1 text-sm text-gray-600">Update room {room.number} details.</p>
      </div>
      
      <RoomForm 
        initialRoom={room}
        onSubmit={handleSubmit}
        isLoading={isSubmitting}
      />
    </div>
  );
};

export default EditRoom;