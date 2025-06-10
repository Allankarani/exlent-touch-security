import React from 'react';
import { Link } from 'react-router-dom';
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <h1 className="thankyou-title">Thank You!</h1>
      <p className="thankyou-message">
        Your request has been received . Our sales team will contact you shortly.
      </p>
      <Link to="/" className="thankyou-button">
        Return Home
      </Link>

    </div>
  );
};

export default ThankYou;