import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Shield, Plus, Search, Filter } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'manager' | 'receptionist' | 'housekeeper' | 'maintenance';
  status: 'active' | 'inactive';
  joinDate: string;
  lastActive: string;
}

const mockStaff: StaffMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@hotel.com',
    phone: '9658742563',
    role: 'manager',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2025-03-10T09:30:00'
  },
  {
    id: '2',
    name: 'David Chen',
    email: 'david.c@hotel.com',
    phone: '965721522',
    role: 'receptionist',
    status: 'active',
    joinDate: '2024-06-20',
    lastActive: '2025-03-10T11:45:00'
  },
  {
    id: '3',
    name: 'Maria Garcia',
    email: 'maria.g@hotel.com',
    phone: '985634258',
    role: 'housekeeper',
    status: 'inactive',
    joinDate: '2024-03-10',
    lastActive: '2025-02-28T16:20:00'
  }
];

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredStaff = mockStaff.filter(staff => {
    const matchesSearch = 
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || staff.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || staff.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadgeClass = (role: StaffMember['role']) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (role) {
      case 'admin':
        return `${baseClasses} bg-error-50 text-error-700`;
      case 'manager':
        return `${baseClasses} bg-primary-50 text-primary-700`;
      case 'receptionist':
        return `${baseClasses} bg-accent-50 text-accent-700`;
      case 'housekeeper':
        return `${baseClasses} bg-success-50 text-success-700`;
      case 'maintenance':
        return `${baseClasses} bg-warning-50 text-warning-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const getStatusDot = (status: StaffMember['status']) => {
    return status === 'active' 
      ? 'bg-success-500'
      : 'bg-gray-300';
  };

  const formatLastActive = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Staff Management</h1>
          <p className="mt-1 text-sm text-gray-600">Manage hotel staff and their roles</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="btn btn-primary inline-flex items-center">
            <Plus className="h-5 w-5 mr-1" />
            Add Staff Member
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search staff..."
              className="form-input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <select
              className="form-input"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="receptionist">Receptionist</option>
              <option value="housekeeper">Housekeeper</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          
          <div>
            <select
              className="form-input"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          
          <div>
            <button className="btn btn-outline w-full inline-flex items-center justify-center">
              <Filter className="h-4 w-4 mr-1" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStaff.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        <div className="text-sm text-gray-500">Last active {formatLastActive(staff.lastActive)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {staff.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <Phone className="h-4 w-4 mr-1" />
                      {staff.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getRoleBadgeClass(staff.role)}>
                      {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {new Date(staff.joinDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full ${getStatusDot(staff.status)} mr-2`}></div>
                      <span className="text-sm text-gray-900">
                        {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                    <button className="text-error-600 hover:text-error-900">Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;