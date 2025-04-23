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
          {/* Logo y nombre del hotel */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/img/logo-hotel.png"
              alt="Logo Hotel"
              className="h-20 w-20 object-contain"
            />
            <span className="text-2xl font-bold">
              <span className="text-sky-800">Hotel</span>
              <span className="text-orange-500"> Paradise</span>
            </span>

          </Link>

          {/* Menú de navegación */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="hover:text-primary dark:hover:text-secondary">Home</Link>
              <Link to="/about" className="hover:text-primary dark:hover:text-secondary">About</Link>
              <Link to="/rooms" className="hover:text-primary dark:hover:text-secondary">Rooms</Link>
              <Link to="/contact" className="hover:text-primary dark:hover:text-secondary">Contact</Link>
            </nav>
            <div className="flex items-center space-x-6 ml-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200"
              >
                {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-blue-400" />}
              </button>
            </div>
          </div>

          {/* Botón del menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">About</Link>
              <Link to="/rooms" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">Rooms</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary">Contact</Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200"
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
