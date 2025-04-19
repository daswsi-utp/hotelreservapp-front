import { FiWifi, FiCoffee, FiTv, FiDroplet } from 'react-icons/fi';
import SearchBar from '../components/SearchBar';

const Home = () => {
  {/* Services */}
  const features = [
    { icon: <FiWifi size={24} />, title: "WiFi Free", desc: "In all areas" },
    { icon: <FiCoffee size={24} />, title: "Breakfast", desc: "Buffet included" },
    { icon: <FiTv size={24} />, title: "TV HD", desc: "International channels" },
    { icon: <FiDroplet size={24} />, title: "Swimming Pool", desc: "Heated all year round" }
  ];

  return (
    <div>
      {/* SearchBar */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('src/assets/images/paisajehotel.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Hotel Paradise</h1>
          <p className="text-xl text-gray-300 mb-8">Experience comfort and luxury in every detail</p>
          
          {/* Buscador */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg">
            <SearchBar />
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

      {/* Reservation Button */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for your next stay?</h2>          
          <button onClick={() => navigate('src/pages/Home.jsx')} className="bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
          Book now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;