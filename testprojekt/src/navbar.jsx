import React, { useState, useEffect } from 'react';
import './navbar.css';  // Die CSS-Datei für die Navbar-Komponente
import './App.css';     // Deine globale CSS-Datei

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Zustand für das Öffnen des Menüs

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function Menu() {
    return (
      <div className="menu">
        <p>Fenster</p>
      </div>
    );
  }

  function Switch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
      setIsOn(!isOn);
    };

    // Effekt, um die Klasse beim Umschalten anzuwenden
    useEffect(() => {
      if (isOn) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [isOn]);

    return (
      <div id="wrapper-0">
        <div>
          <img id= "switchImage" src="testprojekt/public/images/OOjs_UI_icon_moon.svg" alt="Moon Icon" />
        </div>
        <div className="switch" onClick={toggleSwitch}>
          <div className={`switch-button ${isOn ? 'on' : 'off'}`} />
        </div>
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
      <div>
        <Switch />
      </div>
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
