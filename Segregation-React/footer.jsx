import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="first">
          <div className="lines">
            <a href="">About Swipe2Clean</a>
            <a href="">Our Team</a>
            <a href="">Career Guidance</a>
            <a href="">Support & FAQs</a>
            <a href="">Media Partners</a>
            <a href="">Explore Partnerships</a>
            <a href="">Contact Us</a>
          </div>
          <div className="about">
            <img src="./images/logo.jpg" alt="" />
            <div className="aboutus">
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </div>
            <div className="sociallinks">
              {/* Social media icons */}
            </div>
          </div>
          <div className="social">
            {/* Play store and notifications input */}
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
