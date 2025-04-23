const AdminPanel = () => {
    return (
      <div className="flex min-h-screen bg-white font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 space-y-4">
          <div className="font-bold text-blue-600">▶ Administration Panel</div>
          <div className="hover:text-blue-500 cursor-pointer">📌 Room Management</div>
          <div className="hover:text-blue-500 cursor-pointer">📷 New Room Form</div>
          <div className="hover:text-blue-500 cursor-pointer">📄 Reservation Management</div>
        </aside>
  
        {/* Main content */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold mb-6">Administration Panel</h1>
  
          <div className="border border-black p-4 mb-6 w-full max-w-md">
            <p>Avaliable rooms: 25</p>
            <p>Today´s Reservation: 12</p>
            <p>Revenue this month: $5,000</p>
          </div>
  
          <div className="space-x-4">
            <button className="px-4 py-2 border rounded shadow hover:bg-gray-100">see reservations</button>
            <button className="px-4 py-2 border rounded shadow hover:bg-gray-100">Generate report</button>
            <button className="px-4 py-2 border rounded shadow hover:bg-gray-100">see rooms</button>
          </div>
        </main>
      </div>
    );
  };
  
  export default AdminPanel;
  