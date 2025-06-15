import React from 'react';
import './Grid.css';

export default function PalmFeatures() {
  return (
    <div
      className="Grid-background"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        padding: '0.5rem 2rem',
      }}
    >
      <div className="features-wrapper">
        <div className="text-wrapper">
          <h1 className="heading">Innovation That Starts with Your Palm</h1>
          <p className="subheading">
            Reimagining identity verification with contactless palm vein technology: ultra-secure, hygienic, and lightning-fast.
          </p>
        </div>

        <div className="features-grid">
          <img src="/img.png" alt="Access Control" className="feature-box" />
          <img src="/img1.png" alt="Smart Attendance" className="feature-box" />
          <img src="/img2.png" alt="Enterprise Security" className="feature-box" />
          <img src="/img3.png" alt="Identity Verification" className="feature-box" />
        </div>
      </div>
    </div>
  );
}
