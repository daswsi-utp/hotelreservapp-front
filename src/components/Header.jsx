import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`bg-white shadow-md ${darkMode ? "dark bg-gray-800" : ""}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo y nombre */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/img/logo-hotel.png" 
              alt="Logo Hotel"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-sky-800">Hotel</span>
              <span className="text-orange-500"> Paradise</span>
            </span>
          </Link>

          {/* Navegación en escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-medium">
              <Link to="/" className="hover:text-sky-600">Home</Link>
              <Link to="/about" className="hover:text-sky-600">About</Link>
              <Link to="/rooms" className="hover:text-sky-600">Rooms</Link>
              <Link to="/contact" className="hover:text-sky-600">Contact</Link>
            </nav>

            {/* Botón de modo oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 transition"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-blue-400" />
              )}
            </button>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3 text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/rooms" onClick={() => setIsMenuOpen(false)}>Rooms</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 mt-2"
              >
                {darkMode ? (
                  <>
                    <FiSun className="text-yellow-400 mr-2" />
                    <span>Modo Claro</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="text-blue-400 mr-2" />
                    <span>Modo Oscuro</span>
                  </>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
