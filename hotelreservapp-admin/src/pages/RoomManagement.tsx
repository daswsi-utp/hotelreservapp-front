import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import RoomTable from '../components/rooms/RoomTable';
import { useRooms } from '../hooks/useRooms';

const RoomManagement: React.FC = () => {
  const navigate = useNavigate();
  const { rooms, deleteRoom } = useRooms();
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleAddRoom = () => {
    navigate('/rooms/new');
  };
  
  const handleDeleteRoom = async (id: string) => {
    try {
      setIsDeleting(true);
      await deleteRoom(id);
    } catch (error) {
      console.error('Failed to delete room:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Room Management</h1>
        <div className="mt-3 sm:mt-0">
          <button 
            onClick={handleAddRoom}
            className="btn btn-primary inline-flex items-center"
            disabled={isDeleting}
          >
            <Plus className="h-5 w-5 mr-1" />
            Add New Room
          </button>
        </div>
      </div>
      
      <RoomTable 
        rooms={rooms}
        onDelete={handleDeleteRoom}
      />
    </div>
  );
};

export default RoomManagement;