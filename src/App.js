import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Features from './component/Features';


import Grid from './component/Grid';
import CardSlider from './component/CardSlider';
import VideoSection from './component/VideoSection';
import FaqSection from './component/Faqsection';
import SubscribeSection from './component/SubscribeSection';

import Footer from './component/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="backgroundWrapper">
        <Navbar />
        <Hero />
        <Features />

        <Grid />
        <CardSlider />
        <VideoSection />
        <FaqSection />
        <SubscribeSection />
        <Footer />
       

      
      </div>
    </div>
  );
}

export default App;
