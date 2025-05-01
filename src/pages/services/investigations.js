import React from 'react';
import './Investigations.css';

const Investigations = () => {
  return (
    <div className="investigations-page">
      {/* Hero Section */}
      <section className="investigations-hero">
        <div className="hero-overlay">
          <h1>Professional Investigation Services</h1>
          <p>Discreet, thorough, and legally compliant solutions for complex situations</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Request Confidential Consultation
          </button>
        </div>
      </section>

      {/* Confidentiality Banner */}
      <section className="confidentiality-banner">
        <div className="container">
          <div className="confidentiality-content">
            <div className="lock-icon">🔒</div>
            <p>All cases handled with <strong>strict confidentiality</strong> and adherence to legal protocols</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Our Investigation Specializations</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Corporate Investigations</h3>
              <ul>
                <li>Employee misconduct</li>
                <li>Intellectual property theft</li>
                <li>Fraud and embezzlement</li>
                <li>Due diligence</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Legal Support</h3>
              <ul>
                <li>Evidence collection</li>
                <li>Witness interviews</li>
                <li>Asset tracing</li>
                <li>Process serving</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Personal Matters</h3>
              <ul>
                <li>Matrimonial investigations</li>
                <li>Missing persons</li>
                <li>Background checks</li>
                <li>Identity verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="methodology-section">
        <div className="container">
          <h2>Our Investigative Methodology</h2>
          <div className="methodology-steps">
            <div className="method-card">
              <div className="step-number">1</div>
              <h3>Case Assessment</h3>
              <p>Detailed evaluation of objectives and legal parameters</p>
            </div>
            <div className="method-card">
              <div className="step-number">2</div>
              <h3>Strategic Planning</h3>
              <p>Customized investigation plan development</p>
            </div>
            <div className="method-card">
              <div className="step-number">3</div>
              <h3>Discreet Execution</h3>
              <p>Covert evidence gathering and documentation</p>
            </div>
            <div className="method-card">
              <div className="step-number">4</div>
              <h3>Comprehensive Reporting</h3>
              <p>Court-admissible findings presentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Tools */}
      <section className="technology-section">
        <div className="container">
          <h2>Advanced Investigative Tools</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">📹</div>
              <h3>Surveillance Systems</h3>
              <p>HD cameras with night vision and long-range capabilities</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💻</div>
              <h3>Digital Forensics</h3>
              <p>Data recovery and electronic evidence analysis</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🛰️</div>
              <h3>GPS Tracking</h3>
              <p>Legal and ethical movement monitoring</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🔍</div>
              <h3>Database Research</h3>
              <p>Access to proprietary information networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investigator Qualifications */}
      <section className="qualifications-section">
        <div className="container">
          <div className="qualifications-content">
            <h2>Our Investigator Credentials</h2>
            <ul>
              <li>Licensed private investigators</li>
              <li>Former law enforcement professionals</li>
              <li>Specialized training in forensic techniques</li>
              <li>Ongoing education in privacy laws</li>
              <li>Members of professional investigative associations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="investigations-cta">
        <div className="container">
          <h2>Need Professional Investigative Support?</h2>
          <p>Contact us discreetly to discuss your situation and explore solutions.</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Speak with an Investigator
          </button>
          <div className="discretion-note">
            <p>All communications are confidential and protected by attorney-client privilege where applicable.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investigations;