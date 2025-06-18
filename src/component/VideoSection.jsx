
import React, { useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view'); // to allow re-trigger on scroll back
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = sectionRef.current.querySelectorAll('.video-heading, .video-container, .demo-button');
    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

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
      <div className="video-section" ref={sectionRef}>
        <h2 className="video-heading">
        Touch Free Identity Verification for a Smarter, Safer Tomorrow<br />
          <span>You complete authentication and payment with one gesture..</span>
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