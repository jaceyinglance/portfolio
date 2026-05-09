import React from 'react';

const Info = () => {
  return (
    <section className="page-container">
      <h2 className="page-title en-text fade-up-seq" style={{ animationDelay: '0.1s' }}>04. INFORMATION</h2>
      
      <div style={{ display: 'flex', gap: '60px', marginTop: '40px', flexWrap: 'wrap' }}>
        {/* Left Column: Capabilities */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 className="info-sub-heading en-text fade-up-seq" style={{ animationDelay: '0.3s' }}>
            Capabilities
          </h3>
          <ul className="info-capabilities-list fade-up-seq" style={{ animationDelay: '0.5s' }}>
            <li>Creative Direction</li>
            <li>Brand Identity Design</li>
            <li>Packaging Design</li>
            <li>Pop-up store Design</li>
            <li>Perfomence Marketing</li>
            <li>SNS Content & MKT</li>
            <li>Commercial promotion film</li>
            <li>Documetary film</li>
          </ul>
        </div>

        {/* Right Column: Description & Links */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div className="info-body-container fade-up-seq" style={{ lineHeight: '1.8', marginBottom: '80px', animationDelay: '0.7s' }}>
            <div className="kr-bold info-body-kr">
              <p style={{ fontSize: '1.5em', marginBottom: '24px' }}>
                Glance는 브랜드를 감각적인 경험으로<span className="mobile-break" /> 확장하는 크리에이티브 하우스입니다.
              </p>
              <p style={{ marginBottom: '24px' }}>
                브랜딩, 콘텐츠, 마케팅 전반을 아우르며<br/>
                아이덴티티를 설계하고, 서사를 구축하고,<br/>
                물리적 공간과 디지털 환경을 통해 이를 구현합니다.
              </p>
              <p>
                브랜딩과 패키지부터<span className="mobile-break" /> 영상, 콘텐츠, 공간, 퍼포먼스 마케팅까지—<br/>
                인플루언서·회사·기관과 협업하여<br/>
                공감되고, 성과로 이어지며, 오래 기억되는 결과를 만듭니다.
              </p>
            </div>
            
            <div className="kr-bold info-body-en" style={{ color: '#666' }}>
              <p style={{ fontSize: '1.5em', marginBottom: '24px' }}>
                Glance is an independent creative house shaping brands into experiences that move.
              </p>
              <p style={{ marginBottom: '24px' }}>
                We work across branding, content, and marketing—building identities, crafting narratives, and activating them through both physical and digital spaces.
              </p>
              <p style={{ marginBottom: '24px' }}>
                From brand identity and packaging to spaces, performance marketing, and film,
              </p>
              <p>
                we collaborate with brands, institutions, and Influencers to create work that resonates, performs, and endures.
              </p>
            </div>
          </div>

          <div className="fade-up-seq" style={{ animationDelay: '0.9s' }}>
            <h3 className="info-sub-heading en-text fade-up-seq">
              CONTACT US.
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="mailto:hello@glancecreativehouse.com" className="contact-link en-text" onMouseOver={(e) => e.target.style.color = '#888'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                hello@glancecreativehouse.com
              </a>
              <a href="https://www.instagram.com/glancecreativehouse" target="_blank" rel="noreferrer" className="contact-link en-text" onMouseOver={(e) => e.target.style.color = '#888'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                Instagram
              </a>
              <a href="https://www.youtube.com/@thedecemberlabel" target="_blank" rel="noreferrer" className="contact-link en-text" onMouseOver={(e) => e.target.style.color = '#888'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
