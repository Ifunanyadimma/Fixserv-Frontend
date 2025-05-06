import React from 'react';
import Navbar from '../Components/Navbar'
import LandingSection from '../Components/LandingSection'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'



function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;

