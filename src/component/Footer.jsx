import React from 'react';
import './Footer.css';
import { FaLinkedin, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto'
      }}
    >
      <div className="footer-content">
        <div className="footer-brand">
          <h2>SWAYAMYOU</h2>
        </div>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          
          <a href="#">Blog Updates</a>
          <a href="#">Careers Page</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
      
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2025 BitDustStash. All rights reserved.
         
          
        </p>
      </div>
    </footer>
  );
}
