import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import glanceLogo from '../../glance_LOGO_img.png';
import eyeImage from '../../00_hero_Reference_img_section.png';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://glance.house';
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "glance creative house",
    "alternateName": ["glance", "글랜스", "글랜스 스튜디오", "글랜스 디자인", "글랜스 크리에이티브 하우스", "글랜스크리에이티브하우스"],
    "url": origin,
    "logo": `${origin}/glance_LOGO_img.png`,
    "description": "글랜스 스튜디오(glance creative house)는 브랜드 디자인, 브랜딩, 디자인 전문 에이전시입니다. F&B브랜딩(푸드 브랜딩) 및 패키지 디자인부터 글랜스 크리에이티브 하우스의 강점인 글랜스 영상 촬영, 브랜드 영상 촬영, 아트 필름 촬영, 패션 룩북 촬영, AI 화보, AI 영상 제작, 인스타 대행, 콘텐츠 마케팅까지 토탈 솔루션을 제공합니다.",
    "knowsAbout": [
      "브랜드 디자인",
      "브랜딩",
      "디자인",
      "푸드 브랜딩",
      "F&B브랜딩",
      "패키지 디자인",
      "영상 스튜디오",
      "인스타 대행",
      "콘텐츠 마케팅",
      "AI 화보",
      "AI 영상",
      "글랜스 크리에이티브 하우스",
      "글랜스크리에이티브하우스",
      "글랜스 영상 제작",
      "글랜스 영상 촬영",
      "글랜스 유튜브 제작",
      "글랜스 유튜브 콘텐츠",
      "글랜스 유튜브 촬영",
      "유튜브 촬영",
      "다큐 촬영",
      "다큐 제작",
      "다큐 제작사",
      "브랜드 영상 촬영",
      "아트 필름 촬영",
      "패션 룩북 촬영"
    ]
  };

  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 226, 221, 0.4), rgba(227, 226, 221, 0.4)), url(${eyeImage})`
      }}
    >
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
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
        <Link to="/method" className="home-menu-item home-float-1">01. METHOD</Link>
        <Link to="/practice" className="home-menu-item home-float-2">02. PRACTICE</Link>
        <Link to="/founders" className="home-menu-item home-float-3">03. FOUNDERS</Link>
        <Link to="/info" className="home-menu-item home-float-4">04. INFORMATION</Link>
      </div>
    </section>
  );
};

export default Home;
