import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaBed } from "react-icons/fa";
import Header from "../components/Header";

const FormularioReserva = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    entrada: "",
    salida: "",
    habitacion: "",
    cantidad: 1,
    ocupantes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmacion", { state: formData });
  };

  return (
    <>
      <Header />

      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
        style={{ backgroundImage: "url('/img/fondo-hotel.jpg')" }}
      >
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Reserva tu Habitación
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="nombre"
                placeholder="Nombre completo"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="correo"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded p-2">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="telefono"
                placeholder="Teléfono"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded p-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="entrada"
                type="datetime-local"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded p-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="salida"
                type="datetime-local"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p className="font-medium mb-2">Tipo de habitación:</p>
              <div className="flex gap-4">
                {[
                  { tipo: "Estandar", precio: 89 },
                  { tipo: "Suite", precio: 129 },
                  { tipo: "De lujo", precio: 199 },
                ].map(({ tipo, precio }) => (
                  <label key={tipo} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="habitacion"
                      value={tipo}
                      checked={formData.habitacion === tipo}
                      onChange={handleChange}
                    />
                    <span className="font-semibold">{tipo}</span>
                    <span className="text-gray-500">
                      (S/{precio.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
                    </span>
                  </label>
                ))}


              </div>
            </div>

            <div className="flex items-center border rounded p-2">
              <FaBed className="text-gray-500 mr-2" />
              <input
                className="w-full outline-none"
                name="cantidad"
                type="number"
                min={1}
                max={20}
                placeholder="Cantidad de habitaciones"
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="w-full p-2 border rounded"
              name="ocupantes"
              placeholder="Número de ocupantes (ej. 2 adultos, 1 niño)"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
            >
              Reservar ahora
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioReserva;
