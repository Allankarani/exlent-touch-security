import React, { useState } from 'react';
import './Contacts.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Spinner state
  const [submitted, setSubmitted] = useState(false);       // Success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://etss.co.ke/backend/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          interestedIn: '',
          comments: '',
        });

        setSubmitted(true);
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1500); // Optional delay before redirect
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-header">
        <h3>CONTACT US FOR INQUIRY</h3>
      </div>

      {/* Success message */}
      {submitted ? (
        <div className="success-message">
          <p>Thank you! Your inquiry was submitted successfully. Redirecting...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Inquiry Form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +254 712 345678"
                aria-label="Phone Number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="interestedIn">Interested In</label>
              <select
                id="interestedIn"
                name="interestedIn"
                value={formData.interestedIn}
                onChange={handleChange}
                aria-label="Interest Category"
              >
                <option value="">Select an option</option>
                <option value="residential">Residential Security Services</option>
                <option value="commercial">Commercial Security Services</option>
                <option value="event">Event Security</option>
                <option value="cctv">CCTV Installation</option>
                <option value="alarm">Alarm System Installation</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="3"
                aria-label="Additional Comments"
              ></textarea>
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" aria-label="Submit Inquiry" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  SEND INQUIRY <span className="arrow">→</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
