import React, { useState } from 'react';

const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we simply log the data:
    console.log("Contact Form Data:", formData);
    
    // Here you can add your logic to send the data to your backend
    // For example, using fetch or axios to make an API call

    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    alert("Your inquiry has been sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Name *" 
          value={formData.name} 
          onChange={handleChange} 
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 ring-primary outline-none bg-transparent dark:text-gray-100"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email *" 
          value={formData.email} 
          onChange={handleChange} 
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 ring-primary outline-none bg-transparent dark:text-gray-100"
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone" 
          value={formData.phone} 
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 ring-primary outline-none bg-transparent dark:text-gray-100"
        />
        <textarea 
          name="message" 
          placeholder="Your Comments" 
          value={formData.message} 
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 ring-primary outline-none bg-transparent dark:text-gray-100"
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg uppercase transition-colors"
      >
        SEND INQUIRY
      </button>
    </form>
  );
};

export default ContactForm;
