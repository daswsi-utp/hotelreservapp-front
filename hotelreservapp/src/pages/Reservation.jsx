// Reservation.jsx (completo y funcional)
import React, { useState } from "react";
import {
  FiCalendar,
  FiUser,
  FiPhone,
  FiMail,
  FiCreditCard,
  FiWifi,
  FiCoffee,
  FiTv,
  FiDroplet,
  FiSearch
} from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import '../Reservation.css';

const ReservationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [step, setStep] = useState(parseInt(queryParams.get("step")) || 1);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const [formData, setFormData] = useState({
    checkIn: queryParams.get("checkIn") || "",
    checkOut: queryParams.get("checkOut") || "",
    guests: queryParams.get("guests") || 1,
    room: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    discountCode: "",
  });

  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Single Room",
      image: "/src/assets/images/hab1.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "1 standard bed",
      maxPersons: 2,
      price: 100,
    },
    {
      name: "Double Room",
      image: "/src/assets/images/hab2.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "1 double bed",
      maxPersons: 2,
      price: 150,
    },
    {
      name: "Standard Twin Room",
      image: "/src/assets/images/hab3.jpg",
      description: [
        { icon: <FiWifi />, text: "Free WiFi" },
        { icon: <FiCoffee />, text: "Breakfast Included" },
        { icon: <FiTv />, text: "4K TV" },
        { icon: <FiDroplet />, text: "Heated Pool" },
      ],
      bed: "2 single beds",
      maxPersons: 4,
      price: 120,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({ ...prev, [name]: value }));
  };

  const selectRoom = (room) => {
    setSelectedRoom(room);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const confirmPayment = () => {
    console.log("Payment confirmed", cardInfo);
    setShowCardModal(false);
    alert("Payment Successful!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Reservation Page</h1>

      {/* Visualizador de pasos */}
      <div className="flex justify-center mb-6">
        <div className={`step ${step === 1 ? "active" : ""}`} onClick={() => setStep(1)}>
          <span>Step 1</span>
        </div>
        <div className={`step ${step === 2 ? "active" : ""}`} onClick={() => setStep(2)}>
          <span>Step 2</span>
        </div>
        <div className={`step ${step === 3 ? "active" : ""}`} onClick={() => setStep(3)}>
          <span>Step 3</span>
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="step-content flex justify-center">
          <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4 w-full max-w-4xl">
            <div className="flex items-center w-full md:w-auto">
              <FiCalendar className="text-gray-500 mr-2" />
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="flex items-center w-full md:w-auto">
              <FiCalendar className="text-gray-500 mr-2" />
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div className="flex items-center w-full md:w-auto">
              <FiUser className="text-gray-500 mr-2" />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest{i > 0 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-lg flex items-center"
              onClick={nextStep}
            >
              <FiSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="step-content flex justify-between">
          <div className="w-2/3">
            <h2 className="text-xl font-semibold mb-4">Step 2: Room Selection</h2>
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`flex items-start border p-4 rounded-lg mb-6 cursor-pointer ${selectedRoom?.name === room.name ? "bg-gray-200" : "bg-white"}`}
                onClick={() => selectRoom(room)}
              >
                <img src={room.image} alt={room.name} className="w-32 h-32 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-2">Max {room.maxPersons} people</p>
                  <ul className="space-y-1 mb-2">
                    {room.description.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="mr-2">{item.icon}</span> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">Bed: {room.bed}</p>
                  <p className="font-bold text-lg mt-1">S/ {room.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/3 bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
            {selectedRoom && (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold">Selected Room:</h4>
                  <p className="font-semibold">{selectedRoom.name}</p>
                  <p className="text-gray-600 text-sm mb-1">Max {selectedRoom.maxPersons} people</p>
                  <ul className="space-y-1 mb-2">
                    {selectedRoom.description.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="mr-2">{item.icon}</span> {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">Bed: {selectedRoom.bed}</p>
                  <p className="font-bold text-lg">S/ {selectedRoom.price}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Do you have a discount code?</label>
                  <input
                    type="text"
                    name="discountCode"
                    value={formData.discountCode}
                    onChange={handleInputChange}
                    className="pl-4 pr-4 py-2 border rounded-lg w-full"
                    placeholder="Enter your code"
                  />
                </div>
                <button className="btn-next w-full" onClick={nextStep} disabled={!selectedRoom}>
                  Complete Purchase
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="step-content">
          <h2 className="text-xl font-semibold mb-4">Step 3: Guest Info & Payment</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="pl-4 pr-4 py-2 border rounded-lg w-full" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="pl-4 pr-4 py-2 border rounded-lg w-full" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="pl-4 pr-4 py-2 border rounded-lg w-full" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="pl-4 pr-4 py-2 border rounded-lg w-full" required />
          </div>

          <div className="flex justify-between">
            <button className="btn-prev" onClick={prevStep}>Back</button>
            <button className="btn-submit" onClick={() => setShowCardModal(true)}>Pay</button>
          </div>
        </div>
      )}

      {/* Modal de tarjeta */}
      {showCardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl w-96 relative">
            <h3 className="text-xl font-bold text-center mb-4">Add Credit Card</h3>

            <div className="bg-indigo-600 text-white rounded-lg p-4 mb-4">
              <p className="text-lg font-mono tracking-wide">{cardInfo.number || '1234 5678 9010 0010'}</p>
              <div className="flex justify-between text-sm mt-2">
                <span>{cardInfo.name || 'Cardholder Name'}</span>
                <span>{cardInfo.expiry || 'MM/YY'}</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input type="text" name="number" value={cardInfo.number} onChange={handleCardInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Cardholder Name</label>
              <input type="text" name="name" value={cardInfo.name} onChange={handleCardInputChange} className="border rounded-lg px-3 py-2 w-full" />
            </div>
            <div className="flex gap-4 mb-3">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Valid Thru</label>
                <input type="text" name="expiry" value={cardInfo.expiry} onChange={handleCardInputChange} className="border rounded-lg px-3 py-2 w-full" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input type="text" name="cvv" value={cardInfo.cvv} onChange={handleCardInputChange} className="border rounded-lg px-3 py-2 w-full" />
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg mt-4" onClick={confirmPayment}>
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;