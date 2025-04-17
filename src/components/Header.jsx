import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src="/img/logo-hotel.png" 
          alt="Logo del Hotel"
          className="h-12 w-auto"
        />
        <h1 className="text-2xl font-bold text-blue-800">Hotel Paraíso</h1>
      </div>
    </header>
  );
};

export default Header;
