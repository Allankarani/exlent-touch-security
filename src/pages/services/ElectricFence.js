import React from 'react';
import './ElectricFence.css';

const ElectricFence = () => {
  return (
    <div className="electric-fence-page">
      {/* Hero Section */}
      <section className="fence-hero">
        <div className="hero-content">
          <h1>High-Security Electric Fence Systems</h1>
          <p>Advanced perimeter protection that deters intruders with non-lethal pulses</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Free Site Assessment
          </button>
        </div>
      </section>

      {/* Safety Assurance Banner */}
      <section className="safety-banner">
        <div className="container">
          <div className="safety-content">
            <div className="safety-icon">⚠️</div>
            <p>Our systems comply with <strong>international safety standards</strong> (IEC 60335-2-76) delivering effective deterrence without permanent harm</p>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="components-section">
        <div className="container">
          <h2>Electric Fence System Components</h2>
          <div className="components-grid">
            <div className="component-card">
              <h3>Energizer Units</h3>
              <ul>
                <li>8,000V - 10,000V output (adjustable)</li>
                <li>Solar-powered options available</li>
                <li>Battery backup systems</li>
                <li>Remote monitoring capable</li>
              </ul>
            </div>
            <div className="component-card">
              <h3>Conductors</h3>
              <ul>
                <li>High-tensile galvanized steel wire</li>
                <li>Polywire/polytape options</li>
                <li>Anti-corrosion coatings</li>
                <li>Multiple line configurations</li>
              </ul>
            </div>
            <div className="component-card">
              <h3>Detection Systems</h3>
              <ul>
                <li>Tension sensors</li>
                <li>Voltage monitoring</li>
                <li>SMS/email alerts</li>
                <li>CCTV integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Levels */}
      <section className="security-levels">
        <div className="container">
          <h2>Security Level Options</h2>
          <div className="levels-grid">
            <div className="level-card">
              <h3>Residential Grade</h3>
              <p><strong>6-8kV Output</strong></p>
              <ul>
                <li>Single wire configurations</li>
                <li>Basic alarm triggers</li>
                <li>500m perimeter coverage</li>
                <li>Ideal for homes & small properties</li>
              </ul>
            </div>
            <div className="level-card">
              <h3>Commercial Grade</h3>
              <p><strong>8-10kV Output</strong></p>
              <ul>
                <li>Multi-wire configurations</li>
                <li>Advanced intrusion detection</li>
                <li>2km perimeter coverage</li>
                <li>Industrial site protection</li>
              </ul>
            </div>
            <div className="level-card">
              <h3>High-Security Grade</h3>
              <p><strong>10kV+ Output</strong></p>
              <ul>
                <li>Anti-climb configurations</li>
                <li>Integrated with security systems</li>
                <li>Unlimited perimeter coverage</li>
                <li>Critical infrastructure protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="installation-process">
        <div className="container">
          <h2>Professional Installation Process</h2>
          <div className="process-steps">
            <div className="process-card">
              <div className="step-number">1</div>
              <h3>Site Survey</h3>
              <p>Perimeter assessment and risk evaluation</p>
            </div>
            <div className="process-card">
              <div className="step-number">2</div>
              <h3>System Design</h3>
              <p>Custom configuration planning</p>
            </div>
            <div className="process-card">
              <div className="step-number">3</div>
              <h3>Hardware Installation</h3>
              <p>Pole mounting and wiring</p>
            </div>
            <div className="process-card">
              <div className="step-number">4</div>
              <h3>Testing & Training</h3>
              <p>System verification and client instruction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="compliance-section">
        <div className="container">
          <div className="compliance-content">
            <h2>Full Regulatory Compliance</h2>
            <ul>
              <li>IEC 60335-2-76 safety standards</li>
              <li>Local municipal regulations</li>
              <li>Insurance-approved installations</li>
              <li>Warning signage included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fence-cta">
        <div className="container">
          <h2>Ready to Secure Your Perimeter?</h2>
          <p>Our security experts will design an electric fence system tailored to your property.</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Request Your Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default ElectricFence;