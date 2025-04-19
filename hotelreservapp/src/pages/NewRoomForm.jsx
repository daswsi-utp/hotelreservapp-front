import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRoomForm = () => {
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState({
    type: '',
    price: '',
    description: ''
  });

  const [rooms, setRooms] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveRoom = () => {
    setRooms((prevRooms) => [...prevRooms, roomData]);
    setRoomData({ type: '', price: '', description: '' }); 
  };

  const handleEditRoom = (index) => {
    const selectedRoom = rooms[index];
    setRoomData(selectedRoom); 
    setRooms(rooms.filter((_, i) => i !== index)); 
  };

  const handleDeleteRoom = (index) => {
    setRooms(rooms.filter((_, i) => i !== index)); 
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      <aside className="w-64 bg-gray-100 p-4 space-y-4">
        <div className="font-bold text-gray-800">▶ Administration Panel</div>
        <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">
          📌 Room Management
        </div>
        <div className="hover:text-blue-500 cursor-pointer">📷 New Room Form</div>
        <div className="hover:text-blue-500 cursor-pointer">📄 Reservation Management</div>
      </aside>

    
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6 text-blue-600">New Room Form</h1>

        
        <div className="mb-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-semibold text-gray-700" htmlFor="type">Room Type</label>
              <input
                type="text"
                id="type"
                name="type"
                value={roomData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter room type"
              />
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-gray-700" htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={roomData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter room price"
              />
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-gray-700" htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={roomData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter room description"
              />
            </div>
          </div>

          <button
            onClick={handleSaveRoom}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Room
          </button>
        </div>

        
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{room.type}</td>
                  <td className="py-2 px-4 border-b">{room.price}</td>
                  <td className="py-2 px-4 border-b">{room.description}</td>
                  <td className="py-2 px-4 border-b space-x-2">
                    <button
                      onClick={() => handleEditRoom(index)}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteRoom(index)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default NewRoomForm;
