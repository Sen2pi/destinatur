import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlane, FaUmbrellaBeach, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';
import '../styles/DestinationsSection.css';

const DestinationsSection = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Caraíbas",
      description: "Praias paradisíacas e águas cristalinas",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 899€",
      duration: "7 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    },
    {
      id: 2,
      name: "Cabo Verde",
      description: "Ilhas africanas com cultura única",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 716€",
      duration: "7 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    },
    {
      id: 3,
      name: "Madeira",
      description: "A pérola do Atlântico",
      image: "https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 337€",
      duration: "3 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    },
    {
      id: 4,
      name: "Açores",
      description: "Natureza selvagem e paisagens vulcânicas",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 261€",
      duration: "4 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    },
    {
      id: 5,
      name: "Marrocos",
      description: "Cultura exótica e cidades imperiais",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 495€",
      duration: "7 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    },
    {
      id: 6,
      name: "Brasil",
      description: "Praias tropicais e cultura vibrante",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "desde 1032€",
      duration: "7 noites",
      includes: ["Voo", "Hotel", "Transfer", "Seguro"]
    }
  ];

  const packages = [
    {
      icon: <FaUmbrellaBeach />,
      title: "Tudo Incluído",
      description: "Pacotes completos com alimentação, bebidas e atividades incluídas",
      color: "#40B5A8"
    },
    {
      icon: <FaPlane />,
      title: "Voo + Hotel",
      description: "Combinações perfeitas de voo e alojamento aos melhores preços",
      color: "#F4D03F"
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Circuitos",
      description: "Viagens organizadas para descobrir múltiplos destinos",
      color: "#40B5A8"
    },
    {
      icon: <FaHeart />,
      title: "Lua de Mel",
      description: "Experiências românticas para casais em destinos únicos",
      color: "#F4D03F"
    }
  ];

  const handleDestinationClick = (destinationId) => {
    navigate(`/viagem/${destinationId}`);
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

      {/* Resto do componente permanece igual */}
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

      <div className="cta-section">
        <h2>Pronto para a Sua Próxima Aventura?</h2>
        <p>Contacte-nos para criar o pacote de viagem perfeito para si</p>
        <button className="cta-btn">Solicitar Orçamento</button>
      </div>
    </section>
  );
};

export default DestinationsSection;
