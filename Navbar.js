import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Task!t📒</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/profile">Profile</Link>
        <button className="theme-toggle-button" onClick={onToggleTheme}>
           Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
