import React, { useState } from 'react';
import { 
  Hotel, 
  Mail, 
  Phone, 
  Globe, 
  CreditCard, 
  Bell, 
  Lock,
  Shield,
  Palette,
  Languages,
  Save
} from 'lucide-react';

const Settings: React.FC = () => {
  const [hotelSettings, setHotelSettings] = useState({
    name: 'Grand Hotel',
    email: 'info@grandhotel.com',
    phone: '665785245',
    address: '123 Luxury Avenue, Beverly Hills, CA 90210',
    website: 'www.grandhotel.com',
    currency: 'USD',
    timezone: 'America/Los_Angeles',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    language: 'en',
    theme: 'light'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHotelSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update
    console.log('Settings updated:', hotelSettings);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">Manage your hotel settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hotel Information */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-card">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Hotel className="h-5 w-5 mr-2 text-primary-600" />
                Hotel Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Hotel Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={hotelSettings.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={hotelSettings.email}
                      onChange={handleChange}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={hotelSettings.phone}
                      onChange={handleChange}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="website" className="form-label">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={hotelSettings.website}
                      onChange={handleChange}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <div className="form-group md:col-span-2">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={hotelSettings.address}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Business Settings */}
            <div className="border-t border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
                Business Settings
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="currency" className="form-label">Currency</label>
                  <select
                    id="currency"
                    name="currency"
                    value={hotelSettings.currency}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timezone" className="form-label">Timezone</label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={hotelSettings.timezone}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Asia/Tokyo">Tokyo (JST)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="checkInTime" className="form-label">Check-in Time</label>
                  <input
                    type="time"
                    id="checkInTime"
                    name="checkInTime"
                    value={hotelSettings.checkInTime}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkOutTime" className="form-label">Check-out Time</label>
                  <input
                    type="time"
                    id="checkOutTime"
                    name="checkOutTime"
                    onChange={handleChange}
                    value={hotelSettings.checkOutTime}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-end">
              <button type="submit" className="btn btn-primary inline-flex items-center">
                <Save className="h-4 w-4 mr-1" />
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Quick Settings */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary-600" />
              Notifications
            </h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2 text-sm text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2 text-sm text-gray-700">SMS notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2 text-sm text-gray-700">Browser notifications</span>
              </label>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary-600" />
              Security
            </h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2 text-sm text-gray-700">Two-factor authentication</span>
              </label>
              <button className="btn btn-outline w-full justify-center">
                Change Password
              </button>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              
              <Palette className="h-5 w-5 mr-2 text-primary-600" />
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="form-group">
                <label htmlFor="theme" className="form-label">Theme</label>
                <select
                  id="theme"
                  name="theme"
                  value={hotelSettings.theme}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="language" className="form-label">Language</label>
                <select
                  id="language"
                  name="language"
                  value={hotelSettings.language}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;