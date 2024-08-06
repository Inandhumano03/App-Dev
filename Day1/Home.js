import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleTaskManagementRedirect = () => {
    navigate('/dashboard');
  };

  const handleTimeManagerRedirect = () => {
    navigate('/time-manager-container'); // Adjust the path if your route is different
  };

  return (
    <div className="home-container">
      <h1>Welcome to Task!t</h1>
      <p>Your personal task and time management solution.</p>

      <div className="grid-container">
        <div className="grid-item" onClick={handleTaskManagementRedirect}>
          <h2>Task Management</h2>
          <p>Organize your tasks effectively and stay on top of your work.</p>
          <ul>
            <li>Task Lists</li>
            <li>Priority Levels</li>
            <li>Due Dates</li>
          </ul>
        </div>
        <div className="grid-item" onClick={handleTimeManagerRedirect}>
          <h2>Time Tracking</h2>
          <p>Monitor how you spend your time and improve your productivity.</p>
          <ul>
            <li>Time Logs</li>
            <li>Productivity Reports</li>
            <li>Time Analysis</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2>Goal Setting</h2>
          <p>Set and track your goals to achieve success.</p>
          <ul>
            <li>Short-term Goals</li>
            <li>Long-term Objectives</li>
            <li>Progress Tracking</li>
          </ul>
        </div>
        <div className="grid-item">
          <h2>Reminders</h2>
          <p>Never miss a deadline with timely reminders and notifications.</p>
          <ul>
            <li>Custom Alerts</li>
            <li>Recurring Reminders</li>
            <li>Deadline Notifications</li>
          </ul>
        </div>
      </div>

      {/* <div className="login-button-container">
        <button onClick={handleLoginRedirect}>Login</button>
      </div> */}

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Task!t. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a> {/* Add Contact Us link */}
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Home;
