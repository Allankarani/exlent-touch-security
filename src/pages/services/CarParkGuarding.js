import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarParkGuarding.css'; // Assuming you have a corresponding CSS file

const CarParkGuarding = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="car-park-page">
      {/* Hero Section */}
      <section className="car-park-hero">
        <div className="hero-content">
          <h1>Professional Car Park Security Services</h1>
          <p>Specialized protection for vehicles, assets, and pedestrians in parking environments</p>
          <button className="cta-button" onClick={handleContactClick}>
            Request Parking Security Assessment
          </button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition">
        <div className="container">
          <h2>Why Invest in Professional Car Park Security?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">74%</div>
              <div className="stat-desc">Reduction in vehicle-related crimes with visible guarding</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-desc">Surveillance coverage for round-the-clock protection</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5x</div>
              <div className="stat-desc">Faster incident response compared to automated systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services">
        <div className="container">
          <h2>Our Car Park Guarding Solutions</h2>
          <div className="service-tabs">
            <div className="service-tab">
              <h3>Entry/Exit Control</h3>
              <ul>
                <li>License plate verification</li>
                <li>Unauthorized vehicle prevention</li>
                <li>Fee collection support</li>
              </ul>
            </div>
            <div className="service-tab">
              <h3>Patrol & Surveillance</h3>
              <ul>
                <li>Regular foot patrols of all levels</li>
                <li>Camera monitoring integration</li>
                <li>Suspicious activity detection</li>
              </ul>
            </div>
            <div className="service-tab">
              <h3>Incident Management</h3>
              <ul>
                <li>Accident documentation</li>
                <li>Theft prevention & response</li>
                <li>Emergency services liaison</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="special-features">
        <div className="container">
          <div className="feature-intro">
            <h2>Advanced Parking Security Features</h2>
            <p>We go beyond basic guarding with specialized capabilities:</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚘</div>
              <h3>Digital Reporting</h3>
              <p>Real-time incident logs with photo documentation via mobile apps</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚨</div>
              <h3>Rapid Response Protocol</h3>
              <p>Dedicated hotline for immediate guard dispatch to trouble spots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="client-types">
        <div className="container">
          <h2>We Protect All Parking Environments</h2>
          <div className="client-grid">
            <div className="client-card">
              <h3>Commercial Parking</h3>
              <ul>
                <li>Shopping center lots</li>
                <li>Office building garages</li>
                <li>Hotel valet areas</li>
              </ul>
            </div>
            <div className="client-card">
              <h3>Residential Parking</h3>
              <ul>
                <li>Apartment complex garages</li>
                <li>Condominium parking</li>
                <li>Gated community lots</li>
              </ul>
            </div>
            <div className="client-card">
              <h3>Specialized Facilities</h3>
              <ul>
                <li>Airport parking</li>
                <li>Hospital parking structures</li>
                <li>Event venue overflow lots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="parking-cta">
        <div className="container">
          <h2>Eliminate Parking Security Risks</h2>
          <p>Our certified parking security experts will conduct a free site evaluation and recommend the optimal protection plan</p>
          <button className="cta-button" onClick={handleContactClick}>
            Get Your Parking Security Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default CarParkGuarding;