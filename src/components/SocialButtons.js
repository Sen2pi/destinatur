import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../styles/SocialButtons.css';

const SocialButtons = () => {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os vossos serviços de viagem.";
  
  return (
    <section className="social-section">
      <h2>Contacte-nos Diretamente</h2>
      <p>Prefere contactar-nos através das redes sociais? Estamos aqui para ajudar!</p>
      
      <div className="social-buttons">
        <a 
          href={`https://wa.me/351923539713?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn whatsapp"
        >
          <FaWhatsapp className="social-icon" />
          <span>WhatsApp</span>
        </a>
        
        <a 
          href="https://instagram.com/destinatur_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <FaInstagram className="social-icon" />
          <span>Instagram</span>
        </a>
        
        <a 
          href="https://facebook.com/61576563483972"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <FaFacebook className="social-icon" />
          <span>Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default SocialButtons;
