import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}
Mensagem: ${formData.message}
    `;

    const mailtoLink = `mailto:reservas.destinatur@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Obrigado pelo seu contacto! Responderemos brevemente.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <h2>Formulário de Contacto</h2>
        {submitMessage && <div className="success-message">{submitMessage}</div>}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="O seu nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="o.seu.email@exemplo.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+351 xxx xxx xxx"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="Orçamento de Viagem">Orçamento de Viagem</option>
                <option value="Informações Gerais">Informações Gerais</option>
                <option value="Pacotes Turísticos">Pacotes Turísticos</option>
                <option value="Reservas">Reservas</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Conte-nos sobre a sua viagem dos sonhos..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
