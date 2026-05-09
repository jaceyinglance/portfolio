import React from 'react';
import jaceyImg from '../../founders/jacey_img.png';
import cieImg from '../../founders/cie_img.png';

const Founders = () => {
  return (
    <section className="page-container" style={{ paddingTop: '120px' }}>
      <h2 className="page-title en-text fade-up-seq" style={{ animationDelay: '0.1s' }}>03. FOUNDERS</h2>

      <div className="founder-main-heading en-text fade-up-seq" style={{ animationDelay: '0.3s' }}>
        The Founders : <br className="mobile-break" />Who Makes glance
      </div>

      <div className="founder-intro-grid fade-up-seq" style={{ animationDelay: '0.5s' }}>
        <div className="founder-intro-col">
          Two perspectives.<br/>
          One practice.
        </div>
        <div className="founder-intro-col">
          두 개의 관점이<br/>
          하나로 흐르는 곳
        </div>
      </div>

      <div className="founders-main-grid">
        {/* Jacey Profile */}
        <div className="founder-col fade-up-seq" style={{ animationDelay: '0.7s' }}>
          <div className="founder-header">
            <span className="founder-name-en en-text">Jacey</span>
            <span className="founder-name-kr">정현</span>
          </div>
          
          <div className="founder-profile-grid">
            {/* Row 1 */}
            <div className="founder-img-wrapper">
              <img src={jaceyImg} alt="Jacey" className="founder-profile-img" />
            </div>
            
            <div className="founder-right-content">
              <ul className="founder-capabilities" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                <li>Positioning</li>
                <li>Strategy</li>
                <li>Business Development</li>
                <li>Visual Designing</li>
              </ul>
              <div className="founder-academic" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                BFA in<br/>Industrial Design,<br/>Hongik Univ.
              </div>
            </div>

            {/* Row 2 */}
            <div className="founder-left-text">
              <div className="founder-profile-title" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                Branding Director
                <span className="founder-profile-subtitle" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>building a strategy.</span>
              </div>
              <div className="founder-profile-desc" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                브랜드와 성장의 구조를 설계합니다.
              </div>
            </div>
            
            <div className="founder-right-line-extension"></div>
          </div>
        </div>

        {/* Cie Profile */}
        <div className="founder-col fade-up-seq" style={{ animationDelay: '0.9s' }}>
          <div className="founder-header">
            <span className="founder-name-en en-text">Cie</span>
            <span className="founder-name-kr">주연</span>
          </div>
          
          <div className="founder-profile-grid">
            {/* Row 1 */}
            <div className="founder-img-wrapper">
              <img src={cieImg} alt="Cie" className="founder-profile-img" />
            </div>
            
            <div className="founder-right-content">
              <ul className="founder-capabilities" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                <li>Directing</li>
                <li>Film</li>
                <li>Narrative</li>
                <li>Resonance Building</li>
              </ul>
              <div className="founder-academic" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                BFA in<br/>Animation and Film,<br/>Hongik Univ.
              </div>
            </div>

            {/* Row 2 */}
            <div className="founder-left-text">
              <div className="founder-profile-title" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                Film Director
                <span className="founder-profile-subtitle" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>for stories meant to be felt.</span>
              </div>
              <div className="founder-profile-desc" style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}>
                이야기를 시각 언어로 번역합니다.
              </div>
            </div>
            
            <div className="founder-right-line-extension"></div>
          </div>
        </div>
      </div>

      <div className="founder-footer fade-up-seq" style={{ animationDelay: '1.1s', marginBottom: '80px', marginTop: '200px' }}>
        glance는 전략과 창작이 만나는 접점에서 작업하는 크리에이티브 하우스입니다.<br/>
        우리는 감각과 구조가 만나 세계를 확장한다고 믿습니다.<br/><br/>
        <span className="en-text" style={{ fontWeight: 'bold' }}>Two ways of seeing. One shared practice.</span>
      </div>
    </section>
  );
};

export default Founders;
