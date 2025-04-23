import React, { useState } from "react";
import { FiCalendar, FiUser, FiPhone, FiMail, FiCreditCard } from "react-icons/fi"; // Para íconos
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
      name: "Habitación Simple",
      image: "/src/assets/images/hab1.jpg",
      description: "Una habitación cómoda para una o dos personas.",
      price: 100,
    },
    {
      name: "Habitación Matrimonial",
      image: "/src/assets/images/hab2.jpg",
      description: "Ideal para parejas, con una cama grande.",
      price: 150,
    },
    {
      name: "Habitación Doble Estándar",
      image: "/src/assets/images/hab3.jpg",
      description: "Dos camas individuales, ideal para amigos o familiares.",
      price: 120,
    },
  ];

  // Funcin para actualizar los datos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funcin para seleccionar habitación
  const selectRoom = (room) => {
    setSelectedRoom(room);
  };

  // Funcin para avanzar al siguiente paso
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // Funcin para retroceder al paso anterior
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Página de Reserva</h1>

      <div className="flex justify-center mb-6">
        <div className={`step ${step === 1 ? "active" : ""}`} onClick={() => setStep(1)}>
          <span>Paso 1</span>
        </div>
        <div className={`step ${step === 2 ? "active" : ""}`} onClick={() => setStep(2)}>
          <span>Paso 2</span>
        </div>
        <div className={`step ${step === 3 ? "active" : ""}`} onClick={() => setStep(3)}>
          <span>Paso 3</span>
        </div>
      </div>

      {/* Paso 1*/}
      {step === 1 && (
        <div className="step-content">
          <h2 className="text-xl font-semibold mb-4">Paso 1: Selección de Fechas</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Fecha de Check-in</label>
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
              <label className="block text-sm font-medium mb-2">Fecha de Check-out</label>
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
              Atrás
            </button>
            <button className="btn-next" onClick={nextStep}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Paso 2*/}
      {step === 2 && (
        <div className="step-content flex justify-between">
          <div className="w-2/3">
            <h2 className="text-xl font-semibold mb-4">Paso 2: Selección de Habitación</h2>
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

          {/* Sderecha*/}
          <div className="w-1/3 bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Resumen del Pedido</h3>
            {selectedRoom && (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold">Habitación seleccionada:</h4>
                  <p>{selectedRoom.name}</p>
                  <p>{selectedRoom.description}</p>
                  <p className="font-bold text-lg">S/ {selectedRoom.price}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">¿Tienes un cupón de descuento?</label>
                  <input
                    type="text"
                    name="discountCode"
                    value={formData.discountCode}
                    onChange={handleInputChange}
                    className="pl-4 pr-4 py-2 border rounded-lg w-full"
                    placeholder="Introduce tu cupón"
                  />
                </div>
                <button className="btn-next w-full" onClick={nextStep} disabled={!selectedRoom}>
                  Finalizar compra
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Paso 3 */}
      {step === 3 && (
        <div className="step-content">
          <h2 className="text-xl font-semibold mb-4">Paso 3: Ingreso de Datos y Pago</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nombre</label>
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
            <label className="block text-sm font-medium mb-2">Apellido</label>
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
            <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
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
            <label className="block text-sm font-medium mb-2">Número de Celular</label>
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
            <label className="block text-sm font-medium mb-2">Método de Pago</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="pl-4 pr-4 py-2 border rounded-lg w-full"
            >
              <option value="creditCard">Tarjeta de Crédito/Débito</option>
              <option value="yape">Yape/Plin</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button className="btn-prev" onClick={prevStep}>
              Atrás
            </button>
            <button className="btn-submit">
              Confirmar Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
