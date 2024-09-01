import React from 'react';
import "./navigationsmenü.css";

function Pfeilnav({ setActiveComponent, activeComponent }) {

  const switchLeft = () => {
    if (activeComponent === "home")
      setActiveComponent('ubungen');
    else if (activeComponent === "ubungen")
      setActiveComponent('statistik');
    else if (activeComponent === "statistik")
      setActiveComponent('home');
  };

  const switchRight = () => {
    if (activeComponent === "home")
      setActiveComponent('statistik');
    else if (activeComponent === "statistik")
      setActiveComponent('ubungen');
    else if (activeComponent === "ubungen")
      setActiveComponent('home');
  };

  return (
    <div className="pfeile">
      <div className="kreisLinks" onClick={switchLeft}>
        <div className="pfeilLinks"></div>
      </div>
      <div className="kreisRechts" onClick={switchRight}>
        <div className="pfeilRechts"></div>
      </div>
    </div>
  );
}

export default Pfeilnav;
