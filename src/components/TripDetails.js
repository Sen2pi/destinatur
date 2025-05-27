import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlane, FaHotel, FaBus, FaShieldAlt, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaStar, FaCheck } from 'react-icons/fa';
import { tripImages } from '../assets/images';
import '../styles/TripDetails.css';

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripsData = {
    1: {
      name: "Braga – Gerês",
      location: "Parque Nacional da Peneda-Gerês, Portugal",
      description: "Natureza, trilhos e paisagens deslumbrantes num dos lugares mais mágicos de Portugal.",
      longDescription: "Neste passeio de um dia ao Gerês, vais respirar ar puro, admirar quedas de água e caminhar por trilhos rodeados de natureza. Ideal para quem procura um dia diferente, com energia, contacto com a natureza e relaxamento em cenários de cortar a respiração.",
      images: tripImages.geres, // Usar imagens locais
      price: "Desde 29,90€",
      originalPrice: "—",
      duration: "1 dia",
      rating: 4.9,
      reviews: 102,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante"],
      highlights: [
        "Trilhos e natureza deslumbrante",
        "Miradouros e cascatas",
        "Tempo livre para desfrutar do ambiente natural"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida de manhã rumo ao Parque Nacional Peneda-Gerês." },
        { day: 1, title: "Exploração e trilhos", description: "Paragens em pontos turísticos, cascatas e trilhos acessíveis." },
        { day: 1, title: "Regresso", description: "Regresso a Braga ao final do dia." }
      ]
    },
    2: {
      name: "Jardim do Éden",
      location: "Bacalhôa, Bombarral",
      description: "Um dia para recordar! Embarca numa escapadinha única à zona da Bacalhôa com guia, transporte e uma paisagem inspiradora.",
      longDescription: "Descobre o encantador 'Jardim do Éden' numa visita de um dia à Bacalhôa, Bombarral. Uma experiência com tudo incluído: transporte em autocarro desde Braga, entrada na Bacalhôa, passeio de comboio turístico pelos Jardins dos Budas e acompanhamento de guia.",
      images: tripImages.eden, // Usar imagens locais
      price: "Desde 39,90€",
      originalPrice: "—",
      duration: "1 dia",
      rating: 4.7,
      reviews: 87,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante", "Entrada na Bacalhôa", "Comboio turístico"],
      highlights: [
        "Passeio pelos Jardins dos Budas",
        "Entrada incluída na Quinta da Bacalhôa",
        "Convívio e cultura num ambiente inspirador",
        "Transporte confortável desde Braga",
        "Guia para te acompanhar durante todo o dia"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida às 6h da manhã do E.Leclerc Braga em direção à Bacalhôa, Bombarral." },
        { day: 1, title: "Visita à Bacalhôa", description: "Entrada incluída na Quinta da Bacalhôa com visita aos jardins e espaços culturais." },
        { day: 1, title: "Passeio de Comboio Turístico", description: "Explora o Jardim dos Budas a bordo do comboio turístico." },
        { day: 1, title: "Tempo Livre e Almoço", description: "Almoço livre (não incluído) e tempo para explorar os arredores com tranquilidade." },
        { day: 1, title: "Regresso", description: "Regresso a Braga no final da tarde com memórias inesquecíveis." }
      ]
    },
    3: {
      name: "Braga – Vigo",
      location: "Galiza, Espanha",
      description: "Um dia para explorar a cidade costeira de Vigo, com paisagens, compras e cultura.",
      longDescription: "Parte de Braga rumo a Vigo, uma vibrante cidade costeira espanhola conhecida pelo seu porto, gastronomia e ruas comerciais. Aproveita um dia completo de passeio, com transporte incluído e tempo livre para explorar ao teu ritmo.",
      images: tripImages.vigo, // Usar imagens locais
      price: "Desde 34,90€",
      originalPrice: "49,99€",
      duration: "1 dia",
      rating: 4.5,
      reviews: 52,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante"],
      highlights: [
        "Tempo livre para explorar o centro de Vigo",
        "Possibilidade de compras e passeio à beira-mar",
        "Acompanhamento durante toda a viagem"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida de manhã com destino a Vigo." },
        { day: 1, title: "Tempo livre", description: "Explora a cidade, faz compras ou passeia pela zona costeira." },
        { day: 1, title: "Regresso", description: "Regresso a Braga ao final do dia." }
      ]
    },
    4: {
      name: "Braga – Pontevedra",
      location: "Galiza, Espanha",
      description: "Descobre o charme histórico de Pontevedra num passeio relaxante e cultural.",
      longDescription: "Pontevedra encanta com o seu centro histórico preservado, ruas de pedra e atmosfera tranquila. Neste passeio de um dia, poderás caminhar pelas praças acolhedoras, visitar igrejas antigas e desfrutar da excelente gastronomia galega.",
      images: tripImages.pontevedra, // Usar imagens locais
      price: "Desde 34,90€",
      originalPrice: "—",
      duration: "1 dia",
      rating: 4.6,
      reviews: 41,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante"],
      highlights: [
        "Centro histórico encantador",
        "Passeio cultural e tranquilo",
        "Tempo livre para explorar"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida de manhã com destino a Pontevedra." },
        { day: 1, title: "Visita e tempo livre", description: "Explora o centro histórico e desfruta da gastronomia local." },
        { day: 1, title: "Regresso", description: "Regresso a Braga ao final do dia." }
      ]
    },
    5: {
      name: "Braga – Santiago de Compostela",
      location: "Galiza, Espanha",
      description: "Visita o emblemático destino de peregrinação e descobre a sua beleza espiritual e arquitetónica.",
      longDescription: "Santiago de Compostela é um dos destinos mais icónicos da Galiza, conhecido pela sua catedral imponente e atmosfera espiritual. Esta excursão leva-te até ao coração da cidade onde poderás explorar o centro histórico, saborear a culinária galega e sentir a energia de um lugar cheio de simbolismo e história.",
      images: tripImages.santiago, // Usar imagens locais
      price: "Desde 39,90€",
      originalPrice: "—",
      duration: "1 dia",
      rating: 4.8,
      reviews: 68,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante"],
      highlights: [
        "Visita à famosa Catedral de Santiago",
        "Tempo livre para explorar e almoçar",
        "Riqueza cultural e espiritual do destino"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida de manhã com destino a Santiago de Compostela." },
        { day: 1, title: "Visita à cidade", description: "Explora o centro histórico e a catedral (entrada livre)." },
        { day: 1, title: "Regresso", description: "Regresso a Braga ao final do dia." }
      ]
    },
        6: {
      name: "Braga – O Grove",
      location: "Galiza, Espanha",
      description: "Um dia de descoberta na costa galega, com paisagens deslumbrantes e cultura local.",
      longDescription: "O Grove é uma encantadora vila costeira na Galiza, famosa pelas suas praias e gastronomia. Neste passeio de um dia, vais explorar as belezas naturais da região, incluindo as famosas Rias Baixas, e desfrutar de tempo livre para passear e provar os sabores locais.",
      images: tripImages.grove, // Usar imagens diferentes para o segundo Gerês
      price: "Desde 34,90€",
      originalPrice: "—", 
      duration: "1 dia",
      rating: 4.7,
      reviews: 55,
      includes: ["Transporte em autocarro", "Seguro de viagem", "Guia acompanhante"],
      highlights: [
        "Paisagens costeiras deslumbrantes",
        "Tempo livre para explorar a vila",
        "Gastronomia local rica em frutos do mar"
      ],
      itinerary: [
        { day: 1, title: "Saída de Braga", description: "Partida de manhã com destino a O Grove." },
        { day: 1, title: "Exploração da vila", description: "Tempo livre para passear pelas ruas e desfrutar das praias." },
        { day: 1, title: "Regresso", description: "Regresso a Braga ao final do dia." }
      ]
    }
  };

  const trip = tripsData[id];

  if (!trip) {
    return (
      <div className="trip-not-found">
        <h2>Viagem não encontrada</h2>
        <button onClick={() => navigate("/")} className="back-btn">
          <FaArrowLeft /> Voltar ao Início
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    const message = `Olá! Gostaria de reservar a viagem "${trip.name}" (${trip.duration}) por ${trip.price}. Podem enviar-me mais informações?`;
    window.open(
      `https://wa.me/351923539713?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="trip-details">
      {/* Header da Viagem */}
      <div className="trip-header">
        <button onClick={() => navigate("/")} className="back-btn">
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
                <FaStar
                  key={i}
                  className={i < Math.floor(trip.rating) ? "filled" : ""}
                />
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
                    {item === "Voo" && <FaPlane />}
                    {item === "Hotel" && <FaHotel />}
                    {item === "Transfer" && <FaBus />}
                    {item === "Seguro" && <FaShieldAlt />}
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
