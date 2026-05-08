import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div style={{ display: 'flex', gap: '40px', flex: 2 }}>
        <div className="footer-col kr-bold" style={{ maxWidth: '300px' }}>
          <p>
            A glance can be fleeting.<br/>
            Or it can be the moment something becomes clear.<br/>
            Some things deserve more than a glance.<br/>
            For what is too real to pass by.
          </p>
        </div>
        <div className="footer-col kr-bold" style={{ maxWidth: '300px' }}>
          <p>
            찰나는 스쳐 지나가는 순간일 수도,<br/>
            의미가 처음으로 선명해지는 순간일 수도 있습니다.<br/>
            스쳐 지나가기엔 너무도 진짜인 것들을 위해.
          </p>
        </div>
      </div>
      
      <div className="footer-col footer-right" style={{ flex: 1 }}>
        <p className="en-text" style={{ fontSize: '14px', marginBottom: '8px' }}>
          Find. Move. Resonate.
        </p>
        <p className="en-text" style={{ fontSize: '20px' }}>
          glance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
