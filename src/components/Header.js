import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-flex">
        <div className="logo-container">
          <Link to="/">
            <div className="logo-wrapper">
              <img src="/logo.png" alt="Destinatur" className="logo" />
            </div>
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Início
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('destinos')} 
                className="nav-btn"
              >
                Destinos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('pesquisa')} 
                className="nav-btn"
              >
                Pesquisa
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="nav-btn"
              >
                Contacto
              </button>
            </li>
            <li>
              <a 
                href="https://instagram.com/destinatur_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/351923539713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
