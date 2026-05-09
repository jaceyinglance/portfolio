import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Gnb = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`gnb ${isHome ? 'gnb-home' : ''}`}>
        <div className="gnb-left">
          <Link to="/" className="gnb-btn">COVER</Link>
        </div>
        <div className="gnb-center" onMouseEnter={() => setMenuOpen(true)}>
          <button className="gnb-btn menu-btn">MENU</button>
        </div>
        <div className="gnb-right">
          <button className="gnb-btn" onClick={() => navigate(-1)}>← BACK</button>
        </div>
      </nav>

      {/* PC optimization notice — mobile only */}
      <div className="pc-notice">* 본 사이트는 PC환경에 최적화 되었습니다</div>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onMouseLeave={() => setMenuOpen(false)}>
        <div className="menu-items">
          <Link to="/method" className="menu-item float-1" onClick={() => setMenuOpen(false)}>01. METHOD</Link>
          <Link to="/practice" className="menu-item float-2" onClick={() => setMenuOpen(false)}>02. PRACTICE</Link>
          <Link to="/founders" className="menu-item float-3" onClick={() => setMenuOpen(false)}>03. FOUNDERS</Link>
          <Link to="/info" className="menu-item float-4" onClick={() => setMenuOpen(false)}>04. INFORMATION</Link>
        </div>
      </div>
    </>
  );
};

export default Gnb;
