import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About_Banner from '../components/about/About_Banner';
import About_Details from '../components/about/About_Details';

function About() {
 
  return (
    <>
      <Navbar />
      <About_Banner />
      <About_Details/>
      <Footer />
    </>
  );
}

export default About;
