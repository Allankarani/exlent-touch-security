import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Your inquiry has been sent!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      interestedIn: '',
      comments: '',
    });
  };

  return (
    <div className="contact-form-container">
      <div
        className="contact-header"
        style={{
          backgroundColor: '#c1272d',
          color: 'white',
          padding: '15px 20px',
        }}
      >
        <h3>CONTACT US FOR INQUIRY</h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="contact-form"
        style={{ padding: '20px' }}
      >
        <div
          className="form-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <div className="form-group" style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '3px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <div className="form-group" style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '3px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <div className="form-group" style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '3px',
                border: '1px solid #ddd',
              }}
            />
          </div>
        </div>

        <div
          className="form-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <div className="form-group" style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="interestedIn">Interested In</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '3px',
                border: '1px solid #ddd',
              }}
            >
              <option value="">Select an option</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group" style={{ flex: '2', minWidth: '300px' }}>
            <label htmlFor="comments">Your Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="3"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '3px',
                border: '1px solid #ddd',
              }}
            ></textarea>
          </div>
        </div>

        <div
          className="form-submit"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: '#c1272d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            SEND INQUIRY
            <span style={{ marginLeft: '10px' }}>→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
