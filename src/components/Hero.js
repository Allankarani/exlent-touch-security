import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import securityGuardImage from '../assets/background-image.png';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/send-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      navigate('/thank-you');
    } else {
      const errorData = await response.json();
      console.error('Server error:', errorData.message);
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Unable to connect. Please check your internet connection')
  }
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
              <Link to="/contacts">
                <button className="get-started-btn">Get started</button>
              </Link>
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
