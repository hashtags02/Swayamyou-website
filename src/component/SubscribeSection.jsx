import React from 'react';
import './SubscribeSection.css';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const SubscribeSection = () => {
  return (
    <div
      className="Faq-background"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
      }}
    >
      <div className="subscribe-section-wrapper">
        <div className="subscribe-section">
          {/* LEFT SIDE */}
          <div className="subscribe-content">
            <h2>
              Stay Updated with <span>SwayamYou</span>
            </h2>
            <p>
              Subscribe for the latest news and updates on our innovative palm recognition technology.
            </p>

            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Sign Up</button>
            </form>
            <small>
              By clicking Sign Up, you agree to our Terms and Conditions.
            </small>

            {/* Connect With Us Section */}
            <div className="connect-section">
              <h3>Connect with Us</h3>
              <div className="contact-row">
                <div className="contact-item">
                  <MdEmail className="icon" />
                  <p>support@bitdutchstach.com</p>
                </div>
                <div className="contact-item">
                  <FaPhoneAlt className="icon" />
                  <p>265559559595</p>
                </div>
                <div className="contact-item">
                  <IoLocationSharp className="icon" />
                  <p>Vadodara</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="subscribe-image">
            <div className="image-and-contact">
              <img src="/scanner-image.jpeg" alt="Palm Scanner Device" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
