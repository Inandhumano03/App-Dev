import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const [username, setUsername] = useState('JohnDoe'); // Default values for demonstration
  const [email, setEmail] = useState('john.doe@example.com');
  const [contactNo, setContactNo] = useState('123-456-7890');
  const [isEditing, setIsEditing] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0); // State for total number of users

  useEffect(() => {
    // Fetch the total number of users from the API
    fetch('/api/totalUsers') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setTotalUsers(data.totalUsers))
      .catch(error => console.error('Error fetching total users:', error));
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic here
    console.log('Updated Profile:', { username, email, contactNo });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <p>Total Registered Users: {totalUsers}</p> {/* Display total number of users */}
      {isEditing ? (
        <form onSubmit={handleSave} className="profile-form">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="tel"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="profile-info">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Contact Number:</strong> {contactNo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
