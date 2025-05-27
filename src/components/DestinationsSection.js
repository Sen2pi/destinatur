import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlane, FaUmbrellaBeach, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';
import { tripImages } from '../assets/images';
import '../styles/DestinationsSection.css';

const DestinationsSection = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Braga – Gerês",
      description: "Natureza, trilhos e paisagens deslumbrantes",
      image: tripImages.geres[0], // Primeira imagem do Gerês
      price: "Desde 29,90€",
      duration: "3 dias",
      includes: ["Transporte", "Seguro", "Guia"]
    },
    {
      id: 2,
      name: "Jardim do Éden",
      description: "Escapadinha única à zona da Bacalhôa",
      image: tripImages.eden[0], // Primeira imagem do Éden
      price: "Desde 39,90€",
      duration: "5 dias",
      includes: ["Transporte", "Seguro", "Guia", "Entrada"]
    },
    {
      id: 3,
      name: "Braga – Vigo",
      description: "Cidade costeira com paisagens e compras",
      image: tripImages.vigo[0], // Primeira imagem de Vigo
      price: "Desde 34,90€",
      duration: "3 dias",
      includes: ["Transporte", "Seguro", "Guia"]
    },
    {
      id: 4,
      name: "Braga – Pontevedra",
      description: "Charme histórico e cultura galega",
      image: tripImages.pontevedra[0], // Primeira imagem de Pontevedra
      price: "Desde 34,90€",
      duration: "3 dias",
      includes: ["Transporte", "Seguro", "Guia"]
    },
    {
      id: 5,
      name: "Santiago de Compostela",
      description: "Destino de peregrinação e beleza espiritual",
      image: tripImages.santiago[0], // Primeira imagem de Santiago
      price: "Desde 39,90€",
      duration: "3 dias",
      includes: ["Transporte", "Seguro", "Guia"]
    },
    {
      id: 6,
      name: "O Grove",
      description: "Praias paradisíacas e gastronomia de marisco",  
      image: tripImages.grove[0], // Primeira imagem de O Grove
      price: "Desde 29,90€",
      duration: "3 dias",
      includes: ["Transporte", "Seguro", "Guia"]
    }
  ];

  const packages = [
    {
      icon: <FaUmbrellaBeach />,
      title: "Excursões de Dia",
      description: "Viagens de um dia com tudo incluído para destinos próximos",
      color: "#40B5A8"
    },
    {
      icon: <FaPlane />,
      title: "Transporte + Guia",
      description: "Combinações perfeitas de transporte e acompanhamento",
      color: "#F4D03F"
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Circuitos Regionais",
      description: "Descoberta de múltiplos destinos na região Norte",
      color: "#40B5A8"
    },
    {
      icon: <FaHeart />,
      title: "Experiências Únicas",
      description: "Momentos especiais em locais históricos e naturais",
      color: "#F4D03F"
    }
  ];

  const handleDestinationClick = (destinationId) => {
    navigate(`/viagem/${destinationId}`);
  };

  const handleCTAClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para uma viagem. Podem ajudar-me?";
    window.open(`https://wa.me/351923539713?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="destinations-section">
      {/* Destinos Populares */}
      <div className="destinations-container">
        <h2>Destinos Populares</h2>
        <p className="section-subtitle">Descubra os nossos destinos mais procurados</p>
        
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-overlay">
                  <div className="destination-price">{destination.price}</div>
                </div>
              </div>
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="destination-details">
                  <span className="duration">{destination.duration}</span>
                  <div className="includes">
                    {destination.includes.map((item, index) => (
                      <span key={index} className="include-item">{item}</span>
                    ))}
                  </div>
                </div>
                <button 
                  className="destination-btn"
                  onClick={() => handleDestinationClick(destination.id)}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tipos de Pacotes */}
      <div className="packages-container">
        <h2>Tipos de Pacotes</h2>
        <p className="section-subtitle">Escolha o tipo de viagem que mais se adequa a si</p>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-icon" style={{ color: pkg.color }}>
                {pkg.icon}
              </div>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Pronto para a Sua Próxima Aventura?</h2>
        <p>Contacte-nos para criar o pacote de viagem perfeito para si</p>
        <button className="cta-btn" onClick={handleCTAClick}>
          Solicitar Orçamento
        </button>
      </div>
    </section>
  );
};

export default DestinationsSection;
