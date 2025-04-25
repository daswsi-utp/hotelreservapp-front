import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BedDouble, 
  CalendarClock, 
  TrendingUp, 
  AlertCircle, 
  DollarSign,
  Users
} from 'lucide-react';
import { useRooms } from '../hooks/useRooms';

const Dashboard: React.FC = () => {
  const { rooms } = useRooms();
  
  // Calculate statistics
  const totalRooms = rooms.length;
  const availableRooms = rooms.filter(room => room.status === 'available').length;
  const occupiedRooms = rooms.filter(room => room.status === 'occupied').length;
  const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;
  
  const maintenanceRooms = rooms.filter(room => room.status === 'maintenance').length;
  const cleaningRooms = rooms.filter(room => room.status === 'cleaning').length;
  
  // Calculate estimated daily revenue (sum of all occupied room prices)
  const estimatedDailyRevenue = rooms
    .filter(room => room.status === 'occupied')
    .reduce((sum, room) => sum + room.price, 0);

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="mt-3 sm:mt-0">
          <Link to="/rooms/new" className="btn btn-primary">
            + Add New Room
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Rooms" 
          value={totalRooms} 
          icon={<BedDouble className="h-6 w-6" />} 
          iconBg="bg-primary-100" 
          iconColor="text-primary-600" 
        />
        <StatCard 
          title="Occupancy Rate" 
          value={`${occupancyRate}%`} 
          icon={<TrendingUp className="h-6 w-6" />} 
          iconBg="bg-success-50" 
          iconColor="text-success-600" 
          trend={occupancyRate > 70 ? 'up' : occupancyRate < 30 ? 'down' : 'neutral'}
        />
        <StatCard 
          title="Daily Revenue" 
          value={`$${estimatedDailyRevenue.toFixed(2)}`} 
          icon={<DollarSign className="h-6 w-6" />} 
          iconBg="bg-accent-50" 
          iconColor="text-accent-600" 
        />
      </div>

      {/* Room Status Overview */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Room Status Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <RoomStatusCard 
          status="Available" 
          count={availableRooms} 
          total={totalRooms} 
          bgColor="bg-success-50" 
          textColor="text-success-700" 
          link="/rooms?status=available"
        />
        <RoomStatusCard 
          status="Occupied" 
          count={occupiedRooms} 
          total={totalRooms} 
          bgColor="bg-accent-50" 
          textColor="text-accent-700" 
          link="/rooms?status=occupied"
        />
        <RoomStatusCard 
          status="Maintenance" 
          count={maintenanceRooms} 
          total={totalRooms} 
          bgColor="bg-error-50" 
          textColor="text-error-700" 
          link="/rooms?status=maintenance"
        />
        <RoomStatusCard 
          status="Cleaning" 
          count={cleaningRooms} 
          total={totalRooms}
          bgColor="bg-primary-50" 
          textColor="text-primary-700" 
          link="/rooms?status=cleaning"
        />
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <QuickActionCard 
          title="Manage Rooms" 
          description="Add, edit, or remove hotel rooms" 
          icon={<BedDouble className="h-6 w-6" />} 
          link="/rooms" 
        />
        <QuickActionCard 
          title="Manage Reservations" 
          description="View and manage guest bookings" 
          icon={<CalendarClock className="h-6 w-6" />} 
          link="/reservations" 
        />
        <QuickActionCard 
          title="Manage Staff" 
          description="Add or update staff accounts" 
          icon={<Users className="h-6 w-6" />} 
          link="/users" 
        />
      </div>

      {/* Alerts Section */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-medium text-gray-700">Recent Alerts</h3>
        </div>
        <div className="p-4">
          {maintenanceRooms > 0 ? (
            <div className="flex items-start p-3 mb-3 bg-error-50 text-error-700 rounded-md">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium">{maintenanceRooms} {maintenanceRooms === 1 ? 'room' : 'rooms'} requiring maintenance</p>
                <p className="text-sm mt-1">Schedule maintenance to avoid booking conflicts.</p>
              </div>
            </div>
          ) : (
            <div className="flex items-start p-3 bg-success-50 text-success-700 rounded-md">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium">All rooms are in good condition</p>
                <p className="text-sm mt-1">No maintenance issues reported.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  trend?: 'up' | 'down' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconBg, 
  iconColor,
  trend
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-center">
        <div className={`${iconBg} ${iconColor} p-3 rounded-full mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        {trend && (
          <div className="ml-auto">
            {trend === 'up' && <TrendingUp className="h-5 w-5 text-success-500" />}
            {trend === 'down' && <TrendingUp className="h-5 w-5 text-error-500 transform rotate-180" />}
          </div>
        )}
      </div>
    </div>
  );
};

interface RoomStatusCardProps {
  status: string;
  count: number;
  total: number;
  bgColor: string;
  textColor: string;
  link: string;
}

const RoomStatusCard: React.FC<RoomStatusCardProps> = ({ 
  status, 
  count, 
  total, 
  bgColor, 
  textColor,
  link
}) => {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
  
  return (
    <Link to={link} className="block bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className={`font-medium ${textColor}`}>{status}</h3>
          <span className="text-gray-500 text-sm">{count} / {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`${bgColor} h-2.5 rounded-full`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{percentage}% of total rooms</p>
      </div>
    </Link>
  );
};

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ 
  title, 
  description, 
  icon, 
  link 
}) => {
  return (
    <Link 
      to={link} 
      className="bg-white rounded-lg shadow-card p-6 hover:shadow-card-hover transition-all duration-300 flex items-start"
    >
      <div className="bg-primary-50 text-primary-600 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;