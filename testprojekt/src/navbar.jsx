import React, { useState, useEffect, useCallback } from 'react';
import './navbar.css'; 
import './App.css';  
import './navbarfull.css';

function Navbar({ toggleSideMenu }) {
  // Switch-Komponente
  function Switch() {
    const [isOn, setIsOn] = useState(false);

    // Toggle-Funktion mit useCallback optimieren
    const toggleSwitch = useCallback(() => {
      setIsOn(prevIsOn => !prevIsOn);
    }, []);

    // Effekt, um die Klasse basierend auf dem Zustand hinzuzufügen oder zu entfernen
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
          <img id="switchImage" src="testprojekt/public/images/OOjs_UI_icon_moon.svg" alt="Moon Icon" />
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
        <div>
          <h1>Active Hero</h1>
        </div>
        <img src="/images/Cat03.jpg" alt="Profile" />
      </div>
      <div className="hamburger">
        <Switch />
        <img 
          src="/images/burger-menu-svgrepo-com.svg" 
          alt="Hamburger Menu" 
          onClick={toggleSideMenu} 
        />
      </div>
    </div>
  );
}

export default Navbar;
