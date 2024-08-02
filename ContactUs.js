import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        errorMessage = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        errorMessage = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'number':
        errorMessage = !/^\d{10}$/.test(value) ? 'Invalid contact number (must be 10 digits)' : '';
        break;
      case 'description':
        errorMessage = value.trim() === '' ? 'Description is required' : '';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    if (Object.values(errors).some((error) => error)) {
      alert('Please correct the errors in the form.');
      return;
    }

    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      number: '',
      description: ''
    });
    setErrors({
      name: '',
      email: '',
      number: '',
      description: ''
    });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="number">Contact Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        {errors.number && <span className="error-message">{errors.number}</span>}

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        {errors.description && <span className="error-message">{errors.description}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
