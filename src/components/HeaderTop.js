import React from 'react';
/*import logo from '../assets/bm-logo.png'; */ // adjust the path to your actual image
import './HeaderTop.css';

const HeaderTop = () => {
  return (
    <div className="header-top">
      {/* Logo */}
      
      {/* Contact Info */}
      <div className="contact-container">
        {/* Call Us */}
        <div className="contact-item">
          <i className="fas fa-phone-alt icon-phone"></i>
        </div>

        {/* Mail Us */}
        <div className="contact-item">
          <i className="fas fa-envelope icon-mail"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
