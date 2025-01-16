import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src="/logo.png"
          alt="Portfolio Logo"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
