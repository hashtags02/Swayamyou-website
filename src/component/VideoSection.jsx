// VideoSection.jsx
import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
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
    <div className="video-section">
      <h2 className="video-heading">
        Revolutionizing Identity:<br />
        <span>Fast, Secure, and Contact-Free.</span>
      </h2>

      <div className="video-container">
        <video className="identity-video" autoPlay loop muted playsInline>
          <source src="/girl-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button className="demo-button">Book Demo Now</button>
    </div>
    </div>
  );
};

export default VideoSection;
