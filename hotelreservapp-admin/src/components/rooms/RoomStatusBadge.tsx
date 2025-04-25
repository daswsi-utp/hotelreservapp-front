import React from 'react';
import { RoomStatus } from '../../types/room';

interface RoomStatusBadgeProps {
  status: RoomStatus;
}

const RoomStatusBadge: React.FC<RoomStatusBadgeProps> = ({ status }) => {
  let badgeClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  switch (status) {
    case 'available':
      badgeClasses += ' bg-success-50 text-success-700';
      break;
    case 'occupied':
      badgeClasses += ' bg-accent-50 text-accent-700';
      break;
    case 'maintenance':
      badgeClasses += ' bg-error-50 text-error-700';
      break;
    case 'cleaning':
      badgeClasses += ' bg-primary-50 text-primary-700';
      break;
    default:
      badgeClasses += ' bg-gray-100 text-gray-800';
  }

  return (
    <span className={badgeClasses}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default RoomStatusBadge;