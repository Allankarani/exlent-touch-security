import React from 'react';
import './RetailAccreditation.css'

const RetailAccreditation = () => {
  return (
    <div className="retail-accreditation-page">
      {/* Hero Section */}
      <section className="accreditation-hero">
        <div className="hero-content">
          <h1>Retail Security Accreditation Services</h1>
          <p>Meeting industry standards for loss prevention and asset protection</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Get Your Store Accredited
          </button>
        </div>
      </section>

      {/* Accreditation Badges */}
      <section className="badges-section">
        <div className="container">
          <h2>Recognized Retail Security Standards</h2>
          <div className="badge-grid">
            <div className="badge-card">
              <div className="badge-icon">🛡️</div>
              <h3>ORIS Certification</h3>
              <p>Organized Retail Crime Intervention Standard</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon">🏷️</div>
              <h3>ISO/PAS 28000</h3>
              <p>Supply Chain Security Compliance</p>
            </div>
            <div className="badge-card">
              <div className="badge-icon">🔍</div>
              <h3>BRCGS S&D</h3>
              <p>Storage & Distribution Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Process */}
      <section className="process-section">
        <div className="container">
          <h2>Our 5-Step Accreditation Process</h2>
          <div className="process-steps">
            <div className="process-card">
              <div className="step-number">1</div>
              <h3>Gap Analysis</h3>
              <p>Comprehensive security assessment against industry benchmarks</p>
            </div>
            <div className="process-card">
              <div className="step-number">2</div>
              <h3>Remediation Plan</h3>
              <p>Customized roadmap to address vulnerabilities</p>
            </div>
            <div className="process-card">
              <div className="step-number">3</div>
              <h3>Staff Training</h3>
              <p>Certified programs for loss prevention teams</p>
            </div>
            <div className="process-card">
              <div className="step-number">4</div>
              <h3>Documentation Review</h3>
              <p>Policy and procedure standardization</p>
            </div>
            <div className="process-card">
              <div className="step-number">5</div>
              <h3>Certification Audit</h3>
              <p>On-site verification by our accredited assessors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Retail Security Accreditation</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Insurance Advantages</h3>
              <ul>
                <li>Reduced premiums</li>
                <li>Faster claims processing</li>
                <li>Improved risk rating</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Operational Improvements</h3>
              <ul>
                <li>28% average shrinkage reduction</li>
                <li>Standardized security protocols</li>
                <li>Enhanced staff confidence</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Market Differentiation</h3>
              <ul>
                <li>Displayable certification badges</li>
                <li>Competitive tender advantage</li>
                <li>Increased customer trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="compliance-section">
        <div className="container">
          <div className="compliance-content">
            <h2>Key Compliance Areas We Assess</h2>
            <div className="compliance-grid">
              <div className="compliance-item">
                <h3>Physical Security</h3>
                <ul>
                  <li>Access control systems</li>
                  <li>Cash handling procedures</li>
                  <li>Stockroom security</li>
                </ul>
              </div>
              <div className="compliance-item">
                <h3>Technology Standards</h3>
                <ul>
                  <li>EAS system effectiveness</li>
                  <li>CCTV coverage analysis</li>
                  <li>Alarm response times</li>
                </ul>
              </div>
              <div className="compliance-item">
                <h3>Personnel Practices</h3>
                <ul>
                  <li>Staff screening processes</li>
                  <li>Training documentation</li>
                  <li>Incident reporting systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="accreditation-cta">
        <div className="container">
          <h2>Ready to Elevate Your Retail Security Standards?</h2>
          <p>Our accredited assessors will guide you through every step of the certification process.</p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Accreditation
          </button>
        </div>
      </section>
    </div>
  );
};

export default RetailAccreditation;