import React from "react";
import {
  FiWifi,
  FiCoffee,
  FiTv,
  FiDroplet,
  FiShoppingCart,
  FiCreditCard,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Rooms = () => {
  const rooms = [
    {
      title: "Single Room",
      image: "/src/assets/images/hab1.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "1 standard bed",
      maxPersons: 2,
    },
    {
      title: "Double Room",
      image: "/src/assets/images/hab2.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "1 double bed",
      maxPersons: 2,
    },
    {
      title: "Standard Twin Room",
      image: "/src/assets/images/hab3.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "2 single beds",
      maxPersons: 4,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center py-6">
        Welcome to Hotel Paradise Arequipa, where charm meets exclusivity!
      </h1>
      <p className="text-lg text-center mb-6">
        In the stunning southern region of Peru, we welcome you to the city's most iconic hotel.
      </p>

      {/* iconitos*/}
      <h2 className="text-xl font-semibold text-center mb-4">Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 md:px-0 mb-12">
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-orange-400">
          <FiWifi size={30} className="mx-auto mb-2 text-blue-600" />
          <p className="text-sm font-medium">Free WiFi</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiCoffee size={30} className="mx-auto mb-2 text-yellow-500" />
          <p className="text-sm font-medium">Breakfast Included</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiTv size={30} className="mx-auto mb-2 text-red-500" />
          <p className="text-sm font-medium">HD TV</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiDroplet size={30} className="mx-auto mb-2 text-blue-500" />
          <p className="text-sm font-medium">Pool</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiShoppingCart size={30} className="mx-auto mb-2 text-green-600" />
          <p className="text-sm font-medium">Shop</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiCreditCard size={30} className="mx-auto mb-2 text-purple-600" />
          <p className="text-sm font-medium">Secure Payment</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiPhone size={30} className="mx-auto mb-2 text-orange-600" />
          <p className="text-sm font-medium">Phone Service</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiMapPin size={30} className="mx-auto mb-2 text-teal-600" />
          <p className="text-sm font-medium">Strategic Location</p>
        </div>
      </div>

      {/* hab */}
      <h2 className="text-2xl font-bold text-center mb-6">Our Rooms</h2>
      <div className="space-y-10">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-amber-100 bg-opacity-90 shadow-md rounded-lg overflow-hidden">
            <div className="md:w-1/2">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* desc */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">Max {room.maxPersons} people</p>
                <ul className="space-y-2">
                  {room.description.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2 text-primary">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 font-medium text-sm text-gray-500">Bed: {room.bed}</p>
            </div>
          </div>
        ))}
      </div>

      {/* servicios*/}
      <div className="flex flex-col md:flex-row items-center mt-16 bg-amber-100 bg-opacity-90 p-8 rounded-lg shadow-lg border border-black">
        <div className="md:w-1/2 mb-6 md:mb-0 aspect-w-1 aspect-h-1">
          <img
            src="/src/assets/images/buffet.jpg" 
            alt="Buffet"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 p-6 bg-amber-100 bg-opacity-90 rounded-lg border border-black shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <FiWifi size={30} className="mx-auto text-yellow-600" />
            <FiCoffee size={30} className="mx-auto text-yellow-500" />
            <FiTv size={30} className="mx-auto text-yellow-500" />
            <FiDroplet size={30} className="mx-auto text-yellow-500" />
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>- Buffet breakfast from 6:00 am – 10:00 am</li>
            <li>- Open bar until 10:00 pm</li>
            <li>- Check-in at 1:00 pm</li>
            <li>- Check-out at 12:00 pm</li>
            <li className="text-center font-bold">Complimentary WiFi in rooms and public areas</li>
            <li className="text-center font-bold">Complimentary parking subject to availability</li>
            <li>- Event halls with capacity for 250 people</li>
            <li>- Paid laundry service</li>
            <li>- Souvenir shop</li>
            <li>- Business Center</li>
            <li>- Non-smoking rooms</li>
            <li>- Luggage storage department</li>
            <li>- 24h security staff</li>
            <li>- Bilingual staff</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
