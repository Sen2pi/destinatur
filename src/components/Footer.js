import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Destinatur</h3>
            <p>A sua agência de viagens de confiança</p>
            <p>Email: reservas.destinatur@gmail.com</p>
            <p>Telefone: +351 923 539 713</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Destinatur. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
