import { useState } from 'react';
import { FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [search, setSearch] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Búsqueda:', search);
    // ...
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:space-x-4 md:flex">

      {/*Start date reservation*/}
      <div className="relative flex-grow">
        <FiCalendar className="absolute left-3 top-3 text-gray-400" />
        <input
          type="date"
          name="checkIn"
          value={search.checkIn}
          onChange={handleChange}
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      {/*End date reservation*/}
      <div className="relative flex-grow">
        <FiCalendar className="absolute left-3 top-3 text-gray-400" />
        <input
          type="date"
          name="checkOut"
          value={search.checkOut}
          onChange={handleChange}
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      {/*Number of people*/}
      <div className="relative flex-grow">
        <FiUsers className="absolute left-3 top-3 text-gray-400" />
        <select
          name="guests"
          value={search.guests}
          onChange={handleChange}
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
        >
          {[1, 2, 3, 4].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>
      
      {/* Search Button */}
      <button
        type="submit"
        className="bg-secondary hover:bg-primary text-white py-2 px-6 rounded-lg flex items-center justify-center w-full md:w-auto"
      >
        <FiSearch className="mr-2" />
        Search  
      </button>
    </form>
  );
};

export default SearchBar;