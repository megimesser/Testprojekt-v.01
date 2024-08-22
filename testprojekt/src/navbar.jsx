import React, { useState } from 'react';
import './navbar.css';  // Die CSS-Datei für die Navbar-Komponente

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Zustand für das Öffnen des Menüs

  // Funktion zum Umschalten des Menü-Zustands
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menü-Komponente
  function Menu() {
    return (
      <div className="menu">
        <p>Fenster</p>
      </div>
    );
  }

  return (
    <div id="nav">
      <div className="profile">
        <img 
          src="/images/Cat03.jpg" 
          alt="Profile" 
        />
      </div>
      <div className="hamburger">
        <img 
          src="/images/burger-menu-svgrepo-com.svg" 
          alt="Hamburger Menu" 
          onClick={toggleMenu} 
        />
      </div>
      {isMenuOpen && <Menu />} {/* Menu-Komponente anzeigen, wenn isMenuOpen true ist */}
    </div>
  );
}

export default Navbar;
