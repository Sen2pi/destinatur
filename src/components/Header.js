import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src="/logo.png" alt="Destinatur" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
