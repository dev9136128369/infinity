import React, { useState } from "react";

const StickyWidget = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="sticky-widget">
      {/* Contact Button */}
      <div
        className="sticky-button contact-btn"
        onClick={() => setShowForm(!showForm)}
      >
        <i className="far fa-envelope"></i>
        <span>Contact Us</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919871967601"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-button whatsapp-btn"
      >
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      {/* Contact Form Popup */}
      {showForm && (
        <div className="contact-popup">
          <div className="popup-header">
            <h3>Contact Us</h3>
            <span className="close-btn" onClick={() => setShowForm(false)}>
              ✖
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
              setShowForm(false);
            }}
          >
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone*" required />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StickyWidget;
