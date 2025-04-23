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
      title: "Habitación Simple",
      image: "/src/assets/images/hab1.jpg",
      description: [
        { icon: <FiWifi />, text: "WiFi Gratis" },
        { icon: <FiCoffee />, text: "Desayuno Incluido" },
        { icon: <FiTv />, text: "TV HD" },
        { icon: <FiDroplet />, text: "Piscina" },
      ],
      bed: "1 cama estándar",
      maxPersons: 2,
    },
    {
      title: "Habitación Matrimonial",
      image: "/src/assets/images/hab2.jpg",
      description: [
        { icon: <FiWifi />, text: "WiFi Gratis" },
        { icon: <FiCoffee />, text: "Desayuno Incluido" },
        { icon: <FiTv />, text: "TV HD" },
        { icon: <FiDroplet />, text: "Piscina" },
      ],
      bed: "1 cama de 2 plazas",
      maxPersons: 2,
    },
    {
      title: "Habitación Doble Estándar",
      image: "/src/assets/images/hab3.jpg",
      description: [
        { icon: <FiWifi />, text: "WiFi Gratis" },
        { icon: <FiCoffee />, text: "Desayuno Incluido" },
        { icon: <FiTv />, text: "TV HD" },
        { icon: <FiDroplet />, text: "Piscina" },
      ],
      bed: "2 camas de 1 plaza",
      maxPersons: 4,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center py-6">
        ¡Bienvenido al Hotel Paradise Arequipa, donde el encanto se une con la exclusividad!
      </h1>
      <p className="text-lg text-center mb-6">
        En la impresionante región sur de Perú, te damos la bienvenida al hotel más emblemático de la ciudad.
      </p>

      {/* iconitos*/}
      <h2 className="text-xl font-semibold text-center mb-4">Servicios</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 md:px-0 mb-12">
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-orange-400">
          <FiWifi size={30} className="mx-auto mb-2 text-blue-600" />
          <p className="text-sm font-medium">WiFi Gratis</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiCoffee size={30} className="mx-auto mb-2 text-yellow-500" />
          <p className="text-sm font-medium">Desayuno Incluido</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiTv size={30} className="mx-auto mb-2 text-red-500" />
          <p className="text-sm font-medium">TV HD</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiDroplet size={30} className="mx-auto mb-2 text-blue-500" />
          <p className="text-sm font-medium">Piscina</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiShoppingCart size={30} className="mx-auto mb-2 text-green-600" />
          <p className="text-sm font-medium">Tienda</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiCreditCard size={30} className="mx-auto mb-2 text-purple-600" />
          <p className="text-sm font-medium">Pago Seguro</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiPhone size={30} className="mx-auto mb-2 text-orange-600" />
          <p className="text-sm font-medium">Servicio Telefónico</p>
        </div>
        <div className="text-center bg-amber-100 bg-opacity-90 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <FiMapPin size={30} className="mx-auto mb-2 text-teal-600" />
          <p className="text-sm font-medium">Ubicación Estratégica</p>
        </div>
      </div>

      {/* hab */}
      <h2 className="text-2xl font-bold text-center mb-6">Nuestras Habitaciones</h2>
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
                <p className="text-gray-600 mb-4">Máximo {room.maxPersons} personas</p>
                <ul className="space-y-2">
                  {room.description.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2 text-primary">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 font-medium text-sm text-gray-500">Cama: {room.bed}</p>
            </div>
          </div>
        ))}
      </div>

      {/* srvicios*/}
      <div className="flex flex-col md:flex-row items-center mt-16 bg-amber-100 bg-opacity-90 p-8 rounded-lg shadow-lg border border-black">
        <div className="md:w-1/2 mb-6 md:mb-0 aspect-w-1 aspect-h-1">
          <img
            src="/src/assets/images/buffet.jpg" 
            alt="Buffet"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 p-6 bg-amber-100 bg-opacity-90 rounded-lg border border-black shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Servicios</h2>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <FiWifi size={30} className="mx-auto text-yellow-600" />
            <FiCoffee size={30} className="mx-auto text-yellow-500" />
            <FiTv size={30} className="mx-auto text-yellow-500" />
            <FiDroplet size={30} className="mx-auto text-yellow-500" />
          </div>

          <ul className="space-y-2 text-gray-700">
            <li>- Desayuno buffet de 6:00 hrs – 10:00 hrs</li>
            <li>- Bar abierto hasta las 22 hrs</li>
            <li>- Check in 13:00 hrs</li>
            <li>- Check out 12:00 hrs</li>
            <li className="text-center font-bold">WiFi de cortesía en las habitaciones y áreas públicas</li>
            <li className="text-center font-bold">Estacionamiento de cortesía sujeto a disponibilidad</li>
            <li>- Salones para eventos con capacidad para 250 personas</li>
            <li>- Servicio de lavandería de costo</li>
            <li>- Tienda de souvenirs</li>
            <li>- Business Center</li>
            <li>- Habitaciones para no fumadores</li>
            <li>- Departamento de custodia</li>
            <li>- Personal de seguridad 24h</li>
            <li>- Personal bilingüe</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Rooms;
