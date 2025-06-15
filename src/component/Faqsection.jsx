import React, { useState, useEffect, useRef } from 'react';
import './Faqsection.css';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "We offer returns within 30 days of purchase with the original receipt.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 3-5 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide.",
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! You’ll receive a tracking link via email after your order is shipped.",
  },
  {
    question: "How do I cancel or modify an order?",
    answer: "Please contact support within 24 hours to cancel or modify your order.",
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
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add('fade-in');
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
  }, []);

  return (
    <div
      className="faq-section"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures full screen coverage
      }}
    >
      <h2 className="faq-title">Frequently Asked Questions</h2>
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
    </div>
  );
};

export default FAQSection;
