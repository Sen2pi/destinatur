import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import DestinationsSection from './components/DestinationsSection';
import SearchWidget from './components/SearchWidget'; // Novo import
import SocialButtons from './components/SocialButtons';
import Footer from './components/Footer';
import TripDetails from './components/TripDetails';
import './styles/App.css';

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <h1>Entre em Contacto Connosco</h1>
        <p>Transformamos os seus sonhos de viagem em realidade. Contacte-nos para planear a sua próxima aventura!</p>
      </section>
      <div id="pesquisa">
        <SearchWidget />
      </div>
      <div id="destinos">
        <DestinationsSection />
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
      <SocialButtons />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/viagem/:id" element={<TripDetails />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
