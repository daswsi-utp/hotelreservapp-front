// Home.jsx (actualizado)
import { FiWifi, FiCoffee, FiTv, FiDroplet } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const query = new URLSearchParams(searchData).toString();
    navigate(`/reservation?${query}&step=2`);
  };

  const features = [
    { icon: <FiWifi size={24} />, title: "WiFi Free", desc: "In all areas" },
    { icon: <FiCoffee size={24} />, title: "Breakfast", desc: "Buffet included" },
    { icon: <FiTv size={24} />, title: "TV 4K", desc: "International channels" },
    { icon: <FiDroplet size={24} />, title: "Swimming Pool", desc: "Heated all year round" }
  ];

  return (
    <div>
      {/* Search Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('src/assets/images/paisajehotel.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Hotel Paradise</h1>
          <p className="text-xl text-gray-300 mb-8">Experience comfort and luxury in every detail</p>

          {/* SearchBar */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md px-4 py-4 gap-4 max-w-4xl w-full mx-auto">
              {/* Check-in */}
              <div className="flex items-center w-full">
                <input type="date" name="checkIn" value={searchData.checkIn} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
              </div>
              {/* Check-out */}
              <div className="flex items-center w-full">
                <input type="date" name="checkOut" value={searchData.checkOut} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full" />
              </div>
              {/* Guests */}
              <div className="flex items-center w-full">
                <select name="guests" value={searchData.guests} onChange={handleChange} className="border rounded-lg px-3 py-2 w-full">
                  {[...Array(4)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              {/* Search button */}
              <button onClick={handleSearch} className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-lg w-full md:w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4 mx-auto">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for your next stay?</h2>          
          <button onClick={() => navigate('/reservation')} className="bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Book now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;