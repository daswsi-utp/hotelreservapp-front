import { useNavigate } from 'react-router-dom';

const RoomManagement = () => {
  const navigate = useNavigate();

  const handleAddRoom = () => {
    navigate('/new-room');
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
        <h1 className="text-2xl font-semibold mb-6">Room Management</h1>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Suite</td>
                <td className="py-2 px-4 border-b">$150</td>
                <td className="py-2 px-4 border-b">Available</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <button
          onClick={handleAddRoom}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Add New Room
        </button>
      </main>
    </div>
  );
};

export default RoomManagement;
