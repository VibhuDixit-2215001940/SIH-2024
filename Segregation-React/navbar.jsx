import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="./images/logo.jpg" alt="Logo" />
          <h2>Swipe2Clean</h2>
        </div>
        <div className="link">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">Admin</a>
        </div>
        <div className="sign">
          <img src="./images/avatar.png" alt="Admin Avatar" />
          <h4>Admin Name</h4>
        </div>
      </div>
      <div className="news">
        <div className="latestnews">Latest News</div>
        <div className="para">
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
