import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateInputs = () => {
    let valid = true;
    let errors = { username: '', password: '' };

    if (username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters long.';
      valid = false;
    }

    if (password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    // Add your login logic here (e.g., authentication)
    // For simplicity, we'll assume login is always successful
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
        <div className="auth-links">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
