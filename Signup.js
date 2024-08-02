import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!username) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      formErrors.password = 'Password is required';
      isValid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!contact) {
      formErrors.contact = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      formErrors.contact = 'Contact number must be 10 digits';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add signup logic here (e.g., API call)
      console.log('Form submitted');
      setSuccessMessage('You have successfully registered!'); // Set success message
      navigate('/home'); // Redirect to home page
    }
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        {successMessage && <p className="success">{successMessage}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
          
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          {errors.contact && <p className="error">{errors.contact}</p>}
          
          <button type="submit">Sign Up</button>
        </form>
        <div className="link-container">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
