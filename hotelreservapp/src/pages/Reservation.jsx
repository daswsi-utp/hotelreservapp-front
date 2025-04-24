import React, { useState } from "react";
import { FiCalendar, FiUser, FiPhone, FiMail, FiCreditCard } from "react-icons/fi";
import '../Reservation.css';

const ReservationPage = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    room: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    discountCode: "",
  });

  const [selectedRoom, setSelectedRoom] = useState(null); 
  const rooms = [
    {
      name: "Single Room",
      image: "/src/assets/images/hab1.jpg",
      description: "A comfortable room for one or two people.",
      price: 100,
    },
    {
      name: "Double Room",
      image: "/src/assets/images/hab2.jpg",
      description: "Ideal for couples, with a large bed.",
      price: 150,
    },
    {
      name: "Standard Twin Room",
      image: "/src/assets/images/hab3.jpg",
      description: "Two single beds, ideal for friends or family.",
      price: 120,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Reservation Page</h1>

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
        <div className="step-content">
          <h2 className="text-xl font-semibold mb-4">Step 1: Date Selection</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Check-in Date</label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Check-out Date</label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="btn-prev" onClick={prevStep} disabled>
              Back
            </button>
            <button className="btn-next" onClick={nextStep}>
              Next
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
                className={`flex items-center border p-4 rounded-lg mb-6 cursor-pointer ${selectedRoom?.name === room.name ? "bg-gray-200" : "bg-white"}`}
                onClick={() => selectRoom(room)}
              >
                <img src={room.image} alt={room.name} className="w-32 h-32 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">{room.name}</h3>
                  <p>{room.description}</p>
                  <p className="font-bold text-lg">S/ {room.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-1/3 bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
            {selectedRoom && (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold">Selected Room:</h4>
                  <p>{selectedRoom.name}</p>
                  <p>{selectedRoom.description}</p>
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
            >
              <option value="creditCard">Credit/Debit Card</option>
              <option value="yape">Yape/Plin</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button className="btn-prev" onClick={prevStep}>
              Back
            </button>
            <button className="btn-submit">
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
