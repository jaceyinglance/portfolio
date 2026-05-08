import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import glanceLogo from '../../glance_LOGO_img.png';
import eyeImage from '../../00_hero_Reference_img_section.png';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // More visible movement tracking
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 226, 221, 0.4), rgba(227, 226, 221, 0.4)), url(${eyeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-slogan-1 kr-bold">
        We find essence.<br/>
        We create movement.<br/>
        We build resonance.
      </div>

      <div className="hero-slogan-1-kr kr-bold">
        찰나에 드러나는 본질.<br/>
        그 찰나의 순간을 만들어내다.
      </div>
      
      <div className="hero-logo-container">
        <img 
          src={glanceLogo} 
          alt="Glance Logo" 
          className="hero-logo" 
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
      </div>

      <div className="hero-slogan-2-container">
        <div className="kr-bold" style={{ marginBottom: '8px' }}>Creative Houser For Brands. glance</div>
        <div className="hero-slogan-2-text">
          <div className="hero-slogan-2-en kr-bold" style={{ textAlign: 'right' }}>
            Where essence reveals itself in a moment.<br/>
            We create that moment.
          </div>
          <div className="hero-slogan-2-kr kr-bold" style={{ textAlign: 'right' }}>
            찰나에 드러나는 본질.<br/>
            그 찰나의 순간을 만들어내다.
          </div>
        </div>
      </div>

      <div className="home-menu-container">
        <Link to="/method" className="home-menu-item">01. METHOD</Link>
        <Link to="/practice" className="home-menu-item">02. PRACTICE</Link>
        <Link to="/founders" className="home-menu-item">03. FOUNDERS</Link>
        <Link to="/info" className="home-menu-item">04. INFORMATION</Link>
      </div>
    </section>
  );
};

export default Home;
