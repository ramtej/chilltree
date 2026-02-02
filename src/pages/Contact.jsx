import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-form-card">
            <h2 className="contact-form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />
              </div>
              <button type="submit" className="contact-form-submit">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="contact-info-card">
              <h2 className="contact-info-title">Contact Information</h2>
              <div className="contact-info-list">
                <div>
                  <div className="contact-info-item-header">
                    <div className="contact-info-icon">✉</div>
                    <h3 className="contact-info-item-label">Email</h3>
                  </div>
                  <a href="mailto:hello@chilltree.com" className="contact-info-link">
                    hello@chilltree.com
                  </a>
                </div>
                <div>
                  <div className="contact-info-item-header">
                    <div className="contact-info-icon">📍</div>
                    <h3 className="contact-info-item-label">Address</h3>
                  </div>
                  <p className="contact-info-text">
                    123 Wellness Boulevard<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-hours-card">
              <h3 className="contact-hours-title">Business Hours</h3>
              <p className="contact-hours-text">
                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                Saturday: 10:00 AM - 4:00 PM PST<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
