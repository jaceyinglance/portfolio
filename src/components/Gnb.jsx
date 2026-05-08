import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Gnb = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="gnb">
        <div className="gnb-left">
          <Link to="/" className="gnb-btn">00. COVER (Home)</Link>
        </div>
        <div className="gnb-center" onMouseEnter={() => setMenuOpen(true)}>
          <button className="gnb-btn menu-btn">MENU</button>
        </div>
        <div className="gnb-right">
          <button className="gnb-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
      </nav>

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
