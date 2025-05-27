import React, { useState } from 'react';
import { FaHotel, FaPlane } from 'react-icons/fa';
import '../styles/SearchWidget.css';

const SearchWidget = () => {
  const [activeTab, setActiveTab] = useState('hotels');
  const [searchData, setSearchData] = useState({
    destination: '',
    checkin: '',
    checkout: '',
    guests: 2,
    origin: '',
    departure: '',
    return: ''
  });

  const handleHotelSearch = () => {
    const { destination, checkin, checkout, guests } = searchData;
    
    if (!destination || !checkin || !checkout) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // URL do Booking.com com parâmetros de afiliado
    const bookingUrl = `https://www.booking.com/searchresults.pt.html?` +
      `ss=${encodeURIComponent(destination)}&` +
      `checkin=${checkin}&` +
      `checkout=${checkout}&` +
      `group_adults=${guests}&` +
      `no_rooms=1&` +
      `aid=2311236`; // Substitua pelo seu ID de afiliado

    window.open(bookingUrl, '_blank');
  };

  const handleFlightSearch = () => {
    const { origin, destination, departure, return: returnDate } = searchData;
    
    if (!origin || !destination || !departure) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // URL do Skyscanner
    const skyscannerUrl = `https://www.skyscanner.pt/transport/flights/` +
      `${encodeURIComponent(origin)}/` +
      `${encodeURIComponent(destination)}/` +
      `${departure.replace(/-/g, '')}` +
      `${returnDate ? '/' + returnDate.replace(/-/g, '') : ''}` +
      `?adultsv2=1&cabinclass=economy&rtn=${returnDate ? '1' : '0'}`;

    window.open(skyscannerUrl, '_blank');
  };

  const handlePackageSearch = () => {
    const message = `Olá! Gostaria de um pacote Voo + Hotel para ${searchData.destination}. ` +
      `Check-in: ${searchData.checkin}, Check-out: ${searchData.checkout}, ` +
      `${searchData.guests} pessoa(s). Podem enviar-me uma proposta?`;
    
    window.open(`https://wa.me/351923539713?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="search-widget-section">
      <div className="container">
        <h2>Pesquise e Reserve</h2>
        <p>Encontre os melhores preços para a sua viagem</p>
        
        <div className="search-widget">
          <div className="search-tabs">
            <button 
              className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotels')}
            >
              <FaHotel /> Hotéis
            </button>
            <button 
              className={`tab-btn ${activeTab === 'flights' ? 'active' : ''}`}
              onClick={() => setActiveTab('flights')}
            >
              <FaPlane /> Voos
            </button>
            <button 
              className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
              onClick={() => setActiveTab('packages')}
            >
              <FaHotel /> <FaPlane /> Voo + Hotel
            </button>
          </div>

          <div className="search-content">
            {/* Pesquisa de Hotéis */}
            {activeTab === 'hotels' && (
              <div className="search-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Destino</label>
                    <input
                      type="text"
                      placeholder="Cidade ou hotel"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Check-in</label>
                    <input
                      type="date"
                      value={searchData.checkin}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Check-out</label>
                    <input
                      type="date"
                      value={searchData.checkout}
                      min={searchData.checkin || new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hóspedes</label>
                    <select
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    >
                      <option value={1}>1 Pessoa</option>
                      <option value={2}>2 Pessoas</option>
                      <option value={3}>3 Pessoas</option>
                      <option value={4}>4 Pessoas</option>
                      <option value={5}>5+ Pessoas</option>
                    </select>
                  </div>
                </div>
                <button className="search-btn" onClick={handleHotelSearch}>
                  Pesquisar Hotéis
                </button>
              </div>
            )}

            {/* Pesquisa de Voos */}
            {activeTab === 'flights' && (
              <div className="search-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Origem</label>
                    <input
                      type="text"
                      placeholder="Porto, Lisboa..."
                      value={searchData.origin}
                      onChange={(e) => setSearchData({...searchData, origin: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Destino</label>
                    <input
                      type="text"
                      placeholder="Paris, Madrid..."
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Partida</label>
                    <input
                      type="date"
                      value={searchData.departure}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Regresso (opcional)</label>
                    <input
                      type="date"
                      value={searchData.return}
                      min={searchData.departure || new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, return: e.target.value})}
                    />
                  </div>
                </div>
                <button className="search-btn" onClick={handleFlightSearch}>
                  Pesquisar Voos
                </button>
              </div>
            )}

            {/* Pacotes Voo + Hotel */}
            {activeTab === 'packages' && (
              <div className="search-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Destino</label>
                    <input
                      type="text"
                      placeholder="Para onde quer viajar?"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Check-in</label>
                    <input
                      type="date"
                      value={searchData.checkin}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Check-out</label>
                    <input
                      type="date"
                      value={searchData.checkout}
                      min={searchData.checkin || new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pessoas</label>
                    <select
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    >
                      <option value={1}>1 Pessoa</option>
                      <option value={2}>2 Pessoas</option>
                      <option value={3}>3 Pessoas</option>
                      <option value={4}>4 Pessoas</option>
                      <option value={5}>5+ Pessoas</option>
                    </select>
                  </div>
                </div>
                <button className="search-btn" onClick={handlePackageSearch}>
                  Solicitar Orçamento
                </button>
                <p className="package-note">
                  Entraremos em contacto com as melhores opções de voo + hotel para o seu destino
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Parceiros */}
        <div className="partners-section">
          <p>Pesquisamos nos melhores sites para si:</p>
          <div className="partners-logos">
            <span className="partner">Booking.com</span>
            <span className="partner">Skyscanner</span>
            <span className="partner">Expedia</span>
            <span className="partner">Hotels.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
