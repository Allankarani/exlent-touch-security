import React from 'react';
import { FaBolt, FaSolarPanel, FaBatteryHalf, FaWifi, FaVideo, FaCheckCircle, FaBalanceScale, FaShieldAlt, FaExclamationTriangle} from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { MdOutlineSensors, MdSecurity } from 'react-icons/md';
import { BsHouses, BsBuildings, BsShieldLock} from 'react-icons/bs';
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
            onClick={() => window.location.href = '/contacts'}
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
          <h2 className="section-title">Electric Fence System Components</h2>
          <div className="components-grid">
            <div className="component-card">
              <h3 className="component-title"><FaBolt />Energizer Units</h3>
              <ul className="component-list">
                <li><GiElectric />8,000V - 10,000V output (adjustable)</li>
                <li><FaSolarPanel />Solar-powered options available</li>
                <li><FaBatteryHalf />Battery backup systems</li>
                <li><FaWifi />Remote monitoring capable</li>
              </ul>
            </div>
            <div className="component-card">
              <h3 className="component-title"><GiElectric />Conductors</h3>
              <ul className="component-list">
                <li><GiElectric /> High-tensile galvanized steel wire</li>
                <li><GiElectric /> Polywire/polytape options</li>
                <li><GiElectric /> Anti-corrosion coatings</li>
                <li><GiElectric /> Multiple line configurations</li>
              </ul>
            </div>
            <div className="component-card">
              <h3 className="component-title"><MdOutlineSensors /> Detection Systems</h3>
              <ul className="component-list">
                <li><MdOutlineSensors /> Tension sensors</li>
                <li><FaBolt /> Voltage monitoring</li>
                <li><MdSecurity />SMS/email alerts</li>
                <li><FaVideo /> CCTV integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Levels */}
      <section className="security-levels">
        <div className="container">
          <h2 className="section-title">Security Level Options</h2>
          <div className="levels-grid">
            <div className="level-card">
              <h3 className="level-title residential"><BsHouses /> Residential Grade</h3>
              <p className="level-voltage"><strong>6-8kV Output</strong></p>
              <ul className="level-list">
                <li><MdOutlineSensors /> Single wire configurations</li>
                <li><MdSecurity /> Basic alarm triggers</li>
                <li><FaBolt /> 500m perimeter coverage</li>
                <li>Ideal for homes & small properties</li>
              </ul>
            </div>
            <div className="level-card">
              <h3 className="level-title commercial"><BsBuildings /> Commercial Grade</h3>
              <p className="level-voltage"><strong>8-10kV Output</strong></p>
              <ul className="level-list">
                <li><GiElectric /> Multi-wire configurations</li>
                <li><MdSecurity /> Advanced intrusion detection</li>
                <li><FaBolt /> 2km perimeter coverage</li>
                <li>Industrial site protection</li>
              </ul>
            </div>
            <div className="level-card">
              <h3 className="level-title high-security"><BsShieldLock /> High-Security Grade</h3>
              <p className="level-voltage"><strong>10kV+ Output</strong></p>
              <ul className="level-lists">
                <li><GiElectric /> Anti-climb configurations</li>
                <li><MdSecurity /> Integrated with security systems</li>
                <li><FaBolt /> Unlimited perimeter coverage</li>
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
            <h2 className="compliance-title">Full Regulatory Compliance</h2>
            <ul className="compliance-list">
              <li><FaBalanceScale /> IEC 60335-2-76 safety standards</li>
              <li><FaShieldAlt /> Local municipal regulations</li>
              <li><FaCheckCircle />Insurance-approved installations</li>
              <li><FaExclamationTriangle />Warning signage included</li>
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