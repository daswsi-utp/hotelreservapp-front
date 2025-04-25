import React from "react";
import hotel1 from "/src/assets/images/hotel1.jpg";
import hotel2 from "/src/assets/images/hotel2.png";
import hotel3 from "/src/assets/images/hotel3.jpg";
import { FaSpa, FaUtensils, FaHotel, FaStar } from "react-icons/fa";

const About = () => {
  const highlights = [
    { icon: <FaHotel className="text-blue-800" />, text: "Luxury suites with breathtaking views" },
    { icon: <FaSpa className="text-blue-800" />, text: "World-class spa & wellness retreat" },
    { icon: <FaUtensils className="text-blue-800" />, text: "Gourmet dining with global flavors" },
  ];

  const gallery = [
    { src: hotel1, label: "Main Lobby" },
    { src: hotel2, label: "Luxury Suite" },
    { src: hotel3, label: "Spa Area" },
  ];

  const reviews = [
    {
      name: "Anna Johnson",
      rating: 5,
      comment: "Absolutely stunning hotel, the staff were incredibly friendly and the rooms were luxurious!"
    },
    {
      name: "Carlos Mendoza",
      rating: 4,
      comment: "The food was fantastic and the view from our suite was breathtaking."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-100 rounded-2xl shadow-xl font-sans text-gray-800 space-y-10">
      <h2 className="text-3xl font-bold text-blue-900 text-center">
        Welcome to <span className="text-blue-700">Hotel Paradise</span>
      </h2>

      <p className="text-center max-w-2xl mx-auto">
        Discover the perfect blend of elegance, comfort, and sophistication. Nestled in a breathtaking destination, our hotel delivers world-class service and unforgettable moments.
      </p>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-900">Our History</h3>
        <p>
          Since opening in 2005, Hotel Paradise has redefined luxury. We've had the pleasure of welcoming guests from around the globe, all seeking an extraordinary escape.
        </p>

        <h3 className="text-2xl font-semibold text-blue-900">Our Mission</h3>
        <p>
          To offer an environment of pure indulgence, where every guest feels inspired, cared for, and valued.
        </p>

        <h3 className="text-2xl font-semibold text-blue-900">Highlights</h3>
        <ul>
          {highlights.map((item, index) => (
            <li key={index} className="flex items-center gap-3 mb-2 text-lg">
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Guest Testimonials</h3>
        <blockquote className="italic bg-blue-50 border-l-4 border-blue-800 p-4 rounded-lg mb-4">
          “An unforgettable experience! One of the finest hotels I’ve ever stayed in — can’t wait to come back.”
        </blockquote>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Google Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <strong>{review.name}</strong>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a href="/booking">
          <button className="bg-blue-900 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition">
            Book Your Stay Now
          </button>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {gallery.map(({ src, label }, index) => (
          <div key={index} className="w-64 h-48 perspective">
            <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                <img src={src} alt={label} className="w-full h-full object-cover" />
              </div>
              <div className="absolute w-full h-full backface-hidden bg-blue-900 text-white flex items-center justify-center rounded-xl transform rotate-y-180">
                <p className="text-lg">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Location</h3>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Hotel Paradise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.861657178847!2d-74.00594128459325!3d40.71277577933181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1616356388989!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="w-full border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
