import React from "react";
import "./HomeSecurity.css"; // Import the CSS file

const HomeSecurity = () => {
  return (
    <div className="home-security">
      <div className="security-text">
        <h1>Advanced Security Systems for Your Home</h1>
        <p>
          Ensure your safety with state-of-the-art security solutions. Our
          systems provide 24/7 monitoring, advanced alarm mechanisms, and
          real-time alerts to keep you protected.
        </p>
        <p>
          Choose the best security measures to prevent unauthorized access and
          secure your home effectively.
        </p>
      </div>

      <div className="security-grid">
        <div className="security-card">
          <h3>CCTV Surveillance</h3>
          <p>Monitor your property with high-resolution CCTV cameras.</p>
        </div>
        <div className="security-card highlighted">
          <h3>Intrusion Detection</h3>
          <p>Instant alerts for unauthorized access and break-ins.</p>
        </div>
        <div className="security-card">
          <h3>Smart Locks</h3>
          <p>Keyless entry with biometric and remote access control.</p>
        </div>
        <div className="security-card">
          <h3>Fire & Smoke Alarm</h3>
          <p>Early fire detection to prevent damage and save lives.</p>
        </div>
        <div className="security-card">
          <h3>Emergency Response</h3>
          <p>Rapid response services in case of emergencies.</p>
        </div>
        <div className="security-card">
          <h3>Motion Sensors</h3>
          <p>Detect movement and trigger security alerts instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecurity;
