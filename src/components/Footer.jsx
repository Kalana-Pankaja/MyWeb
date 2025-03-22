import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/Kalana-Pankaja" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="www.linkedin.com/in/kalana-liyanage-7a29a3241" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://t.me/@Kalana_pankaja" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="mailto:kalanap.23@cse.mrt.ac.lk">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Kalana Liyanage. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;