import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add actual submission logic here (like sending to a backend server)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Contact Us</h2>

      {/* Company Location and Contact Numbers */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Phone 1:</strong> +254 700 123456</p>
        <p><strong>Phone 2:</strong> +254 711 654321</p>
        <p><strong>Email:</strong> info@exlenttouch.com</p>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Phone Field */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Comment Field */}
        <div style={{ marginBottom: '10px' }}>
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', minHeight: '100px' }}
          />
        </div>

        {/* Service Selection */}
        <div style={{ marginBottom: '10px' }}>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select a Service</option>
            <option value="security-guard">Security Guard</option>
            <option value="event-security">Event Security</option>
            <option value="cctv-installation">CCTV Installation</option>
            <option value="patrol-services">Patrol Services</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" style={{ padding: '10px 20px' }}>
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}

export default Contact;
