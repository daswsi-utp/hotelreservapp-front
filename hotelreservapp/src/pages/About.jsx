import React from "react";
import hotel1 from "/src/assets/images/hotel1.jpg";
import hotel2 from "/src/assets/images/hotel2.png";
import hotel3 from "/src/assets/images/hotel3.jpg";
import { FaSpa, FaUtensils, FaHotel } from "react-icons/fa";
import "./../About.css"; 
const About = () => {
  const highlights = [
    { icon: <FaHotel />, text: "Luxury suites with breathtaking views" },
    { icon: <FaSpa />, text: "World-class spa & wellness retreat" },
    { icon: <FaUtensils />, text: "Gourmet dining with global flavors" },
  ];

  const gallery = [
    { src: hotel1, label: "Main Lobby" },
    { src: hotel2, label: "Luxury Suite" },
    { src: hotel3, label: "Spa Area" },
  ];

  return (
    <section className="about">
      <h2>
        Welcome to <span style={{ color: "#1e3c72" }}>Hotel Paradise</span>
      </h2>
      <p>
        Discover the perfect blend of elegance, comfort, and sophistication.
        Nestled in a breathtaking destination, our hotel delivers world-class
        service and unforgettable moments.
      </p>

      <h3>Our History</h3>
      <p>
        Since opening in 2005, Hotel Paradise has redefined luxury. We've had
        the pleasure of welcoming guests from around the globe, all seeking an
        extraordinary escape.
      </p>

      <h3>Our Mission</h3>
      <p>
        To offer an environment of pure indulgence, where every guest feels
        inspired, cared for, and valued.
      </p>

      <h3>Highlights</h3>
      <ul>
        {highlights.map((item, index) => (
          <li key={index}>
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>

      <h3>Guest Testimonials</h3>
      <blockquote>
        “An unforgettable experience! One of the finest hotels I’ve ever stayed
        in — can’t wait to come back.”
      </blockquote>

      <div className="text-center">
        <button className="book-now">Book Your Stay Now</button>
      </div>

      <div className="gallery">
        {gallery.map(({ src, label }, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={src} alt={label} />
              </div>
              <div className="flip-card-back">
                <p>{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
