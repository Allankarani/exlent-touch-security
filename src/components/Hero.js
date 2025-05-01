import React, { useState } from 'react';
import './Hero.css';
import securityGuardImage from '../assets/background-image.png';

const Hero = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can integrate this with your backend here
  };

  return (
    <section className="security-hero">
      <div className="hero-content">
        <div className="guard-image-container">
          <img
            src={securityGuardImage}
            alt="Security Guard Professional"
            className="guard-image"
          />

          <div className="hero-text-content">
            <div className="hero-text">
              <h1>Comprehensive<br />Security Services</h1>
              <p>Professional Protection for your Business</p>
              <button className="get-started-btn">Get Started</button>
            </div>

            <div className="quote-container">
              <h2>Request a Quote</h2>

              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="quote-btn">
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
