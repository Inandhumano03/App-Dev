import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import TimeManager from './components/TimeManager';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import ContactUs from './components/ContactUs'; // Import the ContactUs component
import './components/theme.css'; // Import the CSS file for themes

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Ensure this route is present */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/time-manager-container" element={<ProtectedRoute element={<TimeManager />} />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
        <Route path="/contact" element={<ContactUs />} /> {/* Add Contact Us route */}
      </Routes>
    </Router>
  );
};

export default App;
