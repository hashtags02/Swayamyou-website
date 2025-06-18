import React from "react";
import './Hero.css';

function Hero() {
  const handleLearnMoreClick = () => {
    const el = document.getElementById('cardslider');
    if (el) {
      const yOffset = -80; // Adjust if there's a sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="container">
        <div className="heroleftcontent">
          <h1>
            The Future of <span>Secure</span> Identity & Payments
          </h1>
          <p>
            Contactless & Seamless. Next-generation palm vein biometrics for enterprise security and beyond.
          </p>
          <button className="Learnbutton" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>

        <div className="herorightcontent">
          <img src="/handimage.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
