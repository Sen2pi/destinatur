// src/components/HotelSearch.js
import React, { useState } from 'react';

const HotelSearch = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkin: '',
    checkout: '',
    guests: 2
  });

  const searchHotels = async () => {
    try {
      // Integração com Booking.com ou Amadeus
      const response = await fetch('/api/hotels/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchData)
      });
      
      const hotels = await response.json();
      // Processar resultados
    } catch (error) {
      console.error('Erro na pesquisa:', error);
    }
  };

  return (
    <div className="hotel-search">
      <input
        type="text"
        placeholder="Destino"
        value={searchData.destination}
        onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
      />
      <input
        type="date"
        value={searchData.checkin}
        onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
      />
      <input
        type="date"
        value={searchData.checkout}
        onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
      />
      <select
        value={searchData.guests}
        onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
      >
        <option value={1}>1 Hóspede</option>
        <option value={2}>2 Hóspedes</option>
        <option value={3}>3 Hóspedes</option>
        <option value={4}>4 Hóspedes</option>
      </select>
      <button onClick={searchHotels}>Pesquisar Hotéis</button>
    </div>
  );
};
