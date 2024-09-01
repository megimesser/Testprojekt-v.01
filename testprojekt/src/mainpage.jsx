import React, { useState } from 'react';
import Home from './homesection'; 
import Navbarfull from "./navbarfull";
import Foot from "./footer";
import Pfeilnav from "./Navigationsmenu/pfeilnav";
import Breadcrump from "./Navigationsmenu/breadcrumb";
import Ubungen from "./Ubungen/Ubungen";
import Statistik_main from './Statistik/Statistik_main';  // Stelle sicher, dass du diese Komponente importierst
import "./mainpage.css";

function Main() {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <>
      <Navbarfull />
      <Breadcrump />
      {activeComponent === 'home' && <Home />}
      {activeComponent === 'ubungen' && <Ubungen />}
      {activeComponent === 'statistik' && <Statistik_main />}
      <Pfeilnav 
        setActiveComponent={setActiveComponent}  // Übergib den Setter an die Pfeilnav-Komponente
        activeComponent={activeComponent}       // Übergib den aktuellen Zustand an die Pfeilnav-Komponente
      />
      <Foot />
    </>
  );
}

export default Main;
