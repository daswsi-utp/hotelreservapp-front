import { useState, useEffect } from 'react';
import { Room } from '../types/room';

// Simulated room data - this would normally come from an API
const initialRooms: Room[] = [
  {
    id: '1',
    number: '101',
    type: 'standard',
    price: 99.99,
    status: 'available',
    capacity: 2,
    description: 'Comfortable standard room with all basic amenities.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Fridge'],
    imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    number: '102',
    type: 'deluxe',
    price: 149.99,
    status: 'occupied',
    capacity: 2,
    description: 'Spacious deluxe room with premium furnishings and city view.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Safe', 'Desk'],
    imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    number: '201',
    type: 'suite',
    price: 249.99,
    status: 'available',
    capacity: 4,
    description: 'Luxury suite with separate living area and premium amenities.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Safe', 'Desk', 'Lounge Area', 'Coffee Machine'],
    imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    number: '301',
    type: 'executive',
    price: 299.99,
    status: 'maintenance',
    capacity: 2,
    description: 'Executive room with premium amenities and dedicated work space.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Safe', 'Desk', 'Coffee Machine', 'Bathrobe', 'Slippers'],
    imageUrl: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    number: '401',
    type: 'presidential',
    price: 499.99,
    status: 'available',
    capacity: 4,
    description: 'Our finest suite with panoramic views, multiple rooms, and premium services.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Safe', 'Desk', 'Lounge Area', 'Coffee Machine', 'Bathrobe', 'Slippers', 'Dining Area', 'Fireplace'],
    imageUrl: 'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    number: '202',
    type: 'deluxe',
    price: 159.99,
    status: 'cleaning',
    capacity: 3,
    description: 'Spacious deluxe room with garden view.',
    amenities: ['Wi-Fi', 'TV', 'Air Conditioning', 'Mini Bar', 'Safe', 'Desk'],
    imageUrl: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchRooms = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setRooms(initialRooms);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const addRoom = async (roomData: Omit<Room, 'id'>): Promise<Room> => {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newRoom: Room = {
      ...roomData,
      id: Date.now().toString(), // Generate a unique ID (in a real app, the backend would do this)
    };
    
    setRooms(prevRooms => [...prevRooms, newRoom]);
    return newRoom;
  };

  const updateRoom = async (id: string, roomData: Omit<Room, 'id'>): Promise<Room> => {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedRoom: Room = {
      ...roomData,
      id,
    };
    
    setRooms(prevRooms => 
      prevRooms.map(room => room.id === id ? updatedRoom : room)
    );
    
    return updatedRoom;
  };

  const deleteRoom = async (id: string): Promise<void> => {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setRooms(prevRooms => prevRooms.filter(room => room.id !== id));
  };

  return {
    rooms,
    isLoading,
    error,
    addRoom,
    updateRoom,
    deleteRoom,
  };
};