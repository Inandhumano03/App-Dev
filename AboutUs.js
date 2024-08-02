import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Task!t</h1>
      <p>
        Welcome to Task!t, your ultimate task and time management solution. We
        are dedicated to helping you organize your tasks, manage your time, and
        achieve your goals efficiently.
      </p>
      <p>
        Our mission is to provide a user-friendly platform that empowers
        individuals and teams to stay on top of their work, meet deadlines, and
        improve productivity. Whether you're managing personal tasks or
        collaborating with a team, Task!t has the tools you need to succeed.
      </p>
      <p>
        At Task!t, we believe in the power of organization and effective time
        management. Our features include task lists, priority levels, due dates,
        time tracking, goal setting, reminders, and much more.
      </p>
      <p>
        Thank you for choosing Task!t. We are committed to continuously
        improving our platform to meet your needs and help you achieve your
        goals.
      </p>
      <p>
        For any inquiries or feedback, please feel free to{' '}
        <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default AboutUs;
