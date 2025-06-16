import React, { useState, useEffect, useRef } from 'react';
import './Faqsection.css';

const faqData = [
  {
    question: "What does your biometric system do?",
    answer:
      "Our system uses advanced contactless palm vein recognition to verify identity in real-time. It’s fast, secure, and hygienic — ideal for authentication, access control, attendance, and seamless transactions.",
  },
  {
    question: "How does palm vein recognition work?",
    answer:
      "We capture an infrared image of the unique vein pattern beneath the surface of your palm. These internal patterns are extremely difficult to fake, making it one of the most secure forms of biometric authentication.",
  },
  {
    question: "Is it safe and hygienic?",
    answer:
      "Absolutely. It’s 100% touch-free, which makes it hygienic and ideal for public spaces — no contact, no wear and tear, and no contamination risk.",
  },
  {
    question: "Where can your system be used?",
    answer:
      "Our biometric system is versatile and can be deployed across: Employee attendance, access control in offices, healthcare for patient identity, digital payments, ticketing, gyms, and smart visitor systems.",
  },
  {
    question: "What makes your solution different?",
    answer:
      "Our unique contactless palm vein recognition technology is more secure, hygienic, and reliable than traditional biometric systems.",
  },
  {
    question: "Can someone else use my palm to pay?",
    answer:
      "No. Palm vein patterns are impossible to duplicate. Even identical twins have different patterns. It’s one of the most fraud-resistant technologies available today.",
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemRef.current.classList.add('fade-in');
          observer.unobserve(itemRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
  }, []);

  return (
    <div
      className="faq-item"
      ref={itemRef}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="dot">•</span>
        <span>{question}</span>
        <span className={`plus ${isOpen ? 'rotate' : ''}`}>+</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [showContent, setShowContent] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (showContent && imageRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            imageRef.current.classList.add('fade-in');
            observer.unobserve(imageRef.current);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef.current);
    }
  }, [showContent]);

  return (
    <div
      className={`faq-section ${showContent ? 'expanded' : ''}`}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'middle center',
      }}
    >
      <div className="faq-header" onClick={() => setShowContent(!showContent)}>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <span className={`dropdown-icon ${showContent ? 'rotate' : ''}`}>▼</span>
      </div>

      {showContent && (
        <>
          <div className="faq-content">
            <div className="faq-list">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
            <div className="faq-image" ref={imageRef}>
              <img src="/Faqsection.png" alt="FAQ Illustration" />
            </div>
          </div>

          <div className="faq-input">
            <h3>Still have questions?</h3>
            <p>Drop your email and we’ll get in touch with you.</p>
            <input type="email" placeholder="Enter your email..." />
          </div>
        </>
      )}
    </div>
  );
};

export default FAQSection;
