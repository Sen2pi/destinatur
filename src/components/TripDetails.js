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
      longDescription: "Cabo Verde é um arquipélago de beleza única, onde a cultura africana se mistura com influências portuguesas. Desfrute das praias de Santa Maria na ilha do Sal, explore a rica história de Santiago e deixe-se envolver pela música tradicional cabo-verdiana. As ilhas oferecem contrastes únicos entre paisagens áridas e vales verdejantes.",
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
        { day: 2, title: "Praia de Santa Maria", description: "Exploração da famosa praia de Santa Maria e centro da vila." },
        { day: 3, title: "Tour pela Ilha do Sal", description: "Visita às salinas de Pedra Lume e Buracona." },
        { day: 4, title: "Viagem para Santiago", description: "Voo interno para Santiago e city tour pela Praia." },
        { day: 5, title: "Cidade Velha", description: "Visita à histórica Cidade Velha, Património da UNESCO." },
        { day: 6, title: "Cultura Local", description: "Experiência cultural com música morna e dança tradicional." },
        { day: 7, title: "Partida", description: "Transfer para o aeroporto e voo de regresso." }
      ]
    },
    3: {
      name: "Madeira",
      location: "Funchal, Portugal",
      description: "A pérola do Atlântico com paisagens exuberantes, levadas históricas e clima subtropical.",
      longDescription: "A Madeira é um destino único que combina natureza exuberante, cultura rica e hospitalidade portuguesa. Explore as famosas levadas, desfrute do clima ameno durante todo o ano e saboreie o famoso vinho da Madeira. A ilha oferece jardins botânicos deslumbrantes, miradouros panorâmicos e uma gastronomia única.",
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
        { day: 1, title: "Chegada ao Funchal", description: "Chegada ao aeroporto e city tour pelo Funchal histórico." },
        { day: 2, title: "Levadas e Natureza", description: "Caminhada pelas famosas levadas e visita aos jardins botânicos." },
        { day: 3, title: "Cabo Girão e Porto Moniz", description: "Visita ao skywalk do Cabo Girão e piscinas naturais de Porto Moniz." },
        { day: 4, title: "Partida", description: "Manhã livre para compras e transfer para o aeroporto." }
      ]
    },
    4: {
      name: "Açores",
      location: "São Miguel, Portugal",
      description: "Natureza selvagem e paisagens vulcânicas num paraíso no meio do Atlântico.",
      longDescription: "Os Açores são um arquipélago português no meio do Atlântico, conhecido pelas suas paisagens vulcânicas dramáticas, lagoas de crateras, fontes termais e natureza intocada. São Miguel, a maior ilha, oferece uma combinação perfeita de aventura e relaxamento, com as famosas Sete Cidades e as termas da Furnas.",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 261€",
      originalPrice: "380€",
      duration: "4 noites",
      rating: 4.7,
      reviews: 178,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Lagoas das Sete Cidades",
        "Termas naturais da Furnas",
        "Observação de baleias e golfinhos",
        "Trilhos de caminhada únicos",
        "Gastronomia açoriana autêntica"
      ],
      itinerary: [
        { day: 1, title: "Chegada a São Miguel", description: "Chegada a Ponta Delgada e tour pela cidade histórica." },
        { day: 2, title: "Sete Cidades", description: "Visita às famosas lagoas das Sete Cidades e miradouros." },
        { day: 3, title: "Furnas", description: "Exploração das termas da Furnas e degustação do cozido das caldeiras." },
        { day: 4, title: "Observação de Baleias", description: "Passeio de barco para observação de baleias e golfinhos." },
        { day: 5, title: "Partida", description: "Manhã livre e transfer para o aeroporto." }
      ]
    },
    5: {
      name: "Marrocos",
      location: "Marraquexe e Fez",
      description: "Cultura exótica e cidades imperiais numa viagem através de mil e uma noites.",
      longDescription: "Marrocos é um país fascinante que combina tradição e modernidade, onde as cidades imperiais de Marraquexe e Fez oferecem uma experiência cultural única. Explore os souks coloridos, admire a arquitetura islâmica, saboreie a gastronomia local e aventure-se no deserto do Saara para uma experiência verdadeiramente mágica.",
      images: [
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 495€",
      originalPrice: "699€",
      duration: "7 noites",
      rating: 4.5,
      reviews: 203,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Cidades imperiais de Marraquexe e Fez",
        "Souks tradicionais e medinas históricas",
        "Excursão opcional ao deserto do Saara",
        "Arquitetura islâmica deslumbrante",
        "Gastronomia marroquina autêntica"
      ],
      itinerary: [
        { day: 1, title: "Chegada a Marraquexe", description: "Chegada ao aeroporto e tour pela Praça Jemaa el-Fna." },
        { day: 2, title: "Marraquexe Imperial", description: "Visita aos Jardins de Majorelle, Palácio da Bahia e Mesquita Koutoubia." },
        { day: 3, title: "Souks e Medina", description: "Exploração dos souks tradicionais e da medina histórica." },
        { day: 4, title: "Viagem para Fez", description: "Transfer para Fez via montanhas do Atlas Médio." },
        { day: 5, title: "Fez Imperial", description: "Tour pela medina de Fez, Universidade Al Quaraouiyine e curtumes." },
        { day: 6, title: "Meknes e Volubilis", description: "Excursão a Meknes e às ruínas romanas de Volubilis." },
        { day: 7, title: "Partida", description: "Transfer para o aeroporto de Fez e voo de regresso." }
      ]
    },
    6: {
      name: "Brasil",
      location: "Rio de Janeiro e Salvador",
      description: "Praias tropicais e cultura vibrante na terra do samba e da capoeira.",
      longDescription: "O Brasil oferece uma experiência cultural única com suas praias deslumbrantes, música contagiante e povo acolhedor. Descubra o Rio de Janeiro com o Cristo Redentor e Copacabana, explore Salvador com sua rica herança afro-brasileira, e mergulhe na cultura brasileira através da música, dança e gastronomia incomparáveis.",
      images: [
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      price: "desde 1032€",
      originalPrice: "1450€",
      duration: "7 noites",
      rating: 4.8,
      reviews: 142,
      includes: ["Voo", "Hotel", "Transfer", "Seguro"],
      highlights: [
        "Cristo Redentor e Pão de Açúcar no Rio",
        "Praias de Copacabana e Ipanema",
        "Centro histórico de Salvador (Pelourinho)",
        "Cultura afro-brasileira autêntica",
        "Gastronomia brasileira diversificada"
      ],
      itinerary: [
        { day: 1, title: "Chegada ao Rio", description: "Chegada ao Rio de Janeiro e tour panorâmico pela cidade." },
        { day: 2, title: "Cristo Redentor", description: "Visita ao Cristo Redentor no Corcovado e praias de Copacabana." },
        { day: 3, title: "Pão de Açúcar", description: "Passeio de bondinho ao Pão de Açúcar e Santa Teresa." },
        { day: 4, title: "Voo para Salvador", description: "Voo interno para Salvador e tour pelo Pelourinho." },
        { day: 5, title: "Salvador Histórica", description: "Exploração do centro histórico e mercado modelo." },
        { day: 6, title: "Cultura Baiana", description: "Experiência cultural com capoeira, samba e culinária baiana." },
        { day: 7, title: "Partida", description: "Manhã livre nas praias de Salvador e voo de regresso." }
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
