import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <section className="contact bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-lg mt-10 font-sans">
      <h2 className="text-3xl font-semibold text-primary text-center mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Have questions or want to make a reservation? We’re here to help!
      </p>

      <form className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="input-style"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input-style"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="input-style resize-none"
          required
        />
        <button type="submit" className="book-now w-full mt-2">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-500">
        Or contact us at:{" "}
        <strong className="text-primary">info@hotelparadise.com</strong>
      </div>
    </section>
  );
};

export default Contact;
