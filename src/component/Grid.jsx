import React, { useEffect, useRef, useState } from 'react';
import './Grid.css';

export default function PalmFeatures() {
  const sectionRef = useRef(null);
  const [view, setView] = useState('default'); // 'default' | 'b2b' | 'b2b2c'

  useEffect(() => {
    const target = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('animate-in');
        } else {
          target.classList.remove('animate-in');
        }
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, []);

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
      <div className="features-wrapper" ref={sectionRef}>
        <div className="text-wrapper">
          <h1 className="heading">Innovation That Starts with Your Palm</h1>
          <p className="subheading">
            Reimagining identity verification with contactless palm vein technology: ultra-secure, hygienic, and lightning-fast.
          </p>
        </div>

        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => setView('b2b')}>
            B2B
          </button>
          <button className="btn-secondary" onClick={() => setView('b2b2c')}>
            B2B2C
          </button>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {view === 'default' && (
            <>
              <img src="/img.png" alt="Access Control" className="feature-box" />
              <img src="/img1.png" alt="Smart Attendance" className="feature-box" />
              <img src="/img2.png" alt="Enterprise Security" className="feature-box" />
              <img src="/img3.png" alt="Identity Verification" className="feature-box" />
            </>
          )}

          {view === 'b2b' && (
            <>
              <img src="/img.png" alt="B2B Feature 1" className="feature-box" />
              <img src="/img1.png" alt="B2B Feature 2" className="feature-box" />
              <img src="/img2.png" alt="B2B Feature 3" className="feature-box" />
              <img src="/img3.png" alt="B2B Feature 4" className="feature-box" />
            </>
          )}

          {view === 'b2b2c' && (
            <>
              <img src="/b2b2c2.png" alt="B2B2C Feature 1" className="feature-box" />
              <img src="/b2b2c1.png" alt="B2B2C Feature 2" className="feature-box" />
              <img src="/b2b2c3.png" alt="B2B2C Feature 3" className="feature-box" />
             
            </>
          )}
        </div>
      </div>
    </div>
  );
}
