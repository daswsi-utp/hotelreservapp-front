export type RoomType = 'standard' | 'deluxe' | 'suite' | 'executive' | 'presidential';
export type RoomStatus = 'available' | 'occupied' | 'maintenance' | 'cleaning';

export interface Room {
  id: string;
  number: string;
  type: RoomType;
  price: number;
  status: RoomStatus;
  capacity: number;
  description: string;
  amenities: string[];
  imageUrl: string;
}