import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./CardSlider.css";

const cardData = [
  {
    title: "Next-Gen Security",
    desc: "Designed to be completely contactless, the biometric scanner ensures hygienic and seamless authentication using advanced palm vein recognition.",
    image: "Card1.png",
  },
  {
    title: "A Futuristic Look",
    desc: "Every element—from its streamlined form to its subtle detailing—is purposefully crafted to reflect a future-forward identity. It’s built to impress, offering a perfect balance of elegance, functionality, and intuitive interaction.",
    image: "Card2.png",
  },
  {
    title: "Protective Identity",
    desc: "We provide secure access, safeguard sensitive data, and block unauthorized entry. From attendance and payments to access control, our smart security solutions ensure a safer and more efficient environment.",
    image: "card3.png",
  },
  {
    title: "Seamless Authentication",
    desc: "Touchless, friction-free, and fast — Designed for modern needs, it verifies identity, tracks attendance, monitors check-ins and check-outs, and confirms payment status — all in one smooth, secure system.",
    image: "Card4.png",
  },
];

const CardSlider = () => {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="Grid-background"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        padding: "0.5rem 2rem",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="slider-wrapper">
        <div className="slider-header">
          <h1>Experience the Future of Biometric Innovation</h1>
          <p>
            Discover our advanced palm recognition technology, where design meets seamless security.
          </p>
        </div>

        <div className="slider-container">
          <div className="card-frame">
            {cardData[index] && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="card"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img
                    src={cardData[index].image}
                    alt="card"
                    className="card-img"
                  />
                  <div className="card-content">
                    <h2>{cardData[index].title}</h2>
                    <p>{cardData[index].desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSlider;
