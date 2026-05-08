import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Gnb from './components/Gnb';
import Footer from './components/Footer';
import Home from './pages/Home';
import Method from './pages/Method';
import Practice from './pages/Practice';
import ProjectDetail from './pages/ProjectDetail';
import Founders from './pages/Founders';
import Info from './pages/Info';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Gnb />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/method" element={<Method />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:id" element={<ProjectDetail />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
