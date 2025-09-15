import React, { useState } from "react";

const StickyWidget = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/sticky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowForm(false);
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      alert("⚠️ Something went wrong. Please try again later.");
      console.error(err);
    }
  };

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
        href="https://wa.me/9899282878"
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StickyWidget;
