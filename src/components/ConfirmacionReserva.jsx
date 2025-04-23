import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";

const ConfirmacionReserva = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Precios por tipo de habitación
  const precios = {
    Estandar: 89,
    Suite: 129,
    "De lujo": 199,
  };

  // Cálculo de noches
  const fechaEntrada = new Date(state.entrada);
  const fechaSalida = new Date(state.salida);
  const noches = Math.max(
    1,
    Math.ceil((fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24))
  );

  const precioPorNoche = precios[state.habitacion] || 0;
  const total = precioPorNoche * noches * state.cantidad;

  return (
    <>
      <Confetti />
      <Header />

      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url('/img/fondo-confirmacion.jpg')" }}
      >
        <div className="mt-6 pt-4 w-full max-w-xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-700 mb-2">¡Reserva Confirmada!</h1>
          <p className="text-gray-700 mb-6">
            Gracias por reservar con nosotros, <span className="font-semibold">{state?.nombre}</span>.
          </p>

          <div className="text-left space-y-2 text-sm text-gray-600">
            <p><strong>Correo:</strong> {state?.correo}</p>
            <p><strong>Teléfono:</strong> {state?.telefono}</p>
            <p><strong>Fecha de entrada:</strong> {state?.entrada}</p>
            <p><strong>Fecha de salida:</strong> {state?.salida}</p>
            <p><strong>Noches:</strong> {noches}</p>
            <p><strong>Tipo de habitación:</strong> {state?.habitacion}</p>
            <p><strong>Precio por noche:</strong> S/{precioPorNoche.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p><strong>Cantidad de habitaciones:</strong> {state?.cantidad}</p>
            <p><strong>Ocupantes:</strong> {state?.ocupantes}</p>
            <p className="text-lg font-semibold text-blue-700 mt-4">
              Total a pagar: S/{total.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
          >
            Hacer otra reserva
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmacionReserva;
