import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header>
      {/* Top Blue Bar */}
      <div className="top-bar"></div>

      {/* Middle Bar */}
      <div className="middle-bar">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="contact-container">
          <div className="contact-box">
            <div>
              <strong>CALL US</strong>
              <p>(+254) 721 917 360</p>
            </div>
          </div>
          <div className="contact-box">
            <div>
              <strong>MAIL US</strong>
              <p>security@etss.co.ke</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <span>Solutions ▼</span>
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h4>Security</h4>
                <Link to="/services/security-guarding">Security Guarding</Link>
                <Link to="/services/roaming-guards">Roaming Guards</Link>
                <Link to="/services/car-park-guarding">Car Park Guarding</Link>
                <Link to="/services/vip-protection">VIP Protection</Link>
              </div>
              <div className="dropdown-section">
                <h4>Technology</h4>
                <Link to="/services/cctv-installation">CCTV Installation</Link>
                <Link to="/services/access-control">Access Control</Link>
                <Link to="/services/electric-fence">Electric Fence</Link>
                <Link to="/services/alarm-response">Alarm Monitoring</Link>
              </div>
              <div className="dropdown-section">
                <h4>Consulting</h4>
                <Link to="/services/security-training">Security Training</Link>
                <Link to="/services/security-audit">Security Audits</Link>
                <Link to="/services/investigations">Investigations</Link>
                <Link to="/services/retail-accreditation">Retail Accreditation</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
