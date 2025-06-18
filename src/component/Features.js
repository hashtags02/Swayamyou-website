import React, { useEffect, useRef } from "react";
import './Features.css';

function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.querySelector('.features-content');
    const cards = container.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('animate-in');
            content.classList.add('animate-in');
            cards.forEach((card) => card.classList.add('animate-in'));
          } else {
            container.classList.remove('animate-in');
            content.classList.remove('animate-in');
            cards.forEach((card) => card.classList.remove('animate-in'));
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="features-container" ref={containerRef}>
        <div className="features-content">
          <h1>Experience the Future of Security and Convenience</h1>
          <p>We offer unparalleled security through advanced palm recognition technology.</p>

          <div className="feature-list">
            <div className="feature-card">
              <img src="/newimage.png" alt="Feature 1" className="feature-img" />
              <h2 className="feature-title">Convenience</h2>
              <p>Experience seamless transactions with our contactless palm recognition technology.</p>
            </div>

            <div className="feature-card">
              <img src="/feature2.jpg" alt="Feature 2" className="feature-img" />
              <h2 className="feature-title">Security</h2>
              <p>Protect your identity and assets with our state-of the art biometric security.</p>
            </div>

            <div className="feature-card">
              <img src="/feature3.png" alt="Feature 3" className="feature-img" />
              <h2 className="feature-title">Accuracy</h2>
              <p>From banking to healthcare, our technology adapts to various industries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
