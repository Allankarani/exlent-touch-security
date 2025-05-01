
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about-section">
          <h3 className="footer-heading">ABOUT EXLENT TOUCH</h3>
          <p className="footer-text">
            Exlent Touch Security is built on integrity and professionalism. We provide tailored security solutions for residential, commercial, and corporate clients. Our team is trained, experienced, and dedicated to your safety.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Why Partner with Us</li>
            <li className="footer-list-item">Our Services</li>
            <li className="footer-list-item">Contact Us</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-section solutions-section">
          <h3 className="footer-heading">OUR SOLUTIONS</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Alarm Monitoring</li>
            <li className="footer-list-item">Access Control</li>
            <li className="footer-list-item">CCTV Installation</li>
            <li className="footer-list-item">VIP Protection</li>
            <li className="footer-list-item">Security Training</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h3 className="footer-heading">CONTACT US</h3>
          <p className="footer-text">Head Office: Mwiki Kasarani along Thika Super Highway</p>
          <p className="footer-text">Email: info@exlenttouch.co.ke</p>
          <p className="footer-text">Phone: +254 721 917 360</p>
                                    Phone: +254 735 111 444
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Exlent Touch Security. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;