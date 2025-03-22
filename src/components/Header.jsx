import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Kalana Liyanage</h1>
        <p>Computer Science & Engineering Undergraduate</p>
      </div>
      <div className="header-links">
        <a href="#" className="download-cv">Download CV</a>
        <div className="social-links">
          <a href="https://github.com/Kalana-Pankaja" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="www.linkedin.com/in/kalana-liyanage-7a29a3241" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://t.me/@Kalana_pankaja" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;