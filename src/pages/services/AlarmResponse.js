import React from 'react';
import './AlarmResponse.css';

const Alarmresponse = () => {
  return (
    <div className="alarm-monitoring-page">
      {/* Hero Section */}
      <section className="monitoring-hero">
        <div className="hero-content">
          <h1>24/7 Alarm Monitoring Services</h1>
          <p>Professional threat detection and response for your home or business</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contacts'}
          >
            Start Your Monitoring Today
          </button>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="response-banner">
        <div className="container">
          <div className="response-stats">
            <div className="stat-item">
              <span className="stat-number">30</span>
              <span className="stat-label">Seconds</span>
              <span>Average alert verification time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
              <span>Certified security professionals</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Tier Response</span>
              <span>Escalation protocol for all threats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Types */}
      <section className="monitoring-types">
        <div className="container">
          <h2>Our Alarm Monitoring Solutions</h2>
          <div className="monitoring-grid">
            <div className="monitoring-card">
              <h3>Intrusion Monitoring</h3>
              <ul>
                <li>Door/window sensor alerts</li>
                <li>Glass break detection</li>
                <li>Motion sensor verification</li>
                <li>Instant dispatch coordination</li>
              </ul>
            </div>
            <div className="monitoring-card">
              <h3>Fire & Life Safety</h3>
              <ul>
                <li>Smoke/heat detector monitoring</li>
                <li>Carbon monoxide detection</li>
                <li>Emergency evacuation support</li>
                <li>Fire department liaison</li>
              </ul>
            </div>
            <div className="monitoring-card">
              <h3>Environmental Monitoring</h3>
              <ul>
                <li>Flood/water leak detection</li>
                <li>Temperature extremes alert</li>
                <li>Power failure notification</li>
                <li>Equipment malfunction alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Protocol */}
      <section className="response-protocol">
        <div className="container">
          <h2>Our Verified Response Protocol</h2>
          <div className="protocol-steps">
            <div className="protocol-card">
              <div className="step-number">1</div>
              <h3>Signal Receipt</h3>
              <p>Immediate alert at our UL-certified monitoring center</p>
            </div>
            <div className="protocol-card">
              <div className="step-number">2</div>
              <h3>Verification</h3>
              <p>Audio/visual confirmation via integrated systems</p>
            </div>
            <div className="protocol-card">
              <div className="step-number">3</div>
              <h3>Client Notification</h3>
              <p>Simultaneous calls to 3 pre-authorized contacts</p>
            </div>
            <div className="protocol-card">
              <div className="step-number">4</div>
              <h3>Dispatch Initiation</h3>
              <p>Emergency services alerted with verified details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="tech-integration">
        <div className="container">
          <h2>Seamless System Integration</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">📱</div>
              <h3>Mobile Alerts</h3>
              <p>Real-time notifications via our secure app</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🎥</div>
              <h3>Video Verification</h3>
              <p>Camera integration for visual confirmation</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🏠</div>
              <h3>Smart Home Sync</h3>
              <p>Works with Alexa, Google Home, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Center */}
      <section className="monitoring-center">
        <div className="container">
          <div className="center-content">
            <h2>UL-Certified Monitoring Center</h2>
            <ul>
              <li>Redundant power and internet backups</li>
              <li>Biometric access controls</li>
              <li>Encrypted communications</li>
              <li>Geographically dispersed facilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="monitoring-cta">
        <div className="container">
          <h2>Never Leave Your Security to Chance</h2>
          <p>Our monitoring specialists are ready to protect what matters most to you.</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Get Protected Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Alarmresponse;