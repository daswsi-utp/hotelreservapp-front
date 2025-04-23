import React from 'react';
import "../About.css";  // Ruta relativa a src/pages/

const About = () => {
  return (
    <div className="about">
      <h2>Welcome to Hotel Paradise</h2>
      <p>
        Experience the perfect blend of elegance, comfort, and sophistication at Hotel Paradise.
        Nestled in a breathtaking location, our hotel offers world-class services and unforgettable experiences.
      </p>

      <h3>Our History</h3>
      <p>
        Hotel Paradise opened its doors in 2005 with the mission of redefining luxury hospitality.
        Over the years, we've hosted thousands of happy guests from around the world.
      </p>

      <h3>Our Mission</h3>
      <p>
        To provide a luxurious and relaxing environment where guests feel pampered, valued, and inspired.
      </p>

      <h3>Highlighted Features</h3>
      <ul>
        <li>Luxury rooms with panoramic views</li>
        <li>World-class spa and wellness center</li>
        <li>Gourmet restaurant with international cuisine</li>
      </ul>

      <h3>What Our Guests Say</h3>
      <blockquote>
        "An unforgettable experience! The best hotel I've stayed in — I will definitely return."
      </blockquote>

      <button className="book-now">Book Your Stay Now</button>

      <div className="gallery">
        <img src="/assets/images/hotel-1.jpg" alt="Lobby" />
        <img src="/assets/images/hotel-2.webp" alt="Luxury Room" />
        <img src="/assets/images/hotel-3.jpg" alt="Spa Area" />
      </div>
    </div>
  );
};

export default About;
