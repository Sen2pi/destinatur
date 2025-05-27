import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlane, FaHotel, FaBus, FaShieldAlt, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaStar, FaCheck } from 'react-icons/fa';
import '../styles/TripDetails.css';

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripsData = {
    1: {
      name: "Caraíbas",
      location: "República Dominicana",
      description: "Descubra o paraíso nas Caraíbas com praias de areia branca, águas cristalinas e uma cultura vibrante. Uma experiência inesquecível numa das regiões mais belas do mundo.",
      longDescription: "As Caraíbas oferecem uma experiência única com suas praias paradisíacas, cultura rica e hospitalidade incomparável. Desfrute de dias relaxantes nas praias de Punta Cana, explore a vida noturna vibrante e saboreie a deliciosa gastronomia local. Este destino é perfeito para quem procura relaxamento, aventura e momentos inesquecíveis.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 899€",
      originalPrice: "1299€",
      duration: "7 noites",
      rating: 4.8,
      reviews: 156,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Resort 5 estrelas com tudo incluído",
        "Praias privadas com águas cristalinas",
        "Atividades aquáticas incluídas",
        "Excursões opcionais disponíveis",
        "Gastronomia internacional e local"
      ],
      itinerary: [
        { day: 1, title: "Chegada", description: "Transfer do aeroporto para o resort. Check-in e welcome drink." },
        { day: 2, title: "Praia e Relaxamento", description: "Dia livre para desfrutar das praias e instalações do resort." },
        { day: 3, title: "Excursão Opcional", description: "Visita à cidade histórica de Santo Domingo (opcional)." },
        { day: 4, title: "Atividades Aquáticas", description: "Snorkeling, kayak e outras atividades aquáticas incluídas." },
        { day: 5, title: "Spa e Wellness", description: "Dia de relaxamento com acesso ao spa do resort." },
        { day: 6, title: "Aventura", description: "Excursão à floresta tropical e cataratas (opcional)." },
        { day: 7, title: "Último Dia", description: "Manhã livre e transfer para o aeroporto." }
      ]
    },
    2: {
      name: "Cabo Verde",
      location: "Sal e Santiago",
      description: "Ilhas africanas com cultura única, música envolvente e paisagens vulcânicas deslumbrantes.",
      longDescription: "Cabo Verde é um arquipélago de beleza única, onde a cultura africana se mistura com influências portuguesas. Desfrute das praias de Santa Maria, explore a rica história de Santiago e deixe-se envolver pela música tradicional cabo-verdiana.",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 716€",
      originalPrice: "950€",
      duration: "7 noites",
      rating: 4.6,
      reviews: 89,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Duas ilhas em uma viagem",
        "Cultura cabo-verdiana autêntica",
        "Praias de areia dourada",
        "Música tradicional ao vivo",
        "Gastronomia local única"
      ],
      itinerary: [
        { day: 1, title: "Chegada a Sal", description: "Chegada ao aeroporto de Sal e transfer para o hotel." },
        { day: 2, title: "Praia de Santa Maria", description: "Exploração da famosa praia de Santa Maria." },
        { day: 3, title: "Tour pela Ilha", description: "Visita aos pontos turísticos da ilha do Sal." },
        { day: 4, title: "Viagem para Santiago", description: "Voo interno para Santiago e city tour." },
        { day: 5, title: "Cidade Velha", description: "Visita à histórica Cidade Velha, Património da UNESCO." },
        { day: 6, title: "Cultura Local", description: "Experiência cultural com música e dança tradicional." },
        { day: 7, title: "Partida", description: "Transfer para o aeroporto e voo de regresso." }
      ]
    },
    3: {
      name: "Madeira",
      location: "Funchal, Portugal",
      description: "A pérola do Atlântico com paisagens exuberantes, levadas históricas e clima subtropical.",
      longDescription: "A Madeira é um destino único que combina natureza exuberante, cultura rica e hospitalidade portuguesa. Explore as famosas levadas, desfrute do clima ameno durante todo o ano e saboreie o famoso vinho da Madeira.",
      images: [
        "https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 337€",
      originalPrice: "450€",
      duration: "3 noites",
      rating: 4.9,
      reviews: 234,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Paisagens vulcânicas únicas",
        "Levadas históricas para caminhadas",
        "Jardins botânicos exuberantes",
        "Gastronomia madeirense",
        "Clima subtropical agradável"
      ],
      itinerary: [
        { day: 1, title: "Chegada ao Funchal", description: "Chegada ao aeroporto e city tour pelo Funchal." },
        { day: 2, title: "Levadas e Natureza", description: "Caminhada pelas famosas levadas da Madeira." },
        { day: 3, title: "Jardins e Miradouros", description: "Visita aos jardins botânicos e miradouros panorâmicos." },
        { day: 4, title: "Partida", description: "Manhã livre e transfer para o aeroporto." }
      ]
    }
  };

  const trip = tripsData[id];

  if (!trip) {
    return (
      <div className="trip-not-found">
        <h2>Viagem não encontrada</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Voltar ao Início
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Olá! Gostaria de reservar a viagem "${trip.name}" (${trip.duration}) por ${trip.price}. Podem enviar-me mais informações?`;
    window.open(`https://wa.me/351923539713?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="trip-details">
      {/* Header da Viagem */}
      <div className="trip-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Voltar
        </button>
        
        <div className="trip-title-section">
          <h1>{trip.name}</h1>
          <div className="trip-location">
            <FaMapMarkerAlt /> {trip.location}
          </div>
          <div className="trip-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(trip.rating) ? 'filled' : ''} />
              ))}
              <span className="rating-number">{trip.rating}</span>
            </div>
            <span className="reviews">({trip.reviews} avaliações)</span>
          </div>
        </div>
      </div>

      {/* Galeria de Imagens */}
      <div className="image-gallery">
        <div className="main-image">
          <img src={trip.images[0]} alt={trip.name} />
        </div>
        <div className="thumbnail-images">
          {trip.images.slice(1).map((image, index) => (
            <img key={index} src={image} alt={`${trip.name} ${index + 2}`} />
          ))}
        </div>
      </div>

      <div className="trip-content">
        {/* Informações Principais */}
        <div className="main-content">
          <div className="trip-description">
            <h2>Sobre esta Viagem</h2>
            <p>{trip.longDescription}</p>
          </div>

          {/* Destaques */}
          <div className="trip-highlights">
            <h3>Destaques da Viagem</h3>
            <ul>
              {trip.highlights.map((highlight, index) => (
                <li key={index}>
                  <FaCheck /> {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerário */}
          <div className="trip-itinerary">
            <h3>Itinerário</h3>
            <div className="itinerary-list">
              {trip.itinerary.map((item, index) => (
                <div key={index} className="itinerary-item">
                  <div className="day-number">Dia {item.day}</div>
                  <div className="day-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar de Reserva */}
        <div className="booking-sidebar">
          <div className="price-card">
            <div className="price-section">
              <div className="current-price">{trip.price}</div>
              <div className="original-price">{trip.originalPrice}</div>
              <div className="price-per">por pessoa</div>
            </div>

            <div className="trip-info">
              <div className="info-item">
                <FaCalendarAlt />
                <span>{trip.duration}</span>
              </div>
              <div className="info-item">
                <FaUsers />
                <span>Mínimo 2 pessoas</span>
              </div>
            </div>

            <div className="includes-section">
              <h4>Incluído no Pacote</h4>
              <div className="includes-list">
                {trip.includes.map((item, index) => (
                  <div key={index} className="include-item">
                    {item === 'Voo' && <FaPlane />}
                    {item === 'Hotel' && <FaHotel />}
                    {item === 'Transfer' && <FaBus />}
                    {item === 'Seguro' && <FaShieldAlt />}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleBooking} className="book-now-btn">
              Reservar Agora
            </button>

            <div className="contact-info">
              <p>Dúvidas? Contacte-nos:</p>
              <a href="tel:+351923539713">+351 923 539 713</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
