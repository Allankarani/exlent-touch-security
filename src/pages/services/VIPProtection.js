import React from 'react';
import { FaUserSecret } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import './VIPProtection.css';

const VIPProtection = () => {
  return (
    <div className="vip-protection-page">
      {/* Hero Section */}
      <section className="vip-hero">
        <div className="hero-content">
          <h1>
            <FaUserSecret className="hero-icon" />
            Executive Protection & VIP Security Services
          </h1>
          <p>
            Our elite protection officers ensure safety, privacy and peace of mind for executives, dignitaries and VIPs anytime, anywhere.
          </p>
          <button 
            className="cta-button elite"
            onClick={() => window.location.href = '/contacts'}
          >
            Schedule a Confidential Consultation
          </button>
        </div>
      </section>

      {/* Service Badges */}
      <section className="badges-section">
        <div className="container">
          <h2 className="section-heading">Why Clients Trust Our VIP Security</h2>
          <div className="badge-grid">
            <div className="badge-item">
              <div className="badge-icon">
                <MdSecurity className="trust-icon" />
              </div>
              <p><strong>Elite-Trained Protection</strong><br />Ex-military & police personnel</p>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <FaGlobeAmericas className="trust-icon" />
              </div>
              <p><strong>Global Security Reach</strong><br />Extensive international operations</p>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <RiShieldKeyholeFill className="trust-icon" />
              </div>
              <p><strong>Confidentiality Guaranteed</strong><br />Strict NDA compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Tiers */}
      <section className="protection-tiers">
        <div className="container">
          <h2>Our VIP Protection Levels</h2>
          <div className="tiers-grid">
            <div className="tier-card">
              <h3>Corporate Executive Protection</h3>
              <ul>
                <li>24/7 close protection for CEOs and senior management</li>
                <li>Travel security coordination</li>
                <li>Secure transportation</li>
                <li>Threat assessment profiling</li>
              </ul>
            </div>
            <div className="tier-card">
              <h3>High-Profile Individual Protection</h3>
              <ul>
                <li>Discreet residential security</li>
                <li>Event security details</li>
                <li>Anti-paparazzi measures</li>
                <li>Kidnap prevention protocols</li>
              </ul>
            </div>
            <div className="tier-card">
              <h3>Concierge Protection Service</h3>
              <ul>
                <li>On-demand security for special occasions</li>
                <li>Low-profile protective surveillance</li>
                <li>Secure logistics planning</li>
                <li>Advance team deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="methodology">
        <div className="container">
          <h2>Our Protection Methodology</h2>
          <div className="method-steps">
            <div className="method-card">
              <div className="step-number">1</div>
              <h3>Threat Assessment</h3>
              <p>Comprehensive risk analysis of all environments and routines</p>
            </div>
            <div className="method-card">
              <div className="step-number">2</div>
              <h3>Pre-Deployment Planning</h3>
              <p>Detailed route surveys and venue security audits</p>
            </div>
            <div className="method-card">
              <div className="step-number">3</div>
              <h3>Discreet Execution</h3>
              <p>Low-visibility protection that maintains normalcy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Qualifications */}
      <section className="team-qualifications">
        <div className="container">
          <h2>Elite Protection Team Qualifications</h2>
          <div className="qualifications-grid">
            <div className="qualification-card">
              <div className="qualification-header">
                <FaChalkboardTeacher className="qualification-icon" />
                <h3>Training</h3>
              </div>
              <ul>
                <li>Advanced defensive driving</li>
                <li>Counter-surveillance techniques</li>
                <li>Emergency medical response</li>
                <li>Weapons proficiency</li>
              </ul>
            </div>
            <div className="qualification-card">
              <div className="qualification-header">
                <FaUserShield className="qualification-icon" />
                <h3>Experience</h3>
              </div>
              <ul>
                <li>Minimum 10 years in high-risk protection</li>
                <li>Government/military backgrounds</li>
                <li>Multilingual capabilities</li>
                <li>Global service experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vip-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Secure Your Safety With Discretion</h2>
            <p>All inquiries are handled with strict confidentiality by our protection specialists.</p>
            <button 
              className="cta-button elite"
              onClick={() => window.location.href = '/contact'}
            >
              Begin Security Consultation
            </button>
            <div className="discretion-note">
              <p>All communications are encrypted and protected by attorney-client privilege where applicable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VIPProtection;